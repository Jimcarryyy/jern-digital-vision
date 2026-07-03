import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { home } from "@/content/home";
import { projects } from "@/content/work";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { StaggerChildren } from "@/components/motion/StaggerChildren";
import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  "In progress": "text-primary border-primary/30 bg-primary/10",
  Shipped: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  Concept: "text-muted-foreground border-border bg-secondary",
};

export function FeaturedWorkSection() {
  const featured = projects.slice(0, 2);

  return (
    <Section>
      <SectionHeader
        eyebrow={home.featuredWork.eyebrow}
        title={home.featuredWork.title}
        description={home.featuredWork.description}
      />
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {featured.map((project) => (
          <Link
            key={project.slug}
            to={`/work#${project.slug}`}
            className="group block rounded-xl border border-border bg-surface overflow-hidden transition-all hover:border-primary/40 hover:-translate-y-0.5 duration-300"
          >
            <div className="aspect-video overflow-hidden bg-secondary">
              <img
                src={project.thumbnail}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between gap-4 mb-3">
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <span
                  className={cn(
                    "font-mono text-xs px-2 py-1 rounded border shrink-0",
                    statusStyles[project.status]
                  )}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.outcome}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-muted-foreground px-2 py-1 rounded bg-secondary border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </StaggerChildren>
      <Link
        to={home.featuredWork.cta.path}
        className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
      >
        {home.featuredWork.cta.label}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </Section>
  );
}
