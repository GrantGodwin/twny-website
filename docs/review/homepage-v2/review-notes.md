# Homepage V2 — Review Notes

**Date:** 2026-06-18
**Scope:** Homepage re-art-direction + conversion to **dark-only** for this phase.
**Status:** Built and screenshotted with flagged placeholder imagery. Not final art.

---

## What changed

### Dark-only conversion (this round)
- The public site now renders **dark-only**. `.dark` is set statically on `<html>`
  in [BaseLayout.astro](../../../src/layouts/BaseLayout.astro); `color-scheme` is
  `dark` in [global.css](../../../src/styles/global.css).
- **Public theme toggle removed.** `ThemeToggle.astro` deleted and removed from the
  shared [SiteHeader.astro](../../../src/components/chrome/SiteHeader.astro). No UI
  affordance suggests theme switching anywhere (homepage or any other page).
- The pre-paint inline script no longer reads/writes a theme preference; it only
  arms reveal animations. No `twny-theme` localStorage usage remains.
- **Colour-token system kept intact.** Both light and dark palettes still exist in
  `global.css`; only dark is shipped. A future decision can reintroduce light
  without rebuilding the system.
- **Creative Direction updated:** §9 previously said "light and dark are both
  first-class." It now states the site is **dark-first / dark-only for this phase**,
  explicitly noting this is a design choice, not an accessibility shortcut, and that
  AA contrast must be maintained.

### Homepage V2 art direction (carried from the prior round)
- **Immersive hero** — near-full-height (`88svh`) full-bleed image, floating
  transparent header, oversized headline, one Ember CTA, one quiet link.
- **Header behaviour** — floats over the hero with a subtle top scrim, resolves to
  the solid sand bar after 24px scroll (`.is-scrolled`). Other pages keep the solid
  bar (opt-in via `heroHeader`/`overHero`).
- **Editorial rhythm** — asymmetric surface→need spread, full-bleed atmosphere band,
  the operating loop as a numbered editorial sequence (not an icon strip), the offer
  as one-tenancy spread, principles as a **dark cinematic image band**, and a calm
  conversation-led close. Pricing-posture section removed.
- **Depth/motion** — scrims for contrast; restrained reveal-on-scroll, armed
  pre-paint, fully disabled under `prefers-reduced-motion` and without JS.
- **Ember discipline** held: Ember is used only for primary CTAs.

### Files touched this round
- `src/layouts/BaseLayout.astro` — static `.dark`, theme script removed.
- `src/components/chrome/SiteHeader.astro` — toggle removed.
- `src/components/chrome/ThemeToggle.astro` — **deleted.**
- `src/styles/global.css` — `color-scheme: dark`, dead `#theme-toggle` rules
  removed, header top scrim added.
- `docs/governance/creative-direction.md` — §9 light/dark line revised.

---

## Do any light/dark assumptions remain?

**No light-mode assumptions remain in the rendered public UI.**

- No theme toggle, no `prefers-color-scheme` branching driving the live UI, no
  persisted theme preference.
- The homepage's bespoke sections use light type on dark surfaces / scrimmed
  imagery throughout; nothing assumes a light background.
- **Intentionally retained (does not affect the public UI):** the light-palette
  CSS variables under `:root` and the `@custom-variant dark` mapping. These are the
  technically-useful token definitions the brief allowed us to keep; they are inert
  while `.dark` is forced. Removing them is the only step left to make the codebase
  *light-incapable*, and it was deliberately not taken so a future light decision
  stays cheap.
- Other pages (Productivity, Pricing, Contact) inherit the same dark-only shell and
  no longer expose a toggle. They were otherwise not redesigned (out of scope).

---

## Screenshots captured

All in `docs/review/homepage-v2/`, rendered dark-only (no light-mode captures), at
the deterministic resting state (reveal animations forced visible):

| File | What it shows | Viewport |
| --- | --- | --- |
| `home-desktop.png` | Home, first screen | 1440×900 |
| `hero-first-viewport.png` | Hero opening view | 1440×900 |
| `header-after-scroll.png` | Header resolved to solid bar after scroll | 1440×900 @ y=1300 |
| `home-full-page.png` | Entire homepage, top to footer | 1440 wide, full height |
| `home-mobile.png` | Home, first screen | 390×844 |

Captured via headless Chrome over the DevTools Protocol against `npm run preview`.

---

## Accessibility concerns

Dark-only is **not** treated as an a11y excuse. Findings:

### Passing (verified by contrast calculation on the dark palette)
- **Body text** — Steel `#97a2ac` on Sand `#0e1216` ≈ **7.2:1**; on Paper
  `#161b21` ≈ **6.7:1**. Passes AA (and AAA for normal text).
- **Headings** — Ink `#e7ebee` on dark surfaces ≈ **13–14:1**. Passes.
- **Eyebrows** — Mineral `#3aa6c9` on Sand ≈ **6.7:1**. Passes AA.
- **Text over imagery** — hero/band/principles all carry heavy scrims; white and
  white/80 read well above AA over the scrimmed regions.
- **Floating nav** — a top scrim was added so nav links clear AA over any hero
  region (the lighter upper-right of the hero was the risk; now mitigated).
- **Motion** — `prefers-reduced-motion` fully disables reveal + header transitions;
  content is shown immediately without JS. Skip link and `:focus-visible` intact.

### Needs a decision — **Ember CTA contrast** ⚠️
- White text on the dark-mode Ember fill `#e0703f` is ≈ **3.2:1**. The button label
  is normal-weight ~16px, so this **fails WCAG AA (needs 4.5:1)** for normal text.
- This is a **pre-existing brand-token choice**, not introduced by V2, but it now
  matters because Ember is the only CTA colour and appears on every page — so the
  fix touches the shared [Button.astro](../../../src/components/ui/Button.astro) /
  token, beyond the homepage scope.
- **Recommended fix (your call):** darken the Ember *fill used behind white text*
  to ~`#c2521f` or darker (≈4.5:1 with white), while keeping a lighter Ember for
  non-text accents if desired. Alternatively, use a darker text colour on Ember.
  I did not change the brand token unilaterally — flagging for sign-off.

### Other notes
- Placeholder imagery is clearly flagged in-frame and is **not final**; real
  environmental photography must preserve the scrim contrast relationships above.
- The dark Principles band forces dark regardless of palette (intended cinematic
  beat). It is consistent with dark-only and needs no change.
