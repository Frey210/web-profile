import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";

export function ProjectCard({
  project,
  index,
  headingLevel = "h3",
}: {
  project: Project;
  index?: number;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;

  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <article className="glass-panel relative flex h-full flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#333333]">
        <div className="flex items-center justify-between border-b border-white/6 pb-4">
          {index !== undefined && (
            <span className="font-mono text-xs text-[#a0a0a0]">{String(index + 1).padStart(2, "0")}</span>
          )}
          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/5 px-2.5 py-0.5 text-[10px] font-medium text-indigo-200">
            {project.status}
          </span>
        </div>

        {project.image ? (
          <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-xl bg-[#0d0d0d]">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(min-width: 1024px) 32vw, 92vw"
              className="object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
            />
          </div>
        ) : null}

        <div className="mt-4 flex-1">
          <div className="flex items-start justify-between gap-2">
            <Heading className="font-display text-xl font-bold text-[#fafafa] group-hover:text-indigo-300 transition">
              {project.title}
            </Heading>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/6 text-[#666666] transition group-hover:border-indigo-400/40 group-hover:text-indigo-300">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>

          <p className="mt-1 text-xs text-[#a0a0a0]">{project.domain}</p>
          <p className="mt-3 text-sm leading-relaxed text-[#a0a0a0] line-clamp-3">
            {project.summary}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-white/6">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/6 bg-white/[0.02] px-2 py-0.5 text-[10px] text-[#888888]"
            >
              {tech}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}
