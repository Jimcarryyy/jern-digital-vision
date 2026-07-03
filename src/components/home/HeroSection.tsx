import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { home } from "@/content/home";
import { easeOut, getMotionVariants } from "@/lib/motion";

export function HeroSection() {
  const reducedMotion = useReducedMotion();
  const { fadeIn, fadeUp } = getMotionVariants(reducedMotion);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => setVideoFailed(true));
  }, [reducedMotion]);

  const showVideo = !reducedMotion && !videoFailed;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/video/hero-poster.svg)" }}
        />
        {showVideo && (
          <motion.video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            autoPlay
            muted
            loop
            playsInline
            poster="/video/hero-poster.svg"
            onCanPlay={() => setVideoReady(true)}
            onError={() => setVideoFailed(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: videoReady ? 0.4 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <source src="/video/hero-demo.webm" type="video/webm" />
            <source src="/video/hero-demo.mp4" type="video/mp4" />
          </motion.video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="container relative z-10 py-24 md:py-32">
        <motion.p
          className="font-mono text-xs uppercase tracking-widest text-primary mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={easeOut}
        >
          {home.hero.eyebrow}
        </motion.p>

        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground max-w-4xl leading-[1.1] tracking-tight"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ ...easeOut, delay: 0.1 }}
        >
          {home.hero.title.split(home.hero.highlight).map((part, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>
                {part}
                <span className="text-primary">{home.hero.highlight}</span>
              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ ...easeOut, delay: 0.2 }}
        >
          {home.hero.description}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ ...easeOut, delay: 0.3 }}
        >
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to={home.hero.primaryCta.path}>
              {home.hero.primaryCta.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary">
            <Link to={home.hero.secondaryCta.path}>{home.hero.secondaryCta.label}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
