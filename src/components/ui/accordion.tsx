"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function AccordionItem({
  id,
  title,
  children,
  isOpen,
  onToggle,
  className,
}: AccordionItemProps) {
  const contentId = `accordion-content-${id}`;
  const headerId = `accordion-header-${id}`;

  return (
    <div
      className={cn(
        "rounded-2xl border border-[#E9EEF1] dark:border-white/10 bg-white/95 dark:bg-[#002238] backdrop-blur-sm transition-all duration-200 overflow-hidden shadow-sm",
        isOpen && "border-[#2E8DBB]/40 dark:border-[#49C4CA]/40 ring-1 ring-[#2E8DBB]/20 dark:ring-[#49C4CA]/20 shadow-soft",
        className
      )}
    >
      <button
        type="button"
        id={headerId}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={onToggle}
        className="flex w-full items-center justify-between p-5 md:p-6 text-left font-bold text-[#00395C] dark:text-white transition-all hover:text-[#2E8DBB] dark:hover:text-[#49C4CA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E8DBB] focus-visible:ring-inset"
      >
        <span className="text-base md:text-lg pr-4 font-heading">{title}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-[#2E8DBB] dark:text-[#49C4CA] transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        id={contentId}
        role="region"
        aria-labelledby={headerId}
        className={cn(
          "grid transition-all duration-300 ease-in-out px-5 md:px-6",
          isOpen
            ? "grid-rows-[1fr] opacity-100 pb-5 md:pb-6"
            : "grid-rows-[0fr] opacity-0 pb-0"
        )}
      >
        <div className="overflow-hidden text-sm md:text-base text-[#1B2B33]/85 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/10 pt-4">
          {children}
        </div>
      </div>
    </div>
  );
}

interface AccordionGroupProps {
  items: { id: string; title: string; content: React.ReactNode }[];
  allowMultiple?: boolean;
  className?: string;
}

export function AccordionGroup({
  items,
  allowMultiple = false,
  className,
}: AccordionGroupProps) {
  const [openItems, setOpenItems] = React.useState<Record<string, boolean>>({
    [items[0]?.id || ""]: true,
  });

  const toggle = (id: string) => {
    setOpenItems((prev) => {
      if (allowMultiple) {
        return { ...prev, [id]: !prev[id] };
      }
      return { [id]: !prev[id] };
    });
  };

  return (
    <div className={cn("space-y-3.5", className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          isOpen={!!openItems[item.id]}
          onToggle={() => toggle(item.id)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
