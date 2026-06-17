// Homepage content: surface -> need pairs, the two clusters, and the
// "why we're different" principles. Public-only language.

export interface SurfaceNeed {
  surface: string;
  need: string;
}

// What the customer actually buys (surface) vs the underlying need.
export const surfaceNeeds: SurfaceNeed[] = [
  {
    surface: "A managed mailbox",
    need: "Someone to call when it breaks, who already knows your tenant.",
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
    surface: "Consulting",
    need: "A pragmatic technologist who understands small-business reality.",
  },
];

export interface OfferCluster {
  title: string;
  blurb: string;
  items: string[];
}

// Two clusters on one managed tenancy.
export const clusters: OfferCluster[] = [
  {
    title: "Run your business",
    blurb: "Microsoft 365 operations — email, files, identity and security.",
    items: ["Productivity (4 managed tiers)", "Backup as managed recovery", "Copilot / AI, readiness-first"],
  },
  {
    title: "Run your web presence",
    blurb: "The site and the addresses people find you by.",
    items: ["Web hosting & care", "Domains & DNS, always portable"],
  },
];

// Consulting sits beside the clusters as the named "safety valve".
export const consultingAside = {
  title: "Projects & advisory",
  blurb:
    "Migrations, rebuilds, security uplift, AI implementation — scoped and quoted separately so the recurring service stays clean.",
};

export interface Principle {
  title: string;
  blurb: string;
}

export const principles: Principle[] = [
  {
    title: "Boundaries protect quality",
    blurb: "We say what we do and what we don't. Clear scope is why the service stays good.",
  },
  {
    title: "Modern by default",
    blurb: "One tenant, one source of truth — set up the way it should be, not bolted together.",
  },
  {
    title: "Portability always",
    blurb: "You own your domain, data and backups. You can leave with everything, any time.",
  },
  {
    title: "Premium is clarity",
    blurb: "You can understand what you're paying for at a glance. That legibility is the product.",
  },
];
