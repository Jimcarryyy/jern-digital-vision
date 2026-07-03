import type { Variants, Transition } from "framer-motion";

export const easeOut: Transition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1],
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const reducedMotionFadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function getMotionVariants(reducedMotion: boolean | null): {
  fadeUp: Variants;
  fadeIn: Variants;
  stagger: Variants;
} {
  if (reducedMotion) {
    return {
      fadeUp: reducedMotionFadeVariants,
      fadeIn: reducedMotionFadeVariants,
      stagger: staggerContainerVariants,
    };
  }
  return {
    fadeUp: fadeUpVariants,
    fadeIn: fadeInVariants,
    stagger: staggerContainerVariants,
  };
}
