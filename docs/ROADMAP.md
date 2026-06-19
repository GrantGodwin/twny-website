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
| **Current Phase** | Phase 2 — Homepage |
| **Current Sprint** | Homepage section build-out |
| **Current Work Item** | Item 3 — "Why TWNY" (content/treatment refined; awaiting review) |
| **Repository Status** | Hero (Item 1) and "What we look after" (Item 2) are reviewed and complete. "How we work" and "The offer" are both removed as standalone homepage sections (see Phase 2 list; `offerCards` data preserved in `src/data/offer.ts` for later). "Why TWNY" sits directly after "What we look after" on the `bg-band` lifted-Ink surface. **This pass refines the section's internal treatment**: the headline is now two-tier ("Simple for you." dominant in Ink; "Never simple behind the scenes." smaller and quieter in Steel); the rotating term is now Ember, italic, and set inline as part of one sentence ("You shouldn't need to understand [term].") rather than a separate centred block; the rotation itself is now a vertical reel (the active term centred, faded/blurred previous and next terms peeking above and below) rather than a crossfade; the supporting copy has been reworded and moved to follow the rotating sentence rather than precede it; and a quiet text-link CTA ("See how we make it simple", linked to `/productivity` as a placeholder destination — not specified in this task, needs confirmation) now closes the section. No background texture was added — no on-brief asset exists for one, and a generic "tech texture" risks the art direction's explicit ban on circuit-board/circuitry imagery even at low opacity, so the section continues to rely on the `bg-band` tonal surface alone. `npm run build` passes. **Not yet reviewed or approved under this workflow.** Known regression carried over from the previous pass: the header nav's "Services" link and "What we look after"'s CTA still point to the now-removed `/#services` anchor (see Phase 3). |
| **Awaiting Human Direction** | Review of the refined Item 3 treatment, including: the `/productivity` destination chosen for the new CTA (unspecified in the task, needs confirmation or a different target), and the decision not to add a background texture. Also open: the dead `/#services` anchor, the Phase 3 Services IA decision, the Phase 3 Privacy page scope (undefined), and pricing figure sign-off (currently draft per `PricingFlag.astro`). |
| **Recommended Next Action** | Review Item 3's refined treatment (headline hierarchy, the inline rotating sentence and reel motion, content order, and the new CTA). Do not begin Item 4 ("Social proof") until Item 3 is reviewed and marked complete. |

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

- [x] **1. Hero** — first-screen value proposition and the page's primary decision point (dual CTA).
  - Outstanding: header CTA scroll-to-section behaviour is intentionally not wired yet (placeholder `href="/contact"`).
- [x] **2. What we look after** — reframed as four outcome-led capability modules (Work smoothly / Look professional / Stay protected / Save time), each a centred icon + heading + body, with an editorial "See how we can help →" link in place of the old surface → need list. Reviewed and approved across several editorial-polish passes (layout, icon weight/size, divider treatment, copy).
- [x] ~~3. How we work~~ — **removed as a standalone section** (was: relational-trust statements at `#how-we-work`). Decided to substantially overlap with Why TWNY's purpose; absorbed there. See Product Backlog for the one surviving idea not yet carried forward.
- [x] ~~The offer~~ — **removed from the homepage for now** (was: "Two clusters, one operation." with three cards and an info bar at `#services`). Conflicted with the new homepage structure once Why TWNY was rebuilt directly beneath "What we look after." `offerCards` data preserved in `src/data/offer.ts`, not deleted. **Leaves `/#services` as a dead anchor** (header nav "Services" link, and "What we look after"'s CTA button) — see the Services IA decision in Phase 3.
- [ ] **3. Why TWNY** — *(current focus)* the homepage's emotional centre: a philosophy demonstration (technology is complicated; TWNY carries that complexity so the client doesn't have to), not a values/methodology/about-us/principles section. Positioned directly after "What we look after" with nothing between them, on the `bg-band` lifted-Ink surface (`#why-twny`). Two-tier headline ("Simple for you." dominant / "Never simple behind the scenes." quieter, in Steel); one inline rotating sentence ("You shouldn't need to understand [term].") with the term in Ember italic, rotating via a restrained vertical reel (faded/blurred prev/next slivers, no crossfade, no carousel chrome); reworded supporting copy; three philosophy-in-practice statements as a compact row beneath a hairline; a quiet text-link CTA ("See how we make it simple," currently pointed at `/productivity` as an unconfirmed placeholder). No cards, icons, diagram, photography, or process steps; no background texture (none added — no on-brief asset exists, and a generic texture risked the art direction's circuit-board/circuitry ban). Awaiting review and approval to mark complete.
- [ ] **4. Social proof** — testimonials / partners / credibility. Not started — no testimonials or partner logos exist yet.
- [ ] **5. Pricing summary** — short, scannable pricing teaser driving to `/pricing`. Its own standalone homepage section, positioned directly after Why TWNY.
- [ ] **6. FAQ** — resolve common objections before contact. A reusable `FAQ.astro` block exists and is currently used only on `/pricing`.
- [ ] **7. Contact** — closing conversion point. Homepage currently ends in a closing CTA band linking to `/contact`, not a full on-page contact section.

---

## Phase 3 — Supporting Pages

- [ ] Services — not built as a standalone page, and **no longer exists as a homepage section either** as of the Why TWNY restructure (the old "offer" section at `#services` was removed from the homepage; its data is preserved in `src/data/offer.ts`). **Open IA decision, now more pressing:** rebuild as a homepage section, split into a standalone `/services` page, or something else — and what to do about the header nav "Services" link and "What we look after"'s CTA, which currently point to the now-missing `/#services` anchor.
- [ ] Pricing — `/pricing` exists (toggle, tier ladder, comparison matrix, FAQ, CTA band) but is unreviewed under this workflow; figures are explicitly draft / pre-sign-off.
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

- [ ] Scroll-aware header CTA — scroll-to-section wiring for the header "Get in touch" button
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
