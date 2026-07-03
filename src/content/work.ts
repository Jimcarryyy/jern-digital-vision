export type ProjectStatus = "In progress" | "Shipped" | "Concept";

export interface Project {
  slug: string;
  name: string;
  outcome: string;
  role: string;
  stack: string[];
  status: ProjectStatus;
  thumbnail: string;
  problem: string;
  approach: string;
  results: string[];
  description: string;
  link?: { label: string; url: string };
}

export const workPage = {
  hero: {
    eyebrow: "Work",
    title: "Selected projects",
    description:
      "A sample of what we build — product UI, marketing sites, and full-stack features. Replace these with your own case studies in src/content/work.ts.",
  },
  cta: {
    title: "Want to build together?",
    description: "Tell us about your product and we'll reply within two business days.",
    primary: { label: "Request early access", path: "/contact" },
  },
} as const;

export const projects: Project[] = [
  {
    slug: "project-alpha",
    name: "Project Alpha",
    outcome: "Internal design system and component library for a SaaS dashboard",
    role: "Design + frontend",
    stack: ["React", "TypeScript", "Tailwind", "Storybook"],
    status: "In progress",
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&auto=format&fit=crop",
    problem:
      "A growing SaaS team was shipping UI faster than their design system could keep up — inconsistent buttons, spacing drift, and no shared documentation.",
    approach:
      "Audited existing screens, extracted token primitives, and built a React component library with Storybook docs and accessibility checks on every component.",
    results: [
      "40+ documented components with usage guidelines",
      "Shared token layer synced between Figma and Tailwind",
      "Reduced UI review cycles from days to hours",
    ],
    description:
      "Ongoing engagement to extend the system as new product surfaces ship. Next milestone: data-table patterns and form validation states.",
  },
  {
    slug: "project-beta",
    name: "Project Beta",
    outcome: "Marketing site with CMS integration and sub-second LCP",
    role: "Full-stack",
    stack: ["Vite", "React", "Vercel", "Sanity CMS"],
    status: "Concept",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
    problem:
      "A startup needed a marketing site their non-technical team could update without touching code, while hitting strict performance budgets for launch.",
    approach:
      "Headless CMS for content, static generation for pages, and image optimization pipeline. Design system reused from product work for brand consistency.",
    results: [
      "Content editors publish without developer help",
      "Target LCP under 1.2s on 4G",
      "Preview deploys on every CMS save",
    ],
    description:
      "Currently in discovery — scoping content model and migration from their existing WordPress setup.",
    link: { label: "View prototype", url: "#" },
  },
  {
    slug: "project-gamma",
    name: "Project Gamma",
    outcome: "Mobile-first checkout flow with measurable conversion lift",
    role: "Product engineering",
    stack: ["Next.js", "Stripe", "PostgreSQL", "Vercel"],
    status: "Shipped",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
    problem:
      "Mobile checkout abandonment was high — too many steps, unclear error states, and a payment form that broke on smaller screens.",
    approach:
      "Reduced steps from five to three, inline validation, Apple Pay / Google Pay support, and skeleton loading states to prevent layout shift.",
    results: [
      "18% lift in mobile checkout completion (A/B over 6 weeks)",
      "CLS score improved from 0.18 to 0.02",
      "Support tickets for payment errors down 34%",
    ],
    description:
      "Shipped to production with feature flags for gradual rollout. Handoff included runbook and monitoring dashboards.",
    link: { label: "Case study (PDF)", url: "#" },
  },
];
