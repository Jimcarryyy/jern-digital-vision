import { Link } from "react-router-dom";
import { aboutPage } from "@/content/about";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren } from "@/components/motion/StaggerChildren";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <>
      <Section className="pt-12 md:pt-20">
        <FadeUp>
          <SectionHeader
            eyebrow={aboutPage.hero.eyebrow}
            title={aboutPage.hero.title}
            description={aboutPage.hero.description}
          />
        </FadeUp>
      </Section>

      <Section className="pt-0">
        <FadeUp>
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
              {aboutPage.story.title}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed prose prose-invert prose-p:text-muted-foreground max-w-none">
              {aboutPage.story.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </FadeUp>
      </Section>

      <Section>
        <FadeUp>
          <SectionHeader title="Principles" />
        </FadeUp>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutPage.principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-primary/40 hover:-translate-y-0.5 duration-300"
            >
              <h3 className="font-display text-lg font-semibold text-foreground">
                {principle.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </StaggerChildren>
      </Section>

      <Section>
        <FadeUp>
          <SectionHeader title={aboutPage.team.title} />
        </FadeUp>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {aboutPage.team.members.map((member) => (
            <div
              key={member.name}
              className="rounded-xl border border-border bg-surface p-6 md:p-8"
            >
              <div className="w-12 h-12 rounded-full bg-secondary border border-border mb-4 flex items-center justify-center font-display text-lg text-primary">
                {member.name.charAt(0)}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm text-primary mt-1">{member.role}</p>
              <p className="mt-3 text-muted-foreground leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </StaggerChildren>
      </Section>

      <Section className="pb-8">
        <FadeUp>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to={aboutPage.cta.primary.path}>{aboutPage.cta.primary.label}</Link>
            </Button>
            <Button asChild variant="outline" className="border-border hover:bg-secondary">
              <Link to={aboutPage.cta.secondary.path}>{aboutPage.cta.secondary.label}</Link>
            </Button>
          </div>
        </FadeUp>
      </Section>
    </>
  );
};

export default About;
