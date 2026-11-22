import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <ol className="flex flex-col gap-12">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ol>
  );
}
