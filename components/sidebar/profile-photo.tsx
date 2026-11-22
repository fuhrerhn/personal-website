import Image from "next/image";
import { profile } from "@/data/profile";

const initials = profile.name
  .split(" ")
  .filter(Boolean)
  .slice(0, 2)
  .map((word) => word[0])
  .join("");

// Shows initials until `profile.photo` points at a real file in /public.
export function ProfilePhoto() {
  if (profile.photo) {
    return (
      <Image
        src={profile.photo}
        alt={`Portrait of ${profile.name}`}
        width={144}
        height={144}
        priority
        className="size-18 rounded-full object-cover"
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className="type-mono-nav flex size-18 items-center justify-center rounded-full border border-line bg-surface text-fg-muted"
    >
      {initials}
    </div>
  );
}
