import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCap, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";
import { experience } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Electrical Engineer, airport electronic QA officer, CTO, and builder of complete physical and digital systems.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <ScrollReveal delay={0}>
        <Badge>Builder at the Edge</Badge>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-[#fafafa] sm:text-6xl">
          Complete engineer for physical and digital systems.
        </h1>
      </ScrollReveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <ScrollReveal delay={0.1}>
          <div className="space-y-6 text-sm leading-relaxed text-[#a0a0a0]">
            <p>
              I graduated in Electrical Engineering from Universitas Hasanuddin with a GPA of 3.79 / 4.00, 
              specializing in Control Systems and Instrumentation.
            </p>
            <p>
              Currently, I operate in a dual capacity: supervising electronic systems commissioning 
              at Sultan Hasanuddin International Airport under PT Angkasa Pura I (overseeing Cisco networks, 
              Allen-Bradley PLC/SCADA, Notifier fire alarms, and Leidos screening), while leading R&D and 
              engineering as CTO & Co-Founder of PT Media Teknologi Celebes (Aerasea).
            </p>
            <p>
              My engineering philosophy bridges physical electronics and cloud software: whether writing 
              firmware for an ESP32 sensor node, configuring high-reliability airport PLC loops, or managing 
              Linux Docker infrastructure with Cloudflare Tunnels, I care about end-to-end operational truth.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Card className="h-fit overflow-hidden p-0">
            <div className="relative aspect-[4/5] bg-[#0d0d0d]">
              <Image
                src="/media/profile/fariz-formal.jpg"
                alt="Portrait of Fariz Achmad Faizal"
                fill
                sizes="(min-width: 1024px) 32vw, 92vw"
                className="object-cover object-top opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-xl font-bold text-[#fafafa]">Fariz Achmad Faizal</p>
                <p className="mt-1 text-xs text-sky-200">Electrical Engineer · Startup CTO</p>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3 text-xs text-[#a0a0a0]">
                <MapPin className="h-4 w-4 text-sky-400" />
                Makassar, Indonesia
              </div>
              <div className="flex items-start gap-3 text-xs text-[#a0a0a0]">
                <GraduationCap className="h-4 w-4 text-sky-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Universitas Hasanuddin</p>
                  <p className="text-[11px] text-[#666666]">B.Eng in Electrical Engineering (Control Systems & Instrumentation) — GPA 3.79 / 4.00</p>
                </div>
              </div>
            </div>
          </Card>
        </ScrollReveal>
      </div>

      <div className="mt-16">
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-2xl font-bold text-[#fafafa] mb-6">Experience</h2>
        </ScrollReveal>
        <div className="grid gap-4">
          {experience.map((item, idx) => (
            <ScrollReveal key={item.org} delay={0.1 + idx * 0.08}>
              <Card>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-base font-bold text-[#fafafa]">{item.role}</h3>
                    <p className="text-xs text-sky-400/80">{item.org}</p>
                  </div>
                  <span className="font-mono text-xs text-[#666666]">{item.period}</span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[#a0a0a0]">{item.text}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
