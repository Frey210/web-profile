import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Engineering projects across IoT, SLAM robotics, airport systems, healthcare devices, civic technology, and infrastructure monitoring.",
  alternates: { canonical: "/projects" }
};

export default function ProjectsPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pixel-grid opacity-15" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-pixel text-[9px] uppercase tracking-[0.3em] text-neon neon-glow-subtle">Project Portfolio</p>
          <h1 className="mt-4 font-display text-4xl font-black text-white sm:text-6xl">Every project is a system.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-500">
            Case studies spanning embedded hardware, backend APIs, infrastructure deployment, robotics research, airport systems, and startup product delivery.
          </p>
        </div>
        <div className="stagger-children mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} headingLevel="h2" />
          ))}
        </div>
      </div>
    </section>
  );
}
