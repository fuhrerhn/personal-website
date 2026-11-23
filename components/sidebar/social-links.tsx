import { Mail } from "lucide-react";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./theme-toggle";

const linkClass =
  "block text-fg-secondary transition-colors hover:text-fg motion-reduce:transition-none";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-5 ${className}`} aria-label="Social links">
      <li>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub (opens in a new tab)"
          className={linkClass}
        >
          <GitHubIcon className="size-6" />
        </a>
      </li>
      <li>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn (opens in a new tab)"
          className={linkClass}
        >
          <LinkedInIcon className="size-6" />
        </a>
      </li>
      <li>
        <a
          href={profile.links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram (opens in a new tab)"
          className={linkClass}
        >
          <InstagramIcon className="size-6" />
        </a>
      </li>
      <li>
        <a href={`mailto:${profile.links.email}`} aria-label="Email me" className={linkClass}>
          <Mail className="size-6" aria-hidden="true" />
        </a>
      </li>
      {/* on small screens the toggle floats at the corner instead (see page.tsx) */}
      <li className="hidden lg:block">
        <ThemeToggle />
      </li>
    </ul>
  );
}
