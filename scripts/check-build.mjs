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
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&[a-z]+;/gi, " ");
// Whitespace-normalised, for comparing sentences that wrap across source lines.
const norm = (text) => text.replace(/\s+/g, " ").trim();

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

// --- 10. Homepage narrative order and the hero's scroll destination --------
// The order is the argument: promise -> areas of help -> engagement model ->
// differentiation -> evidence -> action. It has been wrong before (the
// engagement model sat above the areas of help, and the hero cue skipped a
// section), and neither mistake is visible in a build log.
if (existsSync("dist/index.html")) {
  const home = readFileSync("dist/index.html", "utf8");

  const ORDER = [
    "what-we-help-with",
    "how-we-work",
    "why-twny",
    "selected-work",
    "getting-started",
  ];
  const positions = ORDER.map((id) => home.indexOf(`id="${id}"`));
  check("every homepage section is present", positions.every((i) => i !== -1), ORDER.filter((_, i) => positions[i] === -1).join(", "));
  check(
    "homepage sections are in narrative order",
    positions.every((pos, i) => i === 0 || (pos !== -1 && pos > positions[i - 1])),
    ORDER.join(" -> "),
  );

  // The hero cue must land on the section immediately below the hero — not
  // skip one, and not point at a removed id.
  const cue = home.match(/<a href="#([a-z-]+)"[^>]*class="group flex flex-col/)?.[1];
  check("hero cue targets the first section below it", cue === ORDER[0], `got #${cue}`);
  check("hero cue label reads 'See how we help'", home.includes("See how we help"));

  // Four icons from one family: same viewBox, same source, inline (no network
  // request, no icon font, no runtime library).
  const iconViewBoxes = [...home.matchAll(/<svg[^>]*viewBox="0 0 256 256"/g)].length;
  check("four Phosphor icons inlined on the homepage", iconViewBoxes === 4, `found ${iconViewBoxes}`);
}

// --- 11. Locked copy that must be present ----------------------------------
// Every line below is either brand-locked or was specified verbatim. A
// well-meaning rewrite is exactly the kind of change that slips through
// review, so the strings are asserted rather than trusted.
const LOCKED = [
  ["index.html", "Technology, simplified."],
  ["index.html", "Technology shouldn't be another job."],
  ["index.html", "What we help with"],
  ["index.html", "Two ways to work with us."],
  ["index.html", "Simple for you."],
  ["index.html", "Never simple behind the scenes."],
  ["index.html", "The jargon stops with us."],
  ["index.html", "We own the problem."],
  ["index.html", "We notice before you do."],
  ["index.html", "Both halves, in practice."],
  ["index.html", "You don't need to have all the answers."],
  ["index.html", "That's where we come in."],
  ["services/index.html", "One technology partner, two ways to work."],
  ["services/index.html", "One accountable partner across your technology."],
  ["services/index.html", "What we manage."],
  ["services/index.html", "Where we help."],
  ["services/index.html", "Sometimes you just need the problem solved."],
  ["services/index.html", "Not sure where it fits? Start with the problem."],
  // The ownership passage is the clearest statement that the client keeps what
  // is theirs. It is not to be softened or trimmed.
  ["services/index.html", "Domains stay registered in your name"],
];
for (const [file, needle] of LOCKED) {
  const full = join(DIST, file);
  check(`${file}: "${needle.slice(0, 44)}" present`, existsSync(full) && readFileSync(full, "utf8").includes(needle));
}

// Both engagement types, and the three levels, on the pages that name them.
for (const needle of ["Managed Technology", "Professional Services"]) {
  const missing = ["index.html", "services/index.html"].filter(
    (f) => !readFileSync(join(DIST, f), "utf8").includes(needle),
  );
  check(`"${needle}" named on home and services`, missing.length === 0, missing.join(", "));
}
const servicesHtml = existsSync("dist/services/index.html")
  ? readFileSync("dist/services/index.html", "utf8")
  : "";
check(
  "Core / Business / Strategic all present",
  ["Core", "Business", "Strategic"].every((n) => new RegExp(`>\\s*${n}\\s*</p>`).test(servicesHtml)),
);

// --- 12. Copy that must NOT come back --------------------------------------
// Two groups. The first is language that made TWNY sound as though it takes
// control of a client's technology; TWNY owns the PROBLEM, the client owns its
// domains, data and decisions — so "We own the problem." is deliberately not
// in this list. The second is the support-hours statement, which belongs in a
// service agreement rather than on a public marketing page, and the benefit-led
// headings the capability cards were rewritten away from.
const RETIRED = [
  "take ownership",
  "own your technology",
  "five providers",
  "You don't have to have all the answers",
  "Support is business hours",
  "best-effort out of hours",
  "business hours",
  "Work smoothly",
  "Work smarter",
  "Look professional",
  "Stay protected",
  "Improve with purpose",
  "Show up professionally",
  "Unlock potential",
  "Transform your business",
];
for (const needle of RETIRED) {
  const hits = htmlFiles
    .filter((f) => visibleText(readFileSync(f, "utf8")).toLowerCase().includes(needle.toLowerCase()))
    .map((f) => relative(DIST, f));
  check(`no "${needle}" in rendered text`, hits.length === 0, hits.join(", "));
}

// --- 13. Client work stays factual -----------------------------------------
// The four named engagements are interim proof, described in capability terms.
// Nothing may imply a quotation, an endorsement, a metric or an outcome.
const homeHtml = existsSync("dist/index.html") ? readFileSync("dist/index.html", "utf8") : "";
const homeText = norm(visibleText(homeHtml));
for (const client of ["Concrete Sales", "Stiles Advisory", "Baza Capital", "Deller Constructions"]) {
  check(`${client} named in the work section`, homeText.includes(client));
}
const CLAIMS = [
  /\btestimonial/i,
  /[“”]/,            // curly quotation marks — no attributed praise
  /\b\d+\s?(%|per cent|percent)/i,
  /\b\d+\s?(GB|TB|MB)\b/i,     // no storage quantities
  /\bsaved\b/i,
  /\bsavings\b/i,
  /\bROI\b/,
  /\bapproved by\b/i,
  /\bendorse/i,
];
for (const re of CLAIMS) {
  check(`no fabricated proof matching ${re} on the homepage`, !re.test(homeText));
}

// --- 14. Footer is a brand bookend -----------------------------------------
for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const footer = html.slice(html.indexOf("<footer"));
  const name = relative(DIST, file);
  check(`${name}: footer carries the tagline`, footer.includes("Technology, simplified."));
  check(`${name}: footer carries the positioning line`, footer.includes("Managed Technology and Professional Services for Australian"));
  check(`${name}: footer links Services and Contact`, footer.includes('href="/services"') && footer.includes('href="/contact"'));
  check(`${name}: footer email is a working mailto`, footer.includes(`href="${EXPECTED_MAILTO}"`));
  check(`${name}: footer carries the copyright`, /©\s*\d{4} TWNY Pty Ltd/.test(footer));
  // No newsletter, no social, no second CTA, no legal links to pages that
  // don't exist.
  check(`${name}: footer has no external links`, !/<a[^>]+href="https?:/.test(footer));
}

// --- 15. Wordmark motion timing --------------------------------------------
// The stagger is a brand decision, not a detail: too fast and the four letters
// read as a flicker rather than as the name assembling. Asserted from the
// built CSS so a refactor cannot silently revert it.
const cssFiles = allFiles.filter((f) => f.endsWith(".css"));
const css = cssFiles.map((f) => readFileSync(f, "utf8")).join("\n");
// The CSS minifier rewrites times freely (450ms -> .45s) and reorders the
// `animation` shorthand, so read every value through one unit-aware parser
// rather than matching a literal.
const ms = (value) =>
  value == null ? 0 : /ms$/.test(value) ? Number.parseFloat(value) : Number.parseFloat(value) * 1000;
const delay = css.match(/calc\(\s*([\d.]+m?s)\s*\+\s*var\(--wm-i\)\s*\*\s*([\d.]+m?s)\s*\)/);
const lead = ms(delay?.[1]);
const stagger = ms(delay?.[2]);
const duration = ms(
  css.match(/animation:\s*([\d.]+m?s)[^;}]*wordmark-letter-in/)?.[1] ??
    css.match(/animation:\s*wordmark-letter-in\s+([\d.]+m?s)/)?.[1],
);
check("wordmark stagger is 400-500ms per letter", stagger >= 400 && stagger <= 500, `${stagger}ms`);
const settle = lead + stagger * 3 + duration;
check("wordmark settles in 2.4-2.8s", settle >= 2400 && settle <= 2800, `${settle}ms`);
check("wordmark entrance has no scale or overshoot", !/wordmark-letter-in[\s\S]{0,240}?scale\(/.test(css) && !/wordmark-letter-in[\s\S]{0,200}?cubic-bezier\(\s*[\d.]+\s*,\s*-/.test(css));
check(
  "reduced motion still shows every revealed element",
  /prefers-reduced-motion:\s*reduce[\s\S]{0,600}?\[data-animate\]\s*\{[^}]*opacity:\s*1/.test(css),
);

// --- 16. Vendored icon licence is retained ---------------------------------
// Phosphor is MIT: the four SVGs may be vendored, the licence has to travel
// with them.
check("Phosphor licence retained in the repository", existsSync("src/assets/icons/phosphor/LICENSE"));
check("Phosphor provenance recorded", existsSync("src/assets/icons/phosphor/README.md"));
check(
  "no icon package added as a dependency",
  !JSON.stringify({
    ...JSON.parse(readFileSync("package.json", "utf8")).dependencies,
    ...JSON.parse(readFileSync("package.json", "utf8")).devDependencies,
  }).includes("phosphor"),
);

// --- 17. CTA routing ---------------------------------------------------------
// General "Get in touch" actions route through the Contact page, which says
// how a first conversation goes before asking for anything. Only the Contact
// page's own action, the footer address and the 404's "ask us" line open mail.
{
  const home = readFileSync("dist/index.html", "utf8");
  const services = readFileSync("dist/services/index.html", "utf8");
  const contact = readFileSync("dist/contact/index.html", "utf8");
  const ctas = (html) => [...html.matchAll(/<a href="([^"]+)"[^>]*>\s*Get in touch/g)].map((m) => m[1]);
  check("home: every 'Get in touch' routes to /contact", ctas(home).length >= 2 && ctas(home).every((h) => h === "/contact"), ctas(home).join(", "));
  check("services: every 'Get in touch' routes to /contact", ctas(services).length >= 2 && ctas(services).every((h) => h === "/contact"), ctas(services).join(", "));
  check("contact: no 'Get in touch' pointing at itself", ctas(contact).length === 0, ctas(contact).join(", "));
  check("contact: exactly one email button", (contact.match(/>\s*Send an email/g) ?? []).length === 1);
  check("contact: address shown as a mailto link", contact.includes(`<a href="${EXPECTED_MAILTO}" aria-label="Email hello@twny.com.au"`));
  check("contact: header action omitted on the contact page", !/site-header[\s\S]*?<\/header>/.exec(contact)?.[0].includes("Get in touch"));
  check("contact: trust statement present", norm(visibleText(contact)).includes("TWNY works with small and mid-sized Australian businesses through ongoing Managed Technology and defined Professional Services."));
  check("contact: helpful-to-include prompts present", visibleText(contact).includes("Helpful to include"));
  check("contact: no response-time promise", !/\b(within|respond|reply) (\d+|one|two|a few|24|48)\b/i.test(visibleText(contact)) && !/business hours/i.test(visibleText(contact)));
}

// --- 18. Metadata and the entity graph -------------------------------------
{
  const home = readFileSync("dist/index.html", "utf8");
  const title = home.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
  const desc = home.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
  check("home title names both engagement types", /Managed Technology and Professional Services/.test(title), title);
  check("home title length ≤ 60", title.length <= 60, `${title.length}`);
  check("home description length 120-160", desc.length >= 120 && desc.length <= 160, `${desc.length}`);
  check("home description names Australian businesses", /Australian businesses/.test(desc));
  check("home H1 stays 'Technology, simplified.'", /<h1[^>]*>\s*Technology,\s*<span[^>]*>simplified\.<\/span>/.test(home));

  const graphs = {};
  for (const [file, path] of PAGES) {
    const html = readFileSync(file, "utf8");
    const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
    check(`${path}: exactly one JSON-LD block`, blocks.length === 1, `found ${blocks.length}`);
    let parsed = null;
    try { parsed = JSON.parse(blocks[0] ?? ""); } catch {}
    check(`${path}: JSON-LD parses as a @graph`, !!parsed && Array.isArray(parsed["@graph"]));
    graphs[path] = parsed?.["@graph"] ?? [];
  }
  const orgs = (nodes) => nodes.filter((n) => n["@type"] === "Organization");
  for (const path of Object.keys(graphs)) {
    const o = orgs(graphs[path]);
    check(`${path}: exactly one Organization node`, o.length === 1, `found ${o.length}`);
    check(`${path}: Organization @id is ${ORIGIN}/#organization`, o[0]?.["@id"] === `${ORIGIN}/#organization`, o[0]?.["@id"]);
    check(`${path}: Organization logo on canonical origin`, typeof o[0]?.logo === "string" && o[0].logo.startsWith(ORIGIN));
    check(`${path}: Organization has no address/phone/hours/ratings`, !["address", "telephone", "openingHours", "aggregateRating", "review", "geo"].some((k) => k in (o[0] ?? {})));
    check(`${path}: Organization has no sameAs`, !("sameAs" in (o[0] ?? {})));
    check(`${path}: no knowsAbout keyword dump`, !graphs[path].some((n) => "knowsAbout" in n));
  }
  const site = graphs["/"].filter((n) => n["@type"] === "WebSite");
  check("home: exactly one WebSite node", site.length === 1);
  check("home: WebSite @id and publisher reference the Organization", site[0]?.["@id"] === `${ORIGIN}/#website` && site[0]?.publisher?.["@id"] === `${ORIGIN}/#organization`);
  check("contact/services: no WebSite node", !graphs["/services"].some((n) => n["@type"] === "WebSite") && !graphs["/contact"].some((n) => n["@type"] === "WebSite"));

  const services = graphs["/services"].filter((n) => n["@type"] === "Service");
  check("services: exactly two Service nodes", services.length === 2);
  check("services: Service names are the two engagement types", services.map((s) => s.name).sort().join("|") === "Managed Technology|Professional Services");
  check("services: Service provider references Organization @id", services.every((s) => s.provider?.["@id"] === `${ORIGIN}/#organization` && Object.keys(s.provider).length === 1));
  check("services: no Offer/price on Service nodes", !services.some((s) => "offers" in s || "price" in s || "priceRange" in s));
  const faq = graphs["/services"].filter((n) => n["@type"] === "FAQPage");
  check("services: exactly one FAQPage", faq.length === 1);
  const servicesHtml = readFileSync("dist/services/index.html", "utf8");
  const visibleQs = [...servicesHtml.matchAll(/<summary[^>]*>\s*([^<]+?)\s*<span/g)].map((m) => norm(visibleText(m[1])));
  const schemaQs = (faq[0]?.mainEntity ?? []).map((q) => q.name);
  check("services: FAQ schema questions exactly match visible questions", JSON.stringify(visibleQs) === JSON.stringify(schemaQs), `visible ${visibleQs.length} / schema ${schemaQs.length}`);
  const visibleText_ = norm(visibleText(servicesHtml));
  check("services: every FAQ schema answer is visible on the page", (faq[0]?.mainEntity ?? []).every((q) => visibleText_.includes(norm(q.acceptedAnswer.text))));
  check("services: IT-support FAQ present", schemaQs.includes("Does Managed Technology include day-to-day IT support?"));
  check("services: IT-support answer keeps the distinction", /goes further/.test(visibleText_) && /managed together/.test(visibleText_) && !/\bMSP\b/.test(visibleText_));
  check("services: 'What we manage.' heading", visibleText_.includes("What we manage."));
  check("services: 'Where we help.' heading", visibleText_.includes("Where we help."));
  check("services: 'technology consulting and advisory' appears once", (visibleText_.match(/technology consulting and advisory/gi) ?? []).length === 1);
}

// --- 19. Social image ------------------------------------------------------
{
  const home = readFileSync("dist/index.html", "utf8");
  check("og:image:type declared", home.includes('<meta property="og:image:type" content="image/jpeg"'));
  const jpg = readFileSync("dist/og-image.jpg");
  // JPEG SOF0/SOF2 marker carries height then width.
  let w = 0, h = 0;
  for (let i = 2; i < jpg.length - 9; i++) {
    if (jpg[i] === 0xff && (jpg[i + 1] === 0xc0 || jpg[i + 1] === 0xc2)) { h = jpg.readUInt16BE(i + 5); w = jpg.readUInt16BE(i + 7); break; }
  }
  check("og-image.jpg is 1200x630", w === 1200 && h === 630, `${w}x${h}`);
  check("og-image.jpg is a JPEG", jpg[0] === 0xff && jpg[1] === 0xd8);
  const png = existsSync("dist/logo.png") ? readFileSync("dist/logo.png") : Buffer.alloc(0);
  check("logo.png present and 512x512", png.length > 24 && png.readUInt32BE(16) === 512 && png.readUInt32BE(20) === 512);
}

// --- 20. Internal docs never reach the build -------------------------------
check("no docs/ content in dist", !allFiles.some((f) => /client-work-approval|deployment-handoff|ROADMAP/.test(f)));

// --- report ----------------------------------------------------------------
const passed = checks.filter((c) => c.ok).length;
for (const c of checks) if (!c.ok) console.error(`  FAIL  ${c.name}${c.detail ? ` — ${c.detail}` : ""}`);
console.log(`\n${passed}/${checks.length} build checks passed.`);
if (failures.length) {
  console.error(`\n${failures.length} failing check(s).`);
  process.exit(1);
}
