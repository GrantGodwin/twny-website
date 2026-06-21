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
| **Current Phase** | Phase 3 — Supporting Pages |
| **Current Sprint** | Services page build-out |
| **Current Work Item** | Services — replace the minimal placeholder at `/services` with real IA/content |
| **Repository Status** | **Phase 2 (Homepage) is functionally complete.** Hero (Item 1), "What we look after" (Item 2), "Why TWNY" (Item 3), "Helping businesses like yours" / client stories (Item 4), and the closing section (Item 7, "the handshake") are all reviewed and approved. Item 5 (Pricing summary) was removed by structural decision. Item 6 (FAQ) remains deferred, not scheduled into the homepage. A polish pass also: removed Pricing from header and footer nav entirely (no longer linked anywhere); created a minimal `/services` placeholder and repointed every former `/#services` link to it (header nav, "What we look after"'s CTA, the closing section's secondary CTA); changed all primary "Get in touch" CTAs (header, Hero, closing section) to `mailto:hello@twny.com.au` instead of navigating to `/contact` — `/contact` is reserved for the nav link and its own page; rewrote the Hero body to carry the emotional promise and "What we look after"'s intro to carry the practical outcomes (previously near-duplicated each other); restored the `bg-paper` / `bg-band` tonal split between "What we look after" and "Why TWNY" so the homepage reads as four distinct chapters (paper → band → sand → band) rather than one undifferentiated block; and sped up the Why TWNY rotating-term ticker from a ~3.8s to a ~1s dwell per term. |
| **Awaiting Human Direction** | The Services IA decision: `/services` (`src/pages/services.astro`) is currently a real but minimal placeholder (intro + the four capability blurbs + a mailto CTA), not a designed page — full scope/content/layout is undecided. Also open: Pricing figure sign-off (currently draft per `PricingFlag.astro`; `/pricing` itself is unchanged but is no longer linked from nav or the homepage), the Contact page's form backend / guided `/recommend` flow, and the Phase 3 Privacy page scope (undefined). |
| **Recommended Next Action** | Hold a design discussion on the Services page's scope and content before building it out further. |

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
- [x] ~~5. Pricing summary~~ — **removed as a standalone homepage section** (was: a short, scannable pricing teaser driving to `/pricing`, positioned after Why TWNY). **Design rationale:** the homepage now ends by *removing the hesitation around getting in touch* rather than by discussing pricing — the last objection a warm reader holds is "I don't even know what I need," not "what does it cost." Pricing remains available elsewhere on the site (the `/pricing` page itself, reachable by direct URL) and is **no longer a homepage feature**; the art direction's "no hidden pricing" rule is satisfied by pricing staying published, not by a homepage teaser. **Pricing has since also been removed from header and footer navigation entirely** — it is not linked from anywhere on the site, by further structural decision. The `/pricing` page itself is unchanged. The section's old slot in `src/pages/index.astro` is removed.
- [ ] **6. FAQ** — resolve common objections before contact. A reusable `FAQ.astro` block exists and is currently used only on `/pricing`. Deferred — not currently scheduled into the homepage.
- [x] **7. Homepage closing section — "the handshake"** *(was "Contact"; absorbs the old closing CTA band, and the build-order slot the removed Pricing summary used to occupy)* — **reviewed and approved.** The final homepage section. It is deliberately *not* another feature, pricing, or process section: a calm, spacious, reassuring close whose single job is to remove the last hesitation before getting in touch — the worry "I don't even know what I need, I'll waste their time." No eyebrow (the headline alone concludes the page, rather than introducing another chapter). Headline "You don't have to have all the answers."; body speaking directly to the visitor — that's what we're for; whether you've got one thing in mind or aren't sure where to begin, tell us what's happening in your business and we'll help work out what matters and where to start (no invented customer quotes). Primary CTA "Get in touch" → `mailto:hello@twny.com.au`; secondary, visually quiet link "How we can help" → `/services`. Replaces **both** the standalone Pricing section and the old conversion CTA band in `src/pages/index.astro`. **Surface:** stays inside the locked Ink-first dark system on `bg-band` — the same token as "Why TWNY", non-adjacent so it doesn't blur a boundary (Client Stories' `bg-sand` separates them). A light/off-white prototype was tried and rejected for breaking the dark page's emotional flow; the closing exhale is made with **space, not colour** (the most generously padded section on the page). Left-aligned, single text column; no cards, icons, diagrams, illustrations, or process steps.

---

## Phase 3 — Supporting Pages

- [ ] Services — **a minimal placeholder now exists at `/services`** (`src/pages/services.astro`): eyebrow/H1/body, a mailto CTA, the four capability blurbs reused from `capabilities` data, and a "prototype placeholder" notice matching `/contact`'s pattern. It resolves what used to be the dead `/#services` anchor — the header nav "Services" link, "What we look after"'s CTA, and the homepage closing section's secondary CTA all point here now. **Open IA decision, unchanged in substance:** this is a holding page, not a designed Services page — full scope, structure and content are still undecided (rebuild the old retired "offer" content here, something new, or split further). `offerCards` data from the retired homepage "offer" section is preserved in `src/data/offer.ts` and may be a useful starting point.
- [ ] Pricing — `/pricing` exists (toggle, tier ladder, comparison matrix, FAQ, CTA band) but is unreviewed under this workflow; figures are explicitly draft / pre-sign-off. No longer linked from header/footer nav or the homepage as of the Pricing-removal pass — still reachable only by direct URL.
- [ ] Contact — `/contact` exists as a placeholder only; no form backend, no guided recommendation flow.
- [ ] Privacy — not started. **Open IA decision:** no privacy page exists yet; legal content and scope are undefined.

