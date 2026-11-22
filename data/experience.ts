import type { TimelineEntry } from "./types";

// Featured entries only (PRD, Lampiran D). Newest start date first.
// The remaining roles from the CV stay in the résumé.
export const experience: TimelineEntry[] = [
  {
    id: "practicum-assistant",
    period: "SEP 2026 — PRESENT",
    title: "Practicum Assistant, Data & Diagnostic Analytics",
    org: "Institut Teknologi Sepuluh Nopember (ITS)",
    summary:
      "Lead hands-on practicum sessions for 2 classes (about 99 students) and built step-by-step Tableau data visualization modules, restructured from the previous year's module.",
    tags: ["Tableau", "Data Visualization", "EDA", "Teaching"],
  },
  {
    id: "akselerasi-speaker",
    period: "AUG 2026",
    title: "Dashboarding Speaker, AKSELERASI 2026",
    org: "HMSI ITS",
    summary:
      "Delivered a session on data visualization and interactive dashboards using Google Looker Studio.",
    tags: ["Looker Studio", "Dashboard", "Public Speaking"],
  },
  {
    id: "gerigi-2026",
    period: "JUN — AUG 2026",
    title: "Head of Data Center",
    org: "GERIGI x UKM EXPO ITS 2026",
    summary:
      "Led a 16-member data management team handling attendance, feedback, test scores, and report cards for 7,100+ new ITS students over a 3-month program.",
    tags: ["Data Management", "Leadership"],
  },
  {
    id: "ise-2026",
    period: "FEB — NOV 2026",
    title: "Head of Data Management",
    org: "Information Systems Expo (ISE!) 2026",
    summary:
      "Coordinated 3+ core administrative systems (competition registration, email blast generation, certificate automation) supporting 500+ participants.",
    tags: ["Automation", "Data Management"],
  },
  {
    id: "ini-lho-its-2026",
    period: "SEP 2025 — MAR 2026",
    title: "Expert Staff of Data Management",
    org: "Ini Lho ITS! 2026",
    summary:
      "Managed and validated 2,000+ registration records for Open Campus ITS and Try Out Sepuluh Nopember, and served as person-in-charge of FTEIC during the 3-day Open Campus.",
    tags: ["Data Validation", "Registration"],
  },
  {
    id: "sre-its",
    period: "AUG 2025 — JUN 2026",
    title: "Human Resources",
    org: "Society of Renewable Energy ITS (SRE ITS SC)",
    summary:
      "Built a performance tracking dashboard for 50+ associates and one integrated member database, and mentored 6 associates over an 11-month term.",
    tags: ["Dashboard", "Database", "Mentoring"],
  },
];
