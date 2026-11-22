import { profile } from "@/data/profile";
import { sections } from "@/data/sections";
import { NavLinks } from "./nav-links";
import { ProfilePhoto } from "./profile-photo";
import { SocialLinks } from "./social-links";

// Same text as `profile.name`; only the nickname gets the accent color.
function HighlightedName() {
  const { name, nickname } = profile;
  const start = name.indexOf(nickname);
  if (start === -1) return <>{name}</>;

  return (
    <>
      {name.slice(0, start)}
      <span className="text-accent">{nickname}</span>
      {name.slice(start + nickname.length)}
    </>
  );
}

export function Sidebar() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[360px] xl:w-[440px] lg:shrink-0 lg:flex-col lg:justify-between lg:overflow-y-auto lg:py-16 xl:py-20">
      <div>
        <ProfilePhoto />
        <h1 className="type-display mt-6 text-fg">
          <HighlightedName />
        </h1>
        <p className="type-role mt-3 text-fg">{profile.title}</p>
        <p className="type-body mt-4 max-w-xs text-fg-secondary">{profile.tagline}</p>

        <nav aria-label="In-page navigation" className="mt-12 hidden lg:block">
          <NavLinks items={sections} />
        </nav>
      </div>

      <SocialLinks className="mt-8 lg:mt-12" />
    </header>
  );
}
