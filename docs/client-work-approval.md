# Client work — approval register

Internal record for the four named engagements shown on the homepage under
"Both halves, in practice." It exists so nobody has to guess what a client has
and has not agreed to. **This file is not published**: `docs/` is outside the
build, and `npm run verify` asserts that nothing from it reaches `dist/`.

## Standing rules

The homepage descriptions are **factual interim proof**, written in capability
terms from TWNY's own knowledge of the work. Until a client has reviewed and
approved wording, the site must not carry, for that client:

- quotation marks or any attributed praise;
- a logo, or a screenshot or image implying the client's involvement;
- metrics, percentages, time or cost savings, storage quantities, headcount or
  any claimed business outcome;
- a case study, or any description longer or stronger than the one recorded
  here.

Copy may be lightly edited for clarity or grammar only where the factual
meaning is unchanged. If a line cannot be stood behind, delete it rather than
soften it. `npm run verify` blocks curly quotes, percentages, storage units,
"savings", "endorse" and "approved by" from the rendered homepage.

Status values: **granted** (evidence recorded in Notes), **pending** (not yet
asked, or asked and not yet answered), **declined**. Nothing below is marked
granted without a note saying how.

## Register

### Concrete Sales

| Field | Value |
| --- | --- |
| Engagement type | Managed Technology (ongoing) |
| Current public description | Consolidating a long-standing environment onto managed Microsoft 365 and modern device management, while transitioning the business away from its final on-premises server. |
| Current service pills | Microsoft 365 · Device management · Infrastructure transition |
| Name-use approval | pending |
| Description approval | pending |
| Logo approval | pending (no logo shown) |
| Quote approval | pending (no quote shown) |
| Outcome / metric approval | pending (none shown) |
| Date last reviewed | 2026-09-06 (internal review of wording only; client not yet consulted) |
| Notes | Present tense: the engagement is ongoing. "Final on-premises server" is a factual description of the transition, not an outcome claim. |

### Stiles Advisory

| Field | Value |
| --- | --- |
| Engagement type | Professional Services (project) |
| Current public description | Commissioned market research and structured analysis, delivered as an evidence-led report designed to support a decision. |
| Current service pills | Research and analysis · Advisory |
| Name-use approval | pending |
| Description approval | pending |
| Logo approval | pending (no logo shown) |
| Quote approval | pending (no quote shown) |
| Outcome / metric approval | pending (none shown) |
| Date last reviewed | 2026-09-06 (internal review of wording only; client not yet consulted) |
| Notes | Describes the deliverable's purpose, not its result. Do not name the decision, the market or the client's counterparties. |

### Baza Capital

| Field | Value |
| --- | --- |
| Engagement type | Professional Services (project) |
| Current public description | SharePoint and Microsoft 365 remediation to resolve an existing storage and information-management problem. |
| Current service pills | SharePoint · Microsoft 365 · Remediation |
| Name-use approval | pending |
| Description approval | pending |
| Logo approval | pending (no logo shown) |
| Quote approval | pending (no quote shown) |
| Outcome / metric approval | pending (none shown) |
| Date last reviewed | 2026-09-06 (internal review of wording only; client not yet consulted) |
| Notes | Deliberately no storage quantity, before/after figure or cost saving. A retired scaffold once listed this client as "Baza Property Group" with an invented quote; that name and quote are on the build's banned list. |

### Deller Constructions

| Field | Value |
| --- | --- |
| Engagement type | Professional Services (project) |
| Current public description | Website rebuild and digital-presence work centred on presenting the business and its projects more clearly online. |
| Current service pills | Website · Digital presence |
| Name-use approval | pending |
| Description approval | pending |
| Logo approval | pending (no logo shown) |
| Quote approval | pending (no quote shown) |
| Outcome / metric approval | pending (none shown) |
| Date last reviewed | 2026-09-06 (internal review of wording only; client not yet consulted) |
| Notes | No conversion, lead-generation or traffic claim. A retired scaffold once carried an invented quote attributed to a named individual at this client; both are on the build's banned list. |

## How to update this register

1. Ask the client, in writing, for the specific permission (name, description,
   logo, quote, outcome) and keep the reply.
2. Change the status here and record the date and where the reply is kept.
3. Only then change the public copy — in `src/data/offer.ts` — and, if a quote
   or metric is now approved, relax the corresponding guard in
   `scripts/check-build.mjs` **for that specific string only**.
