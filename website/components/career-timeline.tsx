import { ArrowUpRight, Building2, Plane, Rocket, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const milestones = [
  {
    period: "2022",
    stage: "Foundation",
    title: "AirNav Indonesia",
    role: "Air Traffic Navigation Services Intern",
    text: "I entered aviation technology by developing monitoring capability for MATSC Makassar server-room environments. This established my foundation in operational reliability, instrumentation, and systems that support critical services.",
    growth: "From academic engineering to operational aviation systems",
    icon: Plane,
    tech: ["Monitoring", "Sensors", "Networking", "Aviation Operations"]
  },
  {
    period: "2023 - Present",
    stage: "Leadership",
    title: "Technology Startup",
    role: "CTO & Co-Founder, PT Media Teknologi Celebes",
    text: "I expanded from individual engineering into technical leadership, product architecture, and production delivery. I now lead multidisciplinary systems spanning embedded firmware, backend APIs, web, mobile, infrastructure, and IoT operations.",
    growth: "From system builder to product and engineering leader",
    icon: Rocket,
    tech: ["CTO", "IoT Products", "Backend", "Infrastructure", "Team Leadership"]
  },
  {
    period: "Nov 2023 - Present",
    stage: "Critical Infrastructure",
    title: "Airport Development Project",
    role: "Electronic Officer - Quality Assurance, PT Angkasa Pura I",
    text: "I apply startup-level systems thinking within a regulated airport development environment, overseeing quality assurance and commissioning for data networks, PLC/SCADA baggage handling, fire alarm, public address, and X-Ray HBS systems.",
    growth: "From product delivery to airport-grade system assurance",
    icon: Building2,
    tech: ["PLC/SCADA", "Cisco", "FAT/SAT", "Notifier", "Leidos HBS"]
  }
];

export function CareerTimeline() {
  return (
    <div className="relative mt-14">
      <div className="absolute bottom-0 left-5 top-0 w-px bg-white/10 md:left-1/2" />
      <div className="timeline-line absolute left-5 top-0 w-px origin-top bg-gradient-to-b from-cyan-300 via-blue-500 to-emerald-300 md:left-1/2" />

      <div className="space-y-12 md:space-y-20">
        {milestones.map((milestone, index) => {
          const Icon = milestone.icon;
          const alignRight = index % 2 === 1;

          return (
            <article
              key={milestone.title}
              className="timeline-entry relative grid gap-6 pl-16 md:grid-cols-2 md:pl-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="timeline-node absolute left-0 top-7 z-20 flex h-10 w-10 items-center justify-center rounded-md border border-cyan-300/35 bg-slate-950 text-cyan-100 md:left-1/2 md:-translate-x-1/2"
                style={{ animationDelay: `${index * 0.35}s` }}
              >
                <Icon className="h-5 w-5" />
              </div>

              <div className={alignRight ? "md:col-start-2 md:pl-12" : "md:pr-12"}>
                <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-slate-950/68 p-6 shadow-panel backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 via-transparent to-emerald-300/8 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-200">{milestone.stage}</p>
                        <h2 className="mt-2 font-display text-2xl font-bold text-white">{milestone.title}</h2>
                        <p className="mt-1 text-sm font-medium text-slate-300">{milestone.role}</p>
                      </div>
                      <span className="shrink-0 font-mono text-xs text-emerald-300">{milestone.period}</span>
                    </div>
                    <p className="mt-5 text-sm leading-7 text-slate-400">{milestone.text}</p>
                    <div className="mt-5 flex items-start gap-3 rounded-md border border-emerald-300/15 bg-emerald-300/[0.06] p-3">
                      <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                      <p className="text-sm leading-6 text-emerald-100">{milestone.growth}</p>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {milestone.tech.map((tech) => <Badge key={tech}>{tech}</Badge>)}
                    </div>
                  </div>
                </div>
              </div>

              {!alignRight && <div className="hidden md:block" />}
            </article>
          );
        })}
      </div>

      <div className="timeline-entry mx-auto mt-16 flex max-w-xl items-center justify-center gap-3 rounded-lg border border-cyan-300/20 bg-cyan-300/[0.06] px-5 py-4 text-center text-sm text-cyan-100">
        <ArrowUpRight className="h-4 w-4 shrink-0" />
        The progression continues toward larger industrial systems, scalable products, and international engineering work.
      </div>
    </div>
  );
}
