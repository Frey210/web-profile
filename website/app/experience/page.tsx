import type { Metadata } from "next";
import { CareerTimeline } from "@/components/career-timeline";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Experience",
  description: "Career progression from AirNav aviation monitoring to startup CTO and airport development quality assurance.",
  alternates: { canonical: "/experience" }
};

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <ScrollReveal delay={0}>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">Career Progression</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-[#fafafa] sm:text-6xl">
            From aviation systems to technical leadership.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#a0a0a0]">
            My career connects three rigorous domains: learning operational reliability at AirNav, 
            architecting production IoT systems as a startup CTO, and applying airport-grade QA standards 
            to one of Eastern Indonesia&apos;s largest aviation infrastructure developments.
          </p>
        </div>
      </ScrollReveal>
      <div className="mt-12">
        <CareerTimeline />
      </div>
    </section>
  );
}
