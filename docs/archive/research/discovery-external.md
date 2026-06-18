# Discovery — External / Public Pass

**Project:** TWNY public website refresh
**Pass:** External research (current public presence)
**Date:** 2026-06-17
**Method:** Live site capture (headless Chrome via Playwright), page-text extraction, web search. Screenshots in [`./screenshots/`](./screenshots/), catalogued in [screenshot-index.md](./screenshot-index.md).

> Conventions used throughout this folder:
> **[FACT]** = directly observed on a live public source. **[ARTIFACT]** = a saved screenshot.
> **[INTERPRETATION]** = my reading of the facts. **[RECOMMENDATION]** = proposed direction.
> No testimonials, certifications, client names, or claims are invented. Where a third party
> displays such items, they are reported as "displayed on their site," not endorsed as true.

---

## A. Sources inspected

**[FACT]** Current live TWNY website: **https://www.twny.com.au/** (confirmed live, 2026-06-17).
Pages captured and text-extracted:

- Home — `https://www.twny.com.au/`
- Business Productivity Tools — `/services/business-productivity-tools/`
- Domain & Website Hosting — `/services/business-website-hosting/`
- Managed Services & Consulting — `/services/managed-services-consulting/`
- Cloud Platforms — `/services/cloud-platforms/` (text via nav; not separately captured)
- About Us — `/about-us/`
- Contact Us — `/get-in-touch/`
- News — `/news/` (listed in nav)

**[FACT]** LinkedIn (via web search result snippets — full profiles are auth-gated and were **not** scraped):
- A **TWNY Pty Ltd** company page exists (`au.linkedin.com/company/twny`), described as specialising in "the design and implementation of cloud solutions for start-ups and small businesses … deliver robust, fit-for-purpose cloud technologies in a simplified manner."
- A **Grant Godwin** profile (`linkedin.com/in/grant-godwin/`) appears as "Digital Workplace Manager — DuluxGroup," Melbourne, with a Microsoft 365 / modern desktop / intranet / telephony / cloud-infrastructure background.
- **[INTERPRETATION]** The Atlas repo's `architectureMeta.owner` is "Grant Godwin," which corroborates the association, but the public search results did **not** explicitly connect the person and the company. Treat the link as probable, not confirmed. The professional background (enterprise Modern Workplace) is a credible, on-brand credibility asset **if** the operator chooses to use it.

---

## 1. What TWNY appears to communicate publicly today

**[FACT]** Homepage hero: **"Ready for the cloud? Business Technology, Made Easy."** Sub: "We're here to simplify your technology experience. From design to implementation and ongoing management, we will partner with you to take the hassle out of your technology needs."

**[FACT]** Homepage sections: "WHAT WE DO" (four icon cards: Business Productivity, Domain and Web Hosting, Technology Consulting, Cloud Platforms) → "WHY CHOOSE US?" → "OUR PARTNERS" (Acronis, CommsChoice, Microsoft Partner, Synergy Wholesale). CTAs: "Take the survey" and "Contact us."

**[FACT]** Credibility line on homepage: "We have **over 30 years of experience** in the technology industry," staff described as "industry leaders" delivering "scalable, fit for purpose technology solutions."

**[FACT]** About page tells a founding story: TWNY started informally helping friends/family/local orgs, saw small businesses getting "generic advice," "cookie-cutter websites" and "wasteful, disconnected tool usage," and "officially launched in late 2016." Values stated: accessibility, simplification, affordability. **No named individuals.** No specific experience figure (contradicts the homepage "30 years" line).

**[FACT — pricing, productivity]** `/services/business-productivity-tools/`: tiers **Email Essentials $8/mo, Productivity Essentials $12, Productivity Standard $25, Productivity Premium $40**, all "+ $249 initial setup." Add-ons: Cloud VOIP $15/mo, Advanced Audio Conferencing $8/yr, 20GB Cloud Backup $10/mo, Advanced Threat Protection $5/mo, "Ultimate Productivity Bundle" $30/mo. "Industry Solutions" for Healthcare/Finance/Hospitality invoking **HIPAA, GDPR, PCI DSS, ISO27001**.

**[FACT — pricing, hosting]** `/services/business-website-hosting/`: "GIVE YOUR BUSINESS AN ONLINE PRESENCE." Plans sold on specs — **Essentials $12/mo (1 domain, 1GB RAM, 2GB storage), Standard $25, Premium $35, Ultimate $55**. Standard domains **$3/mo**, premium "POA." SSL **$8–$22/mo**. Website setup **$199**. "White Glove web hosting" $30/mo. Mentions **DIVI Website Builder**.

**[INTERPRETATION]** The public TWNY today reads as a **generic, reseller-style small-business IT/hosting shop**: commodity productivity licences at near-cost markups, hosting sold on RAM/storage, SSL and "white glove" as upsell line-items, and template compliance buzzwords. The voice is the standard MSP register ("Made Easy," "fit for purpose," "take the hassle out," "industry leaders"). It is competent and friendly but undifferentiated, and it actively signals *cheap* rather than *premium*.

---

## 2. What is clear

**[FACT/INTERPRETATION]**
- TWNY sells **Microsoft 365 productivity, web/domain hosting, consulting, and cloud (Azure)** — the rough shape of the offer is legible.
- It targets **small business / startups** in Australia.
- It is **partner-backed** (Microsoft, Acronis, CommsChoice, Synergy Wholesale).
- Contact path exists (form, "get in touch").
- Tier **names** for productivity (Email Essentials / Productivity Essentials / Standard / Premium) are already established and have carried into the Atlas model.

