# TWNY — Implementation Brief

**Status:** Governing. The single read-first file for Claude Code. Read this before
building anything on the TWNY public website.

**How Claude Code works now.** Claude Code is the **implementation arm**, not the creative
director. Creative direction for each build arrives in the **user's prompt**. This brief
holds only the stable brand, colour, typography, and implementation rules that should
survive between tasks. It tells you *what must be true*; it does not design the page for
you. When the current prompt gives a direction, follow it — this brief is the guardrail,
not a competing brief.

---

## 1. What TWNY is

TWNY is a **boutique Australian technology practice**. It runs the operating layer a modern
small business depends on — **Microsoft 365, websites, domains, backup, AI and automation** —
as **one connected operation**, looked after as a single whole with one source of truth and
clean ownership the customer can always take with them.

- **Audience:** one person — the owner/operator or office manager of an Australian small
  business (~1–25 seats). Non-technical but competent, time-poor, the decision-maker and
  budget-holder in one chair. Not a procurement committee, not an IT department.
- **What we sell:** the problem going away — technology handled, reliably, by someone
  accountable. Lead with the need, not the surface (a mailbox → *someone to call who already
  knows your setup*; backup → *recovery is the product, not storage*).
- **What TWNY is not** — and the site should quietly make clear: not a commodity reseller
  competing on licence cost; not "unlimited support"; not residential/break-fix/home-IT;
  not for large legacy on-prem estates. Turning the wrong visitor away is a feature.

## 2. What must never change

These are fixed across all build tasks unless a future prompt **explicitly** overrides them:

- **Brand is TWNY.** Lowercase wordmark `twny`. Identity is the wordmark only — no monogram,
  badge, circular device, or favicon mark. The wordmark never carries messaging.
- **Canonical brand statement (locked):** *Simplifying the technology behind your business.*
  Off-page / metadata only (footer, email signature, LinkedIn, proposal covers, title tags).
  **Never a homepage H1, never a slogan, never the largest type on a page.**
- **TWNY is a boutique technology practice** — premium, calm, capable, modern, human.
- **Ink-first / dark-first.** One continuous dark environment. **No white or Paper sections**
  unless a future prompt explicitly requests one. No light "relief" theme, no theme toggle.
- **Colour roles** (section 4) and **wordmark-only identity** are fixed.
- **No fabricated proof** — no invented testimonials, client names, certifications,
  experience figures, or fake metrics. Honesty is the brand.
- **Accessibility is non-negotiable** — WCAG 2.1 AA (section 7).
- **The page H1 is page-specific** — a confident, category-clear sentence that answers "what
  is this page about?" Never the brand statement, never a tagline.

## 3. Brand language hierarchy

Every public sentence has one job. Keep these layers distinct:

| Layer | The line | Where it lives |
| --- | --- | --- |
| **Wordmark** | `twny` | Masthead, footer, legal. Identity only. |
| **Canonical brand statement** | *Simplifying the technology behind your business.* | Off-page, metadata. Never an H1. |
| **Service descriptor** | *Microsoft 365, websites, domains, backup, AI and automation — looked after by one accountable operator.* | Supporting line under an H1, footer, metadata. |
| **Page H1** | Page-specific, category-clear | Top of each page. Owns its own sentence. |
| **Internal philosophy** *(never public)* | *Technology is the medium. Simplicity is the outcome. Competence is how.* | Governance only. The site *demonstrates* simplicity; it never prints this. |
| **Primary CTA** | *Tell us what you need.* | The standard low-pressure next step. |

