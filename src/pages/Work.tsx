import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { workPage, projects } from "@/content/work";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { CTABlock } from "@/components/layout/CTABlock";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren } from "@/components/motion/StaggerChildren";
import { ProjectCard } from "@/components/work/ProjectCard";

const Work = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && projects.some((p) => p.slug === hash)) {
      setExpanded(hash);
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.hash]);

  return (
    <>
      <Section className="pt-12 md:pt-20">
        <FadeUp>
          <SectionHeader
            eyebrow={workPage.hero.eyebrow}
            title={workPage.hero.title}
            description={workPage.hero.description}
          />
        </FadeUp>
      </Section>

      <Section className="pt-0">
        <StaggerChildren className="space-y-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              expanded={expanded === project.slug}
              onToggle={() =>
                setExpanded(expanded === project.slug ? null : project.slug)
              }
            />
          ))}
        </StaggerChildren>
      </Section>

      <CTABlock
        title={workPage.cta.title}
        description={workPage.cta.description}
        primary={workPage.cta.primary}
      />
    </>
  );
};

export default Work;
