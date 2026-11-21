"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Building2, Plane, Rocket, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";

const milestones = [
  {
    period: "2022",
    yearNumber: "2022",
    stage: "Foundation",
    title: "AirNav Indonesia",
    role: "Air Traffic Navigation Services Intern",
    location: "MATSC Makassar",
    text: "Entered aviation technology by developing monitoring capability for MATSC Makassar server-room environments. Established foundational grounding in operational reliability, instrumentation, and mission-critical systems.",
    growth: "From academic theory to operational aviation reliability",
    icon: Plane,
    image: "/media/experience/airnav.jpg",
    imageCaption: "Aviation Telemetry & Radar Systems",
    statusText: "Operational Reliability",
    tech: ["Monitoring", "Sensors", "Networking", "Aviation Operations"],
    highlight: "Mission Critical",
  },
  {
    period: "2023 — Present",
    yearNumber: "2023",
    stage: "Startup Leadership",
    title: "PT Media Teknologi Celebes (Aerasea)",
    role: "CTO & Co-Founder",
    location: "Makassar & National",
    text: "Directing R&D, product architecture, and production delivery for IoT platforms across aquaculture, healthcare, and civic tech. Leading multidisciplinary teams spanning firmware, backend, web, mobile, and server infrastructure.",
    growth: "From system builder to technology executive",
    icon: Rocket,
    image: "/media/experience/aerasea.png",
    imageCaption: "Aerasea IoT Telemetry Platform & Hardware",
    statusText: "Live Production Platform",
    tech: ["CTO", "IoT Platforms", "Cloud Backend", "Linux/Docker", "Product Strategy"],
    highlight: "Executive Leadership",
  },
  {
    period: "Nov 2023 — Present",
    yearNumber: "2024",
    stage: "Critical Infrastructure",
    title: "Sultan Hasanuddin International Airport Expansion",
    role: "Electronic Officer — Quality Assurance, PT Angkasa Pura I",
    location: "Makassar International Airport",
    text: "Overseeing installation, testing, and commissioning quality assurance for data networks (Cisco), PLC/SCADA baggage handling systems (Allen-Bradley), fire alarms (Notifier), public address, and Leidos HBS screening.",
    growth: "From startup agility to certified airport systems assurance",
    icon: Building2,
    image: "/media/experience/airport.jpg",
    imageCaption: "Airport Electronics & Industrial QA",
    statusText: "Certified Commissioning",
    tech: ["PLC/SCADA", "Cisco Networks", "FAT/SAT", "Notifier FAS", "Leidos HBS"],
    highlight: "Infrastructure QA",
  },
];

