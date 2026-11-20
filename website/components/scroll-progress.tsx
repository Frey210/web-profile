"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-sky-400 z-[60] origin-left shadow-[0_0_12px_rgba(56,189,248,0.7)] pointer-events-none"
      style={{ scaleX }}
    />
  );
}

