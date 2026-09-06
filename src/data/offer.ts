// Homepage content. Public-only language — plain, customer-subject, no slogans.
//
// NO PRICING. Prices, rates, tiers and "from" figures never appear on the public
// site — TWNY's commercial model is explained structurally and priced in
// conversation. Do not reintroduce pricing data here or anywhere in src/.
//
// LANGUAGE RULE (site-wide). TWNY owns the *problem* and stays accountable for
// it; the client owns its domains, data, systems and decisions. So: manage,
// look after, coordinate, stay accountable, deliver, solve, work through,
// advise, transition. Never "take ownership of", "own your technology" or
// "take on your environment" — those read as TWNY taking control away from the
// client. The one locked exception is the principle "We own the problem.",
// which is about responsibility, not property.

// "What we help with" — four plain-English areas of help, NOT four services.
// The two public service propositions are and remain Managed Technology and
// Professional Services; every card below aggregates work that appears on the
// Services page under one or both of them. Headings stay concrete and
// recognisable to a client ("Day-to-day technology"), never benefit-led
// marketing abstractions ("Work smoothly", "Unlock potential").
export interface Capability {
  icon: "devices" | "shield-check" | "browser" | "tree-structure";
  heading: string;
  body: string;
  /** Which Services-page work this card aggregates. Not rendered — it exists so
   *  the card set can be checked against the actual service model. */
  covers: string;
}

export const capabilities: Capability[] = [
  {
    icon: "devices",
    heading: "Day-to-day technology",
    body: "Microsoft 365, devices, accounts, networks, suppliers and renewals — managed together rather than as separate problems.",
    covers:
      "Microsoft 365, devices, routine identity and access, networks, connectivity, suppliers, subscriptions, renewals, ordinary ongoing administration.",
  },
  {
    icon: "shield-check",
    heading: "Security and continuity",
    body: "Security, access, backup and recovery — kept current and thought through before something goes wrong.",
    covers:
      "Cybersecurity administration, identity security, device protection, backup oversight, recovery planning.",
  },
  {
    icon: "browser",
    heading: "Websites and digital presence",
    body: "Websites, domains, hosting and online presence — kept current, credible and properly maintained.",
    covers:
      "Website operations, domains, hosting, ongoing digital presence, defined website or digital-presence projects.",
  },
  {
    icon: "tree-structure",
    heading: "Specialist projects and advice",
    body: "Research, technology decisions, workplace projects, automation and remediation — defined clearly and carried through.",
    covers:
      "Technology consulting, advisory, research, analysis, Microsoft 365 and workplace projects, AI and automation, remediation, transition, professional deliverables.",
  },
];

/** The one-line introduction above the four cards. */
export const capabilitiesLede =
  "We manage the everyday environment and bring specialist help when something needs to change.";

// "How we work" — the two engagement types, and there are only ever two.
// Prose only: the capability grid above already carries the "what", so this
// must not become a second feature list.
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
    line: "We manage the technology environment as a whole and stay accountable for keeping it working.",
    body: "We manage the technology environment as a whole — Microsoft 365, devices, security, backup, suppliers and the day-to-day decisions that keep it working.",
  },
  {
    label: "Project-based",
    name: "Professional Services",
    line: "We deliver defined projects, research and advice when something needs specialist attention.",
    body: "Defined projects, research and advice when something needs to be solved, improved or transitioned.",
  },
];

/** The one-line introduction above the two engagement types. */
export const engagementsLede =
  "Some clients need us to manage the environment. Others need a defined piece of work. Many use both.";

// "Why TWNY" — the homepage's emotional centre. Demonstrates the philosophy
// (we carry the complexity so clients don't have to) rather than asserting
// differentiation as a list of principles. The rotating terms are not the
// feature — they're a specimen of the complexity being carried.
//
// Each term must read grammatically after the fixed lead-in "You shouldn't need
// to understand…", so every entry is a noun clause, not a bare product name.
// Keep them short enough to sit on one line at 360px.
export const rotatingTerms: string[] = [
  "which licences you actually need",
  "how your devices stay secure",
  "who still has access",
  "whether your backups will restore",
  "which supplier owns the issue",
  "when your domains need renewing",
  "whether a security alert matters",
  "where automation would genuinely help",
];

export interface PhilosophyPoint {
  title: string;
  body: string;
}

export const philosophy: PhilosophyPoint[] = [
  {
    title: "The jargon stops with us.",
    body: "We translate the detail into a clear recommendation, the decision you need to make and what happens next.",
  },
  {
    // Locked heading. This is about owning the PROBLEM — responsibility and
    // accountability — never about owning the client's technology.
    title: "We own the problem.",
    body: "If a supplier or platform is involved, we coordinate it. We don't hand the problem back to you with another phone number.",
  },
  {
    title: "We notice before you do.",
    body: "Renewals, risks and the small things worth doing — raised early, while they're still straightforward to deal with.",
  },
];

// "Both halves, in practice." — factual client work, presented as a genuine
// split between the two engagement types.
//
// STRICT RULES, unchanged: named engagements only where naming is approved,
// described in safe capability themes, present tense where work is ongoing.
// NO quotes, NO quotation marks, NO named individuals, NO metrics, NO storage
// quantities, NO savings, NO claimed business outcomes, NO client logos, NO
// vendor logos, NO photography standing in for a client's premises. Nothing
// here implies a client has reviewed, approved or endorsed the wording — these
// descriptions are factual interim proof, and any quotation, logo or stronger
// outcome claim requires client approval first. If a line cannot be stood
// behind, delete it rather than soften it.
export interface WorkExample {
  client: string;
  summary: string;
  /** Short service pills. Restrained and consistent — not a tag cloud. */
  pills: string[];
}

export interface WorkGroup {
  /** One of the two engagement types. There is no third. */
  engagement: "Managed Technology" | "Professional Services";
  label: string;
  items: WorkExample[];
}

/** Two regions, one per engagement type. Deliberately not balanced by count:
 *  Managed Technology is shown through one substantial example, Professional
 *  Services through three shorter ones, because that is what the work is. */
export const workGroups: WorkGroup[] = [
  {
    engagement: "Managed Technology",
    label: "Ongoing",
    items: [
      {
        client: "Concrete Sales",
        summary:
          "Consolidating a long-standing environment onto managed Microsoft 365 and modern device management, while transitioning the business away from its final on-premises server.",
        pills: ["Microsoft 365", "Device management", "Infrastructure transition"],
      },
    ],
  },
  {
    engagement: "Professional Services",
    label: "Project-based",
    items: [
      {
        client: "Stiles Advisory",
        summary:
          "Commissioned market research and structured analysis, delivered as an evidence-led report designed to support a decision.",
        pills: ["Research and analysis", "Advisory"],
      },
      {
        client: "Baza Capital",
        summary:
          "SharePoint and Microsoft 365 remediation to resolve an existing storage and information-management problem.",
        pills: ["SharePoint", "Microsoft 365", "Remediation"],
      },
      {
        client: "Deller Constructions",
        summary:
          "Website rebuild and digital-presence work centred on presenting the business and its projects more clearly online.",
        pills: ["Website", "Digital presence"],
      },
    ],
  },
];

/** The one-line introduction above the work. States what the section is, and
 *  does not pre-emptively defend the absence of quotes and numbers. */
export const workLede =
  "Selected work across ongoing technology management and defined specialist projects.";
