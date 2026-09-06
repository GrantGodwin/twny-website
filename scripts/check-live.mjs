#!/usr/bin/env node
/**
 * Live verification of a DEPLOYED site — distinct from check-build.mjs, which
 * only ever looks at dist/. This one makes real HTTP requests to the custom
 * domain and asserts what a visitor, a crawler and a social-sharing scraper
 * would actually receive. A green build proves nothing about what Vercel is
 * serving; this does.
 *
 *   node scripts/check-live.mjs https://www.twny.com.au
 *   npm run verify:live                          (defaults to the production origin)
 *   node scripts/check-live.mjs --skip-apex      (from a network that cannot reach
 *                                                 the bare host — the skip is printed,
 *                                                 never silent)
 *
 * Exits non-zero on any failure. Never weaken a check here to make it pass:
 * if it fails, production is wrong.
 */
const args = process.argv.slice(2);
const skipApex = args.includes("--skip-apex");
const ORIGIN = (args.find((a) => !a.startsWith("--")) ?? "https://www.twny.com.au").replace(/\/$/, "");
const APEX = ORIGIN.replace("://www.", "://");

const failures = [];
const checks = [];
const check = (name, ok, detail = "") => {
  checks.push({ name, ok, detail });
  if (!ok) failures.push(`${name}${detail ? ` — ${detail}` : ""}`);
};

const get = async (url, opts = {}) => {
  const res = await fetch(url, { redirect: "manual", headers: { "user-agent": "twny-check-live/1.0" }, ...opts });
  const body = opts.method === "HEAD" ? "" : await res.text();
  // A Location header may legitimately be relative (Vercel emits "/services");
  // resolve it against the request so the comparison is on the absolute target.
  const raw = res.headers.get("location");
  const location = raw ? new URL(raw, url).href : null;
  return { status: res.status, headers: res.headers, body, location };
};
const visibleText = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ");

// --- 1. Public pages -------------------------------------------------------
const PAGES = [
  ["/", `${ORIGIN}/`],
  ["/services", `${ORIGIN}/services`],
  ["/contact", `${ORIGIN}/contact`],
];
const pages = {};
for (const [path, canonical] of PAGES) {
  const r = await get(ORIGIN + path);
  pages[path] = r;
  check(`${path}: 200`, r.status === 200, `got ${r.status}`);
  check(`${path}: text/html`, (r.headers.get("content-type") ?? "").includes("text/html"));
  const canon = r.body.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  check(`${path}: canonical is ${canonical}`, canon === canonical, `got ${canon}`);
  check(`${path}: og:url matches canonical`, r.body.match(/<meta property="og:url" content="([^"]+)"/)?.[1] === canonical);
  for (const prop of ["og:image", "twitter:image"]) {
    const v = r.body.match(new RegExp(`<meta (?:property|name)="${prop}" content="([^"]+)"`))?.[1];
    check(`${path}: ${prop} on ${ORIGIN}`, !!v?.startsWith(ORIGIN), `got ${v}`);
  }
  check(`${path}: indexable (no noindex)`, !/<meta name="robots" content="[^"]*noindex/.test(r.body) && !/noindex/i.test(r.headers.get("x-robots-tag") ?? ""));
  check(`${path}: exactly one <h1>`, (r.body.match(/<h1[\s>]/g) ?? []).length === 1);
  check(`${path}: no vercel.app in the document`, !r.body.includes("vercel.app"));
  check(`${path}: no localhost in the document`, !/localhost|127\.0\.0\.1/.test(r.body));
}

