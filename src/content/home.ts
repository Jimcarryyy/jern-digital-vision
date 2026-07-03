export const home = {
  hero: {
    eyebrow: "Now in early development",
    title: "Software that earns trust on first use",
    highlight: "trust",
    description:
      "JERN is building a product studio toolkit — design systems, prototypes, and production apps shipped with the same rigor you'd expect from an in-house team.",
    primaryCta: { label: "Join the waitlist", path: "/newsletter" },
    secondaryCta: { label: "See our work", path: "/work" },
  },
  valueProps: [
    {
      title: "Design with constraints",
      description:
        "Every screen starts with a real user job and a measurable outcome — not a mood board.",
    },
    {
      title: "Engineering you can inspect",
      description:
        "Typed React, accessible components, and deploy pipelines you can read — no black boxes.",
    },
    {
      title: "Ship in visible stages",
      description:
        "Weekly milestones, async updates, and working builds — so you always know where things stand.",
    },
  ],
  proof: {
    eyebrow: "Early partners",
    label: "Partner logos and metrics coming soon",
  },
  featuredWork: {
    eyebrow: "Selected work",
    title: "Recent projects",
    description: "Product UI, marketing sites, and full-stack features — click a project to read the case study.",
    cta: { label: "View all work", path: "/work" },
  },
  cta: {
    title: "Get early access",
    description:
      "We're opening a small cohort of design partners. Join the waitlist to follow the build and request a preview.",
    primary: { label: "Join waitlist", path: "/newsletter" },
    secondary: { label: "Contact us", path: "/contact" },
  },
} as const;
