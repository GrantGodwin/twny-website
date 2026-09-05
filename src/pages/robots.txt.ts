import type { APIRoute } from "astro";

// Preview deployments must not be indexed; production must not be blocked.
//
// Vercel sets VERCEL_ENV to "production" | "preview" | "development" at build
// time. The rule here is deliberately DEFAULT-ALLOW: only an explicit preview
// build disallows crawling. A local build, a self-hosted build, or any
// environment where the variable is absent therefore produces a permissive
// robots file — so the eventual production domain can never be accidentally
// blocked by a missing variable, which is the failure mode that actually costs
// you traffic.
const isPreview = process.env.VERCEL_ENV === "preview";

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error("`site` must be set in astro.config.mjs");

  const body = isPreview
    ? `# Preview deployment — not for indexing.
User-agent: *
Disallow: /
`
    : `User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap.xml", site).href}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
