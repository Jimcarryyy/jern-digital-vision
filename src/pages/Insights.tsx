import { useState } from "react";
import { insightsPage, posts } from "@/content/insights";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { CTABlock } from "@/components/layout/CTABlock";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren } from "@/components/motion/StaggerChildren";

const Insights = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <>
      <Section className="pt-12 md:pt-20">
        <FadeUp>
          <SectionHeader
            eyebrow={insightsPage.hero.eyebrow}
            title={insightsPage.hero.title}
            description={insightsPage.hero.description}
          />
        </FadeUp>
      </Section>

      <Section className="pt-0">
        <StaggerChildren className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-xl border border-border bg-surface p-6 md:p-8 transition-colors hover:border-primary/40 hover:-translate-y-0.5 duration-300"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="font-mono text-xs text-muted-foreground">{post.date}</span>
                <span className="text-muted-foreground/50">·</span>
                <span className="font-mono text-xs text-muted-foreground">{post.readTime}</span>
                {post.comingSoon && (
                  <>
                    <span className="text-muted-foreground/50">·</span>
                    <span className="font-mono text-xs text-primary px-2 py-0.5 rounded border border-primary/30 bg-primary/10">
                      Coming soon
                    </span>
                  </>
                )}
              </div>
              <h2 className="font-display text-xl font-semibold text-foreground">{post.title}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{post.excerpt}</p>

              {post.body && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setExpanded(expanded === post.slug ? null : post.slug)
                    }
                    className="mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    aria-expanded={expanded === post.slug}
                  >
                    {expanded === post.slug ? "Show less" : "Read preview"}
                  </button>
                  {expanded === post.slug && (
                    <div className="mt-4 pt-4 border-t border-border space-y-3 text-sm text-muted-foreground leading-relaxed">
                      {post.body.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                </>
              )}
            </article>
          ))}
        </StaggerChildren>
      </Section>

      <CTABlock
        title={insightsPage.cta.title}
        description={insightsPage.cta.description}
        primary={insightsPage.cta.primary}
      />
    </>
  );
};

export default Insights;
