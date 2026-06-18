# TWNY Public Website — Creative Strategy Brief

**Project:** TWNY public website refresh
**Date:** 2026-06-17
**Status:** Strategy brief — pre-design. No implementation, no mockups yet.
**Inputs synthesised:**
- Atlas repo discovery (brand system, service taxonomy, pricing model, client-fit, public language) — `docs/brand-system.md`, `twny-system/`, `data/services/`.
- External/public research — [discovery-external.md](./discovery-external.md), [competitor-patterns.md](./competitor-patterns.md), [visual-reference-notes.md](./visual-reference-notes.md), [website-positioning-notes.md](./website-positioning-notes.md).
- Screenshots & competitor notes — [screenshot-index.md](./screenshot-index.md), [`./screenshots/`](./screenshots/).

> Brand is **TWNY**. Identity is the lowercase wordmark `twny` — no monogram, badge, or favicon device.

---

## 1. Executive summary

TWNY's current public site (twny.com.au) is a generic, reseller-style MSP/hosting template: commodity pricing, hosting sold on RAM/storage, clipart-and-teal visuals, a forbidden circular logo badge, no AI/Copilot offer, no point of view, and an unverifiable "30 years" claim that contradicts its own "launched 2016" story. Meanwhile, the Atlas internal system already defines a far stronger TWNY: a **managed operating practice** with a coherent service model, resolved two-mode pricing, a disciplined brand system, and a distinctive operator voice.

The job of the new website is therefore a **repositioning, not a reskin**: move TWNY from *reseller* to *managed practice*, raising the public price 3–4× and justifying it with clarity, coherence, named credibility, and honest boundaries.

The market makes this easy to win. Competitors cluster into three predictable templates — cheap-and-generic, warm-but-vague, and transparent-but-template dark-SaaS. **None is simultaneously premium, specific, transparent, and operator-credible.** That intersection is open, and the Atlas brand and commercial model are already built to occupy it. The website is the instrument that makes the repositioning real.

## 2. Positioning statement

> **TWNY runs the cloud and the website so small businesses can run the business.**
> One operator who owns the whole stack — Microsoft 365, identity, backup, domains, hosting and Copilot on a single managed tenancy — delivered as a clear, premium, managed service with honest edges. Not an MSP. Not a reseller. Not a consultancy that hands you a strategy deck. A capable operator who makes the technology problem disappear, reliably, and tells you exactly what you're getting.

**The wedge:** *clarity is the premium.* Where the market sells slogans, specs, or vapourware, TWNY sells a legible, well-run operation you can understand at a glance.

## 3. Audience

- **Primary:** the owner/operator or office manager of an Australian small business (~1–25 seats) — non-technical but competent, time-poor, decision-maker and budget-holder in one.
- **Secondary:** a founder starting up who wants email/identity/web done properly from day one.
- **Tertiary / influencers:** a bookkeeper, web designer, or trusted advisor who refers the operator in.

The site speaks to **one person making a confident decision**, not to a procurement committee or an IT department.

## 4. Ideal client

From the Atlas client-fit model ("ideal" + "acceptable" segments):
- Small business, professional services, trades with growth intent, founder-led modern operators.
- Already on, or willing to move to, Microsoft 365; values clean operations; comfortable with the "managed service" framing.
- Has a budget and **wants the problem to go away** — not a strategy document about it.
- Willing to accept clear scope and (ideally) an annual commitment for the best price.
- "Acceptable": some legacy systems but willing to modernise and draw scope cleanly.

## 5. Non-ideal client

The site should gently, confidently turn these away (the Atlas "risky"/"avoid" segments):
- Price-shoppers comparing only to raw CSP licence cost.
- "Unlimited support" expectations; wants to call about anything technology-shaped.
- Residential / break-fix / personal IT; printers, home Wi-Fi, hardware repair.
- Large legacy estates with no remediation budget; on-prem server shops.
- Anyone who argues every exclusion or resists onboarding/commitment.

