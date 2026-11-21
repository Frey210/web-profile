"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Building2, Plane, Rocket, TrendingUp } from "lucide-react";

const milestones = [
  {
    period: "2022",
    yearNumber: "2022",
    stage: "Foundation",
    title: "AirNav Indonesia",
    role: "Air Traffic Navigation Services Intern",
    text: "Entered aviation technology by developing monitoring capability for MATSC Makassar server-room environments. Established foundational grounding in operational reliability, instrumentation, and mission-critical systems.",
    growth: "From academic theory to operational aviation reliability",
    icon: Plane,
    image: "/media/experience/airnav.jpg",
    imageCaption: "Aviation Telemetry & Operations",
    tech: ["Monitoring", "Sensors", "Networking", "Aviation Operations"],
  },
  {
    period: "2023 — Present",
    yearNumber: "2023",
    stage: "Startup Leadership",
    title: "PT Media Teknologi Celebes (Aerasea)",
    role: "CTO & Co-Founder",
    text: "Directing R&D, product architecture, and production delivery for IoT platforms across aquaculture, healthcare, and civic tech. Leading multidisciplinary teams spanning firmware, backend, web, mobile, and server infrastructure.",
    growth: "From system builder to technology executive",
    icon: Rocket,
    image: "/media/experience/aerasea.png",
    imageCaption: "Aerasea IoT Platform & Telemetry",
    tech: ["CTO", "IoT Platforms", "Cloud Backend", "Linux/Docker", "Product Strategy"],
  },
  {
    period: "Nov 2023 — Present",
    yearNumber: "2024",
    stage: "Critical Infrastructure",
    title: "Sultan Hasanuddin International Airport Expansion",
    role: "Electronic Officer — Quality Assurance, PT Angkasa Pura I",
    text: "Overseeing installation, testing, and commissioning quality assurance for data networks (Cisco), PLC/SCADA baggage handling systems (Allen-Bradley), fire alarms (Notifier), public address, and Leidos HBS screening.",
    growth: "From startup agility to certified airport systems assurance",
    icon: Building2,
    image: "/media/experience/airport.jpg",
    imageCaption: "Airport Electronics & PLC/SCADA QA",
    tech: ["PLC/SCADA", "Cisco Networks", "FAT/SAT", "Notifier FAS", "Leidos HBS"],
  },
];

export function CareerTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress for dynamic center beam - bounded strictly to milestones list
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 60%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative mt-16">
      {/* 
        Milestones Sub-Container:
        The vertical timeline line is kept STRICTLY inside this container (top-6 to bottom-6),
        so it CANNOT reach or cut through the bottom footer box.
      */}
      <div ref={containerRef} className="relative">
        {/* Background static timeline line (centered with -translate-x-1/2 on both mobile and desktop) */}
        <div className="absolute left-5 top-6 bottom-6 w-[2px] -translate-x-1/2 bg-white/8 md:left-1/2 md:-translate-x-1/2 z-0 pointer-events-none" />

        {/* Dynamic glowing neon progress beam (centered with -translate-x-1/2 on both mobile and desktop) */}
        <motion.div
          style={{ scaleY }}
          className="absolute left-5 top-6 bottom-6 w-[2px] -translate-x-1/2 origin-top bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-400 shadow-[0_0_12px_rgba(129,140,248,0.8)] md:left-1/2 md:-translate-x-1/2 z-10 pointer-events-none"
        />

        <div className="space-y-12 md:space-y-16">
          {milestones.map((m, i) => {
            const Icon = m.icon;
            const isRight = i % 2 === 1;

            return (
              <article key={m.title} className="relative grid gap-6 pl-14 md:grid-cols-2 md:pl-0 items-start">
                {/* 
                  Center Icon Node:
                  Centered exactly on the line (left-5 on mobile, md:left-1/2 -translate-x-1/2 on desktop).
                  Opaque background bg-[#0a0a0f] cleanly masks the line behind it without edge collision.
                */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className="absolute left-0 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-500/40 bg-[#0a0a0f] text-indigo-400 shadow-[0_0_20px_rgba(129,140,248,0.35)] md:left-1/2 md:-translate-x-1/2"
                >
                  <Icon className="h-5 w-5" />
                </motion.div>

                {/* Alternating Card (Left on even, Right on odd) */}
                <div className={isRight ? "md:col-start-2 md:pl-12" : "md:pr-12"}>
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="glass-panel relative overflow-hidden p-6 sm:p-8 transition duration-300 hover:-translate-y-1 group"
                  >
                    {/* Faded Giant Year Typography Background */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none select-none absolute right-4 top-2 sm:right-6 sm:top-2 font-display text-6xl sm:text-7xl font-black tracking-tighter text-indigo-400/[0.07] group-hover:text-indigo-400/[0.13] transition-colors z-0"
                    >
                      {m.yearNumber}
                    </span>

                    <div className="relative z-10">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-widest text-indigo-400">{m.stage}</span>
                          <h2 className="mt-1 font-display text-xl font-bold text-[#fafafa]">{m.title}</h2>
                          <p className="text-xs text-[#a0a0a0]">{m.role}</p>
                        </div>
                        <span className="font-mono text-xs text-[#666666] shrink-0">{m.period}</span>
                      </div>

                      {/* Image illustration preview */}
                      {m.image && (
                        <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#0d0d0d] border border-white/6">
                          <Image
                            src={m.image}
                            alt={m.title}
                            fill
                            sizes="(min-width: 768px) 45vw, 90vw"
                            className="object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                          <span className="absolute bottom-2 left-2.5 rounded-md bg-black/60 px-2 py-0.5 text-[9px] font-mono text-indigo-300 backdrop-blur-md border border-white/6">
                            {m.imageCaption}
                          </span>
                        </div>
                      )}

                      <p className="mt-4 text-xs leading-relaxed text-[#a0a0a0]">{m.text}</p>

                      <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-indigo-500/10 bg-indigo-500/[0.04] p-3 text-xs text-indigo-200/90">
                        <TrendingUp className="h-4 w-4 shrink-0 text-indigo-400 mt-0.5" />
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
                  </motion.div>
                </div>

                {!isRight && <div className="hidden md:block" />}
              </article>
            );
          })}
        </div>
      </div>

      {/* 
        Bottom Progression Card:
        Placed completely OUTSIDE the milestone container so the line NEVER slices through it.
      */}
      <div className="mx-auto mt-16 flex max-w-xl items-center justify-center gap-3 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 px-6 py-4 text-center text-xs text-indigo-200">
        <ArrowUpRight className="h-4 w-4 shrink-0" />
        Progression continues toward larger industrial systems, international engineering, and scalable products.
      </div>
    </div>
  );
}
