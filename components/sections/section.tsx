import type { ReactNode } from "react";
import { sections, type SectionId } from "@/data/sections";

type SectionProps = { id: SectionId; children: ReactNode };

// Small section title that marks where each section starts.
// Mobile: sticky label with a blurred background.
// Desktop: static mono label followed by a thin divider line.
export function Section({ id, children }: SectionProps) {
  const label = sections.find((section) => section.id === id)?.label ?? id;

  return (
    <section id={id} aria-label={label} className="mb-24 scroll-mt-16 lg:mb-28 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-6 bg-page/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:static lg:z-auto lg:mx-0 lg:mb-8 lg:flex lg:items-center lg:gap-4 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
        <h2 className="type-mono-section text-fg lg:text-fg-muted">{label}</h2>
        <span aria-hidden="true" className="hidden h-px flex-1 bg-line lg:block" />
      </div>
      {children}
    </section>
  );
}
