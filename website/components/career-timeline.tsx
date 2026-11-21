"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Building2, Plane, Rocket, TrendingUp, Sparkles } from "lucide-react";

const milestones = [
  {
    period: "2022",
    stage: "Foundation",
    title: "AirNav Indonesia",
    role: "Air Traffic Navigation Services Intern",
    text: "Entered aviation technology by developing monitoring capability for MATSC Makassar server-room environments. Established foundational grounding in operational reliability, instrumentation, and mission-critical systems.",
    growth: "From academic theory to operational aviation reliability",
    icon: Plane,
    tech: ["Monitoring", "Sensors", "Networking", "Aviation Operations"],
    highlight: "Mission Critical",
  },
  {
    period: "2023 — Present",
    stage: "Startup Leadership",
    title: "PT Media Teknologi Celebes (Aerasea)",
    role: "CTO & Co-Founder",
    text: "Directing R&D, product architecture, and production delivery for IoT platforms across aquaculture, healthcare, and civic tech. Leading multidisciplinary teams spanning firmware, backend, web, mobile, and server infrastructure.",
    growth: "From system builder to technology executive",
    icon: Rocket,
    tech: ["CTO", "IoT Platforms", "Cloud Backend", "Linux/Docker", "Product Strategy"],
    highlight: "Executive Leadership",
  },
  {
    period: "Nov 2023 — Present",
    stage: "Critical Infrastructure",
    title: "Sultan Hasanuddin International Airport Expansion",
    role: "Electronic Officer — Quality Assurance, PT Angkasa Pura I",
    text: "Overseeing installation, testing, and commissioning quality assurance for data networks (Cisco), PLC/SCADA baggage handling systems (Allen-Bradley), fire alarms (Notifier), public address, and Leidos HBS screening.",
    growth: "From startup agility to certified airport systems assurance",
    icon: Building2,
    tech: ["PLC/SCADA", "Cisco Networks", "FAT/SAT", "Notifier FAS", "Leidos HBS"],
    highlight: "Infrastructure QA",
  },
];

export function CareerTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress for dynamic center beam
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="relative mt-16 pb-8">
      {/* Background static timeline line */}
      <div className="absolute bottom-0 left-5 top-0 w-px bg-white/6 md:left-1/2 md:-translate-x-1/2" />

      {/* Dynamic glowing neon progress beam */}
      <motion.div
        style={{ scaleY }}
        className="absolute bottom-0 left-5 top-0 w-[2px] origin-top bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-400 shadow-[0_0_12px_rgba(129,140,248,0.8)] md:left-1/2 md:-translate-x-1/2 pointer-events-none z-10"
      />

      <div className="space-y-14 md:space-y-20">
        {milestones.map((m, i) => {
          const Icon = m.icon;
          const isRight = i % 2 === 1;

          return (
            <div key={m.title} className="relative grid gap-6 pl-14 md:grid-cols-2 md:pl-0 items-center">
              {/* Center Timeline Node Icon with spring pop-in & glowing pulse */}
              <motion.div
                initial={{ scale: 0, rotate: -45, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                  delay: 0.1,
                }}
                className="absolute left-0 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-400/40 bg-[#0c0c12] text-indigo-400 shadow-[0_0_20px_rgba(129,140,248,0.35)] md:left-1/2 md:-translate-x-1/2"
              >
                <Icon className="h-5 w-5" />
                <span className="absolute -inset-1 rounded-xl bg-indigo-500/20 blur-sm pointer-events-none" />
              </motion.div>

              {/* Left / Right Card Container with Cyber Pop-In */}
              <div className={isRight ? "md:col-start-2 md:pl-12" : "md:pr-12"}>
                <motion.article
                  initial={{
                    opacity: 0,
                    x: isRight ? 40 : -40,
                    y: 20,
                    scale: 0.94,
                    filter: "blur(6px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ willChange: "transform, opacity, filter" }}
                  className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#121118]/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-400 hover:border-indigo-400/40 hover:bg-[#161522] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(129,140,248,0.18)]"
                >
                  {/* Cyber Hologram Scanline Light Sweep on Entry */}
                  <motion.div
                    initial={{ x: "-120%", opacity: 0.7 }}
                    whileInView={{ x: "220%", opacity: 0 }}
                    viewport={{ once: true, margin: "-70px" }}
                    transition={{ duration: 1.1, delay: 0.35, ease: "easeInOut" }}
                    className="pointer-events-none absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent z-10"
                  />

                  {/* Top Ambient Glow Pill */}
                  <div className="absolute top-0 right-0 h-28 w-28 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />

                  {/* Header Row */}
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between relative z-20">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="inline-flex items-center gap-1 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-indigo-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                          {m.stage}
                        </span>
                        <span className="rounded-full border border-white/6 bg-white/[0.03] px-2 py-0.5 text-[10px] font-mono text-[#777777]">
                          {m.highlight}
                        </span>
                      </div>
                      <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#fafafa] group-hover:text-indigo-200 transition-colors">
                        {m.title}
                      </h2>
                      <p className="mt-0.5 text-xs font-medium text-[#a0a0a0]">{m.role}</p>
                    </div>
                    <span className="font-mono text-xs text-[#888888] shrink-0 self-start rounded-md border border-white/6 bg-[#0c0c10] px-2.5 py-1">
                      {m.period}
                    </span>
                  </div>

                  {/* Body description */}
                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#a0a0a0] relative z-20">
                    {m.text}
                  </p>

                  {/* Growth / impact callout badge */}
                  <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-indigo-500/20 bg-indigo-500/[0.06] p-3.5 text-xs text-indigo-200/95 relative z-20">
                    <TrendingUp className="h-4 w-4 shrink-0 text-indigo-400 mt-0.5" />
                    <span className="font-medium">{m.growth}</span>
                  </div>

                  {/* Tech stack badges */}
                  <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-white/6 relative z-20">
                    {m.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-white/6 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-[#888888] transition group-hover:border-indigo-400/20 group-hover:text-[#cccccc]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </div>

              {/* Blank column for alternating grid alignment on desktop */}
              {!isRight && <div className="hidden md:block" />}
            </div>
          );
        })}
      </div>

      {/* Bottom Career Horizon Card with Pop-In */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mt-20 flex max-w-xl items-center justify-center gap-3 rounded-2xl border border-indigo-500/25 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/5 px-6 py-4 text-center text-xs text-indigo-200 shadow-[0_8px_30px_rgba(129,140,248,0.15)]"
      >
        <Sparkles className="h-4 w-4 shrink-0 text-indigo-400 animate-pulse" />
        <span>Progression continues toward larger industrial systems, international engineering, and scalable products.</span>
        <ArrowUpRight className="h-4 w-4 shrink-0 opacity-70" />
      </motion.div>
    </div>
  );
}
