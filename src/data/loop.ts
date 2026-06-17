// The operational loop — how every engagement runs.
// Used as the structural spine on the homepage (Mineral strip).
export interface LoopStep {
  name: string;
  blurb: string;
}

export const loop: LoopStep[] = [
  { name: "Discover", blurb: "We learn how you work and what you already have." },
  { name: "Recommend", blurb: "We suggest a clear starting point — nothing you don't need." },
  { name: "Quote", blurb: "A fixed price with the scope written down. No surprises." },
  { name: "Deliver", blurb: "We set it up on one tenant we own and look after." },
  { name: "Operate", blurb: "We run it day to day, and you call us when you need to." },
  { name: "Review", blurb: "We check it still fits and adjust as the business changes." },
];
