import type { APIRoute } from "astro";

// Hand-built rather than generated so the sitemap can only ever contain the
// three real public pages. Add an entry here when a page is genuinely added —
// never to pad the sitemap out.
const PAGES = [
  { path: "/", changefreq: "monthly", priority: "1.0" },
  { path: "/services", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "yearly", priority: "0.5" },
];

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error("`site` must be set in astro.config.mjs");

  const urls = PAGES.map(({ path, changefreq, priority }) => {
    const loc = new URL(path, site).href;
    return `  <url>
    <loc>${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
