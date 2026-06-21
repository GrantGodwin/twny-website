// Services page content. Same four capability themes as the homepage's
// "What we look after" (src/data/offer.ts), but written to go deeper —
// named technologies as supporting detail, plus the occasional boundary or
// ownership line where it genuinely earns its place. No pricing language,
// no packages, plans, bundles or tiers anywhere on this page.

export interface ServiceCapability {
  heading: string;
  /** A short, punchy distillation — sits above the body as an editorial lead-in, not a tagline. */
  lead: string;
  body: string;
  /** Named technologies/scope, shown as a quiet supporting line — not chips, not a feature grid. */
  techLine: string[];
  /** A scope/ownership reassurance line. Optional — only where it earns its place. */
  boundary?: string;
}

export const serviceCapabilities: ServiceCapability[] = [
  {
    heading: "Work smoothly.",
    lead: "The everyday tools your team relies on, just running properly.",
    body: "Email, files, calendars and the Microsoft 365 apps you already use — kept running, secured properly, and set up so everyone works from the same source of truth. When something needs to change, you tell us once.",
    techLine: ["Mailboxes", "Files & calendars", "Identity & sign-in", "Microsoft 365 apps"],
    boundary:
      "Personal devices, home Wi-Fi and printers sit outside this — we're upfront about that rather than stretching to cover everything.",
  },
  {
    heading: "Look professional.",
    lead: "A presence online that earns trust at first glance.",
    body: "Your website and the addresses people find you by — kept current, fast and reliable, without you needing to think about hosting, renewals or who owns what.",
    techLine: ["Website hosting & care", "Domains & DNS", "SSL & renewals"],
    boundary:
      "You're always the registrant of record on your domain, and everything is portable if you ever need to move it.",
  },
  {
    heading: "Stay protected.",
    lead: "Recovery, planned before you ever need it.",
    body: "Backup, security and recovery — sorted out in advance, so small problems don't become business problems. Recovery is the product here, not storage: when something goes wrong, the work is getting you back.",
    techLine: ["Managed backup", "Threat protection", "Recovery planning"],
    boundary: "You own your data and your backups. If you ever move on, you take all of it — no exceptions.",
  },
  {
    heading: "Save time.",
    lead: "Practical automation, without the hype.",
    body: "AI and automation that take repetitive work off your plate — drafting, summarising, simplifying the admin that eats a working day. Introduced when you're ready, never forced in because it's new.",
    techLine: ["Copilot", "Automation & workflows", "Practical AI"],
  },
];

// "How this usually starts" — clarifies engagement shape (a focused piece of
// work vs. ongoing care) without pricing, packages, plans or tiers. Two
// plain-prose lanes, not a comparison grid — the point is reassurance, not
// a menu to choose from.
export const engagementShape = {
  heading: "How this usually starts.",
  intro:
    "Some of what we do is a focused piece of work. Some of it is ongoing care that runs quietly in the background. Most businesses end up with a bit of both.",
  focused: {
    label: "Focused work",
    description:
      "A website refresh, a Microsoft 365 cleanup, a security uplift, getting backup and recovery properly set up, an AI or automation workflow, a migration or transition.",
  },
  ongoing: {
    label: "Ongoing care",
    description:
      "Email, files and calendars; your website and domains; backup and security; renewals and risks, tracked before they bite; and plain advice when you need it.",
  },
  reassurance:
    "You don't need to know which of these fits before you get in touch — we'll work out the right shape together.",
};

export interface ServiceFaq {
  q: string;
  a: string;
}

export const serviceFaqs: ServiceFaq[] = [
  {
    q: "What if I already use Microsoft 365 with someone else?",
    a: "That's fine — we can take over an existing tenant or help you move to a clean one. Either way, you end up with one place and one person responsible for it.",
  },
  {
    q: "What size of business is this for?",
    a: "We work best with businesses of around 1 to 25 people — small enough that one accountable operator makes sense, big enough that getting it right actually matters.",
  },
  {
    q: "Do I need to decide between a project and ongoing support before I contact you?",
    a: "No — tell us what's going on and we'll work out the right shape together, whether that's a one-off piece of work or ongoing care.",
  },
  {
    q: "What's outside what you do?",
    a: "Personal devices, home Wi-Fi, and large on-prem server estates aren't a fit for what we do. If that's most of what you need, we'll say so early rather than take it on anyway.",
  },
];
