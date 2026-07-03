export const processPage = {
  hero: {
    eyebrow: "Process",
    title: "How we build",
    description:
      "A straightforward four-stage workflow — no mystery phases, no endless discovery decks.",
  },
  steps: [
    {
      number: "01",
      title: "Discover",
      description:
        "We map the problem, users, and success metrics in a short kickoff. You get a written scope and timeline before any pixels move.",
      deliverables: ["Problem brief", "Success metrics", "Timeline estimate"],
    },
    {
      number: "02",
      title: "Design",
      description:
        "Wireframes and high-fidelity flows in Figma, reviewed async. We design for real content and edge cases, not lorem ipsum.",
      deliverables: ["User flows", "UI kit", "Prototype"],
    },
    {
      number: "03",
      title: "Build",
      description:
        "Production code in your stack of choice. Weekly builds deployed to preview URLs so you can click through progress anytime.",
      deliverables: ["Preview deploys", "Component library", "Tests"],
    },
    {
      number: "04",
      title: "Ship",
      description:
        "Launch checklist, performance pass, and handoff docs. We stay on for two weeks post-launch to fix anything the real world surfaces.",
      deliverables: ["Production deploy", "Runbook", "Post-launch support"],
    },
  ],
  working: {
    title: "What working with JERN looks like",
    items: [
      {
        title: "Async by default",
        description: "Written updates, Loom walkthroughs, and shared Notion — no mandatory daily standups.",
      },
      {
        title: "Fixed milestones",
        description: "Each phase has a clear deliverable and sign-off before we move forward.",
      },
      {
        title: "You own the code",
        description: "Everything lives in your repo from day one. No vendor lock-in.",
      },
    ],
  },
  cta: {
    title: "Ready to start?",
    description: "Tell us about your product and we'll propose a scope within 48 hours.",
    primary: { label: "Get in touch", path: "/contact" },
  },
} as const;
