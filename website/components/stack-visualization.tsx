"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BrainCircuit,
  ChevronRight,
  CircuitBoard,
  CloudCog,
  Code2,
  Factory,
  type LucideIcon
} from "lucide-react";

type StackCategory = {
  id: string;
  title: string;
  caption: string;
  icon: LucideIcon;
  color: string;
  technologies: Array<{ name: string; use: string; level: string }>;
};

const categories: StackCategory[] = [
  {
    id: "industrial",
    title: "Industrial Systems",
    caption: "Control, commissioning, and regulated infrastructure",
    icon: Factory,
    color: "cyan",
    technologies: [
      { name: "Allen-Bradley PLC", use: "Baggage handling control review", level: "Industrial" },
      { name: "SCADA / HMI", use: "Operational visualization and alarms", level: "Industrial" },
      { name: "Cisco Networks", use: "Airport data network infrastructure", level: "Production" },
      { name: "Notifier FAS", use: "Addressable fire alarm assurance", level: "Critical" },
      { name: "FAT / SAT", use: "Commissioning and acceptance testing", level: "QA" },
      { name: "Leidos HBS", use: "Hold baggage screening systems", level: "Aviation" }
    ]
  },
  {
    id: "embedded",
    title: "Embedded Systems",
    caption: "Sensors, firmware, communications, and edge control",
    icon: CircuitBoard,
    color: "emerald",
    technologies: [
      { name: "ESP32", use: "Connected sensor and control nodes", level: "Expert" },
      { name: "STM32", use: "Real-time robotics and motor control", level: "Applied" },
      { name: "Arduino", use: "Rapid embedded system delivery", level: "Expert" },
      { name: "MQTT", use: "Lightweight device telemetry", level: "Production" },
      { name: "LoRa / RF", use: "Remote wireless monitoring", level: "Applied" },
      { name: "I2C / SPI / UART", use: "Sensor and peripheral integration", level: "Core" }
    ]
  },
  {
    id: "backend",
    title: "Backend",
    caption: "APIs, data services, and product logic",
    icon: Code2,
    color: "blue",
    technologies: [
      { name: "Node.js", use: "IoT platform APIs and services", level: "Advanced" },
      { name: "FastAPI", use: "Async APIs and OpenAPI delivery", level: "Production" },
      { name: "Django", use: "Structured backend applications", level: "Applied" },
      { name: "REST APIs", use: "Device, web, and mobile integration", level: "Advanced" },
      { name: "PostgreSQL", use: "Relational product data", level: "Production" },
      { name: "Python", use: "Automation and data processing", level: "Advanced" }
    ]
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    caption: "Deployment, observability, and production operations",
    icon: CloudCog,
    color: "violet",
    technologies: [
      { name: "Linux", use: "Production server administration", level: "Advanced" },
      { name: "Docker", use: "Service packaging and deployment", level: "Advanced" },
      { name: "Nginx", use: "Reverse proxy and TLS routing", level: "Production" },
      { name: "Cloudflare Tunnel", use: "Secure service exposure", level: "Production" },
      { name: "Grafana", use: "Operational dashboards", level: "Applied" },
      { name: "Prometheus", use: "Metrics and service monitoring", level: "Applied" }
    ]
  },
  {
    id: "ai",
    title: "AI & Computer Vision",
    caption: "Perception, robotics, classification, and applied research",
    icon: BrainCircuit,
    color: "rose",
    technologies: [
      { name: "OpenCV", use: "Image processing and detection", level: "Applied" },
      { name: "ROS II", use: "Robot software architecture", level: "Research" },
      { name: "SLAM", use: "Mapping and localization", level: "Published" },
      { name: "Kinect", use: "Depth perception and point clouds", level: "Research" },
      { name: "KNN", use: "Bioassay image classification", level: "Applied" },
      { name: "Thermal Vision", use: "Privacy-aware occupancy detection", level: "Prototype" }
    ]
  }
];

const accentClasses: Record<string, string> = {
  cyan: "border-cyan-300/30 bg-cyan-300/10 text-cyan-100",
  emerald: "border-emerald-300/30 bg-emerald-300/10 text-emerald-100",
  blue: "border-blue-300/30 bg-blue-300/10 text-blue-100",
  violet: "border-violet-300/30 bg-violet-300/10 text-violet-100",
  rose: "border-rose-300/30 bg-rose-300/10 text-rose-100"
};

export function StackVisualization() {
  const [activeId, setActiveId] = useState(categories[0].id);
  const active = categories.find((category) => category.id === activeId) ?? categories[0];
  const ActiveIcon = active.icon;

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-radial-grid tech-grid opacity-25" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Technology Stack</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-5xl">A stack organized around complete systems.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
            Select a category to explore the technologies I use from industrial field systems and embedded devices through backend services, infrastructure, and applied intelligence.
          </p>
        </motion.div>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Technology stack categories">
          {categories.map((category) => {
            const Icon = category.icon;
            const selected = category.id === active.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveId(category.id)}
                className={`relative flex min-h-11 shrink-0 items-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium transition ${selected ? accentClasses[category.color] : "border-white/10 bg-white/[0.025] text-slate-400 hover:border-white/20 hover:text-white"}`}
              >
                <Icon className="h-4 w-4" />
                {category.title}
                {selected && <motion.span layoutId="stack-tab" className="absolute inset-x-3 -bottom-px h-px bg-current" />}
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid overflow-hidden rounded-lg border border-white/10 bg-slate-950/62 shadow-panel backdrop-blur lg:grid-cols-[320px_1fr]">
          <div className="relative flex min-h-72 flex-col justify-between overflow-hidden border-b border-white/10 p-7 lg:min-h-[480px] lg:border-b-0 lg:border-r">
            <div className="absolute inset-0 bg-radial-grid tech-grid opacity-55" />
            <motion.div
              key={`${active.id}-glow`}
              className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/12 blur-3xl"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: [0.9, 1.12, 0.9], opacity: [0.22, 0.48, 0.22] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                className="relative"
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 18 }}
                transition={{ duration: 0.28 }}
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-md border ${accentClasses[active.color]}`}>
                  <ActiveIcon className="h-7 w-7" />
                </div>
                <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Active category</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-white">{active.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{active.caption}</p>
              </motion.div>
            </AnimatePresence>
            <div className="relative mt-10 font-mono text-xs text-slate-500">
              {active.technologies.length} connected capabilities
            </div>
          </div>

          <div className="grid gap-px bg-white/8 sm:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {active.technologies.map((technology, index) => (
                <motion.article
                  key={`${active.id}-${technology.name}`}
                  className="group relative min-h-52 overflow-hidden bg-slate-950/95 p-6"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ delay: index * 0.035, duration: 0.25 }}
                  whileHover={{ backgroundColor: "rgba(15, 23, 42, 1)" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/[0.08] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-mono text-xs text-slate-600">0{index + 1}</span>
                      <ChevronRight className="h-4 w-4 text-slate-600 transition group-hover:translate-x-1 group-hover:text-cyan-200" />
                    </div>
                    <h4 className="mt-7 font-display text-lg font-bold text-white">{technology.name}</h4>
                    <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{technology.use}</p>
                    <span className="mt-5 w-fit rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-300">{technology.level}</span>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
