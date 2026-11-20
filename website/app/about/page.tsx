import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCap, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Electrical Engineer, airport electronic QA officer, CTO, and builder of IoT, embedded, backend, and infrastructure systems.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pixel-grid opacity-20" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <Badge>Builder at the Edge</Badge>
        <h1 className="glitch-text mt-5 font-display text-4xl font-black text-white sm:text-6xl" data-text="Complete engineer for physical and digital systems.">
          Complete engineer for physical and digital systems.
        </h1>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_.8fr]">
          <div className="space-y-5 text-base leading-8 text-slate-400">
            <p>
              Electrical Engineering graduate from Universitas Hasanuddin with a GPA of 3.79/4.00, working across critical airport infrastructure and startup product engineering.
            </p>
            <p>
              At PT Angkasa Pura I, I serve as Electronic Officer — Quality Assurance for Sultan Hasanuddin International Airport expansion, overseeing commissioning for Cisco data networks, Allen-Bradley PLC/SCADA baggage handling, Notifier fire alarms, PA systems, and Leidos HBS screening.
            </p>
            <p>
              In parallel, I am CTO and Co-Founder of PT Media Teknologi Celebes (Aerasea), leading R&D and production delivery across ESP32 firmware, MQTT telemetry, backend APIs, dashboards, mobile products, Linux servers, Docker, Nginx, and Cloudflare Tunnel operations.
            </p>
            <p>
              My work is grounded in research as well as deployment: a Kinect-based SLAM mobile robot became my thesis and a JITET journal publication, while PKM-funded projects demonstrated early national recognition.
            </p>
          </div>
          <Card className="h-fit overflow-hidden p-0">
            <div className="relative aspect-[4/5] bg-background">
              <Image
                src="/media/profile/fariz-formal.jpg"
                alt="Fariz Achmad Faizal formal portrait"
                fill
                sizes="(min-width: 1024px) 32vw, 92vw"
                className="object-cover object-top opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute inset-0 pixel-grid-dense opacity-20" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-pixel text-[10px] text-neon neon-glow-subtle">Fariz Achmad Faizal</p>
                <p className="mt-1 font-mono text-xs text-slate-400">Electrical Engineer / IoT Builder</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="h-5 w-5 text-neon/60" />
                <span className="font-mono text-sm">Makassar, Indonesia</span>
              </div>
              <div className="mt-5 flex items-start gap-3 text-slate-400">
                <GraduationCap className="mt-1 h-5 w-5 text-neon/60" />
                <div>
                  <p className="font-semibold text-white">Universitas Hasanuddin</p>
                  <p className="mt-1 font-mono text-xs text-slate-500">B.Eng Electrical Engineering, Control Systems, GPA 3.79/4.00</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="stagger-children mt-12 grid gap-4">
          {experience.map((item) => (
            <Card key={item.org}>
              <p className="font-mono text-[10px] text-neon/60">{item.period}</p>
              <h2 className="mt-2 font-display text-xl font-bold text-white">{item.role}</h2>
              <p className="mt-1 font-mono text-xs text-slate-500">{item.org}</p>
              <p className="mt-4 text-sm leading-6 text-slate-500">{item.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
