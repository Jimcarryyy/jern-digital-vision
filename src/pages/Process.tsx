import { processPage } from "@/content/process";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { CTABlock } from "@/components/layout/CTABlock";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren } from "@/components/motion/StaggerChildren";

const Process = () => {
  return (
    <>
      <Section className="pt-12 md:pt-20">
        <FadeUp>
          <SectionHeader
            eyebrow={processPage.hero.eyebrow}
            title={processPage.hero.title}
            description={processPage.hero.description}
          />
        </FadeUp>
      </Section>

      <Section className="pt-0">
        <div className="space-y-0">
          {processPage.steps.map((step, index) => (
            <FadeUp key={step.number} delay={index * 0.05}>
              <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 py-10 border-t border-border first:border-t-0">
                <p className="font-mono text-sm text-primary">{step.number}</p>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {step.deliverables.map((d) => (
                      <li
                        key={d}
                        className="font-mono text-xs text-muted-foreground px-3 py-1.5 rounded-full border border-border bg-secondary"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Section>

      <Section>
        <FadeUp>
          <SectionHeader title={processPage.working.title} />
        </FadeUp>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {processPage.working.items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-primary/40 hover:-translate-y-0.5 duration-300"
            >
              <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </StaggerChildren>
      </Section>

      <CTABlock
        title={processPage.cta.title}
        description={processPage.cta.description}
        primary={processPage.cta.primary}
      />
    </>
  );
};

export default Process;
