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
| **Current Work Item** | Item 3 — "How we work" section |
| **Repository Status** | Hero (Item 1) and "What we look after" (Item 2) are reviewed and complete. Item 3's `#how-we-work` section was rebuilt as a quiet editorial section (eyebrow, H2, two-line intro, three principle statements: continuity, agreed pricing, early problem surfacing) — no steps, numbering, diagram, icons, cards, or photography. `npm run build` passes. **A design checkpoint has since raised an information-architecture question that supersedes a straightforward content review** — see "Proposed Structural Change" below. Items 4–8 of Phase 2 remain rough/partial and unreviewed. |
| **Awaiting Human Direction** | Approval (or rejection) of the proposed structural change: merging Item 3 ("How we work") into Item 4 ("Why TWNY") rather than reviewing Item 3 as a standalone section. Also open: the Phase 3 Services IA decision (standalone page vs. homepage section), the Phase 3 Privacy page scope (undefined), and pricing figure sign-off (currently draft per `PricingFlag.astro`). |
| **Recommended Next Action** | Hold the IA discussion on the proposed Item 3 / Item 4 merge below. Do not implement any further changes to Item 3 or begin Item 4 until this structural question is resolved. |

Work proceeds one roadmap item at a time:

```
Roadmap → Design discussion → Implementation → Review → Mark complete → Next roadmap item
```

Do not start the next unchecked item until the current one has been reviewed and approved.

---

## Proposed Structural Change (pending approval — not yet decided)

**Raised at a design checkpoint following the Item 3 rebuild.** Reviewing the rebuilt "How we
work" section against the planned "Why TWNY" section surfaced an information-architecture
problem, not an execution problem: the two sections do the same rhetorical job — giving the
reader reasons to trust the engagement — using the same format (a short list of plain
declarative statements). Two of "How we work"'s three principles ("No invoice you didn't see
coming," "Problems surface early") substantially restate existing Why TWNY principles
("Clarity you can see," "Boundaries protect quality"). Only one idea — continuity of contact,
"You're not starting over" — has no equivalent in Why TWNY today.

**Recommendation:** merge "How we work" into "Why TWNY" rather than keeping it as a standalone
section, removing it outright, or just renaming it. Carry the continuity-of-contact idea
forward into Why TWNY's content (it has no current equivalent and is a strong fit for the
brief's "one accountable operator" positioning); the two overlapping principles should not be
duplicated. The exact resulting principle set is a content decision for whenever Item 4 is
actually designed, not decided here.

**Effect on Phase 2 build order, if approved** (7 sections instead of 8):

1. Hero
2. What we look after
3. **Why TWNY** — expanded scope: differentiation *and* relational confidence (absorbs the
   intent of the current Item 3).
4. Social proof
5. Pricing summary
6. FAQ
7. Contact

**This has not been approved.** The Phase 2 checklist below is left as-is — pending the
outcome of this discussion, "3. How we work" remains listed as its own item and nothing has
been renumbered, merged, or marked complete. If approved, this section will be updated to
retire Item 3 and fold its surviving content into Item 4's notes, and the dashboard above will
be updated to reflect the new Current Work Item.

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
- [ ] **3. How we work** — reduce uncertainty about the relationship, not explain a delivery process (`#how-we-work`).
  - Rebuilt per the approved "What Stays True" concept: eyebrow, H2 ("What stays the same."), two-line intro, and three editorial principles (continuity, agreed pricing, early problem surfacing) — no steps, numbering, diagram, icons, cards, or photography.
  - ⚠ **Pending IA decision** — see ["Proposed Structural Change"](#proposed-structural-change-pending-approval--not-yet-decided) above. Recommendation is to merge this item into Item 4 rather than review it standalone. Not yet decided; item left open here.
- [ ] **4. Why TWNY** — differentiation principles. Currently merged into a single split section with the pricing teaser, not a standalone section.
  - ⚠ **Pending IA decision** — under review for expanded scope to also absorb Item 3's surviving content (continuity of contact). Not yet decided.
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
- [ ] Bespoke TWNY icon library — "What we look after" currently uses placeholder line icons (`CapabilityIcon.astro`: envelope, browser window, padlock, loop-arrows); commission/design a proper icon set once the brand's icon language is defined.
- [ ] Final editorial copy review — a full top-to-bottom copy pass across the homepage once every section is built, to check voice, rhythm and consistency holistically rather than section-by-section.
