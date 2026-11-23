import Image from "next/image";
import type { Project } from "@/data/types";
import { ProjectLinks } from "./project-links";
import { TagList } from "./tag-list";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="reveal group relative">
      <div
        aria-hidden="true"
        className="absolute -inset-x-4 -inset-y-4 z-0 rounded-lg transition-colors group-hover:bg-surface-hover motion-reduce:transition-none"
      />
      <div className="relative z-10 flex flex-col gap-4 md:flex-row md:gap-6">
        <div className="aspect-video w-full shrink-0 overflow-hidden rounded-md border border-line bg-surface md:w-36 md:self-start">
          {project.image ? (
            <Image
              src={project.image}
              alt={`Preview of ${project.title}`}
              width={1280}
              height={720}
              sizes="(min-width: 768px) 144px, 100vw"
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
          <ProjectLinks links={project.links} className="mt-4" />
        </div>
      </div>
    </li>
  );
}
