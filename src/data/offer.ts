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
    title: "The jargon stops with us.",
    body: "DNS records, licensing tiers, security settings — we carry the detail, so you only ever need the plain answer.",
  },
  {
    title: "We own the problem.",
    body: "When something needs fixing, we fix it. No supplier to chase, no ticket to escalate, no one else to call.",
  },
  {
    title: "We notice before you do.",
    body: "Renewals, risks and the small things worth doing — we raise them early, while they're still easy to deal with.",
  },
];

// "Helping businesses like yours" — recognisable business snapshots, not case
// studies. Each is deliberately small: a business type, the few things we
// quietly look after for it, and one plain outcome. A genuine one-line
// testimonial may sit beneath as supporting evidence — never the headline, and
// always optional. Where no real testimonial exists yet, the field is simply
// omitted and the snapshot still reads completely. Do NOT invent testimonials,
// outcomes, or business types to fill this list; it grows only as real ones
// become available.
export interface Snapshot {
  type: string;
  lookedAfter: string[];
  outcome: string;
  testimonial?: { quote: string; attribution: string };
}

export const snapshots: Snapshot[] = [
  {
    type: "Construction",
    lookedAfter: ["Website", "Microsoft 365", "Ongoing support"],
    outcome: "So builders can focus on building.",
    testimonial: {
      quote: "Grant just gets it done. We don't think about IT anymore.",
      attribution: "Dean, Deller Constructions",
    },
  },
  {
    type: "Financial Advice",
    lookedAfter: ["Security", "Devices", "Microsoft 365"],
    outcome: "So advisers can focus on clients.",
    testimonial: {
      quote: "Genuinely easy to work with.",
      attribution: "Craig, First Finance",
    },
  },
  {
    type: "Speech Pathology",
    lookedAfter: ["AI", "Microsoft 365", "Practice systems"],
    outcome: "So clinicians spend more time with people.",
  },
  {
    type: "Conveyancing",
    lookedAfter: ["Email", "Documents", "Backups"],
    outcome:
      "So settlements don't depend on someone remembering where everything lives.",
  },
];
