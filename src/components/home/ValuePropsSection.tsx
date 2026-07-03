import { home } from "@/content/home";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { StaggerChildren } from "@/components/motion/StaggerChildren";

export function ValuePropsSection() {
  return (
    <Section id="values">
      <SectionHeader
        eyebrow="Why JERN"
        title="Built for products that need to ship"
        description="Three principles that guide every project — replace with your own when ready."
      />
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {home.valueProps.map((prop) => (
          <div
            key={prop.title}
            className="rounded-xl border border-border bg-surface p-6 md:p-8 transition-colors hover:border-primary/40 hover:-translate-y-0.5 duration-300"
          >
            <h3 className="font-display text-lg font-semibold text-foreground">{prop.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{prop.description}</p>
          </div>
        ))}
      </StaggerChildren>
    </Section>
  );
}
