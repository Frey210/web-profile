import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Boxes, CircleCheck } from "lucide-react";
import type { Project } from "@/lib/content";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ project, headingLevel = "h3" }: { project: Project; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;

  return (
    <Link href={`/projects/${project.slug}`} prefetch={false} className="group block h-full">
      <article className="retro-card relative flex h-full min-h-[430px] flex-col overflow-hidden border border-neon/10 bg-surface/80 shadow-panel transition duration-300 group-hover:border-neon/30">
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background via-background/15 to-transparent opacity-80" />
        {project.image ? (
          <div className="relative aspect-[16/10] overflow-hidden border-b border-neon/10 bg-background">
            <Image
              src={project.image}
              alt={`${project.title} interface`}
              fill
              sizes="(min-width: 1024px) 32vw, 92vw"
              className="object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
            />
            <div className="absolute inset-0 pixel-grid-dense opacity-30" />
          </div>
        ) : (
          <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-neon/10 pixel-grid-dense">
            <Boxes className="h-14 w-14 text-neon/40" />
            <div className="absolute inset-x-12 bottom-8 h-20 rounded-full bg-neon/10 blur-2xl" />
          </div>
        )}
        <div className="relative z-20 flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-accent">
                <CircleCheck className="h-3 w-3" />
                {project.status}
              </div>
              <Heading className="mt-3 font-display text-xl font-bold text-white">{project.title}</Heading>
              <p className="mt-1 font-mono text-[10px] text-slate-600">{project.domain}</p>
            </div>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-neon/10 bg-neon/5 text-slate-500 transition group-hover:border-neon/30 group-hover:text-neon">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
          <p className="mt-4 flex-1 text-sm leading-6 text-slate-500">{project.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech) => (
              <Badge key={tech} className="border-neon/10 bg-neon/5 text-neon/60">{tech}</Badge>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-neon/8 pt-4 font-mono text-[10px] text-slate-600">
            <span>{project.year}</span>
            <span className="text-neon transition group-hover:translate-x-1">View case study →</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
