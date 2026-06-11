import type { Metadata } from "next";
import { Award, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { achievements } from "@/lib/content";

export const metadata: Metadata = {
  title: "Achievements",
  description: "My awards, grants, certifications, academic honors, and professional recognition."
};

const certifications = [
  "AWS Cloud Practitioner Essentials - Dicoding, valid until Nov 2026",
  "Data Visualization Fundamentals - Dicoding, valid until Dec 2026",
  "Python Programming Fundamentals - Dicoding, valid until Dec 2026",
  "JavaScript Fundamentals with Node.js - Dicoding, valid until Feb 2026",
  "Cisco Networking Basics - undergraduate period"
];

export default function AchievementsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Recognition</p>
      <h1 className="mt-3 font-display text-4xl font-black text-white sm:text-6xl">National proof, academic proof, production proof.</h1>
      <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_.8fr]">
        <Card>
          <Award className="h-7 w-7 text-cyan-200" />
          <h2 className="mt-5 font-display text-2xl font-bold text-white">Awards & Grants</h2>
          <div className="mt-6 grid gap-3">
            {achievements.map((item) => (
              <div key={item} className="flex gap-3 rounded-md border border-white/10 bg-white/[0.03] p-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="font-display text-2xl font-bold text-white">Certifications</h2>
          <div className="mt-6 space-y-4">
            {certifications.map((item) => (
              <p key={item} className="border-b border-white/8 pb-4 text-sm leading-6 text-slate-400 last:border-0">
                {item}
              </p>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
