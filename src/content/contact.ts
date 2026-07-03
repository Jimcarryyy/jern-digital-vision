export const contactPage = {
  hero: {
    eyebrow: "Contact",
    title: "Let's talk",
    description:
      "Early access, partnerships, or press — send a note and we'll reply within two business days.",
  },
  info: {
    email: "hello@jern.dev",
    responseTime: "We typically respond within 48 hours.",
  },
  intents: [
    { value: "early-access", label: "Early access" },
    { value: "partnership", label: "Partnership" },
    { value: "press", label: "Press" },
    { value: "other", label: "Other" },
  ],
} as const;