export function CareerTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  // Scroll progress bounded strictly to the milestones container
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 65%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div className="relative mt-12 pb-8">
      {/* 
        Milestones Container: 
        The timeline rail starts strictly at the first milestone icon and stops strictly at the last milestone icon.
      */}
      <div ref={timelineRef} className="relative">
        {/* Background static track (aligned with icon center at left-6 sm:left-8) */}
        <div className="absolute left-6 sm:left-8 top-8 bottom-8 w-[2px] -translate-x-1/2 bg-white/8 z-0 pointer-events-none" />

        {/* Dynamic glowing neon progress beam */}
        <motion.div
          style={{ scaleY }}
          className="absolute left-6 sm:left-8 top-8 bottom-8 w-[2px] -translate-x-1/2 origin-top bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-400 shadow-[0_0_14px_rgba(129,140,248,0.9)] z-10 pointer-events-none"
        />

        {/* Milestones Stack */}
        <div className="space-y-12 sm:space-y-16">
          {milestones.map((m, i) => {
            const Icon = m.icon;

            return (
              <div key={m.title} className="relative flex items-start group">
                {/* 
                  Timeline Node Icon:
                  Centered exactly on the rail line (left-6 sm:left-8 -translate-x-1/2).
                  Solid dark opaque background prevents line collision or bleed-through.
                */}
                <motion.div
                  initial={{ scale: 0, rotate: -30, opacity: 0 }}
                  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 20,
                    delay: 0.08 * i,
                  }}
                  className="absolute left-6 sm:left-8 -translate-x-1/2 top-6 z-20 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border-2 border-indigo-400/40 bg-[#0e0d16] text-indigo-400 shadow-[0_0_24px_rgba(129,140,248,0.35)] transition-transform duration-300 group-hover:scale-110 group-hover:border-indigo-400 group-hover:shadow-[0_0_30px_rgba(129,140,248,0.5)]"
                >
                  <Icon className="h-5 w-5 sm:h-5.5 sm:w-5.5" />
                  <span className="absolute -inset-1 rounded-2xl bg-indigo-500/15 blur-sm pointer-events-none" />
                </motion.div>

                {/* 
                  Experience Card:
                  Separated with generous left margin (ml-16 sm:ml-20) so the rail never touches text or borders.
                */}
                <motion.article
                  initial={{ opacity: 0, y: 35, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.65, delay: 0.12 * i, ease: [0.16, 1, 0.3, 1] }}
                  style={{ willChange: "transform, opacity" }}
                  className="relative ml-16 sm:ml-20 flex-1 overflow-hidden rounded-3xl border border-white/8 bg-[#111018]/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-400 hover:border-indigo-400/40 hover:bg-[#151422] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(129,140,248,0.16)]"
                >
                  {/* Huge Faded Year Typography Background */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none select-none absolute right-4 sm:right-8 top-1 sm:top-2 font-display text-7xl sm:text-9xl font-black tracking-tighter text-indigo-400/[0.06] group-hover:text-indigo-400/[0.12] group-hover:scale-105 transition-all duration-500 z-0"
                  >
                    {m.yearNumber}
                  </span>

                  {/* Corner ambient radial glow */}
                  <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none z-0" />

                  <div className="relative z-10 grid gap-6 lg:grid-cols-[1.25fr_1fr] items-start">
                    {/* Left: Metadata & Narrative */}
                    <div>
                      {/* Top badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-[10px] sm:text-xs font-mono uppercase tracking-wider text-indigo-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                          {m.stage}
                        </span>
                        <span className="rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[10px] sm:text-xs font-mono text-[#888888]">
                          {m.highlight}
                        </span>
                        <span className="rounded-full border border-white/8 bg-[#0a0a0f] px-2.5 py-1 text-[10px] sm:text-xs font-mono text-indigo-300/80">
                          {m.period}
                        </span>
                      </div>

                      {/* Title & Role */}
                      <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#fafafa] group-hover:text-indigo-200 transition-colors">
                        {m.title}
                      </h2>
                      <div className="mt-1 flex flex-wrap items-center gap-2 text-xs font-medium text-[#a0a0a0]">
                        <span className="text-white/90">{m.role}</span>
                        <span>•</span>
                        <span className="text-[#666666]">{m.location}</span>
                      </div>

                      {/* Description */}
                      <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#a0a0a0]">
                        {m.text}
                      </p>

                      {/* Growth callout pill */}
                      <div className="mt-5 flex items-start gap-2.5 rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.05] p-3.5 text-xs text-indigo-200/95">
                        <TrendingUp className="h-4 w-4 shrink-0 text-indigo-400 mt-0.5" />
                        <span className="font-medium">{m.growth}</span>
                      </div>

                      {/* Tech stack badges */}
                      <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-white/6">
                        {m.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-lg border border-white/6 bg-white/[0.02] px-2.5 py-1 text-[10px] font-medium text-[#888888] transition group-hover:border-indigo-400/25 group-hover:text-[#cccccc]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: High-Resolution Visual Schematic / Illustration Card */}
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0c14] shadow-inner lg:mt-2">
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <Image
                          src={m.image}
                          alt={m.imageCaption}
                          fill
                          sizes="(min-width: 1024px) 380px, 90vw"
                          className="object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                        />
                        {/* Film overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d16] via-[#0e0d16]/30 to-transparent" />

                        {/* Top corner live status badge */}
                        <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-black/40 bg-black/60 px-2.5 py-1 text-[10px] font-mono font-medium text-[#e0e7ff] backdrop-blur-md">
                          <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                          <span>{m.statusText}</span>
                        </div>
                      </div>

                      {/* Bottom Image Caption */}
                      <div className="p-3 border-t border-white/6 bg-[#0a0a0f]/90 flex items-center justify-between text-[11px] text-[#888888]">
                        <span className="font-mono text-indigo-300/90">{m.imageCaption}</span>
                        <span className="font-mono text-[#555555]">VERIFIED</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </div>
            );
          })}
        </div>
      </div>

      {/* 
        Bottom Career Horizon Box:
        Placed completely separate and BELOW the timeline rail.
        Zero vertical laser line passes through this box!
      */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mt-20 sm:mt-24 flex max-w-2xl items-center justify-center gap-3 rounded-2xl border border-indigo-500/25 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/5 px-6 py-4 text-center text-xs text-indigo-200 shadow-[0_8px_30px_rgba(129,140,248,0.15)]"
      >
        <Sparkles className="h-4 w-4 shrink-0 text-indigo-400 animate-pulse" />
        <span>Progression continues toward larger industrial systems, international engineering, and scalable products.</span>
        <ArrowUpRight className="h-4 w-4 shrink-0 opacity-70" />
      </motion.div>
    </div>
  );
}
