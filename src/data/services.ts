// Services page content, structured around the two ways TWNY works:
// Managed Technology (ongoing responsibility) and Professional Services
// (defined project, advisory and specialist work).
//
// NO PRICING. No prices, rates, tiers, "from" figures or comparison matrices.
// The commercial model is explained structurally; numbers are put in front of a
// customer in conversation and in a proposal, never on the public site.
//
// The customer-level story leads. Internal service taxonomy stays internal —
// the reader should understand what TWNY takes on, not how TWNY files it.

export interface Engagement {
  label: string;
  name: string;
  line: string;
}

/** The two rows in the Services hero — the page's whole structure in two lines. */
export const engagementRows: Engagement[] = [
  {
    label: "Ongoing",
    name: "Managed Technology",
    line: "We take responsibility for the technology your business runs on, and keep it running.",
  },
  {
    label: "Project-based",
    name: "Professional Services",
    line: "We take on defined projects, advisory work and the problems that need specialist attention.",
  },
];

// --- Managed Technology -----------------------------------------------------

export interface AreaGroup {
  label: string;
  line: string;
}

export interface ServiceLevel {
  name: string;
  body: string;
}

export const managed: {
  eyebrow: string;
  heading: string;
  body: string[];
  areasHeading: string;
  areas: AreaGroup[];
  levelsHeading: string;
  levelsLede: string;
  levels: ServiceLevel[];
  ownership: string;
} = {
  eyebrow: "Managed Technology",
  heading: "Someone whose job it is to own your technology.",
  body: [
    "Most small businesses end up with technology spread across a handful of providers, none of whom are responsible for the whole thing. Managed Technology is the opposite arrangement: we take on the environment as a whole and stay responsible for it.",
    "That means the everyday things are handled without being asked, the things that need deciding get raised early, and when something goes wrong there is one place to call — not a queue, and not a hand-off to whoever set it up originally.",
  ],
  areasHeading: "What we take on.",
  areas: [
    {
      label: "Microsoft 365",
      line: "Email, files, Teams and calendars — set up properly and kept that way.",
    },
    {
      label: "Devices",
      line: "Laptops and desktops, enrolled, updated and consistent across the team.",
    },
    {
      label: "Identity and access",
      line: "Accounts, permissions and sign-in security, including people joining and leaving.",
    },
    {
      label: "Security and backup",
      line: "Protection, backup and a recovery position that has actually been thought through.",
    },
    {
      label: "Suppliers and renewals",
      line: "Providers, subscriptions and renewals coordinated, so you're not chasing them.",
    },
    {
      label: "Websites and domains",
      line: "Kept current and reliable, where they form part of the environment we look after.",
    },
  ],
  levelsHeading: "Different businesses need different levels of responsibility.",
  levelsLede:
    "Managed Technology scales with how much your business leans on its technology. You don't need to work out which one you are before talking to us — that's part of the conversation.",
  levels: [
    {
      name: "Core",
      body: "The essentials, looked after properly. Day-to-day support, Microsoft 365 and devices managed, and the routine maintenance that keeps everything stable.",
    },
    {
      name: "Business",
      body: "Broader responsibility for the whole environment — security, backup, identity and suppliers handled together, with regular attention rather than reactive fixes.",
    },
    {
      name: "Strategic",
      body: "The above, plus a planning relationship. Technology decisions, forward planning and someone across the detail when the business changes shape.",
    },
  ],
  ownership:
    "Whatever the arrangement, what's yours stays yours. Domains stay registered in your name, your data can be exported, and you can take both with you. We don't hold onto customers with paperwork.",
};

// --- Professional Services --------------------------------------------------

export interface CapabilityGroup {
  title: string;
  body: string;
}

export const professional: {
  eyebrow: string;
  heading: string;
  body: string[];
  groups: CapabilityGroup[];
  bridge: string;
} = {
  eyebrow: "Professional Services",
  heading: "Sometimes you just need the problem solved.",
  body: [
    "Not everything belongs in an ongoing arrangement. A migration, a clean-up, a piece of research, a decision that needs someone independent to look at it properly — these have a beginning and an end, and we take them on as defined work with a written scope.",
  ],
  groups: [
    {
      title: "Advice and decisions",
      body: "Independent technology advice: what to do, what to leave alone, and what it will genuinely involve. Advice before products.",
    },
    {
      title: "Research and analysis",
      body: "Structured research and evidence-led analysis, written up as something a decision can actually be made from.",
    },
    {
      title: "Microsoft 365 and workplace projects",
      body: "Migrations, tenant clean-ups, SharePoint structure and permissions, and getting the workplace tools working the way the business actually works.",
    },
    {
      title: "AI and automation",
      body: "Practical automation applied to real processes — where it removes work, not where it sounds impressive.",
    },
    {
      title: "Digital presence",
      body: "Websites, domains and how the business presents itself online, built to be maintained rather than rebuilt every few years.",
    },
    {
      title: "Remediation and transition",
      body: "Untangling environments that have grown messy over time, and taking over from a previous provider cleanly.",
    },
  ],
  bridge:
    "You don't have to be a Managed Technology customer to bring us a project. And if you are one, the bigger or more specialist pieces of work sit here rather than being squeezed into the ongoing arrangement.",
};

// --- How working together goes ----------------------------------------------

export const howWeWork: {
  heading: string;
  steps: { title: string; body: string }[];
  footnote: string;
} = {
  heading: "Working together is simple.",
  steps: [
    {
      title: "Tell us what's happening.",
      body: "Whether it's one issue or everything at once.",
    },
    {
      title: "We'll work out what you need.",
      body: "We'll recommend the right approach, even if that's less work for us.",
    },
    {
      title: "Then we get on with it.",
      body: "Ongoing, as a project, or both — so you can get back to running the business.",
    },
  ],
  footnote:
    "You don't need to know exactly which service you need before getting in touch.",
};

// --- FAQ --------------------------------------------------------------------

export interface ServiceFaq {
  q: string;
  a: string;
}

export const serviceFaqs: ServiceFaq[] = [
  {
    q: "Do I have to sign up for ongoing support to work with you?",
    a: "No. Plenty of work starts as a single project — a migration, a clean-up, a piece of research, a website. If an ongoing arrangement makes sense afterwards, we'll talk about it then rather than making it a condition up front.",
  },
  {
    q: "How does the commercial side work?",
    a: "Managed Technology is a regular ongoing arrangement, scoped to your environment and the level of responsibility you need. Project work is quoted up front against a written scope. We'll put real numbers in front of you once we understand what you actually need.",
  },
  {
    q: "What if I already have systems set up?",
    a: "That's normal, and it's fine. We can take over what you've got, tidy it up, or move you to something cleaner — and we'll tell you which of those we think it needs. Either way you end up with one place responsible for it.",
  },
  {
    q: "What size of business is this for?",
    a: "Small and mid-sized Australian businesses. If you're big enough to depend on your technology but not big enough to want an IT department of your own, that's the fit.",
  },
  {
    q: "Do you work remotely, or come on-site?",
    a: "Mostly remotely — most things genuinely don't need a visit. When something does, we'll say so and arrange it.",
  },
  {
    q: "What's outside what you do?",
    a: "Personal devices, home networks and large legacy server rooms aren't what we're built for. If that's most of what you need, we'll say so early rather than take it on anyway.",
  },
];
