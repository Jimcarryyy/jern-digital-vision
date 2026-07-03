import { HeroSection } from "@/components/home/HeroSection";
import { ValuePropsSection } from "@/components/home/ValuePropsSection";
import { ProofStrip } from "@/components/home/ProofStrip";
import { FeaturedWorkSection } from "@/components/home/FeaturedWorkSection";
import { CTABlock } from "@/components/layout/CTABlock";
import { home } from "@/content/home";

const Index = () => {
  return (
    <>
      <HeroSection />
      <ValuePropsSection />
      <ProofStrip />
      <FeaturedWorkSection />
      <CTABlock
        title={home.cta.title}
        description={home.cta.description}
        primary={home.cta.primary}
        secondary={home.cta.secondary}
      />
    </>
  );
};

export default Index;
