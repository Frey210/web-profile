import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Boxes, CircleCheck } from "lucide-react";
import type { Project } from "@/lib/content";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ project, headingLevel = "h3" }: { project: Project; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;

  return (
    <Link href={`/projects/${project.slug}`} prefetch={false} className="group block h-full">
      <article className="relative flex h-full min-h-[430px] flex-col overflow-hidden rounded-lg border border-white/10 bg-slate-950/68 shadow-panel backdrop-blur transition duration-300 group-hover:-translate-y-2 group-hover:border-cyan-300/25">
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent opacity-80" />
        {project.image ? (
          <div className="relative aspect-[16/10] overflow-hidden border-b border-white/8 bg-slate-950">
            <Image src={project.image} alt={`${project.title} interface`} fill sizes="(min-width: 1024px) 32vw, 92vw" className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-95" />
          </div>
        ) : (
          <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-white/8 bg-radial-grid tech-grid">
            <Boxes className="h-14 w-14 text-cyan-200/70" />
            <div className="absolute inset-x-12 bottom-8 h-20 rounded-full bg-cyan-300/15 blur-2xl" />
          </div>
        )}
        <div className="relative z-20 flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
                <CircleCheck className="h-3.5 w-3.5" />
                {project.status}
              </div>
              <Heading className="mt-3 font-display text-xl font-bold text-white">{project.title}</Heading>
              <p className="mt-1 text-xs text-slate-500">{project.domain}</p>
            </div>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-slate-400 transition group-hover:border-cyan-300/30 group-hover:text-cyan-100">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
          <p className="mt-4 flex-1 text-sm leading-6 text-slate-400">{project.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4 font-mono text-xs text-slate-500">
            <span>{project.year}</span>
            <span className="text-cyan-200 transition group-hover:translate-x-1">View case study</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
