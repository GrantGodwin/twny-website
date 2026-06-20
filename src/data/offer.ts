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

// "Helping businesses like yours" — a living editorial feature, not a carousel.
// One client story is featured at a time (the emotional anchor), while the full
// roster of businesses stays visible and selectable (the recognition anchor).
// The featured story auto-advances and can be driven from the roster.
//
// SCAFFOLD CONTENT. The copy below is placeholder/approved-for-scaffold and the
// `image` paths point at existing local files reused only as stand-ins — they
// are NOT the real client photography. Each story carries `image` + `imageAlt`
// fields built to be swapped for final, approved assets and copy later, without
// touching the component. Do NOT fabricate claims, quotes, or businesses beyond
// what is recorded here.
export interface Story {
  name: string;
  type: string;
  lookedAfter: string[];
  outcome: string;
  quote: string;
  attribution: string;
  /** Replace with final approved client photography. Subject: the business or
   *  its work (built environment, workplace, practice, site) — never portraits,
   *  handshakes, headsets, or generic IT/office stock. */
  image: string;
  imageAlt: string;
}

export const stories: Story[] = [
  {
    name: "Deller Constructions",
    type: "Residential construction",
    lookedAfter: ["Website", "Microsoft 365", "Ongoing support"],
    outcome: "So the builders can focus on building.",
    quote: "Grant just gets it done. We don't think about IT anymore.",
    attribution: "Dean Deller, Director",
    image: "/images/chapter-craft.webp",
    imageAlt:
      "Scaffold image — a completed residential construction project (placeholder for Deller Constructions).",
  },
  {
    name: "First Finance",
    type: "Financial advice",
    lookedAfter: ["Microsoft 365", "Security", "Devices"],
    outcome: "So advisers can focus on clients.",
    quote: "Genuinely easy to work with.",
    attribution: "Craig Sturt, Director",
    image: "/images/chapter-presence.webp",
    imageAlt:
      "Scaffold image — a branded financial-advice reception and workplace (placeholder for First Finance).",
  },
  {
    name: "Sinclair Brook",
    type: "Accounting & advisory",
    lookedAfter: ["Microsoft 365", "Security", "Backup", "Compliance"],
    outcome: "So the team can focus on advice, not systems.",
    quote: "Reliable, responsive and always one step ahead.",
    attribution: "Partner, Sinclair Brook",
    image: "/images/chapter-calm.webp",
    imageAlt:
      "Scaffold image — an accounting and advisory practice at work (placeholder for Sinclair Brook).",
  },
  {
    name: "Baza Property Group",
    type: "Property advisory",
    lookedAfter: ["Microsoft 365", "Web presence", "Security"],
    outcome: "So the business presents professionally and keeps moving.",
    quote: "Technology feels handled, not handed back to us.",
    attribution: "Director, Baza Property Group",
    image: "/images/hero.webp",
    imageAlt:
      "Scaffold image — a property advisory business and its environment (placeholder for Baza Property Group).",
  },
  {
    name: "Speech Made Simple",
    type: "Speech pathology",
    lookedAfter: ["Microsoft 365", "AI workflows", "Practice systems"],
    outcome: "So clinicians can spend more time with people.",
    quote: "Our clinicians get the tech that actually helps.",
    attribution: "Director, Speech Made Simple",
    image: "/images/hero-lighthouse.webp",
    imageAlt:
      "Scaffold image — a speech pathology practice environment (placeholder for Speech Made Simple).",
  },
];
