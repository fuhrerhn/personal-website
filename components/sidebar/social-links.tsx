import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./theme-toggle";

// The address lives in an env var (see .env.example) so it is not hard-coded in the
// public repo. The "Email me" button only renders when it is set.
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

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
      {email ? (
        <li>
          <a href={`mailto:${email}`} aria-label="Email me" className={linkClass}>
            <Mail className="size-6" aria-hidden="true" />
          </a>
        </li>
      ) : null}
      <li>
        <ThemeToggle />
      </li>
    </ul>
  );
}
