import { ArrowUpRight, Building2, Plane, Rocket, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const milestones = [
  {
    period: "2022", stage: "Foundation", title: "AirNav Indonesia",
    role: "Air Traffic Navigation Services Intern",
    text: "Entered aviation technology by developing monitoring capability for MATSC Makassar server-room environments. Established foundation in operational reliability and instrumentation.",
    growth: "From academic engineering to operational aviation systems",
    icon: Plane,
    tech: ["Monitoring", "Sensors", "Networking", "Aviation"]
  },
  {
    period: "2023 — Present", stage: "Leadership", title: "Technology Startup",
    role: "CTO & Co-Founder, PT Media Teknologi Celebes",
    text: "Expanded from individual engineering into technical leadership, product architecture, and production delivery across embedded, backend, web, mobile, and infrastructure.",
    growth: "From system builder to engineering leader",
    icon: Rocket,
    tech: ["CTO", "IoT Products", "Backend", "Infrastructure"]
  },
  {
    period: "Nov 2023 — Present", stage: "Critical Infrastructure", title: "Airport Development",
    role: "Electronic Officer — QA, PT Angkasa Pura I",
    text: "Applying startup-level systems thinking within regulated airport development, overseeing QA for data networks, PLC/SCADA baggage handling, fire alarm, PA, and X-Ray HBS.",
    growth: "From product delivery to airport-grade assurance",
    icon: Building2,
    tech: ["PLC/SCADA", "Cisco", "FAT/SAT", "Leidos HBS"]
  }
];

export function CareerTimeline() {
  return (
    <div className="relative mt-14">
      <div className="absolute bottom-0 left-5 top-0 w-px bg-neon/8 md:left-1/2" />
      <div className="absolute left-5 top-0 w-px origin-top bg-gradient-to-b from-neon via-magenta/50 to-accent md:left-1/2" style={{ height: "100%" }} />

      <div className="space-y-12 md:space-y-20">
        {milestones.map((m, i) => {
          const Icon = m.icon;
          const right = i % 2 === 1;

          return (
            <article key={m.title} className="relative grid gap-6 pl-16 md:grid-cols-2 md:pl-0">
              <div className="absolute left-0 top-7 z-20 flex h-10 w-10 items-center justify-center border-2 border-neon/30 bg-background text-neon md:left-1/2 md:-translate-x-1/2">
                <Icon className="h-5 w-5" />
              </div>

              <div className={right ? "md:col-start-2 md:pl-12" : "md:pr-12"}>
                <div className="group relative overflow-hidden border border-neon/10 bg-surface/60 p-6 shadow-panel backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:border-neon/25">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon/5 via-transparent to-magenta/3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="font-pixel text-[8px] uppercase tracking-[0.2em] text-neon">{m.stage}</p>
                        <h2 className="mt-2 font-display text-2xl font-bold text-white">{m.title}</h2>
                        <p className="mt-1 text-sm font-medium text-slate-400">{m.role}</p>
                      </div>
                      <span className="shrink-0 font-mono text-[10px] text-accent">{m.period}</span>
                    </div>
                    <p className="mt-5 text-sm leading-7 text-slate-500">{m.text}</p>
                    <div className="mt-5 flex items-start gap-3 border border-accent/15 bg-accent/5 p-3">
                      <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <p className="text-sm leading-6 text-accent/80">{m.growth}</p>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {m.tech.map((t) => <Badge key={t}>{t}</Badge>)}
                    </div>
                  </div>
                </div>
              </div>

              {!right && <div className="hidden md:block" />}
            </article>
          );
        })}
      </div>

      <div className="mx-auto mt-16 flex max-w-xl items-center justify-center gap-3 border border-neon/15 bg-neon/5 px-5 py-4 text-center font-mono text-xs text-neon/70">
        <ArrowUpRight className="h-4 w-4 shrink-0" />
        Progression continues toward larger industrial systems and international engineering work.
      </div>
    </div>
  );
}
