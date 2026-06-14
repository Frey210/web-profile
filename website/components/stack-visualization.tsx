import {
  BrainCircuit,
  ChevronDown,
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
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-radial-grid tech-grid opacity-25" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Technology Stack</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-5xl">A stack organized around complete systems.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
            Explore the technologies I use from industrial field systems and embedded devices through backend services, infrastructure, and applied intelligence.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <details
                key={category.id}
                className="group overflow-hidden rounded-lg border border-white/10 bg-slate-950/62 shadow-panel transition duration-300 open:border-cyan-300/25 hover:border-white/20"
                open={category.id === "industrial"}
              >
                <summary className="flex min-h-28 cursor-pointer list-none items-center gap-4 p-5 [&::-webkit-details-marker]:hidden">
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-md border ${accentClasses[category.color]}`}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-lg font-bold text-white">{category.title}</span>
                    <span className="mt-1 block text-sm leading-5 text-slate-400">{category.caption}</span>
                  </span>
                  <span className="flex items-center gap-2 text-xs text-slate-500">
                    {category.technologies.length}
                    <ChevronDown className="h-4 w-4 transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
                  </span>
                </summary>
                <div className="stack-panel-enter grid gap-px border-t border-white/10 bg-white/8 sm:grid-cols-2">
                  {category.technologies.map((technology, index) => (
                    <article key={technology.name} className="group/tile min-w-0 bg-slate-950/95 p-5 transition-colors hover:bg-slate-900">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-base font-bold text-white">{technology.name}</h3>
                        <span className="font-mono text-xs text-slate-600">0{index + 1}</span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{technology.use}</p>
                      <span className="mt-4 inline-flex rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-300">
                        {technology.level}
                      </span>
                    </article>
                  ))}
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
