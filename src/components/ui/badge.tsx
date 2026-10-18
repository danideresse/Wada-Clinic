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
    default: "bg-primary-100 text-primary-900 border border-primary-200/60",
    secondary: "bg-slate-100 text-slate-800 border border-slate-200",
    accent: "bg-emerald-50 text-emerald-700 border border-emerald-200/80",
    outline: "border border-border text-foreground bg-white/70",
    pill: "bg-primary/10 text-primary border border-primary/20 font-semibold",
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
