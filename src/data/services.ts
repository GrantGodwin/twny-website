// Services page content. The job of this page is confidence, not
// completeness: a visitor already warmed by the homepage, here to answer
// "can these people actually look after my business?". Copy is business
// language, not IT language. No pricing, packages, plans, bundles or tiers.
//
// One data set drives two registers: `services` feeds the hero capability
// map (fast breadth recognition); `headline` / `body` / `truth` and the
// optional `ownership` / `examples` / `emphasizeTruth` fields feed the deep
// sections, which are deliberately composed differently from one another.

export interface ServiceCapability {
  /** The capability's visual identity (reused from the homepage's line marks). */
  icon: "communication" | "presence" | "protection" | "automation";
  /** The homepage capability name — the through-line between hero map and deep section. */
  kicker: string;
  /** Recognisable services, in plain business language — shown in the hero map, in Mineral. */
  services: string[];
  /** The strong, scannable outcome — what having this handled means for the business. */
  headline: string;
  /** One short, plain-language explanation. */
  body: string;
  /** One reassuring operational truth. */
  truth: string;
  /** Look professional — rendered as a small grouped list instead of a single truth line. */
  ownership?: string[];
  /** Save time — rendered as a compact checklist of concrete examples. */
  examples?: string[];
  /** Stay protected — render the truth larger, as the section's highlighted moment. */
  emphasizeTruth?: boolean;
}

export const serviceCapabilities: ServiceCapability[] = [
  {
    icon: "communication",
    kicker: "Work smoothly",
    services: ["Business email", "Shared files", "Calendars", "Microsoft 365"],
    headline: "Email and files that just work.",
    body: "Email, shared files and calendars on Microsoft 365 — set up properly and quietly kept that way, so your team always works from the same place.",
    truth: "Need something changed? You ask once, and it's handled.",
  },
  {
    icon: "presence",
    kicker: "Look professional",
    services: ["Websites", "Domains", "Hosting", "Website care"],
    headline: "A website that's always looked after.",
    body: "Your website, your domain and the addresses people reach you on — kept current, secure and reliable, with no renewals or hosting for you to chase.",
    truth: "You always own your domain — and you can take everything with you.",
    ownership: ["You own your domain", "Everything stays portable", "No renewals to chase"],
  },
  {
    icon: "protection",
    kicker: "Stay protected",
    services: ["Backup", "Security", "Recovery"],
    headline: "Covered before anything goes wrong.",
    body: "Backup, security and a recovery plan, sorted before you need them — so a lost laptop or a bad email is a bad afternoon, not a bad month.",
    truth: "Recovery is the point — not just having a copy somewhere.",
    emphasizeTruth: true,
  },
  {
    icon: "automation",
    kicker: "Save time",
    services: ["AI", "Automation", "Copilot"],
    headline: "Less busywork, more business.",
    body: "Practical AI and automation that quietly take the repetitive admin off your plate.",
    truth: "Brought in when you're ready — never because it's the latest thing.",
    examples: ["Drafting", "Summarising", "Client updates", "Clean handovers"],
  },
];

// The page's memorable moment — an oversized editorial statement that
// answers breadth with reassurance ("yes, they do that too"), with the
// natural groupings reduced to a single confident line rather than a
// keyword grid.
export const breadthMoment = {
  statement: "Whatever you'd call it, we look after it.",
  groups: ["Communication", "Online presence", "Protection", "Smarter work", "Advice"],
};

// "How this usually starts" — the commercial model as a short journey
// (focused project → ongoing relationship), without naming a plan, tier or
// package, and without a process diagram.
export const engagementShape = {
  heading: "How this usually starts.",
  focused: {
    label: "A focused project",
    description: "A clear piece of work with a start and a finish — a new website, tighter security, or a move to something better.",
  },
  ongoing: {
    label: "An ongoing relationship",
    description: "Someone looking after the everyday technology for you — reliable, current, and one number to call when you need it.",
  },
  reassurance:
    "You don't need to work out which one you need before you get in touch — tell us what's going on, and we'll work out the right shape together.",
};

export interface ServiceFaq {
  q: string;
  a: string;
}

export const serviceFaqs: ServiceFaq[] = [
  {
    q: "What if I already have email and systems set up?",
    a: "That's fine — we can take over what you've got, or help you move to something cleaner. Either way, you end up with one place and one person responsible for it.",
  },
  {
    q: "What size of business is this for?",
    a: "We work best with businesses of around 1 to 25 people — small enough that one accountable operator makes sense, big enough that getting it right actually matters.",
  },
  {
    q: "Do you work remotely, or come on-site?",
    a: "Mostly remotely — most things don't need a visit. When something genuinely needs someone on-site, we'll say so and arrange it.",
  },
  {
    q: "What's outside what you do?",
    a: "Personal devices, home Wi-Fi and large on-prem server rooms aren't a fit for what we do. If that's most of what you need, we'll say so early rather than take it on anyway.",
  },
];
