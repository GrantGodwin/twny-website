// Services page content. The four capability themes (matching the homepage's
// "What we look after") drive two things: the hero capability map — a
// scannable, grouped index of recognisable technologies — and the deeper
// editorial sections beneath it. `tech` feeds the hero map (recognition);
// `lead` / `body` / `moment` feed the deep section (meaning and trust). No
// pricing, packages, plans, bundles or tiers anywhere here.

export interface ServiceCapability {
  /** Matches CapabilityIcon's name prop — the capability's visual identity in both the hero map and its deep section. */
  icon: "communication" | "presence" | "protection" | "automation";
  heading: string;
  /** Recognisable headline technologies — shown grouped under this capability in the hero map, in Mineral. */
  tech: string[];
  /** A short distillation, above the body. */
  lead: string;
  body: string;
  /** Varies the deep section's shape so the four rows don't share one rhythm. */
  layout: "standard" | "woven" | "quote" | "compact";
  /** Substrings of `body` rendered as Mineral inline accents (named technologies pulled forward for trust). */
  highlight?: string[];
  /** Closing emphasis — omitted for the lightest (compact) row. */
  moment?: {
    label: string;
    body: string;
  };
}

export const serviceCapabilities: ServiceCapability[] = [
  {
    icon: "communication",
    heading: "Work smoothly.",
    tech: ["Microsoft 365", "Email", "Teams", "SharePoint"],
    lead: "The everyday tools your team relies on, just running properly.",
    layout: "standard",
    body: "Email, files and calendars on Microsoft 365 — Exchange and identity set up, secured and kept current, so everyone works from the same place. When something needs changing, you tell us once.",
    highlight: ["Exchange"],
    moment: {
      label: "What we keep out of your way",
      body: "Personal devices, home Wi-Fi and printers sit outside this — we're upfront about that rather than stretching to cover everything.",
    },
  },
  {
    icon: "presence",
    heading: "Look professional.",
    tech: ["Websites", "Hosting", "Domains"],
    lead: "A presence online that earns trust at first glance.",
    layout: "woven",
    body: "Your website and the addresses people find you by — hosting, DNS and SSL kept in order, so the site stays fast and current and you never have to think about a renewal.",
    highlight: ["DNS", "SSL"],
    moment: {
      label: "When this is working well",
      body: "You stop thinking about your website at all — it's simply there whenever someone looks your business up. You're always the registrant of record, and everything is portable if you ever need to move it.",
    },
  },
  {
    icon: "protection",
    heading: "Stay protected.",
    tech: ["Backup", "Security", "Recovery"],
    lead: "Recovery, planned before you ever need it.",
    layout: "quote",
    body: "Backup, security and recovery, sorted out in advance — because recovery is the product here, not storage. You own your data and your backups either way.",
    moment: {
      label: "A typical example",
      body: "A laptop is lost, a mailbox is compromised, or a ransomware email gets through. Because recovery is already planned, it's a bad afternoon — not a bad month.",
    },
  },
  {
    icon: "automation",
    heading: "Save time.",
    tech: ["Copilot", "Automation", "AI"],
    lead: "Practical automation, without the hype.",
    layout: "compact",
    body: "AI and automation that take repetitive work off your plate — drafting, summarising, the repeat admin nobody enjoys, client updates that go out on time. Tools like Copilot come in when you're ready, never because they're new.",
    highlight: ["Copilot"],
  },
];

// "How this usually starts" — quietly introduces the commercial model (two
// ways to work with us) without naming a plan, tier or package. A focused
// project is usually the entry point; ongoing care is what it tends to grow
// into — a relationship, not two equal menu options.
export const engagementShape = {
  heading: "How this usually starts.",
  intro: "There are two ways to work with us — and most relationships move from the first to the second.",
  focused: {
    label: "A focused project",
    description:
      "A defined piece of work with a clear scope and a clear finish — a website rebuild, a security uplift, a migration, getting backup and recovery sorted properly.",
  },
  ongoing: {
    label: "Ongoing care",
    description:
      "Continuous responsibility for the technology your business depends on — email, files, websites, backup, security and renewals, looked after quietly so nothing slips.",
  },
  reassurance:
    "You don't need to know which one you're after before you get in touch — tell us what's going on and we'll work out the right shape together.",
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
    a: "Mostly remotely — most things don't need a visit. When something genuinely needs someone on-site, we'll say so and arrange it.",
  },
  {
    q: "What's outside what you do?",
    a: "Personal devices, home Wi-Fi, and large on-prem server estates aren't a fit for what we do. If that's most of what you need, we'll say so early rather than take it on anyway.",
  },
];
