# TWNY Public Website — Documentation

This folder is the brain of the TWNY public website project. If you are an AI
assistant or a new contributor about to work on this site, **start here.**

The documentation is deliberately split into two kinds of material, because they
answer two different questions:

| Folder | Question it answers | Status |
| --- | --- | --- |
| [`governance/`](./governance/) | *How should we build this site, and why?* | **Binding.** The source of truth. |
| [`research/`](./research/) | *What did we learn that led to those rules?* | Reference. Evidence, not instructions. |

## Why it's organised this way

Research and governance get confused when they live together. Research is a
*snapshot in time* — what the market looked like, what competitors did, what the
old site said on the day it was captured. It ages. Governance is the *distilled
decision* — the principles we hold ourselves to regardless of what any single
screenshot showed.

If you mix them, every implementation question turns into a re-reading of 60
pages of analysis, and people start treating observations ("Atarix uses a purple
gradient") as if they were rules. So we separated them:

- **Governance tells you what to do.** It is short, opinionated, and stable.
- **Research tells you why.** It is long, evidential, and frozen.

When the two ever disagree, **governance wins** — because governance is the
considered conclusion and research is the raw input. If research reveals
something that *should* change a rule, the rule gets updated in governance on
purpose; you don't quietly follow the research instead.

## Source material (Research)

These are inputs. Read them when you need the evidence behind a principle, not as
day-to-day instructions. All dated 2026-06-17 and treated as point-in-time.

- [`research/creative-strategy-brief.md`](./research/creative-strategy-brief.md) — the synthesis that ties all research together. The best single research read.
- [`research/discovery-external.md`](./research/discovery-external.md) — what the current TWNY site and public presence actually say today.
- [`research/competitor-patterns.md`](./research/competitor-patterns.md) — the market: who does what, and the weak patterns to beat.
- [`research/visual-reference-notes.md`](./research/visual-reference-notes.md) — visual observations reconciled with the brand system.
- [`research/website-positioning-notes.md`](./research/website-positioning-notes.md) — positioning, audience, objections, and page-level implications.
- [`research/screenshot-index.md`](./research/screenshot-index.md) — catalogue of the captures in [`research/screenshots/`](./research/screenshots/).

## The governing source of truth (Governance)

- [`governance/creative-direction.md`](./governance/creative-direction.md) — **the broad creative governance for every design and content decision on this site.** Treat it as the durable creative standard. It translates the research into practical principles and explains the reasoning behind each one, and it holds the locked **Brand language** system (the canonical brand statement, page-headline rules, philosophy, and CTA — every sentence with one job).
- [`governance/art-direction.md`](./governance/art-direction.md) — **the specific visual authority for the public website.** Use it when designing or implementing the visual system, theme and surfaces, colour, typography, photography, the signature component, homepage execution, and pacing. It is the visual execution of the Creative Direction.

## Reading order

Read in this order. Stop when you have what you need — most tasks only require
the first few.

1. **[`../README.md`](../README.md)** — repository-level orientation.
2. **[`README.md`](./README.md)** — this file. Documentation orientation and the rules of the road.
3. **[`governance/creative-direction.md`](./governance/creative-direction.md)** — broad creative governance. This is the durable standard for the site.
4. **[`governance/art-direction.md`](./governance/art-direction.md)** — specific visual authority for the public website. Use it for theme and surfaces, colour, typography, photography, the signature component, and homepage execution.
5. **[`research/creative-strategy-brief.md`](./research/creative-strategy-brief.md)** — the *why* behind the Creative Direction, in one place.
6. **Any additional research documents as required** — pull in the specific
   research file (competitor, discovery, visual, positioning) only when a task
   needs that depth.

## Before making implementation changes

Run this checklist before you touch a page, component, or line of copy. If you
cannot answer "yes" with confidence, re-read the Creative Direction before proceeding.

- [ ] **Have I read the Creative Direction?** Not skimmed — read the sections relevant to this change.
- [ ] **Does this change improve trust?** Clarity, honesty, and named accountability — or does it erode them?
- [ ] **Does this help the ideal client?** The small-business owner/operator deciding alone — not a procurement committee or an IT department.
- [ ] **Does this follow the TWNY personality?** Calm, plain, specific, premium-through-restraint. No slogans, no hype, no banned words.
- [ ] **Does this reduce complexity rather than increase it?** Fewer, clearer things beat more, busier ones.
- [ ] **Am I solving a customer problem instead of adding a website feature?** Start from the operator's need, not from "wouldn't it be cool if the site…".

---

*Maintenance note:* when a decision changes, change it in the **Creative Direction**,
not in the research. Research is a record of what we learned; it should not be
edited to match new decisions. Keep this README's reading order accurate if the
structure ever changes.
