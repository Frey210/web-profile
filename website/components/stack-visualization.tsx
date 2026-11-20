"use client";

import { useState } from "react";
import type { KeyboardEvent } from "react";
import {
  BrainCircuit, ChevronRight, CircuitBoard, CloudCog, Code2, Factory, type LucideIcon
} from "lucide-react";

type StackCategory = {
  id: string; title: string; caption: string; icon: LucideIcon;
  technologies: Array<{ name: string; use: string; level: string }>;
};

const categories: StackCategory[] = [
  {
    id: "industrial", title: "Industrial Systems", caption: "Control, commissioning, and regulated infrastructure",
    icon: Factory,
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
    icon: CircuitBoard,
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
    icon: Code2,
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
    icon: CloudCog,
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
    icon: BrainCircuit,
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
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">Technical Foundation</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#fafafa] sm:text-4xl">
            Technology Stack
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#a0a0a0]">
            Organized around complete systems: from industrial field devices through cloud services to applied intelligence.
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
                className={`flex min-h-11 shrink-0 items-center gap-2 rounded-xl border px-4 py-2 text-xs font-medium transition ${
                  sel
                    ? "border-sky-400/40 bg-sky-400/10 text-sky-200"
                    : "border-white/6 bg-[#141414] text-[#a0a0a0] hover:text-white hover:border-white/10"
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {cat.title}
              </button>
            );
          })}
        </div>

        <div id="stack-panel" role="tabpanel" aria-labelledby={`stack-tab-${active.id}`}
          className="glass-panel mt-6 grid overflow-hidden lg:grid-cols-[280px_1fr]">
          <div className="flex flex-col justify-between border-b border-white/6 p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                <ActiveIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-wider text-[#666666]">Active Category</p>
              <h3 className="mt-1 font-display text-xl font-bold text-[#fafafa]">{active.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#a0a0a0]">{active.caption}</p>
            </div>
            <div className="mt-8 font-mono text-[11px] text-[#666666]">
              {active.technologies.length} capabilities loaded
            </div>
          </div>

          <div className="grid gap-px bg-white/6 sm:grid-cols-2 xl:grid-cols-3">
            {active.technologies.map((tech, i) => (
              <article key={`${active.id}-${tech.name}`}
                className="group relative flex flex-col justify-between bg-[#141414] p-5 transition-colors hover:bg-[#1a1a1a]">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[10px] text-[#666666]">0{i + 1}</span>
                    <ChevronRight className="h-3.5 w-3.5 text-[#555555] transition group-hover:translate-x-1 group-hover:text-sky-200" aria-hidden="true" />
                  </div>
                  <h4 className="mt-4 font-display text-base font-bold text-[#fafafa]">{tech.name}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#888888]">{tech.use}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/6">
                  <span className="text-[10px] text-sky-400/80 font-mono">{tech.level}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