Disqualifying the wrong fit is a **positioning asset**, not lost business — it reads as confidence and protects service quality and margin.

## 6. Core offer

**One managed operation on one tenancy, expressed as a single promise: "we run it."** Underneath sit the working surfaces, unified by the operational loop **Discover → Recommend → Quote → Deliver → Operate → Review** and the principle **one tenant, one source of truth** (TWNY owns/governs the M365 tenant, DNS, backup, and where applicable the website).

What the customer actually buys (surface → underlying need):
- A managed mailbox → *someone to call when it breaks, who already knows your tenant.*
- A website → *a presence that reflects the business and stays up.*
- Backup → *insurance against the day you delete the wrong folder or get phished.*
- Domain management → *certainty the domain you've owned for years won't lapse or get hijacked.*
- Consulting → *a pragmatic technologist who understands small-business reality.*

## 7. Service architecture

Two clusters on one tenancy, with consulting as the named "safety valve" beside them:

**Run your business (Microsoft 365 operations)**
- **Productivity** — 4 managed tiers: Email Essentials, Productivity Essentials, Standard, Premium.
- **Backup** — managed recovery (bundled in Premium; add-on elsewhere). "Recovery is the product, not storage."
- **Copilot / AI** — managed licence + scoped enablement, readiness-first, minimum Productivity Standard. *(New — absent from the current site.)*

**Run your web presence**
- **Web hosting & care** — Modern and Legacy tracks, four care tiers (Essentials → Complete): continuity → active care → improvement. Reframed from commodity specs to *care and attention*.
- **Domains** — registration, DNS, renewal, transfers; always portable; customer is the registrant of record.

**Projects & advisory (Consulting)** — migrations, rebuilds, security uplift, AI implementation. Scoped and quoted separately so the recurring service stays clean.

Each service page follows one template: positioning → plain explainer → tier ladder → comparison matrix → included/not-included → boundaries → bundling/eligibility → reassurance → CTA. Only `public`-flagged content ships.

## 8. Pricing architecture

- **Publish all pricing, prominently** (Atlas decision D10). Transparency reinforces premium and filters wrong-fit leads.
- **Two recurring modes only:** **Annual Commitment** (prepaid = 10× monthly = two months free) and **Monthly Flex** (month-to-month, no lock-in). No third "monthly base."
- **All prices ex-GST, AUD**, with a single GST acknowledgement line — never buried.
- **Onboarding** as one clear one-off (Foundation Setup) with waiver rules stated plainly.
- **Never show** margins, licence cost bases, internal rationale, or the old reseller numbers.
- Borrow the *mechanics* of the best transparent competitor (ranges, "no scope creep," pricing FAQ) — in TWNY's restrained visual language, not glossy SaaS cards.
- **Gate:** the Atlas price model is still `status: "draft"` — confirm sign-off before publishing.

## 9. Homepage narrative

"Position, prove, point."
1. **Position** — wordmark + "Modern cloud operations and digital presence for small business." / "We run the cloud and the website so you can run the business." Single **Ember** CTA → guided recommendation.
2. **How we work** — the operational loop as a structural Mineral strip (not decoration).
3. **What you actually get** — the surface→need pairs.
4. **The offer** — two clusters on one managed tenancy; consulting beside them.
5. **Why we're different** — boundaries protect quality · modern by default · portability always · premium is clarity.
6. **Pricing posture** — annual vs monthly flex; "all prices published, ex-GST" → pricing.
7. **Point** — "Tell us what you need; we'll recommend a starting point." Calm, low-pressure.

No stock hero, no slogans, no badge wall.

## 10. Sitemap

