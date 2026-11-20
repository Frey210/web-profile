import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DomainSection } from "@/components/domain-section";
import { PremiumHero } from "@/components/premium-hero";
import { ProjectCard } from "@/components/project-card";
import { StackVisualization } from "@/components/stack-visualization";
import { GithubActivity } from "@/components/github-activity";
import { achievements, experience, projects } from "@/lib/content";

export const metadata: Metadata = {
  alternates: { canonical: "/" }
};

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <>
      {/* 1. Hero with Typewriter & Interactive Mascot */}
      <PremiumHero />

      {/* 2. Engineering Domains */}
      <DomainSection />

      {/* 3. Featured Projects Showcase */}
      <section className="border-y border-[#222222] bg-[#111111]/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">Selected Work</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#fafafa] sm:text-4xl">
                Featured Systems
              </h2>
            </div>
            <Button href="/projects" variant="secondary">
              View all projects <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. GitHub Contributions Heatmap */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">Open Source & Activity</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#fafafa] sm:text-4xl">
              GitHub Contributions
            </h2>
            <p className="mt-3 text-sm text-[#a0a0a0]">
              Continuous code delivery across embedded firmware, backend services, and automation repositories.
            </p>
          </div>
          <GithubActivity username="Frey210" />
        </div>
      </section>

      {/* 5. Complete Technology Stack */}
      <StackVisualization />

      {/* 6. Professional Experience Highlights */}
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">Career Progression</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#fafafa] sm:text-4xl">
            Technical leadership with operational consequences.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[#a0a0a0]">
            I apply the same rigorous commissioning discipline used in international airport development to production IoT delivery for Aerasea.
          </p>
        </div>
        <div className="space-y-4">
          {experience.map((item) => (
            <Card key={item.org}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-base font-bold text-[#fafafa]">{item.role}</h3>
                  <p className="text-xs text-sky-400/80">{item.org}</p>
                </div>
                <span className="font-mono text-xs text-[#666666]">{item.period}</span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-[#a0a0a0]">{item.text}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* 7. Research & Recognition */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <Card className="grid gap-8 border-sky-500/20 bg-gradient-to-br from-sky-500/5 via-[#141414] to-transparent md:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">Recognition & Research</p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#fafafa] sm:text-3xl">
              Published SLAM research, national grants, and competition honors.
            </h2>
            <p className="mt-4 text-xs leading-relaxed text-[#a0a0a0]">
              Bridging academic inquiry with real-world deployment: Kinect-based SLAM journal publication, two consecutive national PKM grants, and aviation paper competitions.
            </p>
          </div>
          <div className="grid gap-2.5">
            {achievements.slice(0, 5).map((a) => (
              <div key={a} className="rounded-xl border border-white/6 bg-white/[0.02] px-4 py-3 text-xs text-[#a0a0a0]">
                {a}
              </div>
            ))}
          </div>
        </Card>
      </section>
    </>
  );
}
