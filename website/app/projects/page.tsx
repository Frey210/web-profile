import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Engineering projects across IoT aquaculture monitoring, SLAM robotics, airport systems QA, healthcare devices, civic technology, and infrastructure monitoring.",
  alternates: { canonical: "/projects" }
};

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);
  const domains = new Set(projects.map((project) => project.domain.split("/")[0].trim()));

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Project Portfolio</p>
          <h1 className="mt-3 font-display text-4xl font-black leading-tight text-white sm:text-6xl">Built systems, not just demos.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            Case studies spanning embedded hardware, backend APIs, infrastructure deployment, robotics research, airport systems, and startup product delivery.
          </p>
        </div>
        <div className="grid grid-cols-3 overflow-hidden rounded-lg border border-white/10 bg-slate-950/68 text-center shadow-panel backdrop-blur">
          {[
            ["Projects", projects.length.toString()],
            ["Featured", featuredProjects.length.toString()],
            ["Domains", domains.size.toString()]
          ].map(([label, value]) => (
            <div key={label} className="border-r border-white/8 px-3 py-5 last:border-r-0">
              <p className="font-display text-2xl font-black text-white">{value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <div className="mb-5">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Selected work</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-white">Production and infrastructure projects</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} headingLevel="h3" />
          ))}
        </div>
      </div>

      <div className="mt-14">
        <div className="mb-5">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Archive</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-white">Research, prototypes, and supporting systems</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {otherProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} headingLevel="h3" />
          ))}
        </div>
      </div>
    </section>
  );
}
