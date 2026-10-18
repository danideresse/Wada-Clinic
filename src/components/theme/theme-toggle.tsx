"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Laptop } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className={cn(
          "inline-flex items-center justify-center h-9 w-9 rounded-full border border-[#E9EEF1] dark:border-white/10 bg-[#F2F8FB] dark:bg-white/5 text-[#00395C] dark:text-white transition-colors opacity-70",
          className
        )}
        aria-label="Toggle display theme"
        disabled
      >
        <Sun className="h-4 w-4" />
      </button>
    );
  }

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className={cn(
        "relative inline-flex items-center justify-center h-9 w-9 sm:h-9.5 sm:w-9.5 rounded-full border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E8DBB]",
        isDark
          ? "border-white/15 bg-white/10 text-amber-300 hover:bg-white/20 shadow-xs"
          : "border-[#E9EEF1] bg-[#F2F8FB] text-[#00395C] hover:bg-[#e0f1f8] hover:text-[#2E8DBB] shadow-xs",
        showLabel && "w-auto px-3 gap-2",
        className
      )}
      title={`Theme: ${theme || "system"} (Click to cycle Light / Dark / System)`}
      aria-label={`Current theme is ${theme || "system"}. Click to toggle theme.`}
    >
      {/* Icon rendering with smooth transition */}
      {theme === "system" ? (
        <Laptop className="h-4 w-4 animate-in fade-in zoom-in-75 duration-200" />
      ) : isDark ? (
        <Moon className="h-4 w-4 animate-in fade-in zoom-in-75 duration-200" />
      ) : (
        <Sun className="h-4 w-4 animate-in fade-in zoom-in-75 duration-200" />
      )}

      {showLabel && (
        <span className="text-xs font-bold capitalize">
          {theme === "system" ? "System" : isDark ? "Dark" : "Light"}
        </span>
      )}
    </button>
  );
}
