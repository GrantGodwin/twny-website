#!/usr/bin/env node
/**
 * Post-build validation of dist/.
 *
 * This exists because of a real regression: the site launched on
 * www.twny.com.au while every canonical, og:url, sitemap entry and robots
 * Sitemap line still pointed at twny-website.vercel.app. The build was green
 * and the pages looked correct — nothing in the pipeline was checking the one
 * thing that had silently broken. So the rules that matter and are invisible
 * in a screenshot are asserted here instead.
 *
 * Run: npm run verify   (builds, then checks)
 */
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const DIST = "dist";
const ORIGIN = "https://www.twny.com.au";

const failures = [];
const checks = [];
function check(name, ok, detail = "") {
  checks.push({ name, ok, detail });
  if (!ok) failures.push(`${name}${detail ? ` — ${detail}` : ""}`);
}

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

if (!existsSync(DIST)) {
  console.error("dist/ not found — run `npm run build` first.");
  process.exit(1);
}

const allFiles = walk(DIST);
const htmlFiles = allFiles.filter((f) => f.endsWith(".html"));

// The three indexable pages, and the path each must declare as canonical.
const PAGES = [
  ["dist/index.html", "/"],
  ["dist/services/index.html", "/services"],
  ["dist/contact/index.html", "/contact"],
];

check("all expected pages built", PAGES.every(([f]) => existsSync(f)));
check("404 page built", existsSync("dist/404.html"));

// --- 1. Canonical host and per-page canonical path -------------------------
for (const [file, path] of PAGES) {
  if (!existsSync(file)) continue;
  const html = readFileSync(file, "utf8");
  const canonicals = [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map(
    (m) => m[1],
  );
  const expected = path === "/" ? `${ORIGIN}/` : `${ORIGIN}${path}`;
  check(`${path}: exactly one canonical`, canonicals.length === 1, `found ${canonicals.length}`);
  check(`${path}: canonical is ${expected}`, canonicals[0] === expected, `got ${canonicals[0]}`);

  const og = html.match(/<meta property="og:url" content="([^"]+)"/)?.[1];
  check(`${path}: og:url matches canonical`, og === expected, `got ${og}`);

  for (const prop of ["og:image", "twitter:image"]) {
    const re = new RegExp(`<meta (?:property|name)="${prop}" content="([^"]+)"`);
    const val = html.match(re)?.[1];
    check(`${path}: ${prop} on ${ORIGIN}`, !!val?.startsWith(ORIGIN), `got ${val}`);
  }

  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
  check(`${path}: has a title`, title.trim().length > 10);
  check(`${path}: has a description`, desc.trim().length > 40);
  check(`${path}: exactly one <h1>`, (html.match(/<h1[\s>]/g) ?? []).length === 1);
}

// Titles and descriptions must be unique across the three pages.
const metas = PAGES.filter(([f]) => existsSync(f)).map(([f]) => {
  const html = readFileSync(f, "utf8");
  return {
    title: html.match(/<title>([^<]*)<\/title>/)?.[1],
    desc: html.match(/<meta name="description" content="([^"]*)"/)?.[1],
  };
});
check("titles are unique", new Set(metas.map((m) => m.title)).size === metas.length);
check("descriptions are unique", new Set(metas.map((m) => m.desc)).size === metas.length);

// --- 2. No deployment-URL or localhost leakage anywhere in the output -------
const TEXTUAL = /\.(html|css|js|xml|txt|json|svg)$/;
for (const needle of ["twny-website.vercel.app", "localhost", "127.0.0.1", "vercel.app"]) {
  const hits = allFiles
    .filter((f) => TEXTUAL.test(f))
    .filter((f) => readFileSync(f, "utf8").includes(needle))
    .map((f) => relative(DIST, f));
  check(`no "${needle}" in build output`, hits.length === 0, hits.join(", "));
}

// --- 3. Sitemap and robots -------------------------------------------------
const sitemap = existsSync("dist/sitemap.xml") ? readFileSync("dist/sitemap.xml", "utf8") : "";
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
check("sitemap lists exactly 3 URLs", locs.length === 3, locs.join(" "));
check("sitemap URLs all on canonical origin", locs.every((l) => l.startsWith(ORIGIN)), locs.join(" "));
check("sitemap excludes the 404", !sitemap.includes("404"));

const robots = existsSync("dist/robots.txt") ? readFileSync("dist/robots.txt", "utf8") : "";
check("robots allows crawling", /^Allow: \/$/m.test(robots) && !/^Disallow: \/$/m.test(robots));
check("robots points at canonical sitemap", robots.includes(`Sitemap: ${ORIGIN}/sitemap.xml`));

