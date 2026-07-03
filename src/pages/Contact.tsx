import { useState } from "react";
import { toast } from "sonner";
import { contactPage } from "@/content/contact";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [intent, setIntent] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        });
        if (!response.ok) throw new Error("Submit failed");
      }

      toast.success("Message sent. We'll reply within two business days.");
      form.reset();
      setIntent("");
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Section className="pt-12 md:pt-20">
        <FadeUp>
          <SectionHeader
            eyebrow={contactPage.hero.eyebrow}
            title={contactPage.hero.title}
            description={contactPage.hero.description}
          />
        </FadeUp>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <FadeUp>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-4">
                Direct contact
              </h2>
              <a
                href={`mailto:${contactPage.info.email}`}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {contactPage.info.email}
              </a>
              <p className="mt-4 text-sm text-muted-foreground">{contactPage.info.responseTime}</p>
            </div>
           </FadeUp>

          <FadeUp delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="bg-surface border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="bg-surface border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="intent">How can we help?</Label>
                <Select value={intent} onValueChange={setIntent} required>
                  <SelectTrigger className="bg-surface border-border">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {contactPage.intents.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <input type="hidden" name="intent" value={intent} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="bg-surface border-border resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting || !intent}
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>
            </form>
          </FadeUp>
        </div>
      </Section>
    </>
  );
};

export default Contact;
