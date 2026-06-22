// Services page content. Same four capability themes as the homepage's
// "What we look after" (src/data/offer.ts), but written to go deeper —
// named technologies as supporting detail, plus one closing "moment" per
// capability that varies in kind (a boundary, an outcome, a scenario, a
// concrete example) so the four sections don't repeat the same rhythm.
// No pricing language, no packages, plans, bundles or tiers anywhere here.

export interface ServiceCapability {
  /** Matches CapabilityIcon's name prop — reuses the homepage's restrained line marks as a small, single-colour visual anchor. */
  icon: "communication" | "presence" | "protection" | "automation";
  heading: string;
  /** A short, punchy distillation — sits above the body as an editorial lead-in, not a tagline. */
  lead: string;
  body: string;
  /** Named technologies/scope, shown as a quiet Mineral-accented supporting line — not chips, not a feature grid. */
  techLine: string[];
  /** The one closing emphasis for this capability. Label + line, varied in kind across the four. */
  moment: {
    label: string;
    body: string;
  };
}

export const serviceCapabilities: ServiceCapability[] = [
  {
    icon: "communication",
    heading: "Work smoothly.",
    lead: "The everyday tools your team relies on, just running properly.",
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
    body: "Your website and the addresses people find you by — kept current, fast and reliable, without you needing to think about hosting, renewals or who owns what.",
    techLine: ["Website hosting & care", "Domains & DNS", "SSL & renewals"],
    moment: {
      label: "When this is working well",
      body: "You stop thinking about your website at all — it's simply there, fast and current, whenever someone looks your business up. You're always the registrant of record, and everything is portable if you ever need to move it.",
    },
  },
  {
    icon: "protection",
    heading: "Stay protected.",
    lead: "Recovery, planned before you ever need it.",
    body: "Backup, security and recovery — sorted out in advance, so small problems don't become business problems. Recovery is the product here, not storage: when something goes wrong, the work is getting you back.",
    techLine: ["Managed backup", "Threat protection", "Recovery planning"],
    moment: {
      label: "A typical example",
      body: "A laptop is lost, a mailbox is compromised, or a ransomware email gets through — because recovery is already planned, it's a bad afternoon, not a bad month. You own your data and your backups, and you keep all of it if you ever move on.",
    },
  },
  {
    icon: "automation",
    heading: "Save time.",
    lead: "Practical automation, without the hype.",
    body: "AI and automation that take repetitive work off your plate, introduced when you're ready for it — never forced in because it's new.",
    techLine: ["Copilot", "Automation & workflows", "Practical AI"],
    moment: {
      label: "In practice",
      body: "Drafting and summarising, the repeat admin nobody enjoys, client updates that go out on time, a clean handover when someone's away, and simple forms or workflows that used to mean re-typing the same thing twice.",
    },
  },
];

// "How this usually starts" — answers the commercial question (how do
// people usually buy or work with us) in plain language, without naming a
// plan, tier or package. Not two equal options: focused work is usually the
// entry point, and ongoing care is what a lot of those relationships grow
// into — a sequence, not a comparison table.
export const engagementShape = {
  heading: "How this usually starts.",
  intro: "Most relationships start with a focused piece of work — and some of those grow from there.",
  focused: {
    label: "Focused work — usually the start",
    description:
      "A single, defined task with a clear start and finish — a website refresh, a security uplift, a migration, or getting backup and recovery set up properly. It's usually how people get to know how we work.",
  },
  ongoing: {
    label: "Ongoing care — what it tends to grow into",
    description:
      "Once that trust is there, a lot of relationships grow into ongoing care — the email, files, websites, backup, security and renewals that keep your business moving, looked after quietly in the background.",
  },
  reassurance:
    "Either way, you don't need to know which one fits before you get in touch — tell us what's going on and we'll work out the right shape together.",
};

// "The specifics" — a quiet, scannable index of named services and
// technologies, for visitors (and search engines) looking for something
// concrete. Plain wrapped text with Mineral separators, not a feature grid.
export const specifics = {
  heading: "The specifics.",
  lede: "Some of the names behind the four things above, if you're looking for something in particular.",
  items: [
    "Microsoft 365",
    "Email",
    "Websites",
    "Domains & DNS",
    "Hosting",
    "Backup",
    "Security",
    "Copilot",
    "AI & automation",
    "Migrations",
    "Microsoft licensing",
    "Advisory",
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
