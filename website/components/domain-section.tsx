"use client";

import { motion } from "framer-motion";
import { Bot, BrainCircuit, Cpu, Network, ServerCog } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const domainCards = [
  {
    title: "Industrial Systems",
    text: "Airport electronics, PLC/SCADA, QA commissioning, baggage handling, fire alarm, public address, and regulated system acceptance.",
    icon: ServerCog,
    tech: ["PLC", "SCADA", "Cisco", "FAT/SAT", "Notifier", "Leidos"]
  },
  {
    title: "IoT & Embedded",
    text: "Sensor-to-cloud products using microcontrollers, telemetry, firmware, field devices, and real-time monitoring dashboards.",
    icon: Cpu,
    tech: ["ESP32", "STM32", "Arduino", "MQTT", "LoRa", "C/C++"]
  },
  {
    title: "Infrastructure Engineering",
    text: "Production operations across Linux servers, containerized services, reverse proxies, secure tunnels, monitoring, and deployment workflows.",
    icon: Network,
    tech: ["Linux", "Docker", "Nginx", "Cloudflare", "Grafana", "Prometheus"]
  },
  {
    title: "Software Platforms",
    text: "Backend APIs, web dashboards, mobile-connected workflows, product architecture, and operational systems for real users.",
    icon: Bot,
    tech: ["Node.js", "FastAPI", "Django", "REST", "React", "PostgreSQL"]
  },
  {
    title: "Applied AI",
    text: "Research and applied intelligence for robotics, computer vision, SLAM, thermal sensing, and domain-specific classification systems.",
    icon: BrainCircuit,
    tech: ["ROS II", "OpenCV", "SLAM", "KNN", "Kinect", "Thermal AI"]
  }
];

export function DomainSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/8 bg-surface/35">
      <div className="absolute inset-0 bg-radial-grid tech-grid opacity-35" />
      <motion.div
        className="absolute left-[-10rem] top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{ x: [0, 42, 0], opacity: [0.25, 0.48, 0.25] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-8rem] right-[-8rem] h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl"
        animate={{ y: [0, -36, 0], opacity: [0.2, 0.44, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Engineering Domains</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-5xl">
            Five connected domains. One end-to-end engineering language.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
            I work across physical systems, embedded devices, cloud infrastructure, software platforms, and applied intelligence, so the complete system can move from field signals to production decisions.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          {domainCards.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <motion.article
                key={domain.title}
                className="group relative min-h-[330px] overflow-hidden rounded-lg border border-white/10 bg-slate-950/62 p-5 shadow-panel backdrop-blur transition-colors hover:border-cyan-300/35"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ delay: index * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.015 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 via-transparent to-emerald-300/8 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <motion.div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-300/10 blur-2xl"
                  animate={{ scale: [1, 1.18, 1], opacity: [0.18, 0.5, 0.18] }}
                  transition={{ duration: 3.2 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md border border-cyan-300/24 bg-cyan-300/10 text-cyan-100 shadow-[0_0_32px_rgba(6,182,212,0.14)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-slate-500">domain 0{index + 1}</p>
                  <h3 className="mt-2 font-display text-xl font-bold text-white">{domain.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-400">{domain.text}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {domain.tech.map((tech) => (
                      <Badge key={tech} className="border-white/10 bg-white/[0.04] text-slate-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
