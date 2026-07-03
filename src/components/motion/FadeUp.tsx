import { motion, useReducedMotion } from "framer-motion";
import { easeOut, getMotionVariants } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FadeUp({ children, className, delay = 0 }: FadeUpProps) {
  const reducedMotion = useReducedMotion();
  const { fadeUp } = getMotionVariants(reducedMotion);

  return (
    <motion.div
      className={cn(className)}
      initial={reducedMotion ? false : "hidden"}
      animate="visible"
      variants={fadeUp}
      transition={{ ...easeOut, delay }}
    >
      {children}
    </motion.div>
  );
}
