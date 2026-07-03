export const insightsPage = {
  hero: {
    eyebrow: "Insights",
    title: "Notes from the build",
    description:
      "Short updates on product decisions, tooling, and what we're learning as JERN takes shape.",
  },
  cta: {
    title: "Follow the build",
    description: "Get product updates in your inbox when we ship something worth reading.",
    primary: { label: "Join waitlist", path: "/newsletter" },
  },
} as const;

export interface InsightPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  comingSoon?: boolean;
  body?: string[];
}

export const posts: InsightPost[] = [
  {
    slug: "why-we-chose-vite",
    title: "Why we standardised on Vite for client projects",
    excerpt:
      "Fast HMR, predictable builds, and first-class TypeScript — our reasoning for picking Vite over heavier frameworks for marketing and app shells.",
    date: "Coming soon",
    readTime: "5 min read",
    comingSoon: true,
    body: [
      "We're drafting this post — it will cover our criteria for framework selection, how Vite fits marketing sites vs. full apps, and the deployment setup we use on Vercel.",
    ],
  },
  {
    slug: "design-tokens-in-practice",
    title: "Design tokens that survive handoff",
    excerpt:
      "How we structure CSS variables and Tailwind config so designers and developers aren't fighting over hex codes six weeks in.",
    date: "Coming soon",
    readTime: "7 min read",
    comingSoon: true,
    body: [
      "Topics we'll cover: naming conventions, syncing Figma variables to code, and when to reach for component-level tokens vs. global primitives.",
    ],
  },
  {
    slug: "early-access-cohort",
    title: "Opening our first design-partner cohort",
    excerpt:
      "What early access means for JERN, who it's for, and what partners get in exchange for feedback during the build.",
    date: "Coming soon",
    readTime: "4 min read",
    comingSoon: true,
    body: [
      "We're looking for 3–5 teams building digital products who want a hands-on studio partner. Partners get priority access, direct input on our toolkit, and discounted project rates.",
    ],
  },
];
