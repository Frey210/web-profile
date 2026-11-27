import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DomainSection } from "@/components/domain-section";
import { PremiumHero } from "@/components/premium-hero";
import { ProjectCard } from "@/components/project-card";
import { StackVisualization } from "@/components/stack-visualization";
import { GithubActivity } from "@/components/github-activity";
import { achievements, experience, projects } from "@/lib/content";
import styles from "@/components/premium-hero.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" }
};

export default function HomePage() {
  const spotlight = projects.find((project) => project.slug === "dento-smart")!;
  const featured = projects.filter((project) => project.featured && project !== spotlight).slice(0, 5);

  return (
    <>
      <PremiumHero />

      <section aria-labelledby="featured-systems" className="border-b border-indigo-200/15 bg-[#12121d] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="featured-systems" className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Featured Systems
          </h2>
          <article className="mt-7 grid overflow-hidden rounded-2xl border border-indigo-200/20 bg-[#19192a] md:grid-cols-[1.15fr_1fr]">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#232338] md:aspect-auto md:min-h-[21rem]">
              <Image
                src="/media/projects/dento-smart/dashboard.png"
                alt="Dento Smart monitoring dashboard"
                fill
                sizes="(min-width: 1280px) 650px, (min-width: 768px) 54vw, 94vw"
                className={`object-contain p-4 sm:p-7 ${styles.spotlightImage}`}
              />
            </div>
            <div className="flex flex-col items-start justify-center px-5 py-8 sm:p-10 lg:p-12">
              <h3 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{spotlight.title}</h3>
              <p className="mt-3 text-sm font-medium text-indigo-200">{spotlight.domain}</p>
              <p className="mt-4 max-w-[46ch] leading-relaxed text-[#bebed2]">{spotlight.summary}</p>
              <Button href={`/projects/${spotlight.slug}`} variant="secondary" className="mt-6">
                View Dento Smart project <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Button>
            </div>
          </article>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-7">
            <Button href="/projects" variant="secondary">
              View all projects <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <DomainSection />

      {/* 4. GitHub Contributions Heatmap */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Open Source & Activity</p>
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
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Career Progression</p>
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
                  <p className="text-sm text-indigo-300">{item.org}</p>
                </div>
                <span className="font-mono text-xs text-[#a0a0a0]">{item.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#a0a0a0]">{item.text}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* 7. Research & Recognition */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <Card className="grid gap-8 border-indigo-500/20 bg-gradient-to-br from-indigo-500/5 via-[#141414] to-transparent md:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Recognition & Research</p>
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