---

## Phase 4 — Launch

Implementation tasks only.

- [ ] SEO
- [ ] Metadata — per-page `<title>` and `<meta description>` exist; no canonical URLs yet
- [ ] Structured data
- [ ] Sitemap — no sitemap integration configured
- [ ] robots.txt — not present in `public/`
- [ ] Open Graph — no OG/Twitter tags in `BaseLayout.astro`
- [ ] Google Analytics 4
- [ ] Google Search Console
- [ ] Microsoft Clarity
- [ ] Performance — no Lighthouse/perf audit run yet
- [ ] Accessibility review — skip link, `:focus-visible`, `aria-current`, `aria-expanded`/`aria-controls` on the mobile menu exist; no formal audit performed

---

## Phase 5 — Growth

Future work only — not scheduled.

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
- [ ] Partner logos
- [ ] Interactive pricing
- [ ] Assessment tools
- [ ] Additional service landing pages
- [ ] Future AI tooling
- [ ] Contact form + backend (currently a placeholder)
- [ ] Guided `/recommend` flow (referenced in `contact.astro`, not built)
- [ ] Pricing sign-off (current figures are draft, per `PricingFlag.astro`)
- [ ] Bespoke TWNY icon library — "What we look after" currently uses placeholder line icons (`CapabilityIcon.astro`: envelope, browser window, padlock, loop-arrows); commission/design a proper icon set once the brand's icon language is defined.
- [ ] Final editorial copy review — a full top-to-bottom copy pass across the homepage once every section is built, to check voice, rhythm and consistency holistically rather than section-by-section.
- [ ] Continuity-of-contact idea from the retired "How we work" section — not yet incorporated anywhere. Drafted statement: *"You're not starting over."* / *"You'll always deal with someone who already understands your setup — not a new name, a new ticket and a new explanation every time something comes up."* Identified as having no equivalent in Why TWNY's current principle set and a strong fit for the brief's "one accountable operator" positioning. The other two retired principles ("No invoice you didn't see coming," "Problems surface early") were judged to substantially restate existing Why TWNY content and were not carried forward. Incorporate only if and when it earns a place in the new Why TWNY design — do not re-add mechanically.
- [ ] Why TWNY — reel spacing — the rotating-term reel's spacing and vertical alignment went through several fine-tuning passes (alignment nudges, clipping window size, horizontal gap to "understand"); revisit if it still reads as slightly off in other browsers or at viewport widths not checked during this round.
- [ ] Why TWNY — rotating term list review — revisit the eight example terms (DNS records, SPF & DMARC, SharePoint permissions, Conditional Access, Microsoft 365 licensing, Backup retention, SSL certificates, Copilot licensing) in `src/data/offer.ts` periodically for relevance and currency as the underlying technology and licensing landscape changes.
- [ ] Why TWNY — eyebrow review — confirm "WHY TWNY" is still the right small label for this section now that its purpose has shifted from differentiation/principles to philosophy and emotional centre; consider whether a different eyebrow would set up the dominant statement better.
- [ ] Why TWNY — CTA destination — "See how we make it simple" currently links to `/productivity`, chosen as a reasonable placeholder during implementation; never explicitly confirmed as the intended destination.
- [ ] Client stories — real photography — all five stories in `src/data/offer.ts` currently reuse existing local `/images/*.webp` files (one is the Hero's lighthouse image) as scaffold; each story's `image`/`imageAlt` fields are built to swap for final approved client photography without touching the component. Brief for the eventual shoot: subject on the right of frame (the desktop overlay's left negative space depends on it), the business or its work — never portraits, handshakes, headsets, or generic office stock.
- [ ] Client stories — scaffold attribution — three of the five quotes (Sinclair Brook, Baza Property Group, Speech Made Simple) carry placeholder person names (Michael Brook, Anthony Baza, Rebecca Hayes) invented to fill the "person + role" layout slot pending real attribution; confirm the genuine person (or restructure to attribute to the business only) before launch. Deller Constructions and First Finance carry genuine names and quotes already.
- [ ] Client stories — desktop script runs when hidden on mobile/tablet — the desktop auto-rotation script (`data-cs-desktop`) still initialises below the `lg` breakpoint even though that block is `display:none`; harmless today (CSS animations don't progress on non-rendered elements, so nothing fires or errors) but slightly wasteful. Low priority — gate by `matchMedia('(min-width: 1024px)')` in a future pass if it's ever worth the touch.
- [ ] Primary CTA — `mailto:` reliance — every primary "Get in touch" CTA (header, Hero, homepage closing section) now launches `mailto:hello@twny.com.au` directly instead of going through `/contact`. This is an explicit, deliberate decision (the Contact page and the primary CTA are meant to serve different purposes), but `mailto:` links fail silently for visitors without a configured native mail client (common on managed work devices and some mobile/webmail setups). Worth a future check on whether that failure mode is acceptable or needs a fallback.
