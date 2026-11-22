"use client";

import { useEffect, useState } from "react";

type Item = { readonly id: string; readonly label: string };

// scroll-spy: the section crossing a band near the top is active; the last one wins at the very bottom
export function NavLinks({ items }: { items: readonly Item[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const targets = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    targets.forEach((el) => observer.observe(el));

    const lastId = items[items.length - 1]?.id;
    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom && lastId) setActive(lastId);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [items]);

  return (
    <ul className="flex flex-col">
      {items.map((item) => {
        const isActive = item.id === active;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={isActive ? "location" : undefined}
              className="group flex items-center gap-4 py-1.5"
            >
              <span
                aria-hidden="true"
                className={`h-px transition-all duration-200 motion-reduce:transition-none ${
                  isActive ? "w-16 bg-accent" : "w-8 bg-fg-muted group-hover:w-16 group-hover:bg-fg"
                }`}
              />
              <span
                className={`type-mono-nav transition-colors motion-reduce:transition-none ${
                  isActive ? "text-fg" : "text-fg-muted group-hover:text-fg"
                }`}
              >
                {item.label}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
