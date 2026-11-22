type TagListProps = { tags: string[]; label?: string; className?: string };

export function TagList({ tags, label = "Technologies and topics", className = "" }: TagListProps) {
  if (tags.length === 0) return null;

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} aria-label={label}>
      {tags.map((tag) => (
        <li key={tag} className="type-mono-tag rounded-full bg-accent-soft px-3 py-1 text-accent">
          {tag}
        </li>
      ))}
    </ul>
  );
}
