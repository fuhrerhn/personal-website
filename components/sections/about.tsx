import { profile } from "@/data/profile";

export function About() {
  return (
    <div className="space-y-4 text-fg-secondary">
      {profile.about.map((paragraph) => (
        <p key={paragraph} className="type-body">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
