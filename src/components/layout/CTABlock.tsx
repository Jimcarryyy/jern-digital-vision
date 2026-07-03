import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/FadeUp";
import { Section } from "./Section";

interface CTABlockProps {
  title: string;
  description?: string;
  primary: { label: string; path: string };
  secondary?: { label: string; path: string };
}

export function CTABlock({ title, description, primary, secondary }: CTABlockProps) {
  return (
    <Section className="border-t border-border">
      <FadeUp>
        <div className="rounded-xl border border-border bg-surface p-8 md:p-12 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>
          )}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to={primary.path}>{primary.label}</Link>
            </Button>
            {secondary && (
              <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary">
                <Link to={secondary.path}>{secondary.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
