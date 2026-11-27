"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ScanLine } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import styles from "./premium-hero.module.css";

export function InteractiveMascot() {
  const stage = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [scanned, setScanned] = useState(false);
  const { scrollYProgress } = useScroll({ target: stage, offset: ["start 20%", "end start"] });
  const panelY = useTransform(scrollYProgress, [0, 1], [0, 68]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 32]);
  const scanY = useTransform(scrollYProgress, [0, 1], ["0%", "4300%"]);

  return (
    <figure className={styles.mascot} data-scanned={scanned}>
      <div ref={stage} className={styles.stage}>
        <motion.div aria-hidden="true" className={styles.blueprint} style={{ y: reducedMotion ? 0 : panelY }} />
        <motion.div className={styles.portrait} style={{ y: reducedMotion ? 0 : portraitY }}>
          <Image
            src="/capri-fullbody-clean.webp"
            alt="Capri, an illustrated cyberpunk mascot"
            fill
            sizes="(min-width: 1024px) 410px, (min-width: 640px) 320px, 80vw"
            unoptimized
            priority
            className="object-contain"
          />
        </motion.div>
        <motion.div aria-hidden="true" className={styles.scan} style={{ y: reducedMotion ? 0 : scanY }} />
      </div>
      <figcaption className={styles.caption}>
        <div className="min-w-0">
          <p className="font-display text-base font-semibold text-indigo-100">Capri</p>
          <p role="status" className="mt-1 text-sm leading-snug text-[#bebed2]">
            {scanned ? "Neural link nominal. Ready to build." : "Interactive portfolio mascot"}
          </p>
        </div>
        <button
          type="button"
          aria-pressed={scanned}
          onClick={() => setScanned(!scanned)}
          className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg border border-indigo-200/30 px-3 text-sm font-medium text-indigo-100 transition-colors hover:bg-indigo-400/10 aria-pressed:border-indigo-300 aria-pressed:bg-indigo-400/20"
        >
          <ScanLine aria-hidden="true" className="h-4 w-4" />
          Scan
        </button>
      </figcaption>
    </figure>
  );
}
