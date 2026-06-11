import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Markdown } from "@/components/markdown";
import { getProject, getProjectMarkdown, projects } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} - Fariz Achmad Faizal`,
      description: project.summary
    }
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const markdown = getProjectMarkdown(project.slug);

  return (
    <article>
      <section className="border-b border-white/8 bg-surface/35">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Projects
          </Link>
          <div className="mt-8">
            <Badge>{project.domain}</Badge>
            <h1 className="mt-5 font-display text-4xl font-black text-white sm:text-6xl">{project.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{project.summary}</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Card>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Year</p>
              <p className="mt-2 text-sm font-semibold text-white">{project.year}</p>
            </Card>
            <Card>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Status</p>
              <p className="mt-2 text-sm font-semibold text-white">{project.status}</p>
            </Card>
            <Card>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Role</p>
              <p className="mt-2 text-sm font-semibold text-white">{project.role}</p>
            </Card>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {markdown ? (
          <Markdown content={markdown} />
        ) : (
          <Card>
            <p className="text-slate-400">No markdown case study was found for this project.</p>
          </Card>
        )}
        <Link href="/contact" className="mt-10 inline-flex items-center gap-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-cyan-100 hover:bg-cyan-300/15">
          Discuss a similar system <ExternalLink className="h-4 w-4" />
        </Link>
      </section>
    </article>
  );
}
