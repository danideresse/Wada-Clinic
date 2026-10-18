import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface WadaLogoProps {
  className?: string;
  variant?: "single-line" | "full" | "mark" | "white" | "file";
  size?: "sm" | "md" | "lg";
}

/**
 * Exact Mark from WADA SVG LOGO.svg
 * ViewBox tailored to the emblem paths (approx 210 65 to 450 200)
 */
export function WadaOfficialSymbol({
  className,
  color = "#2E8DBB",
  colorVariant,
}: {
  className?: string;
  color?: string;
  colorVariant?: string;
}) {
  const resolvedColor =
    colorVariant === "white"
      ? "#FFFFFF"
      : colorVariant === "navy"
      ? "#00395C"
      : color;

  return (
    <svg
      viewBox="210 65 240 135"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-auto h-full", className)}
      aria-label="Wada Hospital Emblem"
    >
      <g fill={resolvedColor}>
        {/* Right Wings / Letterform */}
        <path d="M428.88,189.29c-2.3.56-4.46,1.66-6.75,2.26-20.06,5.2-40.97-1.15-54.1-17.13-11.26-13.71-16.55-30.34-25.03-45.51-3.01-5.38-7.77-12.78-14.92-10.4,2.85-4.4,6.63-9.28,11.21-11.95,6.67-3.91,13.52-2.86,19.66,1.48,6.48,4.59,10.13,14.56,13.49,21.66,10.31,21.79,19.11,43.74,42.3,54.65,4.42,2.08,9.16,2.76,13.52,4.48.25.1.58.09.62.46Z" />
        <path d="M442.91,79.15c-.68.66-1.72,1.34-2.42,2.02-9.87,9.56-14.71,23.81-19.3,36.49-6.33,17.48-11.23,35.55-19.07,52.43-7.58-7.16-13.29-16.33-17.64-25.8,5.62-13.29,9.21-27.75,15.8-40.57,5.94-11.55,14.77-21.65,27.87-24.46,4.98-1.07,10.05-.83,15.13-.82.09.4-.13.48-.37.71Z" />
        {/* Central Droplet */}
        <path d="M344.07,184.89c-1.86,1.95-5.62,4.56-8.2,5.36-16.74,5.13-32.23-8.98-27.59-26.15,3.04-11.23,13.84-21.54,18.77-32.82.34-.79,1.3-5.24,2.28-3.35.46.88.84,2.68,1.3,3.74,7,16.11,30.55,35.38,13.44,53.22Z" />
        {/* Left Wings / Letterform */}
        <path d="M360.48,103.63c-.78-.37-1.69-.62-2.45-.98-16.93-7.82-27.23,2.34-35.43,16.26-16.36,27.83-24.61,68.93-62.58,73.97l-6.1.5c-1.35-.05-2.73.06-4.08,0-4.85-.23-9.65-1.25-14.36-2.57l-3.88-1.75c3.52-1.08,7.16-1.89,10.6-3.2,30.55-11.57,41.12-47.23,54.26-74.13,6.27-12.83,15.4-34.11,31.62-35.69h4.32c1.34.42,2.89.52,4.24.92,11.73,3.44,18.79,16.53,23.84,26.67Z" />
        <path d="M275.96,143.88c.13.75-1.14,3.05-1.55,3.87-4.12,8.18-9.63,16.1-16.05,22.59-9.33-20.43-14.89-42.37-23.16-63.23-4.15-10.48-9-21.14-18-28.32-.1-.54.24-.33.59-.35,6.38-.47,14.23.13,20.19,2.5.06.02.09.27.29.35,21.94,9.28,28.59,39.69,36.52,60.14.26.67,1.07,1.87,1.17,2.45Z" />
      </g>
    </svg>
  );
}

export const WadaLogoMark = WadaOfficialSymbol;

export function WadaLogo({
  className,
  variant = "single-line",
  size = "md",
}: WadaLogoProps) {
  const isWhite = variant === "white";

  const sizeHeights = {
    sm: "h-9",
    md: "h-11",
    lg: "h-14",
  };

  // If using the official file directly
  if (variant === "file") {
    return (
      <div className={cn("relative inline-flex items-center", sizeHeights[size], className)}>
        <Image
          src="/wada-logo.svg"
          alt="WADA HOSPITAL – Your Health, Our Promise"
          width={220}
          height={110}
          className="h-full w-auto object-contain dark:brightness-200"
          priority
        />
      </div>
    );
  }

  // Single-line clean modern brand mark (High contrast in both light and dark modes!)
  if (variant === "single-line") {
    return (
      <div className={cn("inline-flex items-center gap-2.5 select-none group", sizeHeights[size], className)}>
        <div className="h-full flex items-center justify-center">
          <WadaOfficialSymbol
            className={cn(
              size === "sm" ? "h-7" : size === "md" ? "h-9" : "h-11",
              "transition-transform group-hover:scale-105"
            )}
            color={isWhite ? "#FFFFFF" : "#2E8DBB"}
          />
        </div>
        <span
          className={cn(
            "font-extrabold tracking-tight font-heading uppercase whitespace-nowrap transition-colors",
            size === "sm" && "text-base",
            size === "md" && "text-xl",
            size === "lg" && "text-2xl",
            isWhite ? "text-white" : "text-[#00395C] dark:text-white"
          )}
        >
          WADA HOSPITAL
        </span>
      </div>
    );
  }

  // Mark only
  if (variant === "mark") {
    return (
      <div className={cn("inline-flex items-center justify-center", sizeHeights[size], className)}>
        <WadaOfficialSymbol
          className="h-full"
          color={isWhite ? "#FFFFFF" : "#2E8DBB"}
        />
      </div>
    );
  }

  // Full stacked version with tagline (for footer or hero)
  return (
    <div className={cn("inline-flex flex-col items-start select-none", className)}>
      <div className="flex items-center gap-2.5">
        <WadaOfficialSymbol
          className={size === "sm" ? "h-7" : size === "md" ? "h-9" : "h-12"}
          color={isWhite ? "#FFFFFF" : "#2E8DBB"}
        />
        <span
          className={cn(
            "font-extrabold tracking-tight font-heading uppercase whitespace-nowrap leading-none transition-colors",
            size === "sm" && "text-base",
            size === "md" && "text-xl",
            size === "lg" && "text-2xl",
            isWhite ? "text-white" : "text-[#00395C] dark:text-white"
          )}
        >
          WADA HOSPITAL
        </span>
      </div>
      <span
        className={cn(
          "font-bold uppercase tracking-[0.16em] mt-1 pl-11",
          size === "sm" && "text-[9px]",
          size === "md" && "text-[10px]",
          size === "lg" && "text-xs",
          isWhite ? "text-[#49C4CA]" : "text-[#2E8DBB] dark:text-[#49C4CA]"
        )}
      >
        YOUR HEALTH , OUR PROMISE
      </span>
    </div>
  );
}
