# Homepage Reference — Analysis Before Implementation

**Status:** Analysis. Written before touching `src/`.
**Two sources of truth:** the [governance docs](../../governance/) are **authoritative**; the
attached homepage screenshot is a **reference only** — a successful capture of an emotional
direction, not a design to copy. Where they conflict, governance wins. Where governance is
silent, the reference guides.

The objective is **not to recreate the screenshot.** It is to recreate the *feeling* of the
screenshot in the governed TWNY design language, so the result reads as an unmistakable
evolution of the reference — and unmistakably TWNY.

> **Brand language updated since this analysis.** The canonical brand statement is now
> locked as **"Simplifying the technology behind your business."** (used off-page only), the
> homepage H1 is **page-specific and must not be the brand statement**, and "Technology,
> simplified." is retired as a public line. Wherever this analysis says the hero should
> *lead with the brand promise*, read instead: the H1 is a page-specific, category-clear
> sentence, and the brand philosophy (simplicity as the outcome) is *demonstrated* by the
> page. See [Brand language](../../governance/creative-direction.md#brand-language).

---

## 1. Why the reference succeeds

Stripped of its colours, type, and imagery, the reference works because of its **structure
and emotional choreography**, not its surface. The transferable strengths:

- **Confident pacing.** Seven clear movements, each with one job, each given room. Nothing
  competes; you always know where you are. The page never feels busy despite carrying a lot.
- **Strong hierarchy.** One dominant element per section — an oversized hero sentence, a
  single big section statement on the left, then supporting detail on the right. The eye is
  led, never asked to choose.
- **Asymmetric editorial composition.** Left-weighted statements paired with right-side
  detail or imagery; a consistent two-column logic (idea ↔ evidence) that reads as authored,
  not templated.
- **Deliberate density rhythm.** It *alternates* breathing room and information: airy hero →
  scannable "what you get" → a denser method strip → structured offer → compact "why we're
  different" → airy close. The contrast in density is what creates premium calm.
- **Section transitions that feel intentional.** The diagonal cut from hero into the next
  band, and the move between lighter and darker zones, signal "new chapter" without a hard
  rule. Tonal shift carries the reader.
- **Emotional progression that mirrors the buyer.** Reassurance ("so *you* can run the
  business") → recognition ("you're buying the problem going away") → method (it's
  repeatable) → coherence (one managed operation) → trust (boundaries, ownership, open
  pricing) → low-pressure invitation. Feeling is sequenced, not dumped.
- **Visual confidence through restraint.** Big type, generous margins, one accent, one
  decision colour. It looks expensive because it isn't trying hard.
- **Premium *technology* feel.** The operating-loop strip and the operational caption
  ("Clarity is the premium") make it read as a *technology practice* — competence you can
  see — without server-room clichés.

These ten qualities are exactly what the brief asks me to extract. They are all
**structural and emotional**, and all fully reproducible in the TWNY system.

## 2. Where it violates the TWNY design system

The reference's *surface* breaks governance in specific, fixable ways:

| # | Reference does | Governance says | Verdict |
|---|---|---|---|
| 1 | **White / Paper mid-sections** ("What you actually get", "The offer") | *One continuous Ink-first environment; no white or Paper sections* (Art Direction §Theme & Surfaces) | **Replace** — re-ground in Ink, separate with lifted-Ink surfaces |
| 2 | **Light/dark theme toggle** (sun/moon, top right) | *No public theme toggle* (CD §9) | **Remove** |
| 3 | **Lighthouse / landscape hero image** | Photography must be *beautifully photographed businesses at work; the business is the subject* — not landscape/atmosphere-for-its-own-sake | **Replace** with a business-at-work image + quiet operational evidence |
| 4 | **Icon strip** beside "What you actually get" (mail/cloud/globe glyphs) | *No clip-art and icon collages; no icon strip* (CD §9, Art Direction) | **Replace** with type + hairline rhythm, no icons |
| 5 | **Equal three-column cards** ("The offer") and **2× card grid** ("Why we're different") | *No equal-card service grids as the primary composition; a page made of cards feels templated* | **Replace** with the signature connective composition + editorial rows |
| 6 | **Operating-loop stepper (01–06) as a prominent labelled sequence** | *Atlas informs the truth, never the surface; the loop belongs after the promise, not as identity, and never as a diagram/icon strip* | **Keep the idea, demote and de-diagram it** — a calm method moment under "accountability", not a hero feature |
| 7 | **Old positioning copy** ("We run the cloud and the website…") and **meta-copy** ("Clarity is the premium / legibility is the product") | Brand philosophy is now simplification; copy must speak to the customer, not narrate our own strategy | **Rewrite** to a category-clear, customer-subject voice |
| 8 | **Mineral used as a generic accent** (and a fairly even blue tone throughout) | Mineral is *the technology current* — connection, links, emphasis; Ember is the *only* decision colour | **Re-rule** — Mineral earns its place on connective/interactive moments; Ember only on CTAs |

None of these touch the strengths in §1. Every violation is a *surface* swap.

## 3. How I will preserve the strengths while replacing the visual language

**Principle:** keep the skeleton and the emotional score; replace every pixel of the surface
with governed TWNY language.

### Surface & colour — Ink-first ladder
Replace the light/dark alternation with a **continuous Ink-first environment**, paced by a
small ladder of lifted-Ink surfaces:

- `canvas` (darkest Ink) → `raised` (a step lighter) → `panel` (lifted, for evidence
  surfaces) → hairlines in Steel.
- Density rhythm (§1) is now carried by **tonal shifts within Ink** + type scale +
  whitespace, exactly as governance prescribes — not by switching to white.
- Remove the theme toggle; lock `.dark` as the only theme.

### Hero — same confidence, new philosophy & image
- Keep the **oversized left-weighted statement + right atmosphere** composition and the
  transparent-header-over-hero move.
- Replace the headline with a **page-specific, category-clear H1** — a confident sentence
  naming what TWNY does (e.g. *We look after the technology your business runs on.*) — set
  large, immediately supported by a category-naming line (Microsoft 365, websites, domain,
  backup, automation, one accountable operator) and one quiet **operational evidence** cue,
  so category is legible in seconds. The canonical brand statement is *not* the H1; the
  brand philosophy (simplicity) is demonstrated by the page, not asserted in the hero.
- Replace the lighthouse with a **business-at-work** image and a restrained Ink scrim; one
  Mineral connective accent, one Ember CTA + a Mineral "See pricing".

### "What you get" — same scannability, no icons
- Keep the **left statement ↔ right list** rhythm and the surface→need truths (real content
  from `offer.ts`).
- Replace the icon strip with **type + hairline rows** and small Steel labels — scannable,
  editorial, no glyphs.

### The signature component — *The Operating Layer* (the keystone)
This is the element governance requires to be **discovered before pages are built**, and it
is how the page *shows* the brand philosophy — simplicity as the outcome. It replaces both
the card "offer" grid and the loop-stepper as the page's distinctive moment.

- **Idea:** the separate systems a business depends on — Microsoft 365, website, domain,
  backup, automation — drawn as quiet, real operational lines **bound together by a single
  continuous Mineral thread**, expressing *separate things, held and looked after as one.*
- **Form:** an editorial composition (asymmetric, type-led, generous space), **not** a
  dashboard, card grid, chip row, or flowchart. One Mineral spine; a few honest evidence
  entries hanging off it; a large statement alongside. It must hold as a **still image**.
- **Why it's TWNY:** it is the visual sentence "one connected operation, one accountable
  operator" — the coherence that *is* the product. Defined in
  [`signature-component.md`](./signature-component.md) and built as `OperatingLayer.astro`.

### Method, trust & pricing — same proof, de-Atlas'd
- Demote the 01–06 loop to a **calm method line** inside the *accountability* movement
  (repeatable, honest), not a hero diagram.
- Keep "why we're different" and **open pricing** as the trust beats (real `offer.ts`
  principles), rendered as editorial rows on a raised Ink surface — pricing as a *trust*
  signal, late, never a discount anchor.

### Close — same low-pressure invitation
- Keep the wide, calm CTA band and conversational line; one Ember CTA ("Tell us what you
  need"), surrounded by space. No funnel.

**Net effect:** the section order, the density rhythm, the asymmetric idea↔evidence logic,
and the reassurance→trust→invitation emotional arc are all preserved — so the result reads
as a clear evolution of the reference — while the theme, imagery, icons, cards, copy, and
accent discipline are entirely replaced by the governed TWNY language.
