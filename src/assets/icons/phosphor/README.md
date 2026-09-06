# Phosphor Icons — vendored assets

Four icons from [Phosphor Icons](https://phosphoricons.com) v2.1.1, **Regular**
weight, used by the homepage "What we help with" columns.

| File                 | Phosphor name    | Used for                        |
| -------------------- | ---------------- | ------------------------------- |
| `devices.svg`        | `devices`        | Day-to-day technology           |
| `shield-check.svg`   | `shield-check`   | Security and continuity         |
| `browser.svg`        | `browser`        | Websites and digital presence   |
| `tree-structure.svg` | `tree-structure` | Specialist projects and advice  |

The files are copied verbatim from `@phosphor-icons/core@2.1.1`
(`assets/regular/`) — the same 256×256 viewBox and the same optical weight, so
the four read as one family. They are **vendored, not depended on**: shipping a
package for four static glyphs would add a dependency and a build step for
nothing. Update by re-copying from the same source and weight, never by hand-
editing the path data.

Licence: MIT — see `LICENSE` in this directory (retained as required).
