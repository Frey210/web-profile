import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DomainSection } from "@/components/domain-section";
import { Reveal } from "@/components/motion";
import { PremiumHero } from "@/components/premium-hero";
import { ProjectCard } from "@/components/project-card";
import { StackVisualization } from "@/components/stack-visualization";
import { achievements, experience, projects } from "@/lib/content";

export default function HomePage() {
  const featured = projects.filter((project) => project.featured).slice(0, 5);

  return (
    <>
      <PremiumHero />

      <DomainSection />

      <section className="border-y border-white/8 bg-surface/45">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Featured Projects</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Systems that prove the claim.</h2>
            </div>
            <Button href="/projects" variant="ghost">
              View all projects <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <StackVisualization />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <Reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Experience Highlights</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Technical leadership with operational consequences.</h2>
            <p className="mt-5 text-slate-400">
              I bring the same discipline I use for airport commissioning evidence into production IoT product delivery for Aerasea.
            </p>
          </div>
        </Reveal>
        <div className="space-y-4">
          {experience.map((item) => (
            <Card key={item.org}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{item.role}</h3>
                  <p className="text-sm text-cyan-200">{item.org}</p>
                </div>
                <span className="text-sm text-slate-500">{item.period}</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-400">{item.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Card className="grid gap-8 border-cyan-300/20 bg-gradient-to-br from-blue-600/14 via-slate-950/80 to-emerald-500/10 md:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Research & Recognition</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white">Published SLAM research, national grants, and competition proof.</h2>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              I combine production delivery with academic output: a Kinect-based SLAM mobile robot publication, nationally funded PKM work, and aviation-domain technical recognition.
            </p>
          </div>
          <div className="grid gap-3">
            {achievements.slice(0, 5).map((achievement) => (
              <div key={achievement} className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
                {achievement}
              </div>
            ))}
          </div>
        </Card>
      </section>
    </>
  );
}
