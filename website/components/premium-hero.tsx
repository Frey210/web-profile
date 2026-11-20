"use client";

import Image from "next/image";
import { ArrowRight, Download, Mail, MapPin, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PixelParticles } from "@/components/pixel-particles";
import { motion } from "framer-motion";

const heroStats = [
  { value: "11+", label: "SYSTEMS BUILT" },
  { value: "3", label: "PROD IoT" },
  { value: "2", label: "PKM GRANTS" },
  { value: "1", label: "PUBLICATION" }
];

const roles = ["IoT Engineer", "Startup CTO", "Airport QA", "Embedded Dev", "Backend Builder"];

export function PremiumHero() {
  return (
    <section className="relative min-h-[calc(100vh-57px)] overflow-hidden border-b border-neon/10">
      {/* Background layers */}
      <div className="absolute inset-0 pixel-grid opacity-60" />
      <PixelParticles count={50} />

      {/* Neon glow orbs */}
      <div aria-hidden="true" className="absolute left-1/4 top-[-12rem] h-[28rem] w-[28rem] rounded-full bg-neon/8 blur-[120px]" />
      <div aria-hidden="true" className="absolute bottom-[-8rem] right-[-5rem] h-[22rem] w-[22rem] rounded-full bg-magenta/8 blur-[100px]" />

      {/* Scan line */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent" />

      <div className="relative mx-auto grid min-h-[calc(100vh-57px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
        {/* Left content */}
        <motion.div
          className="min-w-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge>Systems Engineer × IoT × Industrial Automation</Badge>

          {/* Glitch name */}
          <h1
            className="glitch-text mt-6 max-w-5xl font-display text-4xl font-black leading-[1.04] text-white sm:text-5xl lg:text-7xl lg:leading-[1.01]"
            data-text="Fariz Achmad Faizal"
          >
            Fariz Achmad Faizal
          </h1>

          {/* Pixel subtitle */}
          <p className="pixel-cursor mt-4 font-pixel text-[10px] leading-6 text-neon sm:text-xs">
            {`> BUILDING FROM SENSORS TO PRODUCTION`}
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Systems Engineer specializing in Industrial Automation,
            IoT Platforms, Infrastructure Engineering,
            and Airport Technology Systems.
          </p>

          <div className="mt-5 flex items-center gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-neon/70" aria-hidden="true" />
              Makassar, Indonesia
            </span>
            <span className="inline-flex items-center gap-2">
              <Zap className="h-4 w-4 text-accent/70" aria-hidden="true" />
              Available for work
            </span>
          </div>

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

          {/* Pixel stat boxes */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="pixel-stat p-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              >
                <p className="font-pixel text-lg text-neon neon-glow sm:text-xl">{stat.value}</p>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-widest text-slate-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — Terminal panel with photo */}
        <motion.div
          className="relative hidden min-h-[520px] overflow-hidden lg:block"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="terminal-window h-full overflow-hidden">
            <div className="terminal-bar">
              <span className="terminal-dot bg-red-500/80" style={{ width: 10, height: 10 }} />
              <span className="terminal-dot bg-yellow-500/80" style={{ width: 10, height: 10 }} />
              <span className="terminal-dot bg-green-500/80" style={{ width: 10, height: 10 }} />
              <span className="ml-3 font-mono text-xs text-neon/50">fariz@portfolio ~ $</span>
            </div>

            <div className="relative min-h-[480px]">
              <div className="absolute inset-0 pixel-grid-dense opacity-40" />
              <Image
                src="/media/profile/fariz-startup-cutout.png"
                alt="Fariz Achmad Faizal"
                fill
                sizes="(min-width: 1024px) 46vw, 92vw"
                className="z-10 object-contain object-bottom drop-shadow-[0_0_30px_rgba(0,255,245,0.2)]"
                priority
              />

              {/* Floating role badges */}
              {roles.map((role, i) => (
                <span
                  key={role}
                  className="float-anim absolute z-20 border border-neon/20 bg-background/90 px-2 py-1 font-mono text-[9px] text-neon/70 backdrop-blur"
                  style={{
                    left: `${10 + (i * 18) % 70}%`,
                    top: `${15 + (i * 23) % 60}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${3 + i * 0.5}s`
                  }}
                >
                  {role}
                </span>
              ))}

              {/* Bottom info panel */}
              <div className="absolute bottom-4 left-4 right-4 z-20 border border-neon/15 bg-background/90 p-4 backdrop-blur">
                <p className="font-pixel text-[8px] uppercase tracking-[0.2em] text-neon">System Path</p>
                <p className="mt-2 font-mono text-xs leading-5 text-slate-400">
                  Sensors {">"} Firmware {">"} Backend {">"} Infra {">"} Production
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
