# Visual Reference Notes

**Project:** TWNY public website refresh · **Date:** 2026-06-17
**Purpose:** Translate what was observed across the current TWNY site and competitors into a visual direction for the new public site, reconciled against the TWNY brand system already defined in the Atlas repo (`docs/brand-system.md`, `twny-system/`). Covers research topic 20 (visual direction) and 11 (avoiding generic).

> Legend: **[FACT/ARTIFACT]** observed in a screenshot · **[INTERPRETATION]** · **[RECOMMENDATION]**.

---

## A. Current TWNY site — visual observations

**[ARTIFACT]** `twny-homepage-current.png`, `twny-service-productivity-current.png`, `twny-service-hosting-current.png`, `twny-about-current.png`, `twny-contact-current.png`.

**[FACT]**
- **Palette:** dark **teal** hero with a faint circuit/tech background image; teal + grey + white body; mid-saturation accent colours on icons. Not the TWNY brand palette (Ink/Steel/Mineral/Ember).
- **Identity:** a **circular "twny" logo badge / monogram** in the masthead — a logo *device*.
- **Imagery:** flat **clipart-style illustrations** (cartoon people, browser window, shield, cloud) for "WHAT WE DO"; a generic **stock illustration** of office people in "WHY CHOOSE US?".
- **Layout:** centred marketing-hero → four-column icon grid → "why choose us" band → partner-logo strip. Conventional WordPress-template structure (the hosting page references the **DIVI** builder).
- **Type:** generic sans, all-caps section headers ("WHAT WE DO," "WHY CHOOSE US?"), no distinctive type system.
- **Pricing pages:** commodity price cards (specs/ticks), upsell line-items.

**[INTERPRETATION]** The current visual language is **indistinguishable from a thousand template MSP/hosting sites**. It reads *budget* and *generic*, and it directly violates the new brand rules in three concrete ways: (1) a monogram/badge identity where the brand mandates wordmark-only; (2) decorative clipart/stock where the brand mandates structure-from-operational-flow and bans decorative illustration; (3) a teal template palette instead of the six-colour system.

---

## B. Competitor visual patterns

**[ARTIFACT/FACT]**
- **Atarix** (`competitor-atarix-m365.png`): **purple-gradient** hero, real stock photography of people, app-icon collage, large friendly type, blog strip. Polished but firmly in the "warm SaaS" template family.
- **Source Digital** (`competitor-sourcedigital-ai-pricing.png`) & **Complete AI** (`competitor-completeai-homepage.png`): near-identical **dark-navy SaaS** template — three price cards, gradient CTA bands, FAQ accordion, testimonial row. Commercially clear, visually interchangeable.
- **VentraIP** (`competitor-ventraip-m365-pricing.png`): **purple gradient + confetti** graphics, pricing cards, exhaustive tick-grid comparison table. Pure commodity look.

**[INTERPRETATION]** The category collapses into **three template families**: teal/clipart (budget MSP), purple-gradient + stock photos (boutique consultant), and dark-navy SaaS (AI consultant). All three are immediately recognisable as templates. A restrained, document-grade, operational aesthetic would stand out sharply against every one of them.

---

## C. Anti-patterns to avoid (synthesised)

**[RECOMMENDATION]** Do not use:
- Gradient heroes (teal, purple, or navy) — the entire field uses them.
- Stock photos of smiling people at laptops; cartoon/clipart icon sets; app-logo collages; confetti/orb/“AI node” decoration.
- A monogram, badge, or favicon-style logo device.
- Equal-card "feature grid" dashboards as the default layout.
- All-caps generic section headers as the type personality.
- Shadows, glassmorphism, glow, neon — all banned by the brand system and all common in the sample.

---

## D. Recommended visual direction (reconciled with the brand system)

**[FACT — from the brand system]** TWNY brand mandates: wordmark-only identity (`twny`, Space Grotesk italic); six colours, three jobs — **Ink** (anchor/text), **Steel** (structure/bands/framing), **Mineral `#1379A0`** (movement/links/navigation), **Sand** (canvas), **Paper** (content surface), **Ember `#D05E2E`** (decision/CTA); three type families (Space Grotesk display, Inter body, JetBrains Mono labels); composition built from the **operational loop**, not ornament; "calm, modern, restrained, quietly premium, web-native"; explicitly *not* "startup-loud, AI-spectacle, decorative, hype-driven."

**[RECOMMENDATION] — public-site visual direction:**
1. **Wordmark-only masthead.** Retire the circular badge. `twny` lowercase, single line, restrained scale.
2. **Document-grade calm, not marketing-loud.** Crisp Paper content surfaces on cool Sand canvas; Steel structural bands give architecture; generous but not theatrical spacing. This is the inverse of the gradient-hero norm and is the differentiator.
3. **Ember is the only decision colour.** Every primary CTA ("Book a call," "See pricing") and headline commercial outcome is Ember. Navigation, links, the loop, active states are Mineral. Never blur the two.
4. **The operational loop as the hero device** — Discover → Recommend → Quote → Deliver → Operate → Review, expressed as a structural strip/lane (the repo already has `WorkflowStrip`/`AccentRegion` concepts), *not* as decorative illustration. This replaces the stock-photo hero entirely.
5. **No photography / no clipart.** Visual interest comes from typographic hierarchy, Steel/Mineral/Ember region ownership, hairline rules, and honest tables — the same vocabulary as TWNY proposals and Atlas.
6. **Pricing as honest tables, not glossy cards.** Use the public comparison-matrix structure; Annual/Monthly toggle; ex-GST discipline. Premium = clarity, not decoration.
7. **Light and dark both first-class**, per the brand system; light mode crisp and structured (never beige), dark mode dark-native (no large light slabs).
8. **Restraint as the consistent signal.** No shadows/gradients/glow. Borders and tone carry structure. This *is* the premium cue in a field that over-decorates.

**[INTERPRETATION]** The strategic point: in a market where everyone signals "approachable tech" with the same gradients and stock people, TWNY signals **"a capable operator who runs your systems"** through restraint, structure, and specificity. The visual language and the commercial substance reinforce the same message — *clarity is the premium*.

**Reference renders available in-repo:** `screenshots/p17-*` and `app/brand/applied/` show the brand system applied to operational surfaces — useful as *tone* reference (not as literal website layouts, which must be designed for a reading audience, not an operator).
