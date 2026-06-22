// Services page content. The job of this page is confidence, not
// completeness: a visitor already warmed by the homepage, here to answer
// "can these people actually look after my business?". Copy is business
// language, not IT language — technology names appear only where they build
// confidence. No pricing, packages, plans, bundles or tiers anywhere.

// The four capabilities — same themes as the homepage, but each answers
// "what does this do for MY business?" rather than "what is this?". One
// consistent editorial shape across all four: icon, kicker, outcome
// headline, short explanation, one reassuring operational truth.
export interface ServiceCapability {
  /** The capability's visual identity (reused from the homepage's line marks). */
  icon: "communication" | "presence" | "protection" | "automation";
  /** The homepage capability name — used as a small kicker for continuity and structure. */
  kicker: string;
  /** The strong, scannable outcome — what having this handled means for the business. */
  headline: string;
  /** One short, plain-language explanation. */
  body: string;
  /** One reassuring operational truth, set apart with a Mineral rule. */
  truth: string;
}

export const serviceCapabilities: ServiceCapability[] = [
  {
    icon: "communication",
    kicker: "Work smoothly",
    headline: "Email and files that just work.",
    body: "Email, shared files and calendars on Microsoft 365 — set up properly and quietly kept that way, so your team always works from the same place.",
    truth: "Need something changed? You ask once, and it's handled.",
  },
  {
    icon: "presence",
    kicker: "Look professional",
    headline: "A website that's always looked after.",
    body: "Your website, your domain and the addresses people reach you on — kept current, secure and reliable, with no renewals or hosting for you to chase.",
    truth: "You always own your domain — and you can take everything with you.",
  },
  {
    icon: "protection",
    kicker: "Stay protected",
    headline: "Covered before anything goes wrong.",
    body: "Backup, security and a recovery plan, sorted before you need them — so a lost laptop or a bad email is a bad afternoon, not a bad month.",
    truth: "Recovery is the point. Not just having a copy somewhere.",
  },
  {
    icon: "automation",
    kicker: "Save time",
    headline: "Less busywork, more business.",
    body: "Practical AI and automation that take the repetitive admin off your plate — the drafting, the chasing, the jobs nobody enjoys.",
    truth: "Brought in when you're ready — never because it's the latest thing.",
  },
];

// "Whatever you'd call it, we look after it." — grouped reassurance, not an
// SEO keyword list. Plain business names, grouped the way an owner would
// think about them, so the read is "yes, they do that too".
export interface LookAfterGroup {
  label: string;
  items: string[];
}

export const lookAfter: { heading: string; lede: string; groups: LookAfterGroup[] } = {
  heading: "Whatever you'd call it, we look after it.",
  lede: "Grouped the way you'd actually think about it.",
  groups: [
    { label: "Communication", items: ["Business email", "Shared files", "Calendars", "Microsoft 365"] },
    { label: "Your online presence", items: ["Websites", "Domains", "Hosting", "Website care"] },
    { label: "Protection", items: ["Backup", "Security", "Recovery"] },
    { label: "Smarter work", items: ["AI", "Automation", "Copilot"] },
    { label: "Advice", items: ["A second opinion", "Planning ahead", "What to do next"] },
  ],
};

// "How this usually starts" — quietly introduces the commercial model (two
// ways to work with us) without naming a plan, tier or package. A focused
// project is usually the entry point; ongoing care is what it grows into.
export const engagementShape = {
  heading: "How this usually starts.",
  intro: "There are two ways to work with us — and most relationships move from the first to the second.",
  focused: {
    label: "A focused project",
    description:
      "A defined piece of work with a clear start and finish — a new website, tighter security, a move to something better, or getting backup and recovery sorted properly.",
  },
  ongoing: {
    label: "Ongoing care",
    description:
      "Someone looking after the everyday technology for you — so it stays reliable, stays current, and you've always got one number to call.",
  },
  reassurance:
    "You don't need to work out which one you need before you get in touch — tell us what's going on and we'll work out the right shape together.",
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