## 3. What is unclear or missing

**[FACT/INTERPRETATION]**
- **No coherent through-line.** Four services sit as four icon cards; nothing explains how M365 + web + domains + backup + consulting form *one* operation. There is no "one tenant, one source of truth" story.
- **No clear ideal customer.** "Businesses of any size" appears repeatedly — the opposite of the Atlas "deliberately small-scope, clear-edges" positioning.
- **No scope boundaries.** Nothing says what TWNY *doesn't* do; "unlimited"-flavoured friendliness with no inclusions/exclusions.
- **No human/operator identity.** No named person, no founder voice, no credibility narrative — despite a strong real-world Modern Workplace background being available.
- **Pricing model is inconsistent and dated.** Two recurring-vs-annual modes do not exist; it is month-only commodity pricing. Backup is a $10/mo "20GB" add-on, not a managed-recovery service. AI / Copilot is **absent entirely**.
- **No AI / Copilot offer** is present publicly at all.
- **Internal contradiction:** homepage "30 years of experience" vs About "launched late 2016" / no figure.
- **"Take the survey"** CTA is vague — unclear what it produces.

## 4. What the existing site should NOT carry forward

**[RECOMMENDATION]**
- The **"Business Technology, Made Easy" / "fit for purpose" / "industry leaders" / "take the hassle out"** register — generic MSP filler that the new TWNY voice explicitly bans ("no 'solutions', 'leverage', 'empower'").
- **Commodity hosting framing** (RAM/storage/bandwidth specs, "Ultimate" tier, DIVI builder, SSL-as-upsell). The new model sells *care and attention*, not server specs.
- **Near-cost reseller pricing** ($8–$40 productivity; $12–$55 hosting). This signals cheap and invites direct CSP price-comparison — the exact failure the Atlas "sell managed capability, not licences" principle is built to avoid.
- **Template compliance buzzwords** (HIPAA/GDPR for an AU SMB; PCI/ISO name-drops with no substantiation).
- **The circular "twny" logo badge / monogram device** in the masthead — the new brand mandates a wordmark-only identity with *no* icon/monogram/favicon device.
- **"Businesses of any size"** universal-fit messaging.
- The teal + clipart-illustration visual template (see [visual-reference-notes.md](./visual-reference-notes.md)).
- The unsubstantiated **"30 years"** claim and the homepage/About inconsistency.

## 5. What the existing site COULD carry forward

**[RECOMMENDATION]** — carefully, after rework:
- The **service spine** (Microsoft 365, web/hosting, domains, backup, consulting, cloud) — already the right surfaces; needs the Atlas coherence and the addition of Copilot/AI.
- The established **productivity tier names** (Email Essentials → Productivity Premium), which now align with the Atlas model — continuity for any existing customers.
- The **"simplify / take the complexity out"** intent — the *intent* is correct; the *expression* must change from soft-MSP to the Atlas "decision + evidence + action" voice.
- The genuine **founding story** (started by helping real people; reaction against cookie-cutter generic advice) — this is a real, ownable differentiator if retold in the new voice and attached to a named operator.
- Existing **partner relationships** as quiet trust signals (Microsoft, Acronis) — used as substantiated capability, not a logo wall.
- The **AU small-business focus** — but narrowed from "any size" to the Atlas "ideal + acceptable" segments.

---

## Cross-reference: current public pricing vs the Atlas model

**[FACT]** The gap is large and material:

| Surface | Current public site | Atlas model (internal source of truth) |
| --- | --- | --- |
| Email Essentials | $8 /user/mo | $30 /user/mo ($300/yr) |
| Productivity Standard | $25 /user/mo | $90 /user/mo ($900/yr) |
| Productivity Premium | $40 /user/mo | $120 /user/mo ($1,200/yr) |
| Setup | $249 (or $199 web) | $500 Foundation Setup (waiver rules) |
| Recurring modes | Monthly only | Annual commitment (10× monthly) **or** Monthly Flex |
| Backup | $10/mo "20GB" add-on | Managed recovery; bundled in Premium / $12.50/user/mo |
| Hosting | Commodity specs $12–$55 | Care tiers $25–$150/mo (Modern), risk-priced Legacy |
| Copilot / AI | Absent | Managed Copilot $40/user/mo + enablement |

**[INTERPRETATION]** Publishing the new model is not a price *edit* — it is a **repositioning** from reseller to managed practice. The website is the instrument of that repositioning. Expect to lose price-shoppers (by design — they are the Atlas "risky/avoid" segments) and to need the credibility, clarity, and boundary-setting that justify a 3–4× higher number. **[RECOMMENDATION]** Confirm the price list is signed off before publishing (the Atlas data is still `status: "draft"`), and never show the old numbers alongside the new.

**Sources:** [twny.com.au](https://www.twny.com.au/) · [productivity](https://www.twny.com.au/services/business-productivity-tools/) · [hosting](https://www.twny.com.au/services/business-website-hosting/) · [about](https://www.twny.com.au/about-us/) · [TWNY Pty Ltd LinkedIn](https://au.linkedin.com/company/twny) · [Grant Godwin LinkedIn](https://www.linkedin.com/in/grant-godwin/)
