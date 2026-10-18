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
        "rounded-2xl border border-border/80 bg-white/90 backdrop-blur-sm transition-all duration-200 overflow-hidden shadow-sm",
        isOpen && "border-primary-300 ring-1 ring-primary-200/50 shadow-soft",
        className
      )}
    >
      <button
        type="button"
        id={headerId}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={onToggle}
        className="flex w-full items-center justify-between p-5 md:p-6 text-left font-semibold text-slate-900 transition-all hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
      >
        <span className="text-base md:text-lg pr-4">{title}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-primary-600 transition-transform duration-300",
            isOpen && "rotate-180 text-primary"
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
        <div className="overflow-hidden text-sm md:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
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
    [items[0]?.id || ""]: true, // Open the first item by default
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
