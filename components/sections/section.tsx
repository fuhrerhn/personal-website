import type { ReactNode } from "react";
import { sections, type SectionId } from "@/data/sections";

type SectionProps = { id: SectionId; children: ReactNode };

// On small screens each section gets a sticky label. On desktop the sidebar nav
// already names the sections, so the heading stays in the DOM for screen readers only.
export function Section({ id, children }: SectionProps) {
  const label = sections.find((section) => section.id === id)?.label ?? id;

  return (
    <section id={id} aria-label={label} className="mb-24 scroll-mt-16 lg:mb-28 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-6 bg-page/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
        <h2 className="type-mono-section text-fg">{label}</h2>
      </div>
      {children}
    </section>
  );
}
