import { TagList } from "@/components/ui/tag-list";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <div className="flex flex-col gap-8">
      {skills.map((group) => (
        <div key={group.label}>
          <h3 className="type-mono-meta text-fg-muted">{group.label}</h3>
          <TagList tags={group.items} label={group.label} className="mt-3" />
        </div>
      ))}
    </div>
  );
}
