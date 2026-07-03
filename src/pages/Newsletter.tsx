import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { newsletterPage } from "@/content/newsletter";
import { Section } from "@/components/layout/Section";
import { FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

    try {
      if (endpoint) {
        formData.append("_subject", "JERN waitlist signup");
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        });
        if (!response.ok) throw new Error("Submit failed");
      }

      setSubmitted(true);
      toast.success("You're on the waitlist.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Section className="min-h-[60vh] flex items-center pt-12 md:pt-20">
        <FadeUp>
          <div className="max-w-lg mx-auto text-center">
            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-6" />
            <h1 className="font-display text-3xl font-semibold text-foreground">
              {newsletterPage.success.title}
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {newsletterPage.success.description}
            </p>
          </div>
        </FadeUp>
      </Section>
    );
  }

  return (
    <>
      <Section className="relative pt-12 md:pt-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative max-w-lg mx-auto text-center">
          <FadeUp>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
              {newsletterPage.hero.eyebrow}
            </p>
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              {newsletterPage.hero.title}
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {newsletterPage.hero.description}
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
              <Input
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                className="bg-surface border-border flex-1"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0"
              >
                {isSubmitting ? "Joining..." : "Join waitlist"}
              </Button>
            </form>
          </FadeUp>
        </div>
      </Section>

      <Section className="pt-0">
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsletterPage.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-border bg-surface p-6 text-center md:text-left"
              >
                <h3 className="font-display text-base font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </Section>
    </>
  );
};

export default Newsletter;
