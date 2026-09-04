// Homepage content. Public-only language — plain, customer-subject, no slogans.
//
// NO PRICING. Prices, rates, tiers and "from" figures never appear on the public
// site — TWNY's commercial model is explained structurally and priced in
// conversation. Do not reintroduce pricing data here or anywhere in src/.

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
    heading: "Work smarter.",
    body: "Practical automation and AI applied where it genuinely helps — less repetitive admin, fewer manual steps, and better use of the tools you already have.",
  },
];

// "Two ways we work" — the homepage's structural correction. TWNY is one
// business that does two complementary things: it takes ongoing responsibility
// for a technology environment, and it solves defined problems as project or
// advisory work. Neither is a sub-brand and the customer never has to pick a
// lane before getting in touch. Prose only — the capability grid below already
// carries the "what", so this section must not become a second feature list.
export interface Engagement {
  /** Small mono label — the engagement shape, not a product name. */
  label: string;
  name: string;
  /** One sentence, used in the Services hero rows. */
  line: string;
  /** The homepage paragraph. */
  body: string;
}

export const engagements: Engagement[] = [
  {
    label: "Ongoing",
    name: "Managed Technology",
    line: "We take ongoing responsibility for the technology your business depends on.",
    body: "We take on the technology your business depends on and keep it working — Microsoft 365, devices, identity and access, security, backup, suppliers and the decisions that come with them. One place to call, and people who already know how your business is put together.",
  },
  {
    label: "Project-based",
    name: "Professional Services",
    line: "We take on defined projects, advisory work and the harder problems.",
    body: "When there's a specific problem, project or decision, we take that on as a defined piece of work — advice and research, Microsoft 365 and workplace projects, automation, digital presence, or untangling something that has grown messy. You don't need an ongoing arrangement with us to bring us one.",
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

// "A sense of the work" — factual capability evidence, replacing the scaffold
// client-stories feature. STRICT RULES: named engagements only where naming is
// approved, described in safe capability themes, written in the present tense
// where work is ongoing. NO quotes, NO named individuals, NO metrics, NO logos,
// NO photography standing in for a client's premises. If a line here cannot be
// stood behind, delete it rather than soften it.
export interface WorkExample {
  client: string;
  /** Which of the two engagement shapes this sits in. */
  category: "Managed Technology" | "Professional Services";
  summary: string;
  tags: string[];
}

export const work: WorkExample[] = [
  {
    client: "Concrete Sales",
    category: "Managed Technology",
    summary:
      "Consolidating a long-standing environment onto managed Microsoft 365 and modern device management, and moving the business off its last on-premises server.",
    tags: ["Microsoft 365", "Devices", "Infrastructure modernisation"],
  },
  {
    client: "Baza Capital",
    category: "Managed Technology",
    summary:
      "Remediating SharePoint retention and storage inside a complex Microsoft 365 tenant, including escalation with Microsoft, alongside backup and continuity advice.",
    tags: ["Microsoft 365", "SharePoint", "Backup and continuity"],
  },
  {
    client: "Stiles Advisory / Brix Property Group",
    category: "Professional Services",
    summary:
      "Commissioned market research and structured analysis, delivered as an evidence-led report written to be decided from rather than read.",
    tags: ["Research and analysis", "Advisory"],
  },
  {
    client: "Deller Constructions",
    category: "Professional Services",
    summary:
      "Rebuilding the website and sharpening how the business presents itself online, replacing a dated digital presence.",
    tags: ["Digital presence", "Website"],
  },
];

// "Helping businesses like yours" — a living editorial feature, not a carousel.
// One client story is featured at a time (the emotional anchor), while the full
// roster of businesses stays visible and selectable (the recognition anchor).
// The featured story auto-advances and can be driven from the roster.
//
// ⚠ RETIRED — NOT RENDERED ANYWHERE. This scaffold is superseded by `work`
// above and by the "A sense of the work" homepage section. It is kept only so
// the ClientStories component (also unrendered) still type-checks for a future
// pass. It contains INVENTED PERSON NAMES and INVENTED QUOTES and images that
// are not the clients' premises. DO NOT RENDER ANY OF IT. Before this data or
// that component ever ships, every quote must be genuinely attributed and every
// image replaced with approved client photography.
//
// SCAFFOLD CONTENT. The copy below is placeholder/approved-for-scaffold and the
// `image` paths point at existing local files reused only as stand-ins — they
// are NOT the real client photography. Each story carries `image` + `imageAlt`
// fields built to be swapped for final, approved assets and copy later, without
// touching the component. Do NOT fabricate claims, quotes, or businesses beyond
// what is recorded here.
export interface Story {
  /** Company name — shown in the overlay and the roster. */
  name: string;
  type: string;
  lookedAfter: string[];
  outcome: string;
  quote: string;
  /** The individual who gave the quote, and their role. Shown as
   *  `person` over `role, company`. NOTE: the names below are SCAFFOLD
   *  placeholders for the three quotes we don't yet have a real name for —
   *  replace with the genuine person (or remove) before launch. */
  person: string;
  role: string;
  /** Replace with final approved client photography. Subject: the business or
   *  its work (built environment, workplace, practice, site) — never portraits,
   *  handshakes, headsets, or generic IT/office stock. Compose with the subject
   *  on the RIGHT of frame, leaving negative space on the left for the overlay. */
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
    person: "Dean Deller",
    role: "Director",
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
    person: "Craig Sturt",
    role: "Director",
    image: "/images/chapter-presence.webp",
    imageAlt:
      "Scaffold image — a branded financial-advice reception and workplace (placeholder for First Finance).",
  },
  {
    name: "Sinclair Brook",
    type: "Accounting & advisory",
    lookedAfter: ["Microsoft 365", "Security", "Compliance"],
    outcome: "So the team can focus on advice, not systems.",
    quote: "Reliable, responsive and always one step ahead.",
    person: "Michael Brook",
    role: "Partner",
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
    person: "Anthony Baza",
    role: "Director",
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
    person: "Rebecca Hayes",
    role: "Director",
    image: "/images/hero-lighthouse.webp",
    imageAlt:
      "Scaffold image — a speech pathology practice environment (placeholder for Speech Made Simple).",
  },
];
