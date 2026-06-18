# Homepage V2 — Review Notes

**Date:** 2026-06-18
**Status:** Rebuilt from scratch. Dark-only. Real photography. Built, **not committed.**

---

## The creative concept — "Everything in its place"

A **dark, cinematic, gallery-like** homepage that sells the *feeling* of a calm,
well-run business before it explains anything. Large, warm photographs of real
considered spaces and craft hang on a near-black ground; oversized type and vast
quiet space do the rest. The experience is meant to feel like stepping into a
beautifully lit, quiet room — so the visitor thinks *"I want my business to feel
like this,"* then, only after that feeling lands, learns what we do.

**Sequence (feeling → thesis → evidence → invitation):**
1. **Hero** — full-bleed café at dusk, near-invisible floating nav, one line:
   *"Everything in its place."* + *Start a conversation* / *Step inside ↓*.
2. **Manifesto** — type only, two-tone, huge margins: the emotional thesis.
3. **Divider** — one full-bleed image, one line: *"This is the feeling we protect."*
4. **Three chapters** — alternating image/text spreads, outcomes not mechanics:
   *The everyday* / *The presence* / *The person*.
5. **Close** — light arriving in a quiet room: *"Let's make your business feel
   handled."* + *Start a conversation*.

## Why it no longer resembles Atlas / an MSP / a SaaS page
- **No grids, no cards, no tables, no icon strips, no "loop".** The page is
  composed as magazine spreads, not an information architecture.
- **Photography leads; type follows.** Emotion arrives before comprehension.
- **Copy persuades instead of explaining.** No "managed tenancy", "operating
  loop", "honest edges", "what you actually get". Short, confident, human.
- **Navigation is almost invisible**, borderless, floating — resolves to a clean
  blurred dark surface on scroll (no separator line).
- **Outcomes, not machinery** — "a day that doesn't fight you", not "Microsoft 365
  operations".

## Files
- New: `src/components/home/{Photo,Hero,Manifesto,Divider,Chapter,Close}.astro`,
  `src/pages/index.astro` (rewritten from blank), `public/images/*.webp`.
- Removed: all V1 homepage blocks + SVG placeholders + `PlaceholderImage`.
- Touched (shared, minimal): `SiteHeader.astro` (CTA label + borderless float),
  `global.css` (header behaviour, removed placeholder flag). Other pages untouched.

---

## Photography (real, royalty-free — Pexels License)

All optimised to WebP into `public/images/`. Pexels License: free for commercial
use, no attribution required (recorded here as good practice). **Note:** these are
strong stand-ins chosen to the Creative Direction; swap for genuine TWNY/AU client
photography when available.

| File | Source | Subject |
| --- | --- | --- |
| `hero.webp` | pexels.com/photo/11439366 | Deep-toned café interior, evening light |
| `chapter-calm.webp` | pexels.com/photo/18622213 | Warm light through timber blinds |
| `chapter-presence.webp` | pexels.com/photo/17731822 | Characterful independent café |
| `chapter-craft.webp` | pexels.com/photo/3853199 | Maker at a sunlit bench |
| `close.webp` | pexels.com/photo/20180326 | Daylight reaching a quiet corner |
| `divider.webp` | pexels.com/photo/37323048 | Light and shadow on a plain wall |

---

## Screenshots (dark-only, this build)
`home-desktop.png`, `hero-first-viewport.png`, `header-after-scroll.png`,
`home-full-page.png`, `home-mobile.png` — all in this folder.

## Accessibility
- Body Steel ≈7:1, Ink headings ≈13:1 on the dark ground — pass AA.
- All photo text carries scrims; floating nav has a faint top veil for legibility.
- Reduced-motion fully disables reveals; content shows immediately without JS.
- **Open item (unchanged):** white-on-Ember CTA ≈3.2:1 fails AA for normal text.
  Pre-existing shared `Button` token; recommend darkening the Ember fill behind
  white text (~`#c2521f`). Flagged for sign-off, not changed unilaterally.
