export type TimelineEntry = {
  id: string;
  /** Shown in the mono date column, e.g. "SEP 2026 — PRESENT". */
  period: string;
  title: string;
  org: string;
  summary: string;
  tags: string[];
  /** When set, the whole card becomes a link. */
  url?: string;
};

export type Project = {
  id: string;
  title: string;
  year: number;
  summary: string;
  tags: string[];
  links: { github?: string; demo?: string };
  /** Path under /public. A placeholder shows until a screenshot exists. */
  image?: string;
};

export type Achievement = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  kind: "award" | "certificate";
  summary?: string;
};

export type SkillGroup = { label: string; items: string[] };
