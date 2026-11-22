import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { ProjectLinks } from "@/components/ui/project-links";
import { TagList } from "@/components/ui/tag-list";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Project Archive",
  description: `Every project by ${profile.name}, from data pipelines to computer vision.`,
  alternates: { canonical: "/archive" },
};

const headClass = "type-mono-meta py-4 pr-6 font-semibold text-fg-muted";

export default function ArchivePage() {
  return (
    <main id="content" className="mx-auto min-h-screen max-w-5xl px-6 py-12 md:px-12 md:py-20 lg:py-24">
      <Link href="/" className="type-mono-nav group inline-flex items-center gap-2 text-accent">
        <ArrowLeft
          className="size-4 transition-transform group-hover:-translate-x-1 motion-reduce:transition-none"
          aria-hidden="true"
        />
        {profile.name}
      </Link>

      <h1 className="type-display mt-6 text-fg">All Projects</h1>
      <p className="type-body mt-3 max-w-xl text-fg-secondary">
        Everything I have built so far, from data pipelines to computer vision.
      </p>

      <table className="mt-12 w-full border-collapse text-left">
        <caption className="sr-only">All projects</caption>
        <thead>
          <tr className="border-b border-line">
            <th scope="col" className={`${headClass} pl-3`}>
              Year
            </th>
            <th scope="col" className={headClass}>
              Project
            </th>
            <th scope="col" className={`${headClass} hidden md:table-cell`}>
              Built with
            </th>
            <th scope="col" className={`${headClass} hidden pr-3 md:table-cell`}>
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr
              key={project.id}
              className="border-b border-line align-top transition-colors hover:bg-surface-hover motion-reduce:transition-none"
            >
              <td className="type-mono-meta py-5 pr-6 pl-3 text-fg-muted">{project.year}</td>
              <td className="py-5 pr-6">
                <p className="type-card text-fg">{project.title}</p>
                <div className="mt-3 space-y-3 md:hidden">
                  <TagList tags={project.tags} />
                  <ProjectLinks links={project.links} />
                </div>
              </td>
              <td className="hidden py-5 pr-6 md:table-cell">
                <TagList tags={project.tags} />
              </td>
              <td className="hidden py-5 pr-3 md:table-cell">
                {project.links.github || project.links.demo ? (
                  <ProjectLinks links={project.links} />
                ) : (
                  <span className="text-fg-muted" aria-label="No public link">
                    —
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
