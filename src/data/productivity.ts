// Microsoft 365 — managed. Four-tier ladder + comparison matrix.
//
// PRICING IS DRAFT. Figures come from the Atlas model (discovery-external.md):
//   Email Essentials $30/user/mo · Productivity Standard $90 · Premium $120.
// "Productivity Essentials" is not given an Atlas figure — $60 is an
// INTERPOLATED placeholder, flagged in the UI. Annual = 10x monthly
// (two months free); effective monthly = annual total / 12.

export interface Tier {
  id: string;
  name: string;
  who: string;
  monthly: number; // per user / month, Monthly Flex
  interpolated?: boolean; // figure not in the Atlas model
}

export const tiers: Tier[] = [
  {
    id: "email-essentials",
    name: "Email Essentials",
    who: "A professional mailbox on your own domain.",
    monthly: 30,
  },
  {
    id: "productivity-essentials",
    name: "Productivity Essentials",
    who: "Email plus the Microsoft 365 apps.",
    monthly: 60,
    interpolated: true,
  },
  {
    id: "productivity-standard",
    name: "Productivity Standard",
    who: "The full toolset, secured — and Copilot-ready.",
    monthly: 90,
  },
  {
    id: "productivity-premium",
    name: "Productivity Premium",
    who: "Everything, with managed backup included.",
    monthly: 120,
  },
];

// Derived price faces for a tier.
export function priceFaces(tier: Tier) {
  const annualTotal = tier.monthly * 10; // two months free
  const effectiveMonthly = Math.round((annualTotal / 12) * 100) / 100;
  return { monthly: tier.monthly, annualTotal, effectiveMonthly };
}

export interface MatrixRow {
  capability: string;
  // ordered to match `tiers`
  included: boolean[];
  note?: string;
}

export const matrix: MatrixRow[] = [
  { capability: "Managed Exchange mailbox", included: [true, true, true, true] },
  { capability: "Microsoft 365 apps (web)", included: [false, true, true, true] },
  { capability: "Microsoft 365 apps (desktop)", included: [false, true, true, true] },
  { capability: "Identity & access management", included: [true, true, true, true] },
  { capability: "Advanced threat protection", included: [false, false, true, true] },
  {
    capability: "Copilot eligible",
    included: [false, false, true, true],
    note: "Copilot needs at least Productivity Standard.",
  },
  {
    capability: "Managed backup (recovery)",
    included: [false, false, false, true],
    note: "Bundled in Premium; an add-on on other tiers.",
  },
  { capability: "Business-hours support", included: [true, true, true, true] },
];

export const includedExcluded = {
  included: [
    "The Microsoft 365 tenant, set up and governed by us",
    "Mailboxes, identity and access management",
    "Day-to-day operation and changes",
    "Business-hours support from someone who knows your tenant",
  ],
  excluded: [
    "Unlimited ad-hoc support for anything technology-shaped",
    "Personal devices, home Wi-Fi and printers",
    "One-off projects and migrations (these are consulting, quoted separately)",
    "On-prem servers and large legacy estates",
  ],
};
