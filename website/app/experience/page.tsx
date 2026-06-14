import type { Metadata } from "next";
import { CareerTimeline } from "@/components/career-timeline";

export const metadata: Metadata = {
  title: "Experience",
  description: "My career progression from AirNav aviation monitoring to startup technical leadership and airport development project quality assurance.",
  alternates: { canonical: "/experience" }
};

export default function ExperiencePage() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-grid tech-grid opacity-35" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Career Progression</p>
          <h1 className="mt-3 font-display text-4xl font-black text-white sm:text-6xl">From aviation systems to technical leadership.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            My career has grown through three connected stages: learning operational reliability at AirNav, building complete products as a startup CTO, and applying that systems discipline to a major airport development project.
          </p>
        </div>
        <CareerTimeline />
      </div>
    </section>
  );
}
