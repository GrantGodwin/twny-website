// Consolidated pricing content. Two recurring modes only:
//   Annual Commitment (prepaid, 10x monthly = two months free) and
//   Monthly Flex (month-to-month, no lock-in). All ex-GST, AUD.
//
// PRICING IS DRAFT — pending Atlas sign-off. Figures from the Atlas model
// (discovery-external.md). Where a figure is not in the model it is marked.

export const draftNotice =
  "Draft pricing — figures from the Atlas model, pending sign-off. Not a quote.";

export const gstLine = "All prices are in Australian dollars and exclude GST.";

export interface AddOn {
  name: string;
  price: string;
  blurb: string;
  flag?: string;
}

export const addOns: AddOn[] = [
  {
    name: "Managed backup",
    price: "$12.50 /user/mo",
    blurb: "Managed recovery — bundled in Premium. Recovery is the product, not storage.",
  },
  {
    name: "Microsoft Copilot",
    price: "$40 /user/mo",
    blurb: "Managed licence plus scoped enablement. Needs at least Productivity Standard.",
    flag: "Microsoft list pricing is volatile — confirm before quoting.",
  },
  {
    name: "Domains & DNS",
    price: "Quoted per domain",
    blurb: "Registration, DNS, renewal and transfers. You are always the registrant of record.",
  },
];

export const onboarding = {
  name: "Foundation Setup",
  price: "$500 one-off",
  blurb:
    "Onboarding done once, properly — tenant, identity, DNS and handover. Waived when you start on an annual commitment.",
  flag: "Waiver rule shown is illustrative — confirm before publishing.",
};

export const consulting = {
  name: "Projects & advisory",
  price: "Quoted per project",
  blurb:
    "Migrations, rebuilds, security uplift and AI implementation. Scoped and quoted separately so the recurring service stays clean.",
};

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "Why is this more than a reseller?",
    a: "The licence is the cost; the managed wrapper is the product. We run the tenant, the DNS, the backup and the website as one operation, and you call one person who already knows your setup.",
  },
  {
    q: "Annual commitment or monthly flex?",
    a: "Annual commitment is prepaid at ten times the monthly price — two months free. Monthly flex is month-to-month with no lock-in. Same service either way; no hidden premium on monthly.",
  },
  {
    q: "Why ex-GST?",
    a: "All figures are in Australian dollars and exclude GST, stated once and never buried. GST is added at invoice.",
  },
  {
    q: "What's included, and where does it stop?",
    a: "Each service page lists what we run and what sits outside it. One-off projects are consulting, quoted separately, so the recurring service stays clean and predictable.",
  },
  {
    q: "Am I locked in?",
    a: "No. You own your domain, your data and your backups. You are always the registrant of record and can leave with everything, any time.",
  },
];
