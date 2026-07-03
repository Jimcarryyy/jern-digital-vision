import { Children } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { easeOut, getMotionVariants } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerChildren({ children, className }: StaggerChildrenProps) {
  const reducedMotion = useReducedMotion();
  const { stagger, fadeUp } = getMotionVariants(reducedMotion);

  return (
    <motion.div
      className={cn(className)}
      initial={reducedMotion ? false : "hidden"}
      animate="visible"
      variants={stagger}
    >
      {Children.map(children, (child, index) => (
        <motion.div key={index} variants={fadeUp} transition={easeOut}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
