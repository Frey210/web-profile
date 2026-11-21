import type { Metadata } from "next";
import { Award, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { achievements } from "@/lib/content";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Awards, national grants, certifications, academic honors, and professional recognition.",
  alternates: { canonical: "/achievements" }
};

const certifications = [
  "AWS Cloud Practitioner Essentials — Dicoding, valid until Nov 2026",
  "Data Visualization Fundamentals — Dicoding, valid until Dec 2026",
  "Python Programming Fundamentals — Dicoding, valid until Dec 2026",
  "JavaScript Fundamentals with Node.js — Dicoding, valid until Feb 2026",
  "Cisco Networking Basics — undergraduate period"
];

export default function AchievementsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <ScrollReveal delay={0}>
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Recognition & Honors</p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-[#fafafa] sm:text-6xl">
          National proof, academic proof, production proof.
        </h1>
      </ScrollReveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <ScrollReveal delay={0.1}>
          <Card>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 mb-6">
              <Award className="h-5 w-5" />
            </div>
            <h2 className="font-display text-xl font-bold text-[#fafafa]">Awards & Grants</h2>
            <div className="mt-6 grid gap-3">
              {achievements.map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-white/6 bg-white/[0.02] p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <p className="text-xs leading-relaxed text-[#a0a0a0]">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <Card>
            <h2 className="font-display text-xl font-bold text-[#fafafa] mb-6">Certifications</h2>
            <div className="space-y-4">
              {certifications.map((item) => (
                <div key={item} className="border-b border-white/6 pb-4 last:border-0">
                  <p className="text-xs leading-relaxed text-[#a0a0a0]">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}

