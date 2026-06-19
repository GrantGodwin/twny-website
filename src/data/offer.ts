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

// "Why TWNY" — the homepage's emotional centre. Demonstrates the philosophy
// (we carry the complexity so clients don't have to) rather than asserting
// differentiation as a list of principles. The rotating terms are not the
// feature — they're a specimen of the complexity being carried.
export const rotatingTerms: string[] = [
  "DNS records",
  "SPF & DMARC",
  "SharePoint permissions",
  "Conditional Access",
  "Microsoft 365 licensing",
  "Backup retention",
  "SSL certificates",
  "Copilot licensing",
];

export interface PhilosophyPoint {
  title: string;
  body: string;
}

export const philosophy: PhilosophyPoint[] = [
  {
    title: "We translate.",
    body: "We explain technology in plain English, so you can make good decisions without needing to become an IT expert.",
  },
  {
    title: "We take ownership.",
    body: "When something needs attention, we deal with it. You do not need to coordinate suppliers or chase answers.",
  },
  {
    title: "We stay ahead.",
    body: "We raise risks, renewals and worthwhile improvements early, while they are still easy to deal with.",
  },
];
