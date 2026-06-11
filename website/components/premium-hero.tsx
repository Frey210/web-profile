"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Download, Mail, Network, RadioTower, Server, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const particles = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  delay: (index % 8) * 0.35,
  duration: 5 + (index % 5)
}));

const nodes = [
  { label: "Sensors", icon: RadioTower, className: "left-[8%] top-[18%]" },
  { label: "PLC/SCADA", icon: ShieldCheck, className: "right-[9%] top-[22%]" },
  { label: "Firmware", icon: Cpu, className: "left-[12%] bottom-[24%]" },
  { label: "Cloud/API", icon: Server, className: "right-[12%] bottom-[28%]" }
];

const heroStats = [
  { value: "11+", label: "documented systems" },
  { value: "3", label: "production IoT products" },
  { value: "2", label: "national PKM grants" },
  { value: "1", label: "published SLAM paper" }
];

export function PremiumHero() {
  return (
    <section className="relative min-h-[calc(100vh-73px)] overflow-hidden border-b border-white/8">
      <div className="absolute inset-0 bg-radial-grid tech-grid opacity-60" />
      <motion.div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-[-24rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl"
        animate={{ scale: [1, 1.16, 1], opacity: [0.38, 0.62, 0.38] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-18rem] right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-cyan-400/14 blur-3xl"
        animate={{ y: [0, -34, 0], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute inset-0">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute h-1 w-1 rounded-full bg-cyan-200/70 shadow-[0_0_18px_rgba(103,232,249,0.9)]"
            style={{ left: particle.left, top: particle.top }}
            animate={{ y: [0, -28, 0], opacity: [0.08, 0.9, 0.08], scale: [0.7, 1.2, 0.7] }}
            transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_.98fr] lg:px-8">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <Badge>Systems Engineer / Industrial Automation / IoT Platforms</Badge>
          <h1 className="mt-6 max-w-5xl font-display text-5xl font-black leading-[1.01] text-white sm:text-6xl lg:text-7xl">
            Building Technology from Sensors to Scalable Systems
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Systems Engineer specializing in Industrial Automation,
            <br className="hidden sm:block" />
            IoT Platforms, Infrastructure Engineering,
            <br className="hidden sm:block" />
            and Airport Technology Systems.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/projects">
              View Projects <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/cv" variant="secondary">
              Download CV <Download className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="ghost">
              Contact <Mail className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-4 backdrop-blur"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + index * 0.07, duration: 0.5 }}
              >
                <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative min-h-[520px] overflow-hidden rounded-lg border border-cyan-300/18 bg-slate-950/68 shadow-panel"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-radial-grid tech-grid opacity-70" />
          <motion.div
            className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent"
            animate={{ y: [-210, 210, -210], opacity: [0, 1, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-x-10 bottom-8 h-44 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute left-6 top-6 flex items-center gap-2 rounded-md border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 font-mono text-xs text-emerald-100">
            <Network className="h-3.5 w-3.5" />
            sensor bus online
          </div>
          {nodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={node.label}
                className={`absolute ${node.className} z-20 hidden items-center gap-2 rounded-md border border-white/12 bg-slate-950/78 px-3 py-2 text-xs text-slate-200 backdrop-blur sm:flex`}
                animate={{ y: [0, -8, 0], opacity: [0.78, 1, 0.78] }}
                transition={{ duration: 3.5 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
              >
                <Icon className="h-4 w-4 text-cyan-200" />
                {node.label}
              </motion.div>
            );
          })}
          <Image
            src="/media/profile/fariz-startup-cutout.png"
            alt="Fariz Achmad Faizal in startup t-shirt"
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 92vw"
            className="z-10 object-contain object-bottom drop-shadow-[0_32px_70px_rgba(6,182,212,0.18)]"
          />
          <div className="absolute bottom-5 left-5 right-5 z-20 rounded-md border border-white/10 bg-slate-950/82 p-4 backdrop-blur">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-200">End-to-end system path</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">Sensors {">"} Firmware {">"} Backend {">"} Infrastructure {">"} Production</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
