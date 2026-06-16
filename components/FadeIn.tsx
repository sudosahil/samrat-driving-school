"use client";

import { motion, useReducedMotion } from "framer-motion";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  /** delay in ms (kept in ms for backwards compatibility) */
  delay?: number;
  /** direction the element travels in from */
  from?: "up" | "down" | "left" | "right";
};

const offsets: Record<NonNullable<FadeInProps["from"]>, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
};

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  from = "up",
}: FadeInProps) {
  const reduce = useReducedMotion();
  const { x, y } = offsets[from];

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -40px 0px" }}
      transition={{
        duration: 0.55,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
