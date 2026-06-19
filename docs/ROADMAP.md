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
| **Current Work Item** | Item 2 — "What we look after" section |
| **Repository Status** | Hero (Item 1) is reviewed and complete. Items 2–8 of Phase 2 already have rough or partial implementations in `src/pages/index.astro`, but none besides Hero have been reviewed or approved under this workflow. Item 2's existing `#what-we-look-after` section (surface → need list, in `src/data/offer.ts`) has not yet had its scope confirmed. |
| **Awaiting Human Direction** | A design discussion on Item 2's scope: does the existing surface → need list satisfy the "problem going away" reframe, or does it need rework or expansion? Also open: the Phase 3 Services IA decision (standalone page vs. homepage section), the Phase 3 Privacy page scope (undefined), and pricing figure sign-off (currently draft per `PricingFlag.astro`). |
| **Recommended Next Action** | Hold the design discussion on Item 2's scope before any further implementation. Do not begin Item 3 ("How we work") until Item 2 is reviewed and marked complete. |

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
- [ ] **2. What we look after** — *(current focus)* reframe the offer as "the problem going away," not a tools list.
  - Note: a version of this section already exists in code (`#what-we-look-after`, surface → need list). Confirm scope of remaining work in design discussion before implementing further, then review and mark complete.
- [ ] **3. How we work** — show the repeatable six-step engagement process (`#how-we-work`).
- [ ] **4. Why TWNY** — differentiation principles. Currently merged into a single split section with the pricing teaser, not a standalone section.
- [ ] **5. Social proof** — testimonials / partners / credibility. Not started — no testimonials or partner logos exist yet.
- [ ] **6. Pricing summary** — short, scannable pricing teaser driving to `/pricing`. Currently a teaser inside the combined "Why TWNY + Pricing" split section.
- [ ] **7. FAQ** — resolve common objections before contact. A reusable `FAQ.astro` block exists and is currently used only on `/pricing`.
- [ ] **8. Contact** — closing conversion point. Homepage currently ends in a closing CTA band linking to `/contact`, not a full on-page contact section.

---

## Phase 3 — Supporting Pages

- [ ] Services — not built as a standalone page; equivalent content currently lives in the homepage's "offer" section (`#services`). **Open IA decision:** keep as a homepage section only, or split into a standalone `/services` page.
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
