"use client";

import { useState } from "react";
import type { KeyboardEvent } from "react";
import {
  BrainCircuit, ChevronRight, CircuitBoard, CloudCog, Code2, Factory, type LucideIcon
} from "lucide-react";

type StackCategory = {
  id: string; title: string; caption: string; icon: LucideIcon; color: string;
  technologies: Array<{ name: string; use: string; level: string }>;
};

const categories: StackCategory[] = [
  {
    id: "industrial", title: "Industrial Systems", caption: "Control, commissioning, and regulated infrastructure",
    icon: Factory, color: "neon",
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
    id: "embedded", title: "Embedded Systems", caption: "Sensors, firmware, communications, and edge control",
    icon: CircuitBoard, color: "accent",
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
    id: "backend", title: "Backend", caption: "APIs, data services, and product logic",
    icon: Code2, color: "neon",
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
    id: "infrastructure", title: "Infrastructure", caption: "Deployment, observability, and production ops",
    icon: CloudCog, color: "magenta",
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
    id: "ai", title: "AI & Vision", caption: "Perception, robotics, classification, and research",
    icon: BrainCircuit, color: "accent",
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

const colorClasses: Record<string, string> = {
  neon: "border-neon/30 bg-neon/10 text-neon",
  accent: "border-accent/30 bg-accent/10 text-accent",
  magenta: "border-magenta/30 bg-magenta/10 text-magenta"
};

export function StackVisualization() {
  const [activeId, setActiveId] = useState(categories[0].id);
  const active = categories.find((c) => c.id === activeId) ?? categories[0];
  const ActiveIcon = active.icon;

  function handleTabKeyDown(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    const next = e.key === "Home" ? 0 : e.key === "End" ? categories.length - 1
      : (i + (e.key === "ArrowRight" ? 1 : -1) + categories.length) % categories.length;
    setActiveId(categories[next].id);
    document.getElementById(`stack-tab-${categories[next].id}`)?.focus();
  }

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 pixel-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-pixel text-[9px] uppercase tracking-[0.3em] text-neon neon-glow-subtle">Tech Stack</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">Stack organized for complete systems.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">
            Select a category to explore technologies from industrial field systems to applied intelligence.
          </p>
        </div>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Stack categories">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const sel = cat.id === active.id;
            return (
              <button
                key={cat.id} id={`stack-tab-${cat.id}`} type="button" role="tab"
                aria-selected={sel} aria-controls="stack-panel" tabIndex={sel ? 0 : -1}
                onClick={() => setActiveId(cat.id)}
                onKeyDown={(e) => handleTabKeyDown(e, i)}
                className={`flex min-h-11 shrink-0 items-center gap-2 border px-4 py-2.5 font-mono text-xs transition ${sel ? colorClasses[cat.color] : "border-neon/8 bg-neon/3 text-slate-500 hover:border-neon/15 hover:text-white"}`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {cat.title}
              </button>
            );
          })}
        </div>

        <div id="stack-panel" role="tabpanel" aria-labelledby={`stack-tab-${active.id}`}
          className="mt-6 grid overflow-hidden border border-neon/10 bg-surface/60 shadow-panel backdrop-blur lg:grid-cols-[300px_1fr]">
          <div className="relative flex min-h-64 flex-col justify-between overflow-hidden border-b border-neon/10 p-7 lg:min-h-[480px] lg:border-b-0 lg:border-r">
            <div className="absolute inset-0 pixel-grid-dense opacity-40" />
            <div aria-hidden="true" className="float-slow absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/8 blur-[60px]" />
            <div key={active.id} className="relative">
              <div className={`flex h-14 w-14 items-center justify-center border ${colorClasses[active.color]}`}>
                <ActiveIcon className="h-7 w-7" aria-hidden="true" />
              </div>
              <p className="mt-6 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">Active category</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-white">{active.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">{active.caption}</p>
            </div>
            <div className="relative mt-10 font-mono text-[10px] text-slate-600">
              {active.technologies.length} capabilities loaded
            </div>
          </div>

          <div className="grid gap-px bg-neon/5 sm:grid-cols-2 xl:grid-cols-3">
            {active.technologies.map((tech, i) => (
              <article key={`${active.id}-${tech.name}`}
                className="group relative min-h-48 overflow-hidden bg-background/95 p-5 transition-colors hover:bg-surface">
                <div className="absolute inset-0 bg-gradient-to-br from-neon/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[10px] text-slate-700">0{i + 1}</span>
                    <ChevronRight className="h-4 w-4 text-slate-700 transition group-hover:translate-x-1 group-hover:text-neon" aria-hidden="true" />
                  </div>
                  <h4 className="mt-6 font-display text-lg font-bold text-white">{tech.name}</h4>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">{tech.use}</p>
                  <span className="mt-4 w-fit border border-neon/10 bg-neon/3 px-2 py-1 font-mono text-[9px] text-slate-400">{tech.level}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
