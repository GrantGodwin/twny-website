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
| **Current Work Item** | Item 4 — "Helping businesses like yours" (evolved from "Social proof") — **built, awaiting review** |
| **Repository Status** | Hero (Item 1), "What we look after" (Item 2), and "Why TWNY" (Item 3) are all reviewed and complete. Item 4 has been **built and is awaiting review** (see below). "How we work" and "The offer" were removed as standalone homepage sections during Why TWNY's development (`offerCards` data preserved in `src/data/offer.ts` for later). Items 5–7 of Phase 2 are not started. |
| **Awaiting Human Direction** | **Review of Item 4** ("Helping businesses like yours") before it is marked complete. Also open: the dead `/#services` anchor (header nav "Services" link and "What we look after"'s CTA both point to it) and the broader Services IA decision, the Phase 3 Privacy page scope (undefined), and pricing figure sign-off (currently draft per `PricingFlag.astro`). A handful of minor Why TWNY polish items were moved to the Product Backlog — see below. |
| **Recommended Next Action** | Review the newly built Item 4 section on the homepage; once approved, mark it complete and move to Item 5 (Pricing summary). |

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
- [x] **3. Why TWNY** — the homepage's emotional centre: a philosophy demonstration (technology is complicated; TWNY carries that complexity so the client doesn't have to), not a values/methodology/about-us/principles section. Positioned directly after "What we look after" with nothing between them, on the `bg-band` lifted-Ink surface, left-aligned to match the Hero and "What we look after" (`#why-twny`). Two-tier headline ("Simple for you." dominant / "Never simple behind the scenes." quieter); one inline rotating sentence ("You shouldn't need to understand [term]") reading as part of the same sentence, the term in bold italic Ember, scrolling top-to-bottom as a single-line reel with no blur or dimming and no carousel chrome; supporting copy rewritten to acknowledge complexity rather than describe change; three rewritten philosophy statements ("The jargon stops with us." / "We own the problem." / "We notice before you do.") beneath a fade-edged divider matching "What we look after"'s divider language; a quiet text-link CTA. No cards, icons, diagrams, photography, or process steps; no background texture (none added — no on-brief asset exists, and a generic texture risked the art direction's circuit-board/circuitry ban). Reviewed and approved across multiple editorial-polish passes (layout, reel mechanics, copy, divider). Remaining minor polish moved to Product Backlog.
- [ ] **4. Helping businesses like yours** *(evolved from "Social proof")* — **built, awaiting review.** Reframed away from a traditional social-proof section (no logo wall, testimonial slider, review stars, or quote carousel) into an editorial **business snapshots** spread that answers "what does working with TWNY look like for a business like mine?" — recognition first, evidence second. Each snapshot is small and observational: a business type (the strongest anchor, `font-display`), the few things we quietly look after (JetBrains Mono operational labels), and one plain-English outcome (`font-body`). A genuine one-line testimonial sits quietly beneath a snapshot *only where one really exists* (Construction, Financial Advice); snapshots without one (Speech Pathology, Conveyancing) read completely without it, and the layout works either way. Content lives in `snapshots` in `src/data/offer.ts` and grows as real testimonials become available — none fabricated. Positioned after "Why TWNY" and before Pricing on `bg-sand` (recessed between the two lifted surfaces), left-aligned to match the rest of the homepage, fade-edged hairlines between snapshots reusing the established divider language, scroll-reveal only (no carousel, no rotating reel, no photography/icons/cards). Heading chosen from several options: "Helping businesses like yours." (`#businesses-like-yours`).
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
- [ ] Why TWNY — reel spacing — the rotating-term reel's spacing and vertical alignment went through several fine-tuning passes (alignment nudges, clipping window size, horizontal gap to "understand"); revisit if it still reads as slightly off in other browsers or at viewport widths not checked during this round.
- [ ] Why TWNY — rotating term list review — revisit the eight example terms (DNS records, SPF & DMARC, SharePoint permissions, Conditional Access, Microsoft 365 licensing, Backup retention, SSL certificates, Copilot licensing) in `src/data/offer.ts` periodically for relevance and currency as the underlying technology and licensing landscape changes.
- [ ] Why TWNY — eyebrow review — confirm "WHY TWNY" is still the right small label for this section now that its purpose has shifted from differentiation/principles to philosophy and emotional centre; consider whether a different eyebrow would set up the dominant statement better.
- [ ] Why TWNY — CTA destination — "See how we make it simple" currently links to `/productivity`, chosen as a reasonable placeholder during implementation; never explicitly confirmed as the intended destination.
