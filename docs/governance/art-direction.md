# TWNY — Art Direction (Fixed Visual Rules)

**Status:** Governing visual reference. Fixed brand and design rules only — no visual
exploration. Read [`implementation-brief.md`](./implementation-brief.md) first; this file
expands the *visual specifics* behind it. Creative direction for each build comes from the
user's prompt.

## The look in one line

TWNY looks like **the calm operating layer that makes a modern small business's technology
feel simple** — premium, editorial, restrained, and unmistakably a technology practice.
Modern (the work is Microsoft 365, AI, web, domains, backup), Operator (quietly accountable),
Editorial (composed, type-led, generous).

## Theme & surfaces (locked)

- One continuous **Ink-first** (dark) environment. **No white or Paper sections** unless a
  prompt explicitly requests one. No light theme, no theme toggle.
- Separation and pacing come from **lifted dark surfaces** — a panel a few steps lighter than
  its neighbour — not from changing the theme. It should feel like rooms in one building.
- Contrast comes from tonal shifts within the dark family, type scale, photograph-versus-
  surface, and whitespace — never from a white page.
- Hold **WCAG 2.1 AA** throughout, including text over photography.

## Colour roles (fixed)

Exact hex values live in [`src/styles/global.css`](../../src/styles/global.css) (the source
of truth). Roles:

- **Ink** — core dark background and primary text (`--sand` / `--ink`). Authority.
- **Lifted Ink / Steel-Ink** — section contrast and raised dark surfaces (`--paper`,
  `--band`). Separation within the one environment.
- **Steel** — secondary text, labels, metadata, hairlines, subtle structure (`--steel`,
  `--line`).
- **Mineral** — the technology current (`--mineral`): links, emphasis, motion, connective
  lines. How the operating layer reads as *connected*. Never a loud tech glow.
- **Ember** — warmth, selective emphasis, and decision moments (`--ember`); the primary CTA
  is usually Ember. **Use sparingly** — restraint is the rule, not "CTA only". Keep it
  accessible against its surface.

Warmth comes from photographic light, real materials, and spacing — never an orange/beige UI.
Do not invent new brand hues.

> Surface token names `--sand` and `--paper` are **dark** Ink surfaces (legacy names). None
> are light.

## Typography (fixed)

- **Space Grotesk** display · **Inter** body · **JetBrains Mono** small labels. No new fonts.
- Large editorial display carrying plain, declarative sentences — a real idea set large, not
  a tagline. Restrained, specific body; comfortable measure; generous leading. Small Steel
  mono labels (uppercase, tracked) for operational context.
- Strong hierarchy and whitespace do the work before any decoration. One `<h1>` per page.
- Avoid: all-caps as personality (small labels excepted), tiny precious copy, oversized
  abstract slogans, dense paragraph blocks, negative tracking, viewport-scaled font tricks,
  generic SaaS headline rhythm.

## Photography (fixed)

One thing only: **beautifully photographed Australian small businesses at work.** Not
technology, architecture, interiors, lifestyle, or stock-business-people photography.

- The business is always the subject — real or believable, natural light, lived-in detail.
- Technology lives naturally inside the scene as **quiet evidence** — a laptop mid-task, a
  website on a screen, job sheets, a booking on a phone. Present, never staged, never the
  point.
- The image supports the story; it never becomes the story. If a photo only says "beautiful
  room," reject it. If it could sit on a competitor's site, reject it.
- Authored, not stock; calm restrained grade of a piece with the Ink tones. Truth over polish
  — no fabricated clients or staged offices passed off as ours. Fewer, stronger images.
- **No reuse of external reference assets** as production material.

## Technology as quiet evidence

Show technology as **evidence of care**, not decoration or spectacle — cropped, calm,
outcome-led: a clean Microsoft 365 surface, a domain/renewal/ownership line, a backup restore
point, a website preview in context, an automation step, a practical AI assist. **Never**
futuristic spectacle, stock dashboards, fake metrics, app-icon clouds, code walls, or cyber
shields.

## The signature device

When a build calls for the brand's signature visual device, it must express **the connected
operating layer behind a business** — the mailbox, website, domain, backup, and everyday work
as separate things *held and looked after as one* — in one calm composition that holds as a
**still image**.

It must **not** be a fake dashboard, a grid of service cards, a row of chips, or an
Atlas-style diagram / flowchart / process stepper. Those are the exact failure modes it
exists to replace.

## Motion & interaction

- Motion reveals relationships and polishes state transitions — easing that feels expensive.
  The still composition must already be premium with motion off.
- Interaction is quiet confirmation: subtle hover, clear visible focus, fast transitions, no
  layout shift, touch-friendly, accessible. Honour `prefers-reduced-motion`.
- Avoid bounce, looping attention-grabs, parallax drama, and future-tech spectacle. Motion
  never carries quality.

## Navigation

- Wordmark-only identity (`twny`), plain service labels, visible Pricing, visible Contact,
  one clear primary action. The header may sit over an immersive hero and resolve to a solid,
  legible state on scroll — never at the cost of contrast.
- Never vague "Work/Studio" agency labels; never hide the category.

## Hard "never"s

Ink-first broken with white sections (unless asked) · Atlas/internal-dashboard surface in
public · lifestyle/interiors mood with no category · photography overpowering the message ·
generic MSP/SaaS/AI-agency visuals (card grids, chip rows, AI orbs, server racks, logo walls)
· Ember sprayed everywhere · fabricated proof · motion the page depends on · hidden pricing or
a hidden operator.
