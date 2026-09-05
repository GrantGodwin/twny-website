# TWNY Website — Execution Roadmap

This is an execution roadmap, not a strategy document. It tracks what is built, what is
outstanding, and what is deliberately deferred. Brand and visual decisions are governed by
[`governance/implementation-brief.md`](./governance/implementation-brief.md) and
[`governance/art-direction.md`](./governance/art-direction.md) — this document does not
restate or override either. The implementation brief remains the design and implementation
contract; this roadmap is the execution backlog.

## Current Status Dashboard

**This table is the single source of truth for project state.** Read it before any
implementation work. Update it only as the last step after the user has approved completed
work — never ahead of approval, and never as part of proposing work (see
[`README.md`](./README.md#execution-workflow)).

| Field | Value |
| --- | --- |
| **Current Phase** | Phase 4 — Launch (production hardening) |
| **Current Sprint** | Production hardening and editorial cleanup (Vellum #491) — built, awaiting review |
| **Current Work Item** | Hardening pass on a branch, PR open. **Stop for review; do not start another website pass.** |
| **Launch Scope (locked)** | **Home, Services, Contact. Nothing else.** No Pricing page, no Work/About/blog, no per-service or local-SEO pages. |
| **Repository Status** | First alignment pass merged to `main` (`9b699fe`). The hardening pass adds: homepage editorial cuts (roughly a fifth off the mobile page height), the work-proof section reduced to two contrasting engagements plus a single "other work" line, self-hosted fonts (both Google origins removed), the hero moved onto Astro's image pipeline, a central canonical base URL, Open Graph and Twitter cards, sitemap, environment-aware robots, Organization / Service / FAQPage structured data, and security + cache headers via `vercel.json`. **NO PRICING remains locked.** |
| **Awaiting Human Direction** | Review of the hardening PR. Then the four deferred items below, each of which needs a decision or a credential rather than more code. |
| **Recommended Next Action** | Review and merge the hardening PR, then decide on the contact-form backend, which is the only remaining launch-quality gap. |

Work proceeds one roadmap item at a time:

```
Roadmap → Design discussion → Implementation → Review → Mark complete → Next roadmap item
```

Do not start the next unchecked item until the current one has been reviewed and approved.

---

## Phase 1 — Brand Foundation

- [x] Brand positioning — locked in `governance/implementation-brief.md`; research/synthesis archived in `archive/`.
- [x] Visual language — dark, Ink-first system; Mineral/Ember role colours locked in `governance/art-direction.md`.
- [x] Homepage art direction — locked governance pass completed.
- [x] Hero implementation — full-bleed lighthouse photo, layered readability scrims, H1, body copy, dual CTA.
- [x] Hero polish — CTA treatment, copy sizing, logo scale, interaction timing, scroll-revealed header CTA, mobile menu all shipped across iterative passes.

---

## Phase 2 — Homepage

Build order and status of each section.

- [x] **1. Hero** — first-screen value proposition and the page's primary decision point (dual CTA). Primary CTA ("Get in touch") launches `mailto:hello@twny.com.au` directly rather than navigating to `/contact`. Body copy rewritten to carry the emotional promise ("Most businesses don't want to think about technology. They just want it to work.") now that "What we look after" carries the practical-outcomes explanation instead.
- [x] **2. What we look after** — reframed as four outcome-led capability modules (Work smoothly / Look professional / Stay protected / Save time), each a centred icon + heading + body, with an editorial "See how we can help →" link (→ `/services`) in place of the old surface → need list. On `bg-paper`, tonally distinct from "Why TWNY"'s `bg-band` directly below so the section break is immediately visible without a gradient. Reviewed and approved across several editorial-polish passes (layout, icon weight/size, divider treatment, copy).
- [x] ~~3. How we work~~ — **removed as a standalone section** (was: relational-trust statements at `#how-we-work`). Decided to substantially overlap with Why TWNY's purpose; absorbed there. See Product Backlog for the one surviving idea not yet carried forward.
- [x] ~~The offer~~ — **removed from the homepage for now** (was: "Two clusters, one operation." with three cards and an info bar at `#services`). Conflicted with the new homepage structure once Why TWNY was rebuilt directly beneath "What we look after." `offerCards` data preserved in `src/data/offer.ts`, not deleted. **Leaves `/#services` as a dead anchor** (header nav "Services" link, and "What we look after"'s CTA button) — see the Services IA decision in Phase 3.
- [x] **3. Why TWNY** — the homepage's emotional centre: a philosophy demonstration (technology is complicated; TWNY carries that complexity so the client doesn't have to), not a values/methodology/about-us/principles section. Positioned directly after "What we look after" with nothing between them, on the `bg-band` lifted-Ink surface, left-aligned to match the Hero and "What we look after" (`#why-twny`). Two-tier headline ("Simple for you." dominant / "Never simple behind the scenes." quieter); one inline rotating sentence ("You shouldn't need to understand [term]") reading as part of the same sentence, the term in bold italic Ember, scrolling top-to-bottom as a single-line reel with no blur or dimming and no carousel chrome; supporting copy rewritten to acknowledge complexity rather than describe change; three rewritten philosophy statements ("The jargon stops with us." / "We own the problem." / "We notice before you do.") beneath a fade-edged divider matching "What we look after"'s divider language; a quiet text-link CTA. No cards, icons, diagrams, photography, or process steps; no background texture (none added — no on-brief asset exists, and a generic texture risked the art direction's circuit-board/circuitry ban). Reviewed and approved across multiple editorial-polish passes (layout, reel mechanics, copy, divider). Remaining minor polish moved to Product Backlog.
- [x] **4. Helping businesses like yours / client stories** *(evolved from "Social proof")* — **reviewed and approved.** Went through several builds. First pass was a static, typographic **business snapshots** spread (recognition-first, no photography); this was superseded — keeping the intent, changing the execution — by an image-led **living editorial feature** for stronger lead-gen conversion and emotional proof, then refined across many editorial-polish passes (hierarchy, typography, colour restraint, the journey indicator's continuous-loop animation, card lift, spacing). Final implementation (`src/components/home/ClientStories.astro`, data in `stories` in `src/data/offer.ts`) is two breakpoint-specific layouts sharing one data source: **Desktop (`lg`+)** — one featured client story at a time in a large cinematic image with an editorial overlay (company → quote → person + role → outcome → services), a persistent always-visible roster that *is* the navigation, and a segmented "journey" progress indicator (5 nodes + a Mineral fuse that loops continuously) driving ~5s auto-advance; pauses on hover/focus of the feature or roster and when offscreen. **Mobile/tablet (below `lg`)** — one full vertical card per client (same overlay hierarchy), navigated by native swipe, dots, and loop-around arrows; no auto-rotation (a touch carousel that advances mid-swipe is exactly the surprising behaviour to avoid). No arrows/dots/counters borrowed from generic carousel patterns on desktop; no logo walls, review stars, or cards-as-the-primary-composition. Respects `prefers-reduced-motion` throughout and renders statically (first story + full roster server-side on desktop; all 5 cards always in the DOM on mobile) so it stays meaningful with JS disabled. **Content remains scaffold** — see Product Backlog for the swap-in work still required before launch.
- [x] ~~5. Pricing summary~~ — **removed as a standalone homepage section**, and superseded by a wider strategic decision. (Was: a short, scannable pricing teaser driving to `/pricing`, positioned after Why TWNY.) **Design rationale, original:** the homepage ends by *removing the hesitation around getting in touch* rather than by discussing pricing. **Rationale, updated:** TWNY's pricing philosophy has since changed from rate-card-led to **conversation-led** — pricing is not being relocated to another page or preserved in any form on the website; it is removed as a website feature entirely. This is a strategy reversal of the earlier "pricing stays published, just not a homepage feature" position, not a continuation of it — the art direction's original "no hidden pricing" rule no longer applies to the website itself under this decision. `/pricing.astro` is slated for deletion as part of the Services milestone (not yet done). The section's old slot in `src/pages/index.astro` was already removed.
- [ ] **6. FAQ** — resolve common objections before contact. A reusable `FAQ.astro` block exists and is currently used only on `/pricing`. Deferred — not currently scheduled into the homepage.
- [x] **7. Homepage closing section — "the handshake"** *(was "Contact"; absorbs the old closing CTA band, and the build-order slot the removed Pricing summary used to occupy)* — **reviewed and approved.** The final homepage section. It is deliberately *not* another feature, pricing, or process section: a calm, spacious, reassuring close whose single job is to remove the last hesitation before getting in touch — the worry "I don't even know what I need, I'll waste their time." No eyebrow (the headline alone concludes the page, rather than introducing another chapter). Headline "You don't have to have all the answers."; body speaking directly to the visitor — that's what we're for; whether you've got one thing in mind or aren't sure where to begin, tell us what's happening in your business and we'll help work out what matters and where to start (no invented customer quotes). Primary CTA "Get in touch" → `mailto:hello@twny.com.au`; secondary, visually quiet link "How we can help" → `/services`. Replaces **both** the standalone Pricing section and the old conversion CTA band in `src/pages/index.astro`. **Surface:** stays inside the locked Ink-first dark system on `bg-band` — the same token as "Why TWNY", non-adjacent so it doesn't blur a boundary (Client Stories' `bg-sand` separates them). A light/off-white prototype was tried and rejected for breaking the dark page's emotional flow; the closing exhale is made with **space, not colour** (the most generously padded section on the page). Left-aligned, single text column; no cards, icons, diagrams, illustrations, or process steps.

---

## Phase 3 — Supporting Pages

**Launch consists of exactly three pages: Home, Services, Contact.** Nothing else is required for launch.

- [ ] Services — **the next milestone, and the last page required for launch.** A minimal placeholder exists at `/services` (`src/pages/services.astro`); it is not the designed page. **IA is locked, implementation is not:** organised around the same four business-capability themes already established on the homepage (Work smoothly / Look professional / Stay protected / Save time) — not by delivery model (recurring vs. project work) and not by a technology catalogue (Microsoft 365 / Security / Backup / Websites / AI as equal entries). Named technologies appear *inside* each relevant capability as supporting detail, recurring across more than one capability where genuinely relevant, rather than each owning one canonical section. A "Projects & advice" note may exist as a minor supporting section, not an organising category. No standalone FAQ page — FAQs are written fresh for this page's real scoping/fit questions and embedded only where they belong; the old pricing FAQs are not reused. No partners page, logo wall, or certification strip — a genuine partner credential, if one exists, is mentioned inline within the one capability it actually strengthens, never as a separate section. Absorbs any content from `/productivity` worth keeping (see below) and permanently retires the `/#services` anchor question. See the design brief under discussion for full detail.
- [ ] ~~Pricing~~ — **removed from the website entirely, by strategic decision.** Not a Phase 3 deliverable any more — there is no "build/review the pricing page" task. `/pricing.astro` is to be deleted as part of the Services implementation. Pricing figure sign-off (previously tracked in the Product Backlog) is moot and has been removed from this document.
- [ ] ~~Productivity~~ — **will not survive as a standalone destination.** `/productivity.astro` is, as built today, a second pricing page under a different name (`TierLadder`, `PricingToggle`, `PricingFlag`, `ComparisonMatrix`) — all of that is discarded with Pricing. Its non-pricing explanatory content (e.g. the "what 'managed' means" plain-English explainer) is a candidate for absorption into Services if it earns a place there during implementation; it is not preserved as its own page or destination either way.
- [ ] Contact — `/contact` exists as a placeholder only; no form backend, no guided recommendation flow. Required for launch as a page; the form backend is separate, longer-running work (see Product Backlog).
- [ ] Privacy — **not in the locked launch scope, and not yet assigned anywhere else.** No privacy page exists; legal content and scope are undefined. Flagging this as a gap rather than silently dropping it — confirm whether a launch with no privacy page is acceptable before treating this as fully deferred.

---

## Phase 4 — Launch

Implementation tasks only.

- [x] Metadata — per-page `<title>` and `<meta description>`; canonical URLs on every page, derived from one central base URL (`PUBLIC_SITE_URL` → `VERCEL_PROJECT_PRODUCTION_URL` → the current production deployment), so the domain cutover needs no code change.
- [x] Open Graph — full og:* set plus Twitter `summary_large_image`, with a 1200×630 card cropped from the approved hero asset. **A purpose-designed OG card carrying the wordmark would be better than a photo crop; commission when convenient.**
- [x] Sitemap — hand-built endpoint listing exactly Home, Services and Contact. Add an entry only when a real page is added.
- [x] robots.txt — endpoint keyed on `VERCEL_ENV`. Default-allow by design: only an explicit `preview` build disallows crawling, so a missing variable can never block production.
- [x] Structured data — Organization site-wide; Service ×2 and FAQPage on `/services`, generated from the same source the page renders so markup cannot drift from visible content. No address, phone, hours, ratings or reviews: none are established. `ProfessionalService` was deliberately **not** used — it is a `LocalBusiness` subtype whose expected properties are address/geo/openingHours, which would invite exactly that fabrication.
- [x] Performance — fonts self-hosted (two third-party origins removed); hero served through Astro's image pipeline with a five-width srcset. Mobile home page now transfers ~151 KB total, with the hero at 8 KB instead of the 261 KB master.
- [x] Security headers — `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Cross-Origin-Opener-Policy`, `Permissions-Policy`, plus immutable caching for `/_astro/*`, via `vercel.json`.
- [ ] **Content-Security-Policy — deferred, not forgotten.** A working policy is `default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'`. It is not shipped because it would block the Vercel preview toolbar (`vercel.live`), and because `form-action 'self'` and `script-src` would need widening the moment a third-party form handler or analytics is added. Ship it once the contact and analytics decisions below are settled, adding the origins those choices require.
- [ ] **Analytics — deferred, needs Grant.** Nothing is installed and no IDs were invented. To enable Vercel Analytics: turn it on in the Vercel dashboard (Project → Analytics), then `npm i @vercel/analytics` and mount its component in `BaseLayout.astro`. Adding analytics makes the Privacy page below mandatory.
- [ ] **Contact form backend — deferred, needs a decision.** The site is a static build with no server runtime and no mail-sending credentials, so a form cannot be added without either (a) an Astro server adapter plus a mail provider API key, or (b) a hosted form endpoint. Email remains the working path and is now centralised in `src/data/site.ts` with a prefilled subject.
- [ ] **Privacy page — deferred, conditional.** Not added: the site currently sets no cookies, runs no analytics and collects nothing — a page would describe an empty set. It becomes **mandatory** the moment the contact form or analytics lands, and the footer needs its link at the same time.
- [ ] Google Search Console — submit `https://<production domain>/sitemap.xml` after the domain cutover.
- [ ] Accessibility review — skip link, `:focus-visible`, `aria-current`, mobile-menu ARIA and reduced-motion behaviour all verified by browser QA each pass; no formal third-party audit performed.

## Phase 2 — Post-Launch Expansion

**Named "Phase 2" by the business; not to be confused with this document's existing "Phase 2 — Homepage" build-phase label above, which refers to the (now complete) homepage build order.** Sequenced after launch (Phase 4), not before it. Explicitly **not designed yet** — tracked here so the launch scope (Home, Services, Contact only) isn't read as the end of the project.

- [ ] Our Work — not started, not designed. Likely overlaps with Phase 5's "Expanded service pages" / "Case studies" below; reconcile when this is picked up rather than running both lists.
- [ ] About — not started, not designed.
- [ ] SEO — overlaps with the SEO tasks already listed under Phase 4 — Launch; Phase 4's SEO is the pre-launch baseline (metadata, sitemap, structured data), this is the deeper post-launch SEO work once there's more content to optimise.
- [ ] Content — not scoped; likely the umbrella for ongoing editorial output (see "Insights / articles" under Phase 5).
- [ ] Additional customer stories — grows the `stories` set in `src/data/offer.ts` beyond the five scaffold entries already in Client Stories; see the Product Backlog items on real photography and attribution, which apply equally to any new stories added here.

---

## Phase 5 — Growth

Future work only — not scheduled. Overlaps with Phase 2 — Post-Launch Expansion above in places (Our Work / Case studies, Content / Insights); reconcile the two lists when either is picked up rather than tracking the same idea twice.

- [ ] Expanded service pages
- [ ] Insights / articles
- [ ] Case studies
- [ ] Conversion optimisation
- [ ] SEO expansion
- [ ] Interactive tools

---

## Product Backlog

Ideas intentionally deferred, not forgotten.

- [ ] Enhanced navigation
- [ ] Testimonials
- [ ] Partner credibility mentions — **not a logo wall, certification strip, or standalone partners page (locked decision).** Only worth pursuing if TWNY holds a genuine, current credential (e.g. a Microsoft partner status) that materially strengthens one specific Services capability; if so, it's a single inline sentence within that capability's copy, nowhere else. Don't invent or pursue this if no such credential is real today.
- [ ] Assessment tools
- [ ] Additional service landing pages
- [ ] Future AI tooling
- [ ] Contact form + backend (currently a placeholder)
- [ ] Guided `/recommend` flow (referenced in `contact.astro`, not built)
- [ ] Bespoke TWNY icon library — "What we look after" currently uses placeholder line icons (`CapabilityIcon.astro`: envelope, browser window, padlock, loop-arrows); commission/design a proper icon set once the brand's icon language is defined.
- [ ] Final editorial copy review — a full top-to-bottom copy pass across the homepage once every section is built, to check voice, rhythm and consistency holistically rather than section-by-section.
- [ ] Continuity-of-contact idea from the retired "How we work" section — not yet incorporated anywhere. Drafted statement: *"You're not starting over."* / *"You'll always deal with someone who already understands your setup — not a new name, a new ticket and a new explanation every time something comes up."* Identified as having no equivalent in Why TWNY's current principle set and a strong fit for the brief's "one accountable operator" positioning. The other two retired principles ("No invoice you didn't see coming," "Problems surface early") were judged to substantially restate existing Why TWNY content and were not carried forward. Incorporate only if and when it earns a place in the new Why TWNY design — do not re-add mechanically.
- [ ] Why TWNY — reel spacing — the rotating-term reel's spacing and vertical alignment went through several fine-tuning passes (alignment nudges, clipping window size, horizontal gap to "understand"); revisit if it still reads as slightly off in other browsers or at viewport widths not checked during this round.
- [ ] Why TWNY — rotating term list review — revisit the eight example terms (DNS records, SPF & DMARC, SharePoint permissions, Conditional Access, Microsoft 365 licensing, Backup retention, SSL certificates, Copilot licensing) in `src/data/offer.ts` periodically for relevance and currency as the underlying technology and licensing landscape changes.
- [ ] Why TWNY — eyebrow review — confirm "WHY TWNY" is still the right small label for this section now that its purpose has shifted from differentiation/principles to philosophy and emotional centre; consider whether a different eyebrow would set up the dominant statement better.
- [ ] Why TWNY — CTA destination — "See how we make it simple" currently links to `/productivity`, which is being retired (see Phase 3). **Must be repointed** — most likely to `/services` once that page exists — as part of the Services implementation; this is no longer just an unconfirmed placeholder, it will be a dead link once `/productivity` is removed if left as-is.
- [ ] Client stories — real photography — all five stories in `src/data/offer.ts` currently reuse existing local `/images/*.webp` files (one is the Hero's lighthouse image) as scaffold; each story's `image`/`imageAlt` fields are built to swap for final approved client photography without touching the component. Brief for the eventual shoot: subject on the right of frame (the desktop overlay's left negative space depends on it), the business or its work — never portraits, handshakes, headsets, or generic office stock.
- [ ] Client stories — scaffold attribution — three of the five quotes (Sinclair Brook, Baza Property Group, Speech Made Simple) carry placeholder person names (Michael Brook, Anthony Baza, Rebecca Hayes) invented to fill the "person + role" layout slot pending real attribution; confirm the genuine person (or restructure to attribute to the business only) before launch. Deller Constructions and First Finance carry genuine names and quotes already.
- [ ] Client stories — desktop script runs when hidden on mobile/tablet — the desktop auto-rotation script (`data-cs-desktop`) still initialises below the `lg` breakpoint even though that block is `display:none`; harmless today (CSS animations don't progress on non-rendered elements, so nothing fires or errors) but slightly wasteful. Low priority — gate by `matchMedia('(min-width: 1024px)')` in a future pass if it's ever worth the touch.
- [ ] Primary CTA — `mailto:` reliance — every primary "Get in touch" CTA (header, Hero, homepage closing section) now launches `mailto:hello@twny.com.au` directly instead of going through `/contact`. This is an explicit, deliberate decision (the Contact page and the primary CTA are meant to serve different purposes), but `mailto:` links fail silently for visitors without a configured native mail client (common on managed work devices and some mobile/webmail setups). Worth a future check on whether that failure mode is acceptable or needs a fallback.
