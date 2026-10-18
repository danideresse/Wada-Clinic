import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "accent" | "outline" | "pill";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-[#e0f1f8] dark:bg-[#00395C] text-[#00395C] dark:text-[#49C4CA] border border-[#2E8DBB]/30 dark:border-[#49C4CA]/30",
    secondary: "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700",
    accent: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/60",
    outline: "border border-border dark:border-slate-700 text-foreground dark:text-slate-200 bg-white/70 dark:bg-slate-800/70",
    pill: "bg-primary/10 dark:bg-white/10 text-primary dark:text-[#49C4CA] border border-primary/20 dark:border-white/20 font-semibold",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
