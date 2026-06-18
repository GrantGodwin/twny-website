// Homepage content. Public-only language — plain, customer-subject, no slogans.

// The hidden technology layer — the systems a business quietly depends on,
// named for recognition (purpose 2). Not a sales list; the visitor's own world.
export const hiddenLayer: string[] = [
  "The email, files and accounts your team works in every day.",
  "The website and domain people find you through.",
  "The backup you hope you'll never need — until you do.",
  "The small fixes and changes nobody has time for.",
];

// Trust principles (purpose 4) — plain promises, the customer as the subject.
export interface Principle {
  title: string;
  blurb: string;
}

export const principles: Principle[] = [
  {
    title: "You own everything",
    blurb:
      "Your domain, your data, your backups. You can leave any time and take all of it with you.",
  },
  {
    title: "We say where it stops",
    blurb:
      "Clear scope, written down. Knowing what we don't do is what keeps the work good.",
  },
  {
    title: "Set up properly",
    blurb:
      "One tenant, one source of truth — built the modern way, not bolted together over the years.",
  },
];