**Copy rules:** plain English, one idea per sentence, the customer is the subject ("You own
your domain"). Specific true things beat claims. Gloss every technical term immediately
("the tenant — the account that holds your whole organisation"). Boundaries are content.
Use **"we"**, never "TWNY", in body copy. Let copy breathe.

**Banned words:** *solutions, leverage, empower, synergy, transformation, disruption,
ecosystem, fit for purpose, take the hassle out, unlock, seamless, cutting-edge,
world-class.* If a sentence needs one, the thought underneath isn't finished.

## 4. Colour rules

One continuous Ink-first environment. Warmth and contrast come from tone and light, never a
new hue. **Exact token values live in [`src/styles/global.css`](../../src/styles/global.css)
— that file is the source of truth for hexes; values below are for reference.**

| Role | Token | Current value | Use |
| --- | --- | --- | --- |
| **Ink** | `--sand` (base), text `--ink` | `#0a0d11` / `#e8ecef` | Core dark background and primary text. The ground the whole site sits on. |
| **Lifted Ink / Steel-Ink** | `--paper`, `--band` | `#0f151b`, `#161d26` | Section contrast and raised dark surfaces — separation *within* the one dark world. |
| **Steel** | `--steel`, `--line` | `#93a0ab`, `#283039` | Secondary text, metadata, small labels, hairlines, subtle structure. |
| **Mineral** | `--mineral` | `#3aa6c9` | Technology, links, emphasis, motion, connective elements — how the operating layer reads as *connected*. The technology current. |
| **Ember** | `--ember` | `#d8602f` | Warmth, selective emphasis, and decision moments (primary CTA included). **Use sparingly.** |

> **Note on the surface token names.** `--sand` and `--paper` are **dark** Ink surfaces
> despite their names (legacy names, repurposed). `--sand` is the darkest base; `--paper`
> and `--band` are progressively lifted. None of them are light/white.

**Ember guidance (practical, not absolute):** Ember is the warmest accent and the natural
colour for a decision moment, so the primary CTA is usually Ember. But Ember is **not**
CTA-only — it may carry selective warmth or emphasis where it genuinely earns it. The real
rule is **restraint**: if Ember is everywhere, it stops meaning anything. Keep it rare and
deliberate, and keep it accessible against its surface.

## 5. Typography rules

**Typography is the primary instrument. Photography supports typography, never the reverse.**

- Fonts (set in `global.css`): **Space Grotesk** display, **Inter** body, **JetBrains Mono**
  for small labels. Do not introduce new fonts.
- Large editorial display type carrying plain, declarative sentences — a real idea set large,
  never a tagline.
- Restrained, specific body copy; comfortable line length; generous leading.
- Small Steel mono labels (uppercase, tracked) for operational context.
- Strong hierarchy and generous whitespace do the heavy lifting before any decoration.
- One clear `<h1>` per page; honest heading order.
- **Avoid:** all-caps headers as personality (small labels excepted), tiny precious copy,
  oversized abstract slogans, dense paragraph blocks, negative tracking, viewport-scaled font
  tricks, generic SaaS headline rhythm.

## 6. Visual boundaries

The guardrails that keep TWNY from drifting into the generic average of the web:

- **Ink-first, locked** — no white/Paper sections unless a prompt explicitly asks; no theme
  toggle.
- **No Atlas / internal-dashboard surface** — no operating-loop diagrams, tenancy vocabulary,
  internal tables, fake dashboards, or system structure as the public identity. Atlas informs
  *truth*, never *surface*.
- **No lifestyle / interiors drift** — no coffee-shop-as-brand, empty rooms, or staged
  notebooks. The business at work is the subject, never the décor.
- **No generic MSP / SaaS / AI-agency visuals** — no SaaS hero gradient, equal-card feature
  grids or chip rows as the primary composition, stock "people at laptops," AI orbs/nodes,
  neon, clouds, server racks, circuit boards, headset support, app-logo collages, cyber
  shields, or partner-logo walls.
- **Photography supports the message** — beautifully photographed Australian small businesses
  at work, in natural light, with technology present only as quiet evidence (a laptop
  mid-task, a website on a screen). If a photo only says "beautiful room," reject it. Authored,
  not stock. No reuse of any external reference asset as production material.
- **No fabricated proof.** No fake clients, metrics, or credentials.
- **The signature device** (when a task calls for it) expresses *the connected operating
  layer behind a business* — separate systems held and looked after as one — and must hold as
  a still image. It must **not** be a fake dashboard, card grid, chip row, or Atlas-style
  diagram.

## 7. Build rules

- **`npm run build` must pass** before any change is considered done. Astro static build,
  four pages (`/`, `/productivity`, `/pricing`, `/contact`). The site is dark-only
  (`.dark` set statically on `<html>`).
- **Accessibility (AA, non-negotiable):** semantic structure and landmarks, one `<h1>` and
  correct heading order, a skip link, full keyboard operability with a visible focus state,
  AA text contrast over imagery and across all Ink surfaces (scrims exist for this), honoured
  `prefers-reduced-motion`. The site must be fully usable, and still feel premium, with motion
  off — motion never carries quality.
- **Pricing, if touched:** transparent, AUD, ex-GST, two recurring modes only (Annual
  Commitment — prepaid, two months free; Monthly Flex — no lock-in). Beautifully clear.
  Any unconfirmed figure is **visibly flagged draft**; never ship a number we won't hold;
  never show reseller numbers, margins, or cost bases.
- **Never invent content,** even as a placeholder. Flag drafts and unverified figures.
- **Touch only what the task needs.** When unsure, stop and ask, or re-read this brief —
  don't guess and ship.

## 8. Instruction priority

When sources conflict, follow this order (highest first):

1. **The user's current prompt** — the active creative direction for this task.
2. **`docs/governance/implementation-brief.md`** — this file. The stable contract.
3. **Remaining governance docs** — `docs/governance/art-direction.md` (fixed visual rules).
4. **Source code** — the live implementation (`src/`, especially `global.css` for tokens).
5. **Archived docs** (`docs/archive/`) — strategy and research, **only if the user explicitly
   asks for them.** Do not pull archived material into a build decision on your own.

A future prompt may override anything in 2–4 for its task. It cannot override the locked
items in section 2 unless it says so explicitly.