// --- 2. 404 ----------------------------------------------------------------
{
  const r = await get(`${ORIGIN}/this-page-does-not-exist-${Date.now()}`);
  check("unknown URL: 404 status", r.status === 404, `got ${r.status}`);
  check("unknown URL: branded page", r.body.includes("That page isn") && r.body.includes("Page not found | TWNY"));
  check("unknown URL: noindex", /<meta name="robots" content="noindex/.test(r.body));
  check("unknown URL: no vercel.app", !r.body.includes("vercel.app"));
  const news = await get(`${ORIGIN}/news/`);
  check("/news/ is an honest 404", news.status === 404, `got ${news.status}`);
}

// --- 3. Robots and sitemap -------------------------------------------------
{
  const robots = await get(`${ORIGIN}/robots.txt`);
  check("robots.txt: 200", robots.status === 200);
  check("robots.txt: allows crawling", /^Allow: \/$/m.test(robots.body) && !/^Disallow: \/$/m.test(robots.body));
  check("robots.txt: canonical sitemap", robots.body.includes(`Sitemap: ${ORIGIN}/sitemap.xml`));
  const sm = await get(`${ORIGIN}/sitemap.xml`);
  check("sitemap.xml: 200", sm.status === 200);
  const locs = [...sm.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  check("sitemap.xml: exactly the three public pages", JSON.stringify(locs) === JSON.stringify(PAGES.map(([, c]) => c)), locs.join(" "));
  check("sitemap.xml: no vercel.app", !sm.body.includes("vercel.app"));
}

// --- 4. Social image and icons ---------------------------------------------
{
  const og = pages["/"].body.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
  const r = await fetch(og, { redirect: "manual" });
  check("og:image: 200", r.status === 200, `${og} -> ${r.status}`);
  check("og:image: image/jpeg", (r.headers.get("content-type") ?? "").includes("image/jpeg"));
  const buf = Buffer.from(await r.arrayBuffer());
  let w = 0, h = 0;
  for (let i = 2; i < buf.length - 9; i++) {
    if (buf[i] === 0xff && (buf[i + 1] === 0xc0 || buf[i + 1] === 0xc2)) { h = buf.readUInt16BE(i + 5); w = buf.readUInt16BE(i + 7); break; }
  }
  check("og:image: 1200x630 as declared", w === 1200 && h === 630, `${w}x${h}`);
  for (const asset of ["/logo.png", "/favicon.ico", "/favicon-32.png", "/favicon-192.png", "/apple-touch-icon.png"]) {
    const a = await get(ORIGIN + asset, { method: "HEAD" });
    check(`${asset}: 200`, a.status === 200, `got ${a.status}`);
  }
  const stale = await get(`${ORIGIN}/favicon.svg`, { method: "HEAD" });
  check("/favicon.svg stays gone", stale.status === 404, `got ${stale.status}`);
}

// --- 5. Legacy redirects: single hop, permanent, correct target ------------
const REDIRECTS = [
  ["/about-us", "/"], ["/about-us/", "/"],
  ["/get-in-touch", "/contact"], ["/get-in-touch/", "/contact"],
  ["/contact-us", "/contact"], ["/contact-us/", "/contact"],
  ["/services/business-productivity-tools", "/services"], ["/services/business-productivity-tools/", "/services"],
  ["/services/business-website-hosting", "/services"], ["/services/business-website-hosting/", "/services"],
  ["/services/managed-services-consulting", "/services"], ["/services/managed-services-consulting/", "/services"],
  ["/services/cloud-platforms", "/services"], ["/services/cloud-platforms/", "/services"],
];
for (const [from, to] of REDIRECTS) {
  const r = await get(ORIGIN + from);
  const permanent = r.status === 301 || r.status === 308;
  check(`${from} → ${to} in one permanent hop`, permanent && r.location === ORIGIN + to, `got ${r.status} ${r.location}`);
}

// --- 6. Apex redirect ------------------------------------------------------
if (skipApex) {
  console.log(`  SKIP  apex redirect (${APEX}) — --skip-apex passed; verify from a network that can reach the bare host.`);
} else {
  try {
    const r = await get(`${APEX}/`);
    const permanent = r.status === 301 || r.status === 308;
    check(`${APEX}/ → ${ORIGIN}/ in one permanent hop`, permanent && r.location === `${ORIGIN}/`, `got ${r.status} ${r.location}`);
    const deep = await get(`${APEX}/services`);
    check(`${APEX}/services → ${ORIGIN}/services in one hop`, (deep.status === 301 || deep.status === 308) && deep.location === `${ORIGIN}/services`, `got ${deep.status} ${deep.location}`);
  } catch (e) {
    check(`${APEX}/ reachable`, false, e.message);
  }
}

// --- 7. Content integrity on the live pages --------------------------------
const PRICING = [/\$\s?\d/, /\bfrom \$?\d/i, /\bper month\b/i, /\b\d+\s*\/\s*mo\b/i, /\bper user per month\b/i, /\bhourly rate\b/i, /\bAUD\s?\d/i];
const FABRICATED = [/\btestimonial/i, /[“”]/, /\b\d+\s?(%|per cent|percent)/i, /\b\d+\s?(GB|TB|MB)\b/i, /\bsaved\b/i, /\bsavings\b/i, /\bROI\b/, /\bapproved by\b/i, /\bendorse/i];
const RETIRED = ["business hours", "best-effort", "take ownership", "own your technology", "five providers", "Grant just gets it done", "Acronis", "Business Technology, Made Easy"];
for (const [path] of PAGES) {
  const text = visibleText(pages[path].body);
  check(`${path}: no public pricing`, !PRICING.some((re) => re.test(text)), PRICING.find((re) => re.test(text))?.toString());
  check(`${path}: no fabricated proof`, !FABRICATED.some((re) => re.test(text)), FABRICATED.find((re) => re.test(text))?.toString());
  check(`${path}: no retired phrasing`, !RETIRED.some((n) => text.toLowerCase().includes(n.toLowerCase())), RETIRED.find((n) => text.toLowerCase().includes(n.toLowerCase())));
}
{
  const home = visibleText(pages["/"].body);
  for (const s of ["Technology, simplified.", "The jargon stops with us.", "We own the problem.", "You don't need to have all the answers.", "Both halves, in practice.", "Managed Technology", "Professional Services"]) {
    check(`/: "${s}" present`, home.includes(s));
  }
  for (const client of ["Concrete Sales", "Stiles Advisory", "Baza Capital", "Deller Constructions"]) check(`/: ${client} named`, home.includes(client));
  const ctas = (html) => [...html.matchAll(/<a href="([^"]+)"[^>]*>\s*Get in touch/g)].map((m) => m[1]);
  check("/: 'Get in touch' routes to /contact", ctas(pages["/"].body).length >= 2 && ctas(pages["/"].body).every((h) => h === "/contact"));
  check("/services: 'Get in touch' routes to /contact", ctas(pages["/services"].body).length >= 2 && ctas(pages["/services"].body).every((h) => h === "/contact"));
  check("/contact: one email button", (pages["/contact"].body.match(/>\s*Send an email/g) ?? []).length === 1);
  const mailtos = new Set();
  for (const [path] of PAGES) for (const m of pages[path].body.matchAll(/href="(mailto:[^"]+)"/g)) mailtos.add(m[1]);
  check("one consistent mailto across the site", mailtos.size === 1 && mailtos.has("mailto:hello@twny.com.au?subject=Website%20enquiry"), [...mailtos].join(", "));
  const servicesText = visibleText(pages["/services"].body);
  check("/services: IT-support FAQ live", servicesText.includes("Does Managed Technology include day-to-day IT support?"));
  const graph = JSON.parse(pages["/"].body.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1] ?? "{}");
  check("/: Organization @id on the canonical origin", graph["@graph"]?.some((n) => n["@type"] === "Organization" && n["@id"] === `${ORIGIN}/#organization`));
  check("/: WebSite node present", graph["@graph"]?.some((n) => n["@type"] === "WebSite"));
}

// --- 8. Security headers ---------------------------------------------------
{
  const h = pages["/"].headers;
  check("X-Content-Type-Options: nosniff", h.get("x-content-type-options") === "nosniff");
  check("X-Frame-Options set", !!h.get("x-frame-options"));
  check("Referrer-Policy set", !!h.get("referrer-policy"));
  check("HSTS present", /max-age=\d+/.test(h.get("strict-transport-security") ?? ""));
}

// --- report ----------------------------------------------------------------
const passed = checks.filter((c) => c.ok).length;
for (const c of checks) if (!c.ok) console.error(`  FAIL  ${c.name}${c.detail ? ` — ${c.detail}` : ""}`);
console.log(`\n${passed}/${checks.length} live checks passed against ${ORIGIN}.`);
if (failures.length) {
  console.error(`\n${failures.length} failing check(s).`);
  process.exit(1);
}
