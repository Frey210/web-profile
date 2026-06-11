import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Engineering projects across IoT aquaculture monitoring, SLAM robotics, airport systems QA, healthcare devices, civic technology, and infrastructure monitoring."
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Project Portfolio</p>
        <h1 className="mt-3 font-display text-4xl font-black text-white sm:text-6xl">Every project is a system.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-400">
          Case studies spanning embedded hardware, backend APIs, infrastructure deployment, robotics research, airport systems, and startup product delivery.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
