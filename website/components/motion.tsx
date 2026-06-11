"use client";

import { motion } from "framer-motion";

export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function LiveSystem() {
  const nodes = ["Sensor", "Firmware", "MQTT", "API", "Docker", "Production"];

  return (
    <div className="relative min-h-[330px] overflow-hidden rounded-lg border border-slate-700/60 bg-slate-950/70 p-5 shadow-panel">
      <div className="absolute inset-0 bg-radial-grid tech-grid opacity-70" />
      <div className="relative flex items-center justify-between border-b border-slate-800 pb-4 text-xs text-slate-400">
        <span>system-path.trace</span>
        <span className="text-emerald-300">online</span>
      </div>
      <div className="relative mt-8 grid gap-4">
        {nodes.map((node, index) => (
          <motion.div
            key={node}
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.12, duration: 0.45 }}
          >
            <motion.span
              className="h-3 w-3 rounded-full bg-secondary shadow-[0_0_22px_rgba(6,182,212,.8)]"
              animate={{ scale: [1, 1.35, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.2 }}
            />
            <span className="w-28 font-mono text-sm text-slate-200">{node}</span>
            <div className="h-px flex-1 bg-gradient-to-r from-secondary/80 to-transparent" />
            <span className="font-mono text-xs text-slate-500">0{index + 1}</span>
          </motion.div>
        ))}
      </div>
      <div className="relative mt-8 rounded-md border border-emerald-400/20 bg-emerald-400/8 p-4 font-mono text-xs leading-6 text-emerald-100">
        deploy target: edge device to production cloud
        <br />
        qa context: airport-grade commissioning discipline
        <br />
        operator: me
      </div>
    </div>
  );
}