// --- 4. No public pricing, in rendered text --------------------------------
// Tag/script/style content is stripped first so asset hashes and minified JS
// cannot produce a false positive — the rule is about what a reader sees.
const visibleText = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/gi, " ");

const PRICING = [
  /\$\s?\d/,
  /\bfrom \$?\d/i,
  /\bper month\b/i,
  /\b\d+\s*\/\s*mo\b/i,
  /\bper user per month\b/i,
  /\bhourly rate\b/i,
  /\bAUD\s?\d/i,
];
for (const file of htmlFiles) {
  const text = visibleText(readFileSync(file, "utf8"));
  const hit = PRICING.find((re) => re.test(text));
  check(`no public pricing in ${relative(DIST, file)}`, !hit, hit ? `matched ${hit}` : "");
}

// --- 5. Retired scaffold proof and legacy content must not reappear ---------
// Every name below is either an invented person/quote from the retired
// client-stories scaffold, or legacy positioning the site has moved off.
const BANNED = [
  "Grant just gets it done",
  "Genuinely easy to work with",
  "Reliable, responsive and always one step ahead",
  "Technology feels handled",
  "Our clinicians get the tech",
  "First Finance",
  "Sinclair Brook",
  "Baza Property Group",
  "Speech Made Simple",
  "Business Technology, Made Easy",
  "Acronis",
  "CommsChoice",
  "Synergy Wholesale",
  "Brix",
  "Technology Essentials",
  "Lorem ipsum",
  "placeholder",
  "TODO",
];
for (const needle of BANNED) {
  const hits = htmlFiles
    .filter((f) => visibleText(readFileSync(f, "utf8")).includes(needle))
    .map((f) => relative(DIST, f));
  check(`no "${needle}" in rendered text`, hits.length === 0, hits.join(", "));
}

// --- 6. Contact path -------------------------------------------------------
const EXPECTED_MAILTO = "mailto:hello@twny.com.au?subject=Website%20enquiry";
const mailtos = new Set();
for (const file of htmlFiles) {
  for (const m of readFileSync(file, "utf8").matchAll(/href="(mailto:[^"]+)"/g)) {
    mailtos.add(m[1]);
  }
}
check("one consistent mailto across the site", mailtos.size === 1, [...mailtos].join(", "));
check(`mailto is ${EXPECTED_MAILTO}`, mailtos.has(EXPECTED_MAILTO), [...mailtos].join(", "));

// --- 7. Icons --------------------------------------------------------------
for (const asset of ["favicon.ico", "favicon-32.png", "favicon-192.png", "apple-touch-icon.png", "og-image.jpg"]) {
  check(`${asset} present`, existsSync(join(DIST, asset)));
}
const home = existsSync("dist/index.html") ? readFileSync("dist/index.html", "utf8") : "";
check("icons referenced from <head>", /rel="icon"/.test(home) && /rel="apple-touch-icon"/.test(home));
check("no stale favicon.svg reference", !home.includes("favicon.svg"));

// --- 8. Internal links resolve to something that was built -----------------
const built = new Set(
  allFiles.map((f) => "/" + relative(DIST, f).replace(/\\/g, "/").replace(/index\.html$/, "").replace(/\/$/, "")),
);
built.add("/");
const internal = new Set();
for (const file of htmlFiles) {
  for (const m of readFileSync(file, "utf8").matchAll(/href="(\/[^"#?]*)"/g)) internal.add(m[1]);
}
const broken = [...internal].filter((href) => {
  const norm = href.replace(/\/$/, "") || "/";
  return !built.has(norm) && !existsSync(join(DIST, href));
});
check("no broken internal links", broken.length === 0, broken.join(", "));

// --- 9. 404 is noindex and self-describing ---------------------------------
if (existsSync("dist/404.html")) {
  const notFound = readFileSync("dist/404.html", "utf8");
  check("404 is noindex", /<meta name="robots" content="noindex/.test(notFound));
  check("404 has one h1", (notFound.match(/<h1[\s>]/g) ?? []).length === 1);
  check("404 links to all three pages", ['href="/"', 'href="/services"', 'href="/contact"'].every((h) => notFound.includes(h)));
}

// --- report ----------------------------------------------------------------
const passed = checks.filter((c) => c.ok).length;
for (const c of checks) if (!c.ok) console.error(`  FAIL  ${c.name}${c.detail ? ` — ${c.detail}` : ""}`);
console.log(`\n${passed}/${checks.length} build checks passed.`);
if (failures.length) {
  console.error(`\n${failures.length} failing check(s).`);
  process.exit(1);
}
