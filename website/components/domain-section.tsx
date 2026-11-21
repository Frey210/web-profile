import { Bot, BrainCircuit, Cpu, Network, ServerCog } from "lucide-react";

const domainCards = [
  {
    title: "Industrial Systems",
    text: "Airport electronics, PLC/SCADA, QA commissioning, baggage handling, fire alarm, and regulated system acceptance.",
    icon: ServerCog,
    tech: ["PLC", "SCADA", "Cisco", "FAT/SAT", "Notifier"]
  },
  {
    title: "IoT & Embedded",
    text: "Sensor-to-cloud products using microcontrollers, telemetry, firmware, and real-time monitoring dashboards.",
    icon: Cpu,
    tech: ["ESP32", "STM32", "Arduino", "MQTT", "LoRa"]
  },
  {
    title: "Infrastructure",
    text: "Production ops across Linux servers, containerized services, reverse proxies, monitoring, and deployment.",
    icon: Network,
    tech: ["Linux", "Docker", "Nginx", "Cloudflare", "Grafana"]
  },
  {
    title: "Software Platforms",
    text: "Backend APIs, web dashboards, mobile-connected workflows, and product architecture for real users.",
    icon: Bot,
    tech: ["Node.js", "FastAPI", "Django", "React", "PostgreSQL"]
  },
  {
    title: "Applied AI",
    text: "Robotics, computer vision, SLAM, thermal sensing, and domain-specific classification systems.",
    icon: BrainCircuit,
    tech: ["ROS II", "OpenCV", "SLAM", "KNN", "Kinect"]
  }
];

export function DomainSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#222222] bg-[#0d0d0d]/30 py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Engineering Domains</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#fafafa] sm:text-4xl">
            Five domains. One integrated system language.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#a0a0a0]">
            Physical systems, embedded devices, cloud infrastructure, software platforms, and applied intelligence — connected end-to-end.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {domainCards.map((domain, i) => {
            const Icon = domain.icon;
            return (
              <article
                key={domain.title}
                className="glass-panel group relative flex flex-col justify-between p-6 transition duration-300 hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 font-mono text-[10px] text-[#666666]">0{i + 1}</p>
                  <h3 className="mt-1 font-display text-base font-bold text-[#fafafa]">{domain.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-[#a0a0a0]">{domain.text}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1 border-t border-white/6 pt-4">
                  {domain.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/6 bg-white/[0.02] px-2 py-0.5 text-[9px] text-[#777777]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
