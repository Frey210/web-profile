import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CircleCheck, ImageIcon } from "lucide-react";
import type { Project } from "@/lib/content";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ project, headingLevel = "h3" }: { project: Project; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;

  return (
    <Link href={`/projects/${project.slug}`} prefetch={false} className="group block h-full">
      <article className="flex h-full min-h-[390px] flex-col overflow-hidden rounded-lg border border-white/10 bg-slate-950/72 shadow-panel backdrop-blur transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan-300/30 group-hover:bg-slate-950/88">
        {project.image ? (
          <div className="relative aspect-[16/10] overflow-hidden border-b border-white/8 bg-slate-950">
            <Image src={project.image} alt={`${project.title} interface`} fill sizes="(min-width: 1024px) 32vw, (min-width: 768px) 48vw, 92vw" className="object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/85 to-transparent" />
          </div>
        ) : (
          <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-white/8 bg-slate-900/60">
            <div className="absolute inset-0 bg-radial-grid tech-grid opacity-60" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10">
              <ImageIcon className="h-7 w-7 text-cyan-100/75" />
            </div>
          </div>
        )}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-cyan-200">
                <CircleCheck className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{project.status}</span>
              </div>
              <Heading className="mt-3 font-display text-xl font-bold leading-tight text-white">{project.title}</Heading>
              <p className="mt-1 text-sm leading-5 text-slate-500">{project.domain}</p>
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
            {project.stack.length > 4 ? <Badge className="border-white/10 bg-white/[0.04] text-slate-300">+{project.stack.length - 4}</Badge> : null}
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
