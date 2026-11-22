import { ArrowUpRight } from "lucide-react";
import { TimelineCard } from "@/components/ui/timeline-card";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";

export function Experience() {
  return (
    <>
      <ol className="flex flex-col gap-12">
        {experience.map((entry) => (
          <TimelineCard key={entry.id} entry={entry} />
        ))}
      </ol>
      {profile.resume ? (
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="type-link mt-12 inline-flex items-center gap-1 text-fg transition-colors hover:text-accent motion-reduce:transition-none"
        >
          View Full Résumé
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      ) : null}
    </>
  );
}
