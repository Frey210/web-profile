import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col overflow-hidden p-0 transition duration-200 group-hover:-translate-y-1 group-hover:border-cyan-300/32 group-hover:shadow-glow">
        {project.image ? (
          <div className="relative aspect-[16/9] overflow-hidden border-b border-white/8 bg-slate-950">
            <Image src={project.image} alt={`${project.title} interface`} fill className="object-cover opacity-88 transition duration-500 group-hover:scale-105" />
          </div>
        ) : (
          <div className="h-2 bg-gradient-to-r from-primary via-secondary to-accent" />
        )}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">{project.domain}</p>
              <h3 className="mt-3 font-display text-xl font-bold text-white">{project.title}</h3>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-500 transition group-hover:text-cyan-200" />
          </div>
          <p className="mt-4 flex-1 text-sm leading-6 text-slate-400">{project.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}
