import { TimelineCard } from "@/components/ui/timeline-card";
import { education } from "@/data/education";

export function Education() {
  return (
    <ol className="flex flex-col gap-12">
      {education.map((entry) => (
        <TimelineCard key={entry.id} entry={entry} />
      ))}
    </ol>
  );
}