```
/                  Home — position, prove, point
/productivity      Microsoft 365 — managed (4-tier ladder + comparison + FAQ)
/web               Managed website hosting & care (Modern vs Legacy, 4 care tiers)
/domains           Domain & DNS, looked after
/backup            Backup as managed recovery
/copilot           Microsoft Copilot — managed (readiness-first)   ← NEW
/consulting        Projects & advisory
/pricing           Consolidated Annual vs Monthly Flex (publish all)   ← elevated
/recommend         Guided flow: 8 plain questions → one recommendation → talk to us
/about             Who runs twny (named operator, honest, no "solutions")
/contact           Talk to us (form, email, response time)
```

## 11. Content principles

- **Public-only:** ship only Atlas `public`-flagged content; never margins, cost bases, assumptions, open decisions, or client-fit labels.
- **Coherence over catalogue:** every page reinforces one tenancy + one loop + clear edges.
- **Specific true things over claims:** "We run the tenant, DNS, backup and website — one source of truth" beats "Made Easy."
- **Boundaries are content:** state what TWNY does *not* do; it builds trust.
- **Outcomes, then mechanics:** lead with the underlying need, support with the technical detail (glossed).
- **No invented proof:** no fabricated testimonials, certifications, client names, or experience figures. Fix, don't repeat, the "30 years vs 2016" contradiction.

## 12. Copy tone

The Atlas house voice, verbatim:
- Plain English; one idea per sentence; the customer is the subject of the verb.
- **Decision + evidence + action** in every message.
- Banned: "solutions," "leverage," "empower," "synergy," "transformation," "disruption," "ecosystem," "fit for purpose," "take the hassle out."
- Technical terms always carry an immediate plain-English gloss.
- "We," never "TWNY," in body copy — the brand lives in the masthead.
- Prices ex-GST with a single GST line. Three paragraphs or fewer per point; shorter-and-clearer beats comprehensive-and-unread.

## 13. Visual principles

From the TWNY brand system, reconciled against the market:
- **Wordmark-only** `twny` (Space Grotesk italic). Retire the circular badge.
- **Six colours, three jobs:** Ink (anchor/text), Steel (structure/bands), **Mineral `#1379A0`** (movement/links/loop), Sand (canvas), Paper (content), **Ember `#D05E2E`** (decision/CTA — the only CTA colour).
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (labels).
- **Composition from the operational loop**, not ornament. No photography, clipart, icon collages, or "AI nodes."
- **Document-grade calm:** crisp Paper on cool Sand, Steel structural bands, hairline rules, honest tables.
- **Banned:** gradients, shadows, glow, glassmorphism, neon, equal-card dashboards, all-caps generic headers.
- Light and dark both first-class. **Restraint is the premium signal** — the inverse of the gradient-hero norm across every competitor.

## 14. Trust strategy

