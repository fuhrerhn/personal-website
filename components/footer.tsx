import { profile } from "@/data/profile";

// The year is written out on purpose: Cache Components rejects `new Date()` during
// server rendering. Update it each January.
const COPYRIGHT_YEAR = 2026;

// Credits stay at the end of the content column. Their bottom padding matches the
// sidebar (py-16 / xl:py-20), so at the end of the page they line up with the social icons.
export function SiteCredits() {
  return (
    <p className="type-body-sm max-w-md pb-16 text-fg-muted xl:pb-20">
      Loosely designed in Figma and coded by yours truly. Built with Next.js and Tailwind CSS,
      deployed with Vercel. All text is set in Geist and Geist Mono.
    </p>
  );
}

// Very bottom of the page, centered across the full width.
export function Copyright() {
  return (
    <footer className="type-body-sm pt-2 pb-8 text-center text-fg-muted">
      <p>
        © {COPYRIGHT_YEAR} {profile.name}.
      </p>
    </footer>
  );
}
