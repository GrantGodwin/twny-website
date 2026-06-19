// Homepage content. Public-only language — plain, customer-subject, no slogans.

// "What we look after" — four capability columns, icon + heading + body.
export interface Capability {
  icon: "communication" | "presence" | "protection" | "automation";
  heading: string;
  body: string;
}

export const capabilities: Capability[] = [
  {
    icon: "communication",
    heading: "Work smoothly.",
    body: "Email, Microsoft 365, files, calendars and collaboration — all working together, quietly maintained and ready whenever you need them.",
  },
  {
    icon: "presence",
    heading: "Look professional.",
    body: "A professional presence online that earns trust at first glance — current, reliable, and looked after without you needing to think about it.",
  },
  {
    icon: "protection",
    heading: "Stay protected.",
    body: "Backup, security and recovery planned before you need them, so small problems don't become business problems.",
  },
  {
    icon: "automation",
    heading: "Save time.",
    body: "Practical AI and automation that take repetitive work off your plate, simplify everyday tasks and help things run more efficiently — without the hype.",
  },
];

// The offer — two recurring clusters plus advisory, as three panels.
export interface OfferCard {
  title: string;
  blurb: string;
  items?: string[];
  accent?: "mineral" | "ember";
}

export const offerCards: OfferCard[] = [
  {
    title: "Run your business",
    blurb: "Microsoft 365 operations — email, files, identity and security.",
    items: [
      "Productivity, in four managed tiers",
      "Backup as managed recovery",
      "Copilot and AI, introduced when you're ready",
    ],
    accent: "mineral",
  },
  {
    title: "Run your web presence",
    blurb: "The website and the addresses people find you by.",
    items: ["Web hosting and care", "Domains and DNS, always portable"],
    accent: "mineral",
  },
  {
    title: "Projects & advisory",
    blurb:
      "Migrations, rebuilds, security uplift, AI implementation — scoped and quoted separately, so the recurring service stays clean.",
    accent: "ember",
  },
];

// "How we work" — three enduring statements about the relationship itself,
// not the delivery process. No sequence, no stages.
export interface ConsistencyPoint {
  heading: string;
  body: string;
}

export const consistency: ConsistencyPoint[] = [
  {
    heading: "You're not starting over.",
    body: "You'll always deal with someone who already understands your setup — not a new name, a new ticket and a new explanation every time something comes up.",
  },
  {
    heading: "No invoice you didn't see coming.",
    body: "The price and scope are agreed before work starts. If something changes, we talk about it first.",
  },
  {
    heading: "Problems surface early.",
    body: "Renewals, risks and worthwhile improvements are raised while they're still small, so you're never the last to know.",
  },
];

// "Why we're different" — four principles, plain and customer-subject.
export interface Principle {
  title: string;
  blurb: string;
}

export const principles: Principle[] = [
  {
    title: "Boundaries protect quality",
    blurb:
      "We say what we do and what we don't. Clear scope is why the service stays good.",
  },
  {
    title: "Modern by default",
    blurb:
      "One setup, one source of truth — built the way it should be, not bolted together.",
  },
  {
    title: "Portability always",
    blurb:
      "You own your domain, data and backups. You can leave with everything, any time.",
  },
  {
    title: "Clarity you can see",
    blurb:
      "You can understand what you're paying for at a glance. That clarity is part of the product.",
  },
];
