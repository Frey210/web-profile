import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { experience } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience across PT Angkasa Pura I airport QA, PT Media Teknologi Celebes CTO work, and AirNav Indonesia monitoring systems."
};

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Experience</p>
      <h1 className="mt-3 font-display text-4xl font-black text-white sm:text-6xl">Airport rigor, startup velocity.</h1>
      <div className="mt-10 space-y-5">
        {experience.map((item) => (
          <Card key={item.org}>
            <div className="flex gap-4">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
              <div>
                <p className="text-sm text-cyan-200">{item.period}</p>
                <h2 className="mt-2 font-display text-2xl font-bold text-white">{item.role}</h2>
                <p className="mt-1 font-medium text-slate-300">{item.org}</p>
                <p className="mt-4 leading-7 text-slate-400">{item.text}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
