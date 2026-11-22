import { profile } from "@/data/profile";

// the year is fixed because Cache Components doesn't allow new Date() here
const COPYRIGHT_YEAR = 2026;

export function Copyright() {
  return (
    <footer className="type-body-sm pt-2 pb-8 text-center text-fg-muted">
      <p>
        © {COPYRIGHT_YEAR} {profile.name}.
      </p>
    </footer>
  );
}
