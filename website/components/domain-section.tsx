import { Bot, BrainCircuit, Cpu, Network, ServerCog } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const domainCards = [
  {
    title: "Industrial Systems",
    text: "Airport electronics, PLC/SCADA, QA commissioning, baggage handling, fire alarm, and regulated system acceptance.",
    icon: ServerCog,
    tech: ["PLC", "SCADA", "Cisco", "FAT/SAT", "Notifier"],
    color: "neon"
  },
  {
    title: "IoT & Embedded",
    text: "Sensor-to-cloud products using microcontrollers, telemetry, firmware, and real-time monitoring dashboards.",
    icon: Cpu,
    tech: ["ESP32", "STM32", "Arduino", "MQTT", "LoRa"],
    color: "accent"
  },
  {
    title: "Infrastructure",
    text: "Production ops with Linux servers, containerized services, reverse proxies, monitoring, and deployment.",
    icon: Network,
    tech: ["Linux", "Docker", "Nginx", "Cloudflare", "Grafana"],
    color: "magenta"
  },
  {
    title: "Software Platforms",
    text: "Backend APIs, web dashboards, mobile-connected workflows, and product architecture for real users.",
    icon: Bot,
    tech: ["Node.js", "FastAPI", "Django", "React", "PostgreSQL"],
    color: "neon"
  },
  {
    title: "Applied AI",
    text: "Robotics, computer vision, SLAM, thermal sensing, and domain-specific classification systems.",
    icon: BrainCircuit,
    tech: ["ROS II", "OpenCV", "SLAM", "KNN", "Kinect"],
    color: "accent"
  }
];

const colorMap: Record<string, string> = {
  neon: "border-neon/20 text-neon",
  accent: "border-accent/20 text-accent",
  magenta: "border-magenta/20 text-magenta"
};

export function DomainSection() {
  return (
    <section className="relative overflow-hidden border-y border-neon/8">
      <div className="absolute inset-0 pixel-grid opacity-30" />
      <div aria-hidden="true" className="float-slow absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-neon/5 blur-[100px]" />
      <div aria-hidden="true" className="float-anim absolute bottom-[-6rem] right-[-6rem] h-80 w-80 rounded-full bg-magenta/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-pixel text-[9px] uppercase tracking-[0.3em] text-neon neon-glow-subtle">Engineering Domains</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">
            Five domains. One system language.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">
            Physical systems, embedded devices, cloud infrastructure, software platforms, and applied intelligence — connected end-to-end.
          </p>
        </div>

        <div className="stagger-children mt-10 grid gap-4 lg:grid-cols-5">
          {domainCards.map((domain, i) => {
            const Icon = domain.icon;
            return (
              <article
                key={domain.title}
                className="group relative min-h-[300px] overflow-hidden border border-neon/8 bg-surface/60 p-5 shadow-panel backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-neon/25"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon/5 via-transparent to-magenta/3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className={`flex h-11 w-11 items-center justify-center border ${colorMap[domain.color]} bg-neon/5`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">domain 0{i + 1}</p>
                  <h3 className="mt-2 font-display text-lg font-bold text-white">{domain.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{domain.text}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {domain.tech.map((t) => (
                      <Badge key={t} className="border-neon/8 bg-neon/3 text-slate-400 text-[8px]">{t}</Badge>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
