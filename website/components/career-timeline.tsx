import { ArrowUpRight, Building2, Plane, Rocket, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const milestones = [
  {
    period: "2022",
    stage: "Foundation",
    title: "AirNav Indonesia",
    role: "Air Traffic Navigation Services Intern",
    text: "Entered aviation technology by developing monitoring capability for MATSC Makassar server-room environments. Established foundational grounding in operational reliability, instrumentation, and mission-critical systems.",
    growth: "From academic theory to operational aviation reliability",
    icon: Plane,
    tech: ["Monitoring", "Sensors", "Networking", "Aviation Operations"]
  },
  {
    period: "2023 — Present",
    stage: "Startup Leadership",
    title: "PT Media Teknologi Celebes (Aerasea)",
    role: "CTO & Co-Founder",
    text: "Directing R&D, product architecture, and production delivery for IoT platforms across aquaculture, healthcare, and civic tech. Leading multidisciplinary teams spanning firmware, backend, web, mobile, and server infrastructure.",
    growth: "From system builder to technology executive",
    icon: Rocket,
    tech: ["CTO", "IoT Platforms", "Cloud Backend", "Linux/Docker", "Product Strategy"]
  },
  {
    period: "Nov 2023 — Present",
    stage: "Critical Infrastructure",
    title: "Sultan Hasanuddin International Airport Expansion",
    role: "Electronic Officer — Quality Assurance, PT Angkasa Pura I",
    text: "Overseeing installation, testing, and commissioning quality assurance for data networks (Cisco), PLC/SCADA baggage handling systems (Allen-Bradley), fire alarms (Notifier), public address, and Leidos HBS screening.",
    growth: "From startup agility to certified airport systems assurance",
    icon: Building2,
    tech: ["PLC/SCADA", "Cisco Networks", "FAT/SAT", "Notifier FAS", "Leidos HBS"]
  }
];

export function CareerTimeline() {
  return (
    <div className="relative mt-16">
      <div className="absolute bottom-0 left-5 top-0 w-px bg-white/8 md:left-1/2" />
      <div className="absolute left-5 top-0 w-px origin-top bg-gradient-to-b from-sky-400/60 via-sky-200/20 to-transparent md:left-1/2" style={{ height: "100%" }} />

      <div className="space-y-12 md:space-y-16">
        {milestones.map((m, i) => {
          const Icon = m.icon;
          const isRight = i % 2 === 1;

          return (
            <article key={m.title} className="relative grid gap-6 pl-14 md:grid-cols-2 md:pl-0">
              <div className="absolute left-0 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-sky-500/30 bg-[#0a0a0a] text-sky-400 shadow-xl md:left-1/2 md:-translate-x-1/2">
                <Icon className="h-5 w-5" />
              </div>

              <div className={isRight ? "md:col-start-2 md:pl-12" : "md:pr-12"}>
                <div className="glass-panel p-6 sm:p-8 transition duration-300 hover:-translate-y-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-sky-400">{m.stage}</span>
                      <h2 className="mt-1 font-display text-xl font-bold text-[#fafafa]">{m.title}</h2>
                      <p className="text-xs text-[#a0a0a0]">{m.role}</p>
                    </div>
                    <span className="font-mono text-xs text-[#666666] shrink-0">{m.period}</span>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-[#a0a0a0]">{m.text}</p>

                  <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-sky-500/10 bg-sky-500/[0.04] p-3 text-xs text-sky-200/90">
                    <TrendingUp className="h-4 w-4 shrink-0 text-sky-400 mt-0.5" />
                    <span>{m.growth}</span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-white/6">
                    {m.tech.map((t) => (
                      <span key={t} className="rounded-md border border-white/6 bg-white/[0.02] px-2 py-0.5 text-[10px] text-[#888888]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {!isRight && <div className="hidden md:block" />}
            </article>
          );
        })}
      </div>

      <div className="mx-auto mt-16 flex max-w-xl items-center justify-center gap-3 rounded-2xl border border-sky-500/20 bg-sky-500/5 px-6 py-4 text-center text-xs text-sky-200">
        <ArrowUpRight className="h-4 w-4 shrink-0" />
        Progression continues toward larger industrial systems, international engineering, and scalable products.
      </div>
    </div>
  );
}
