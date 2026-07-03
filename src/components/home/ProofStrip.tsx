import { home } from "@/content/home";
import { Section } from "@/components/layout/Section";
import { FadeUp } from "@/components/motion/FadeUp";

export function ProofStrip() {
  return (
    <Section className="py-12 md:py-16 border-y border-border">
      <FadeUp>
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
            {home.proof.eyebrow}
          </p>
          <p className="text-sm text-muted-foreground">{home.proof.label}</p>
        </div>
      </FadeUp>
    </Section>
  );
}
