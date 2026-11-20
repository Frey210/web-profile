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
    <div className="terminal-window overflow-hidden">
      <div className="flex items-center gap-2 border-b border-neon/15 bg-neon/5 px-4 py-2">
        <span className="h-2 w-2 bg-red-500/80" />
        <span className="h-2 w-2 bg-yellow-500/80" />
        <span className="h-2 w-2 bg-green-500/80" />
        <span className="ml-2 font-mono text-[10px] text-neon/40">system-path.trace</span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between font-mono text-[10px] text-slate-500">
          <span>PIPELINE STATUS</span>
          <span className="text-accent">● ONLINE</span>
        </div>
        <div className="mt-5 grid gap-3">
          {nodes.map((node, i) => (
            <motion.div
              key={node}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <motion.span
                className="h-2 w-2 bg-neon shadow-neon-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
              />
              <span className="w-24 font-mono text-xs text-slate-300">{node}</span>
              <div className="h-px flex-1 bg-gradient-to-r from-neon/40 to-transparent" />
              <span className="font-mono text-[10px] text-slate-700">0{i + 1}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 border border-accent/15 bg-accent/5 p-3 font-mono text-[10px] leading-5 text-accent/80">
          target: edge_device → production_cloud
          <br />
          qa_level: airport-grade
          <br />
          operator: fariz.achmad
        </div>
      </div>
    </div>
  );
}
