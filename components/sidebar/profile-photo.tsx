import Image from "next/image";
import { profile } from "@/data/profile";

export function ProfilePhoto() {
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
