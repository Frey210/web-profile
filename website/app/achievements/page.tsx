import type { Metadata } from "next";
import { Award, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { achievements } from "@/lib/content";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Awards, grants, certifications, academic honors, and professional recognition.",
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
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pixel-grid opacity-20" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="font-pixel text-[9px] uppercase tracking-[0.3em] text-neon neon-glow-subtle">Recognition</p>
        <h1 className="mt-4 font-display text-4xl font-black text-white sm:text-6xl">National proof, academic proof, production proof.</h1>
        <div className="stagger-children mt-10 grid gap-5 lg:grid-cols-[1fr_.8fr]">
          <Card>
            <Award className="h-7 w-7 text-neon" />
            <h2 className="mt-5 font-display text-2xl font-bold text-white">Awards & Grants</h2>
            <div className="mt-6 grid gap-3">
              {achievements.map((item) => (
                <div key={item} className="flex gap-3 border border-neon/8 bg-neon/3 p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <p className="font-mono text-xs leading-6 text-slate-400">{item}</p>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <h2 className="font-display text-2xl font-bold text-white">Certifications</h2>
            <div className="mt-6 space-y-4">
              {certifications.map((item) => (
                <p key={item} className="border-b border-neon/8 pb-4 font-mono text-xs leading-6 text-slate-500 last:border-0">
                  {item}
                </p>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
