import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/types";
import { TagList } from "./tag-list";

function ProjectLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="type-link inline-flex items-center gap-1 text-fg-secondary transition-colors hover:text-accent motion-reduce:transition-none"
    >
      {children}
      <ArrowUpRight className="size-4" aria-hidden="true" />
    </a>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const { github, demo } = project.links;

  return (
    <li className="group relative">
      <div
        aria-hidden="true"
        className="absolute -inset-x-4 -inset-y-4 z-0 rounded-lg transition-colors group-hover:bg-surface-hover motion-reduce:transition-none"
      />
      <div className="relative z-10 flex flex-col gap-4 md:flex-row md:gap-6">
        <div className="aspect-video w-full shrink-0 overflow-hidden rounded-md border border-line bg-surface md:w-36 md:self-start">
          {project.image ? (
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              width={288}
              height={180}
              className="size-full object-cover"
            />
          ) : (
            <div
              aria-hidden="true"
              className="type-mono-meta flex size-full items-center justify-center text-fg-muted"
            >
              Preview
            </div>
          )}
        </div>
        <div>
          <h3 className="type-card text-fg transition-colors group-hover:text-accent motion-reduce:transition-none">
            {project.title}
          </h3>
          <p className="type-body-sm mt-2 text-fg-secondary">{project.summary}</p>
          <TagList tags={project.tags} className="mt-4" />
          {github || demo ? (
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {github ? <ProjectLink href={github}>GitHub</ProjectLink> : null}
              {demo ? <ProjectLink href={demo}>Live Demo</ProjectLink> : null}
            </div>
          ) : null}
        </div>
      </div>
    </li>
  );
}
