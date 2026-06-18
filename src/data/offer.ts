// Homepage content. Public-only language — plain, customer-subject, no slogans.

// "What you're really buying" — surface the customer sees vs the underlying need.
export interface SurfaceNeed {
  surface: string;
  need: string;
}

export const surfaceNeeds: SurfaceNeed[] = [
  {
    surface: "A managed mailbox",
    need: "Someone to call when it breaks, who already knows your setup.",
  },
  {
    surface: "A website",
    need: "A presence that reflects the business and stays up.",
  },
  {
    surface: "Backup",
    need: "Insurance against the day you delete the wrong folder or get phished.",
  },
  {
    surface: "Domain management",
    need: "Certainty the domain you've owned for years won't lapse or get hijacked.",
  },
  {
    surface: "Advice",
    need: "A pragmatic technologist who understands small-business reality.",
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
