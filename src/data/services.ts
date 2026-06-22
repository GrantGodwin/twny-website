// Services page content. Same four capability themes as the homepage's
// "What we look after" (src/data/offer.ts), but written to go deeper. Each
// capability has its own `layout` so the four rows don't share one rhythm:
//
//   standard — heading, lead, body, a technology line, a labelled moment.
//   woven    — technology terms folded into the body as Mineral inline
//              accents instead of a separate line.
//   quote    — the moment rendered larger, as a pulled scenario.
//   compact  — the shortest row; everything folded into one paragraph.
//
// No pricing language, no packages, plans, bundles or tiers anywhere here.

export interface ServiceCapability {
  /** Matches CapabilityIcon's name prop — reuses the homepage's restrained line marks as a small, single-colour visual anchor. */
  icon: "communication" | "presence" | "protection" | "automation";
  heading: string;
  /** A short, punchy distillation — sits above the body as an editorial lead-in, not a tagline. */
  lead: string;
  body: string;
  layout: "standard" | "woven" | "quote" | "compact";
  /** Substrings of `body` to render as Mineral inline accents (used by "woven" and "compact"). */
  highlight?: string[];
  /** Named technologies/scope, shown as a quiet Mineral-accented supporting line. Omitted for "woven" and "compact". */
  techLine?: string[];
  /** The one closing emphasis for this capability — omitted for "compact". */
  moment?: {
    label: string;
    body: string;
  };
}

export const serviceCapabilities: ServiceCapability[] = [
  {
    icon: "communication",
    heading: "Work smoothly.",
    lead: "The everyday tools your team relies on, just running properly.",
    layout: "standard",
    body: "Email, files, calendars and the Microsoft 365 apps you already use — kept running, secured properly, and set up so everyone works from the same source of truth. When something needs to change, you tell us once.",
    techLine: ["Mailboxes", "Files & calendars", "Identity & sign-in", "Microsoft 365 apps"],
    moment: {
      label: "What we keep out of your way",
      body: "Personal devices, home Wi-Fi and printers sit outside this — we're upfront about that rather than stretching to cover everything.",
    },
  },
  {
    icon: "presence",
    heading: "Look professional.",
    lead: "A presence online that earns trust at first glance.",
    layout: "woven",
    body: "Your website and the addresses people find you by — kept current, fast and reliable, without you needing to think about hosting, domains or renewals.",
    highlight: ["hosting", "domains", "renewals"],
    moment: {
      label: "When this is working well",
      body: "You stop thinking about your website at all — it's simply there, looking the way it should, whenever someone looks your business up. You're always the registrant of record, and everything is portable if you ever need to move it.",
    },
  },
  {
    icon: "protection",
    heading: "Stay protected.",
    lead: "Recovery, planned before you ever need it.",
    layout: "quote",
    body: "Backup, security and recovery — sorted out in advance, so small problems don't become business problems. Recovery is the product here, not storage, and you own your data and your backups either way.",
    techLine: ["Managed backup", "Threat protection", "Recovery planning"],
    moment: {
      label: "A typical example",
      body: "A laptop is lost, a mailbox is compromised, or a ransomware email gets through. Because recovery is already planned, it's a bad afternoon — not a bad month.",
    },
  },
  {
    icon: "automation",
    heading: "Save time.",
    lead: "Practical automation, without the hype.",
    layout: "compact",
    body: "AI and automation that take repetitive work off your plate — drafting, summarising, the repeat admin nobody enjoys, client updates that go out on time, a clean handover when someone's away. Tools like Copilot are introduced when you're ready for them, never forced in because they're new.",
    highlight: ["Copilot"],
  },
];

// Hero breadth cluster — a small, structured visual anchor that
// communicates range at a glance, without a feature grid, icon grid or
// gradient. Sizes are hand-set for editorial rhythm, not generated.
export const heroBreadth: { term: string; size: "base" | "lg" | "xl" }[] = [
  { term: "Microsoft 365", size: "lg" },
  { term: "Websites", size: "base" },
  { term: "Domains", size: "base" },
  { term: "Backup", size: "lg" },
  { term: "Security", size: "base" },
  { term: "AI", size: "xl" },
  { term: "Automation", size: "base" },
  { term: "Advice", size: "lg" },
];

// "How this usually starts" — quietly introduces the commercial model (two
// ways to work with us) without naming a plan, tier or package. A focused
// project is usually the entry point; ongoing care is what it tends to grow
// into — a relationship, not two equal menu options.
export const engagementShape = {
  heading: "How this usually starts.",
  intro: "There are two ways to work with us — and most relationships move from the first to the second.",
  focused: {
    label: "A focused project",
    description:
      "A defined piece of work with a clear scope and a clear finish — a website rebuild, a security uplift, a migration, getting backup and recovery sorted properly.",
  },
  ongoing: {
    label: "Ongoing care",
    description:
      "Continuous responsibility for the technology your business depends on — email, files, websites, backup, security and renewals, looked after quietly so nothing slips.",
  },
  reassurance:
    "You don't need to know which one you're after before you get in touch — tell us what's going on and we'll work out the right shape together.",
};

// "Everything, by name" — a premium taxonomy of named services, presented
// as a structured index (multi-column, Mineral rule between columns), not
// a bullet list, a pricing table or a row of feature cards. Answers "do
// these people actually do the thing I'm looking for" at a glance.
export const taxonomy = {
  heading: "Everything, by name.",
  lede: "If you're looking for something specific, it's probably here.",
  items: [
    "Microsoft 365",
    "Business email",
    "Websites",
    "Website care",
    "Domains & DNS",
    "Managed backup",
    "Security",
    "Microsoft licensing",
    "Copilot",
    "AI & automation",
    "Technology advice",
    "Migrations",
  ],
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
    q: "Do you work remotely, or come on-site?",
    a: "Mostly remotely — most things don't need a visit. When something genuinely needs hands-on-site, we'll say so and arrange it.",
  },
  {
    q: "What's outside what you do?",
    a: "Personal devices, home Wi-Fi, and large on-prem server estates aren't a fit for what we do. If that's most of what you need, we'll say so early rather than take it on anyway.",
  },
];
