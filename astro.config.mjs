// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

/**
 * Canonical public origin — the single place the production URL is defined.
 * Canonicals, Open Graph and Twitter URLs, the sitemap and robots.txt all
 * derive from this, so the pages cannot disagree with each other.
 *
 * This is a plain constant on purpose. It was previously derived from Vercel's
 * VERCEL_PROJECT_PRODUCTION_URL, on the assumption that the variable would
 * follow the custom domain once one was attached. It did not: after the
 * cutover, production kept building with `twny-website.vercel.app`, and every
 * canonical, og:url, sitemap entry and robots Sitemap line on the live site
 * pointed at the deployment URL rather than the real one. Inferring the public
 * identity of the site from the build environment is not worth that failure
 * mode — the canonical host is a product decision, so it is written down here.
 *
 * www is canonical: the apex redirects to it at the platform level, so the
 * two must not disagree. PUBLIC_SITE_URL still overrides for anyone building
 * the site under a different origin.
 */
const SITE_URL = process.env.PUBLIC_SITE_URL ?? 'https://www.twny.com.au';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  vite: {
    plugins: [tailwindcss()]
  }
});
