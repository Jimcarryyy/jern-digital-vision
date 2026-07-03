export const aboutPage = {
  hero: {
    eyebrow: "About",
    title: "Built by developers who care about the details",
    description:
      "JERN started as a solo studio with a simple rule: ship less, but ship it right.",
  },
  story: {
    title: "Why JERN exists",
    paragraphs: [
      "Too many digital products look polished in a pitch deck and fall apart in production — inconsistent UI, vague requirements, and handoffs that lose context.",
      "JERN is the studio we wished existed: small enough to move fast, disciplined enough to document decisions, and honest about what's in scope.",
      "We're currently building our own product toolkit while taking on a limited number of design-partner projects.",
    ],
  },
  principles: [
    {
      title: "Clarity over cleverness",
      description: "Interfaces should explain themselves. If it needs a tooltip, simplify the UI.",
    },
    {
      title: "Show the work",
      description: "Preview links, commit history, and written rationale — not slide decks full of adjectives.",
    },
    {
      title: "Respect the craft",
      description: "Accessibility, performance, and maintainability are features, not stretch goals.",
    },
  ],
  team: {
    title: "The team",
    members: [
      {
        name: "Your name here",
        role: "Founder · Design & engineering",
        bio: "Replace with your bio — background, what you build, and why clients or employers should care.",
      },
    ],
  },
  cta: {
    title: "See what we're building",
    primary: { label: "View work", path: "/work" },
    secondary: { label: "Our process", path: "/process" },
  },
} as const;
