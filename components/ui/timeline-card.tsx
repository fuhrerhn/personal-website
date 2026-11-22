import { ArrowUpRight } from "lucide-react";
import type { TimelineEntry } from "@/data/types";
import { TagList } from "./tag-list";

// Date column on the left from `md` up; the date stacks above the content on mobile.
// The hover background sits in a pseudo-box that bleeds past the text, so the text
// stays aligned with the rest of the column.
export function TimelineCard({ entry }: { entry: TimelineEntry }) {
  const heading = (
    <>
      {entry.title}
      {entry.url ? (
        <ArrowUpRight
          className="ml-1 inline-block size-4 translate-y-px transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-1 motion-reduce:transition-none"
          aria-hidden="true"
        />
      ) : null}
    </>
  );

  return (
    <li className="group relative">
      <div
        aria-hidden="true"
        className="absolute -inset-x-4 -inset-y-4 z-0 rounded-lg transition-colors group-hover:bg-surface-hover motion-reduce:transition-none"
      />
      <div className="relative z-10 flex flex-col gap-2 md:grid md:grid-cols-[9rem_1fr] md:gap-6">
        <p className="type-mono-meta pt-0.5 text-fg-muted">{entry.period}</p>
        <div>
          <h3 className="type-card text-fg transition-colors group-hover:text-accent motion-reduce:transition-none">
            {entry.url ? (
              <a
                href={entry.url}
                target="_blank"
                rel="noopener noreferrer"
                className="before:absolute before:-inset-x-4 before:-inset-y-4 before:z-20 before:rounded-lg"
              >
                {heading}
              </a>
            ) : (
              heading
            )}
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
