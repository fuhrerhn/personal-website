export type TimelineEntry = {
  id: string;
  period: string; // shown in the date column
  title: string;
  org: string;
  summary: string;
  tags: string[];
};

export type Project = {
  id: string;
  title: string;
  year: number;
  summary: string;
  tags: string[];
  links: { github?: string; demo?: string };
  featured: boolean; // featured projects show on the home page
  image?: string; // path under /public
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
