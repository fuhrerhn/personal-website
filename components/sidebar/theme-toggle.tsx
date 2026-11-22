"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

// Icons switch with CSS (`dark:`), so the button renders identically on the server
// and the client and there is no hydration mismatch.
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle light and dark theme"
      className="block cursor-pointer text-fg-secondary transition-colors hover:text-fg motion-reduce:transition-none"
    >
      <Sun className="hidden size-6 dark:block" aria-hidden="true" />
      <Moon className="size-6 dark:hidden" aria-hidden="true" />
    </button>
  );
}
