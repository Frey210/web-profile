import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCap, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "I am an Electrical Engineer, airport electronic QA officer, CTO, and builder of IoT, embedded, backend, and infrastructure systems."
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <Badge>Builder at the Edge</Badge>
      <h1 className="mt-5 font-display text-4xl font-black text-white sm:text-6xl">A complete engineer for physical and digital systems.</h1>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_.8fr]">
        <div className="space-y-5 text-base leading-8 text-slate-300">
          <p>
            I am an Electrical Engineering graduate from Universitas Hasanuddin with a GPA of 3.79/4.00, working across critical airport infrastructure and startup product engineering.
          </p>
          <p>
            At PT Angkasa Pura I, I serve as Electronic Officer - Quality Assurance for Sultan Hasanuddin International Airport expansion, overseeing commissioning evidence for Cisco data networks, Allen-Bradley PLC/SCADA baggage handling, Notifier fire alarms, public address systems, and Leidos HBS screening.
          </p>
          <p>
            In parallel, I am CTO and Co-Founder of PT Media Teknologi Celebes (Aerasea), where I lead R&D and production delivery across ESP32 firmware, MQTT telemetry, backend APIs, dashboards, mobile products, Linux servers, Docker, Nginx, and Cloudflare Tunnel operations.
          </p>
          <p>
            My work is grounded in research as well as deployment: a Kinect-based SLAM mobile robot became my undergraduate thesis and a JITET journal publication, while PKM-funded projects demonstrated early national recognition in applied engineering.
          </p>
        </div>
        <Card className="h-fit overflow-hidden p-0">
          <div className="relative aspect-[4/5] bg-slate-950">
            <Image
              src="/media/profile/fariz-formal.jpg"
              alt="Formal portrait of Fariz Achmad Faizal"
              fill
              sizes="(min-width: 1024px) 32vw, 92vw"
              className="object-cover object-top opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-display text-xl font-bold text-white">Fariz Achmad Faizal</p>
              <p className="mt-1 text-sm text-cyan-100">Electrical Engineer / IoT Systems Builder</p>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 text-slate-300">
              <MapPin className="h-5 w-5 text-cyan-200" />
              Makassar, Indonesia
            </div>
            <div className="mt-6 flex items-start gap-3 text-slate-300">
              <GraduationCap className="mt-1 h-5 w-5 text-cyan-200" />
              <div>
                <p className="font-semibold text-white">Universitas Hasanuddin</p>
                <p className="mt-1 text-sm text-slate-400">Bachelor of Electrical Engineering, Control Systems and Instrumentation, GPA 3.79/4.00.</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="mt-12 grid gap-4">
        {experience.map((item) => (
          <Card key={item.org}>
            <p className="text-sm text-cyan-200">{item.period}</p>
            <h2 className="mt-2 font-display text-xl font-bold text-white">{item.role}</h2>
            <p className="mt-1 text-sm font-medium text-slate-300">{item.org}</p>
            <p className="mt-4 text-sm leading-6 text-slate-400">{item.text}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
