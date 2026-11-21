import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Systems portfolio spanning IoT platforms, SLAM robotics, airport critical electronics, and infrastructure engineering.",
  alternates: { canonical: "/projects" }
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <ScrollReveal delay={0}>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Case Studies</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-[#fafafa] sm:text-6xl">
            Every project is a system.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#a0a0a0]">
            Engineering case studies spanning embedded hardware, sensor networks, cloud backends, robotics research, and certified airport infrastructure.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ScrollReveal key={project.slug} delay={index * 0.08}>
            <ProjectCard project={project} index={index} headingLevel="h2" />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

