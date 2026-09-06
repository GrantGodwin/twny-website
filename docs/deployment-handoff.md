# Deployment handoff — actions outside the repository

The repository can only put the right content on the right domain. Search
engines, social networks and directories update on their own schedules and
through accounts only Grant holds. This file lists those actions so that what
has been done in code is never mistaken for the whole cutover.

**Nothing in this file has been performed by the build or by any automated
pass.** Each item is human-owned until it is ticked here with a date.

## What the repository already guarantees

- Canonical origin `https://www.twny.com.au` on every page, in `og:url`, in
  the sitemap and in `robots.txt` (asserted by `npm run verify`).
- Legacy WordPress routes redirect permanently in one hop; `/news/` and every
  unknown path return a branded, `noindex` 404.
- One `@graph` per page: Organization (`/#organization`), WebSite
  (`/#website`, homepage only), two Service nodes and one FAQPage on
  `/services`, all referencing the same Organization.
- A branded 1200×630 social card at `/og-image.jpg` and a 512×512 logo at
  `/logo.png`.
- `npm run verify:live https://www.twny.com.au` re-checks all of the above
  against the deployed site, including the apex redirect.

## Google Search Console

- [ ] Add or verify the **domain property** `twny.com.au` (covers apex and www).
- [ ] Submit the sitemap: `https://www.twny.com.au/sitemap.xml`
- [ ] URL Inspection → Request indexing for:
  - `https://www.twny.com.au/`
  - `https://www.twny.com.au/services`
  - `https://www.twny.com.au/contact`
- [ ] After recrawl, review Pages and the search-result snippets for the three
      URLs; the homepage title should now read "TWNY — Managed Technology and
      Professional Services".
- Do **not** file temporary removals for the legacy URLs. They redirect or
  return an honest 404, which is the correct signal; removals only hide the
  problem from the report.

## Bing Webmaster Tools

- [ ] Add or verify `www.twny.com.au` (importing from Search Console is the
      quickest route).
- [ ] Submit `https://www.twny.com.au/sitemap.xml`.
- [ ] Request indexing for the three public URLs if the tool offers it.

## LinkedIn company page (`au.linkedin.com/company/twny`)

The page still carries the superseded positioning ("design and implementation
of cloud solutions for start-ups…"), which is why it is **not** linked from the
site's structured data. Update it, then add the URL to `sameAs` in
`src/layouts/BaseLayout.astro`.

- [ ] Tagline: **Technology, simplified.**
- [ ] Website: `https://www.twny.com.au/`
- [ ] About: aligned to Managed Technology and Professional Services, for small
      and mid-sized Australian businesses. Remove the start-up / cloud-
      transformation wording.
- [ ] Replace outdated brand assets. `public/logo.png` (512×512 wordmark on
      Ink) is the current mark; `public/og-image.jpg` suits a banner crop.
- [ ] Then: add the URL to `sameAs` and redeploy.

## Google Business Profile

A legitimate consideration, not a requirement.

- [ ] Claim or update **only if eligible** for a service-area business.
- [ ] Use the **service-area** configuration; do **not** expose a residential
      address.
- [ ] Keep the services and website wording identical to the live site.

## Analytics — deliberately not installed

Nothing in the repository or the Vercel configuration is an approved analytics
implementation, so none was added: no Google Tag Manager, no cookie banner, no
tracking script, no account created.

Recommendation, subject to plan and cost approval: **Vercel Web Analytics**
(cookieless, no banner required). If approved, the useful measurements are:

- Contact-page views
- Header "Get in touch" clicks
- Homepage "Get in touch" clicks (hero and closing)
- Services "Get in touch" clicks (hero and closing)
- Email-link clicks (`mailto:` on Contact, footer and 404)

Adding analytics makes a Privacy page mandatory at the same time.

## Pull-request checks

`.github/workflows/verify.yml` runs `npm ci`, `npm run check` and
`npm run verify` on every pull request to `main` and every push to `main`. It
is not yet a merge gate:

- [ ] Settings → Branches → Add rule for `main` → **Require status checks to
      pass before merging** → select **verify**. (Optionally: require branches
      to be up to date, and restrict force pushes.)

## Client approvals

See `docs/client-work-approval.md`. All four named engagements are **pending**
client review; the site carries factual capability descriptions only.
