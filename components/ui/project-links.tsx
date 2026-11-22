import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/types";

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

export function ProjectLinks({
  links,
  className = "",
}: {
  links: Project["links"];
  className?: string;
}) {
  const { github, demo } = links;
  if (!github && !demo) return null;

  return (
    <div className={`flex flex-wrap gap-x-5 gap-y-2 ${className}`}>
      {github ? <ProjectLink href={github}>GitHub</ProjectLink> : null}
      {demo ? <ProjectLink href={demo}>Live Demo</ProjectLink> : null}
    </div>
  );
}
