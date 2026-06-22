// Services page content — the homepage's second chapter. Its job is
// reassurance, not a catalogue: that we can look after your business, that
// we know what we're doing, and that getting in touch is the obvious next
// step. Business language, calm and confident. No pricing anywhere.

export interface ServiceCapability {
  /** The capability's visual identity (the homepage's line marks). */
  icon: "communication" | "presence" | "protection" | "automation";
  /** Capability title — the hero rows. */
  title: string;
  /** One supporting sentence for the hero rows. */
  heroLine: string;
  /** The deep section's outcome headline. */
  headline: string;
  /** One plain-language paragraph. */
  body: string;
  /** One single reassurance statement. */
  reassurance: string;
}

export const serviceCapabilities: ServiceCapability[] = [
  {
    icon: "communication",
    title: "Work smoothly",
    heroLine: "Email, files and collaboration that simply work.",
    headline: "Email and files that just work.",
    body: "Business email, shared files and collaboration quietly looked after, so your team always works from the same place and you only need one person to call when something changes.",
    reassurance: "You ask once. It's handled.",
  },
  {
    icon: "presence",
    title: "Look professional",
    heroLine: "A website and online presence you never have to chase.",
    headline: "A website that's always looked after.",
    body: "Your website, domain and hosting kept current, secure and reliable, so your business always looks professional without you needing to think about it.",
    reassurance: "You always own your domain.",
  },
  {
    icon: "protection",
    title: "Stay protected",
    heroLine: "Security, backup and recovery planned before you need them.",
    headline: "Covered before anything goes wrong.",
    body: "Backup, security and recovery planned in advance, so small problems stay small and your business keeps moving.",
    reassurance: "Recovery matters more than storage.",
  },
  {
    icon: "automation",
    title: "Save time",
    heroLine: "Practical AI and automation that removes repetitive work.",
    headline: "Less busywork. More business.",
    body: "Practical AI and automation that quietly removes repetitive admin, without changing how your team already works.",
    reassurance: "Introduced when it makes sense—not because it's fashionable.",
  },
];

// "The things we look after every day." — reassurance that yes, we do that.
// Five plain lists, no borders, no cards.
export interface EverydayGroup {
  label: string;
  items: string[];
}

export const everyday: { heading: string; lede: string; groups: EverydayGroup[] } = {
  heading: "The things we look after every day.",
  lede: "Most businesses call us for a handful of things. These are the ones that come up every week.",
  groups: [
    { label: "Communication", items: ["Business email", "Shared files", "Calendars", "Microsoft 365"] },
    { label: "Online presence", items: ["Websites", "Hosting", "Domains", "Website care"] },
    { label: "Protection", items: ["Backup", "Security", "Recovery"] },
    { label: "Smarter work", items: ["AI", "Automation", "Copilot"] },
    { label: "Advice", items: ["Planning", "Migrations", "Technology decisions", "Second opinions"] },
  ],
};

// "Working together is simple." — three columns, no arrows, no process diagram.
export const howWeWork: { heading: string; steps: { title: string; body: string }[]; footnote: string } = {
  heading: "Working together is simple.",
  steps: [
    { title: "Tell us what's happening.", body: "Whether it's one issue or everything at once." },
    { title: "We'll work out what you need.", body: "We'll recommend the right approach, even if that's less work for us." },
    { title: "Then we quietly look after it.", body: "So you can get back to running your business." },
  ],
  footnote: "You don't need to know exactly which service you need before getting in touch.",
};

export interface ServiceFaq {
  q: string;
  a: string;
}

export const serviceFaqs: ServiceFaq[] = [
  {
    q: "What if I already have email and systems set up?",
    a: "That's fine — we can take over what you've got, or help you move to something cleaner. Either way, you end up with one place and one person responsible for it.",
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
    a: "Personal devices, home Wi-Fi and large on-prem server rooms aren't a fit for what we do. If that's most of what you need, we'll say so early rather than take it on anyway.",
  },
];
