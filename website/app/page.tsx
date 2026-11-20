import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DomainSection } from "@/components/domain-section";
import { PremiumHero } from "@/components/premium-hero";
import { ProjectCard } from "@/components/project-card";
import { StackVisualization } from "@/components/stack-visualization";
import { achievements, experience, projects } from "@/lib/content";

export const metadata: Metadata = {
  alternates: { canonical: "/" }
};

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 5);

  return (
    <>
      <PremiumHero />
      <DomainSection />

      {/* Featured Projects */}
      <section className="border-y border-neon/8 bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-pixel text-[9px] uppercase tracking-[0.3em] text-neon neon-glow-subtle">Featured Projects</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">Systems that prove the claim.</h2>
            </div>
            <Button href="/projects" variant="ghost">
              All projects <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="stagger-children mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <StackVisualization />

      {/* Experience */}
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div>
          <p className="font-pixel text-[9px] uppercase tracking-[0.3em] text-neon neon-glow-subtle">Experience</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
            Technical leadership with operational consequences.
          </h2>
          <p className="mt-5 text-slate-500">
            Airport commissioning discipline applied to production IoT product delivery.
          </p>
        </div>
        <div className="space-y-4">
          {experience.map((item) => (
            <Card key={item.org}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{item.role}</h3>
                  <p className="font-mono text-xs text-neon/60">{item.org}</p>
                </div>
                <span className="font-mono text-[10px] text-slate-600">{item.period}</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-500">{item.text}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Research & Recognition */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Card className="pixel-corners grid gap-8 border-neon/15 bg-gradient-to-br from-neon/5 via-background to-magenta/3 md:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="font-pixel text-[9px] uppercase tracking-[0.3em] text-neon neon-glow-subtle">Research & Recognition</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-white">
              Published SLAM research, national grants, and competition proof.
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Production delivery combined with academic output: Kinect-based SLAM publication, nationally funded PKM work, and aviation-domain recognition.
            </p>
          </div>
          <div className="grid gap-3">
            {achievements.slice(0, 5).map((a) => (
              <div key={a} className="border border-neon/8 bg-neon/3 px-4 py-3 font-mono text-xs text-slate-400">
                {a}
              </div>
            ))}
          </div>
        </Card>
      </section>
    </>
  );
}
