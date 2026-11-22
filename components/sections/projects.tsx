import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/data/projects";

export function Projects() {
  const featured = projects.filter((project) => project.featured);

  return (
    <>
      <ol className="flex flex-col gap-12">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ol>
      <Link
        href="/archive"
        className="type-link mt-12 inline-flex items-center gap-1 text-fg transition-colors hover:text-accent motion-reduce:transition-none"
      >
        View Full Project Archive
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </Link>
    </>
  );
}
