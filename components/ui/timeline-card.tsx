import type { TimelineEntry } from "@/data/types";
import { TagList } from "./tag-list";

// date column on the left from md up, stacked on mobile
export function TimelineCard({ entry }: { entry: TimelineEntry }) {
  return (
    <li className="reveal group relative">
      <div
        aria-hidden="true"
        className="absolute -inset-x-4 -inset-y-4 z-0 rounded-lg transition-colors group-hover:bg-surface-hover motion-reduce:transition-none"
      />
      <div className="relative z-10 flex flex-col gap-2 md:grid md:grid-cols-[9rem_1fr] md:gap-6">
        <p className="type-mono-meta pt-0.5 text-fg-muted">{entry.period}</p>
        <div>
          <h3 className="type-card text-fg transition-colors group-hover:text-accent motion-reduce:transition-none">
            {entry.title}
          </h3>
          <p className="type-body-sm mt-1 text-fg-muted">{entry.org}</p>
          {entry.summary ? (
            <p className="type-body-sm mt-3 text-fg-secondary">{entry.summary}</p>
          ) : null}
          <TagList tags={entry.tags} className="mt-4" />
        </div>
      </div>
    </li>
  );
}
