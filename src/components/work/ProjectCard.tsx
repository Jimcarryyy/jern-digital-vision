import { ExternalLink } from "lucide-react";
import type { Project } from "@/content/work";
import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  "In progress": "text-primary border-primary/30 bg-primary/10",
  Shipped: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  Concept: "text-muted-foreground border-border bg-secondary",
};

interface ProjectCardProps {
  project: Project;
  expanded: boolean;
  onToggle: () => void;
  id?: string;
  compact?: boolean;
}

export function ProjectCard({
  project,
  expanded,
  onToggle,
  id,
  compact = false,
}: ProjectCardProps) {
  return (
    <article
      id={id ?? project.slug}
      className="rounded-xl border border-border bg-surface overflow-hidden transition-all hover:border-primary/40 hover:-translate-y-0.5 duration-300 scroll-mt-24"
    >
      <div className={cn("grid grid-cols-1", !compact && "lg:grid-cols-2")}>
        <div
          className={cn(
            "overflow-hidden bg-secondary",
            compact ? "aspect-video" : "aspect-video lg:aspect-auto lg:min-h-[280px]"
          )}
        >
          <img
            src={project.thumbnail}
            alt={project.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground">
              {project.name}
            </h2>
            <span
              className={cn(
                "font-mono text-xs px-2 py-1 rounded border shrink-0",
                statusStyles[project.status]
              )}
            >
              {project.status}
            </span>
          </div>
          <p className="text-muted-foreground leading-relaxed">{project.outcome}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            <span className="text-foreground/70">Role:</span> {project.role}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs text-muted-foreground px-2 py-1 rounded bg-secondary border border-border"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={onToggle}
            className="mt-6 text-sm font-medium text-primary hover:text-primary/80 transition-colors text-left"
            aria-expanded={expanded}
          >
            {expanded ? "Hide case study" : "Read case study"}
          </button>

          {expanded && (
            <div className="mt-4 space-y-4 border-t border-border pt-4 text-sm text-muted-foreground leading-relaxed">
              <div>
                <h3 className="font-medium text-foreground mb-1">Problem</h3>
                <p>{project.problem}</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Approach</h3>
                <p>{project.approach}</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Results</h3>
                <ul className="list-disc list-inside space-y-1">
                  {project.results.map((result) => (
                    <li key={result}>{result}</li>
                  ))}
                </ul>
              </div>
              <p>{project.description}</p>
              {project.link && (
                <a
                  href={project.link.url}
                  className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors"
                  onClick={(e) => project.link?.url === "#" && e.preventDefault()}
                >
                  {project.link.label}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
