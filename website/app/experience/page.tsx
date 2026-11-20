import type { Metadata } from "next";
import { CareerTimeline } from "@/components/career-timeline";

export const metadata: Metadata = {
  title: "Experience",
  description: "Career progression from AirNav aviation monitoring to startup CTO and airport development quality assurance.",
  alternates: { canonical: "/experience" }
};

export default function ExperiencePage() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pixel-grid opacity-25" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-pixel text-[9px] uppercase tracking-[0.3em] text-neon neon-glow-subtle">Career Progression</p>
          <h1 className="mt-4 font-display text-4xl font-black text-white sm:text-6xl">From aviation systems to technical leadership.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-500">
            Three connected stages: learning operational reliability at AirNav, building products as startup CTO, and applying systems discipline to airport development.
          </p>
        </div>
        <CareerTimeline />
      </div>
    </section>
  );
}