Credibility from substance, not theatre:
- **A named operator** with a genuine Modern Workplace background (publicly available — confirm willingness to foreground).
- **Explicit scope** (what we do / don't do) as a confidence signal.
- **Portability & ownership hygiene** stated plainly (you can always leave with your data).
- **Honest SLAs** — business hours, explicit best-effort out of hours.
- **Transparent pricing** as the primary trust artifact.
- **Quiet, substantiated partner capability** (Microsoft, Acronis) — capability, not a logo wall.
- Zero fabricated proof.

## 15. Three possible creative directions

All three obey the brand system (wordmark-only, six-colour, no gradients/photos, loop-led). They differ in **organising idea, hero treatment, and emotional register**.

### Direction A — "The Operating System" *(operational / structural)*
- **Idea:** the site is itself a calm operational surface; the operational loop is the spine and the hero.
- **Hero:** wordmark + promise + the loop rendered as a Mineral structural strip; Ember CTA. No imagery.
- **Feel:** Atlas-adjacent, document-grade, quietly premium. Maximum differentiation from the gradient market.
- **Strength:** unmistakably ownable; proves "clarity is the premium" by being clarity. **Risk:** could read as cool/corporate to a first-time small-business visitor if the warmth in the copy isn't dialled up.

### Direction B — "We Run It" *(outcome / reassurance)*
- **Idea:** lead with the human outcome — *the problem disappears* — and let structure support it.
- **Hero:** a plain, confident statement ("We run the cloud and the website so you can run the business") with the surface→need pairs immediately beneath; loop appears lower as "how."
- **Feel:** warm but still restrained; reassurance-led; closest to how the buyer actually thinks.
- **Strength:** most immediately legible to a non-technical operator; lowest bounce risk. **Risk:** needs discipline to avoid drifting toward the warm-but-vague competitor register.

### Direction C — "Priced in the Open" *(transparency-forward)*
- **Idea:** make radical pricing transparency the front-door differentiator; the offer is structured around "here's exactly what it costs and what you get."
- **Hero:** promise + an immediate, honest snapshot of the two-mode pricing model and a path into the full pricing page / recommendation flow.
- **Feel:** confident, commercial, no-nonsense; borrows the best transparent-competitor mechanics in TWNY's restrained language.
- **Strength:** filters wrong-fit leads hardest and fastest; strongest answer to the "why more than a reseller?" objection. **Risk:** leading with price can undersell the *managed-operation* value if the wrapper story isn't established first.

## 16. Recommendation

**Lead with Direction B ("We Run It"), structured on Direction A's operational spine, with Direction C's transparency as a load-bearing section — not the hero.**

Rationale: the buyer is a non-technical operator who wants reassurance first (B), but the *defensible differentiation* and premium justification come from visible structure and clarity (A) and from honest, published pricing that answers the price objection (C). Open warm, prove with structure, close with transparency. This sequence turns the wrong customer away while giving the right one every reason to book a call — and it is the combination no competitor currently offers.

## 17. Decisions needed before design mockups

1. **Pricing sign-off** — confirm the Atlas price model (currently `status: "draft"`) is approved for public display, and that the team will hold the published numbers (esp. the volatile Copilot $40).
2. **Legacy hosting public stance** — offer openly, or "talk to us" only? (Atlas decision D7 has no resolved cutoff.)
3. **Named operator** — will TWNY foreground a real person and their Modern Workplace background? (Strongly recommended; central to the trust strategy.)
4. **Service count & taxonomy** — reconcile "5 vs 6" domains and confirm adding the new **Copilot/AI** page.
5. **Creative direction** — confirm the B+A+C recommendation (or pick a single direction).
6. **Recommendation flow at launch** — ship `/recommend` v1, or start with `/contact` and add it later?
7. **`twny-system/` availability** — is the shared token package available to the new website repo, or does it need its own copy?
8. **Domain & migration** — stay on twny.com.au; plan the cutover from the current WordPress/DIVI site; preserve existing-customer continuity (tier names already align).
9. **Logo transition** — confirm retirement of the circular badge for the wordmark-only identity.

## 18. First prototype scope

A **static, content-true vertical slice** — no CMS, no backend, no real forms — to validate voice + visual + commercial direction before full build:

- **Pages:** Home (recommended B+A+C narrative), one service page (**Productivity** — richest model data), and **Pricing** (two-mode toggle, public comparison rows, GST line, pricing FAQ).
- **Built on** the `twny-system/` tokens (wordmark-only, six-colour, loop strip) to prove the visual direction against the live competitor screenshots.
- **Real `public` content** from the Atlas service model — no lorem, no invented proof.
- **One primary Ember CTA** ("Book a call / Tell us what you need") wired to a placeholder, plus the loop and surface→need pairs.
- **Light + dark**, mobile + desktop, to confirm both are first-class.
- **Explicitly out of scope:** `/recommend` logic, contact backend, blog/News, analytics, animations, and any non-`public` content.

**Goal of the prototype:** confirm that "clarity is the premium" reads correctly to the target operator, that the pricing step-up is credible, and that the restrained aesthetic stands apart from the market — before committing to the full ten-page build.
