// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

/**
 * Canonical base URL — the single place the public origin is defined.
 * Canonicals, Open Graph URLs and the sitemap all derive from this, so there
 * is no way for pages to disagree with each other.
 *
 * Resolution order:
 *   1. PUBLIC_SITE_URL          — explicit override, wins everywhere.
 *   2. VERCEL_PROJECT_PRODUCTION_URL — set by Vercel at build time to the
 *      project's PRODUCTION domain (the custom domain once one is attached,
 *      otherwise the .vercel.app one). Using it means preview deployments
 *      still emit production canonicals, and the domain cutover needs no code
 *      change at all.
 *   3. The current production deployment, as a local/dev fallback.
 */
const SITE_URL =
  process.env.PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://twny-website.vercel.app');

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  vite: {
    plugins: [tailwindcss()]
  }
});
