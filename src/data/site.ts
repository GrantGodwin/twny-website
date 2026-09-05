// Single source of truth for how people reach us.
//
// There is no contact form: this deployment is a static build with no server
// runtime and no mail-sending credentials, so email is the working path. Every
// call to action across the site therefore points at the same address, defined
// once here rather than repeated in six components.
export const email = "hello@twny.com.au";

/**
 * Prefilled subject so an enquiry arrives already labelled, and the sender
 * isn't looking at an empty compose window. Encoded because the subject
 * contains a space.
 */
export const mailto = `mailto:${email}?subject=${encodeURIComponent("Website enquiry")}`;
