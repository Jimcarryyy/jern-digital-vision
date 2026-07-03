export const site = {
  name: "JERN",
  tagline: "Digital product studio",
  description:
    "JERN builds focused digital products — clear design, solid engineering, and an honest process from idea to ship.",
  url: "https://jern.dev",
  nav: [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "Process", path: "/process" },
    { name: "About", path: "/about" },
    { name: "Insights", path: "/insights" },
    { name: "Contact", path: "/contact" },
  ],
  navCta: { label: "Join waitlist", path: "/newsletter" },
  footer: {
    links: [
      { name: "Work", path: "/work" },
      { name: "Process", path: "/process" },
      { name: "About", path: "/about" },
      { name: "Insights", path: "/insights" },
      { name: "Contact", path: "/contact" },
      { name: "Waitlist", path: "/newsletter" },
    ],
    copyright: `© ${new Date().getFullYear()} JERN. All rights reserved.`,
    credit: "Site designed & built by Jimcarry Omambak",
  },
} as const;
