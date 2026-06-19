# TWNY Public Website — Documentation

This folder is deliberately small. The project has been pared back so that Claude Code can
build without re-reading a library of strategy on every task.

**Claude Code is the implementation arm, not the creative director.** Creative direction for
each build comes from the **user's prompt**. These docs hold only the stable brand, colour,
typography, and implementation rules that should survive between tasks.

## Read first

> **[`governance/implementation-brief.md`](./governance/implementation-brief.md)** — the
> single read-first file. What TWNY is, what must never change, brand language, colour and
> typography rules, visual boundaries, build rules, and instruction priority. Start and
> usually finish here.

## Active documents

| File | What it is |
| --- | --- |
| [`governance/implementation-brief.md`](./governance/implementation-brief.md) | **The contract.** The single source of truth for building. Read before any change. |
| [`governance/art-direction.md`](./governance/art-direction.md) | Fixed visual rules — theme/surfaces, colour, typography, photography, the signature device, motion, navigation. Expands the brief's visual specifics. |
| [`ROADMAP.md`](./ROADMAP.md) | **The execution backlog.** Current phase, current sprint, and section-by-section build status. Check before starting any implementation work. |
| `README.md` | This file. |

That's the whole active set. There is no research folder, concept folder, or screenshot
index in active context any more.

## Execution Workflow

[`ROADMAP.md`](./ROADMAP.md) is the execution backlog. The implementation brief remains the
design and implementation contract — the roadmap does not replace it.

1. Review ROADMAP.md before starting any implementation work.
2. Confirm the current active phase and current sprint.
3. Implement only the requested roadmap item.
4. Build and verify.
5. Stop for review.
6. Only mark roadmap items complete after they have been reviewed and approved.
7. Update ROADMAP.md as work progresses.

### Working rules

Implementation always proceeds one roadmap item at a time. Do not begin the next roadmap
item until the current item has been reviewed and approved.

```
Roadmap → Design discussion → Implementation → Review → Mark complete → Next roadmap item
```

## Instruction priority

When sources conflict, follow this order (highest first):

1. **The user's current prompt** — the active creative direction.
2. **`governance/implementation-brief.md`** — the stable contract.
3. **`governance/art-direction.md`** — fixed visual rules.
4. **Source code** (`src/`, especially `src/styles/global.css` for colour/type tokens).
5. **Archived docs** (`archive/`) — **only if the user explicitly asks for them.**

A future prompt may override the brief or art direction for its task. It cannot override the
brief's **"What must never change"** items unless it says so explicitly.

## Archive

[`archive/`](./archive/) holds the earlier written strategy and research — the Creative
Direction and the research synthesis (positioning, competitor patterns, discovery, visual
notes). It is **preserved, not active.** Do not pull it into a build decision unless the user
explicitly asks. Reference imagery, concept renders, and review screenshots were removed —
they were exploration and evidence, not rules, and kept causing reinterpretation.

## Maintenance

- When a stable rule changes, change it in the **Implementation Brief** (and the Art
  Direction if visual). Keep the two in sync.
- Don't reintroduce concept explorations, reference screenshots, or review material into
  active context. If a build needs creative direction, it comes from the prompt.
- Keep this README's active-set list accurate if the structure changes.
