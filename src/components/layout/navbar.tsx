"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/button";
import { WadaLogo } from "@/components/common/wada-logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Phone, Menu, X, CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Departments" },
  { href: "/doctors", label: "Specialists" },
  { href: "/contact", label: "Contact & Location" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 dark:bg-[#001724]/95 backdrop-blur-md shadow-card border-b border-[#E9EEF1] dark:border-white/10 py-3"
          : "bg-white/85 dark:bg-[#001724]/85 backdrop-blur-sm border-b border-[#E9EEF1]/80 dark:border-white/10 py-4"
      )}
    >
      <div className="container flex items-center justify-between gap-4">
        {/* Brand Logo - Single Line */}
        <Link
          href="/"
          className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E8DBB] rounded-lg"
          aria-label="Wada Hospital Home"
        >
          <WadaLogo variant="single-line" size="md" />
        </Link>

        {/* Desktop Nav Links - Clean, modern pill navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-1 xl:gap-1.5"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3.5 py-2 text-sm font-semibold transition-all rounded-full whitespace-nowrap",
                  isActive
                    ? "text-[#00395C] dark:text-[#49C4CA] bg-[#e0f1f8] dark:bg-white/10"
                    : "text-[#1B2B33] dark:text-[#E9EEF1] hover:text-[#2E8DBB] dark:hover:text-[#49C4CA] hover:bg-[#F2F8FB] dark:hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action CTAs & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-2.5 xl:gap-3 shrink-0">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold text-[#00395C] dark:text-[#E9EEF1] bg-[#F2F8FB] dark:bg-white/5 hover:bg-[#e0f1f8] dark:hover:bg-white/10 border border-[#E9EEF1] dark:border-white/10 transition shadow-xs"
            aria-label={`Call Wada Hospital at ${siteConfig.phoneDisplay}`}
          >
            <span className="flex h-2 w-2 rounded-full bg-[#49C4CA] animate-pulse" />
            <Phone className="h-3.5 w-3.5 text-[#2E8DBB] dark:text-[#49C4CA]" />
            <span>{siteConfig.phoneDisplay}</span>
          </a>

          {/* Smart Dark/Light Mode Toggle */}
          <ThemeToggle />

          <Button
            asChild
            size="md"
            className="bg-[#2E8DBB] hover:bg-[#1e5e80] dark:bg-[#2E8DBB] dark:hover:bg-[#3DA8D2] text-white rounded-full px-5 shadow-soft font-bold text-xs"
          >
            <Link href="/book" className="flex items-center gap-2">
              <CalendarCheck className="h-3.5 w-3.5" />
              <span>Book Appointment</span>
            </Link>
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="bg-[#2E8DBB] text-white rounded-full text-xs font-bold">
            <Link href="/book">Book</Link>
          </Button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-xl text-[#00395C] dark:text-white hover:bg-[#E9EEF1] dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E8DBB]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E9EEF1] dark:border-white/10 bg-white dark:bg-[#001724] px-5 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-1 py-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block px-4 py-2.5 rounded-xl text-base font-semibold transition-colors",
                    isActive
                      ? "bg-[#e0f1f8] dark:bg-white/10 text-[#00395C] dark:text-[#49C4CA]"
                      : "text-[#1B2B33] dark:text-[#E9EEF1] hover:bg-[#F2F8FB] dark:hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#E9EEF1] dark:border-white/10 flex flex-col gap-2.5">
            <Button asChild size="lg" className="w-full bg-[#2E8DBB] text-white rounded-xl font-bold">
              <Link href="/book" className="flex items-center justify-center gap-2">
                <CalendarCheck className="h-5 w-5" />
                <span>Book Appointment Now</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="md" className="w-full border-[#00395C]/30 dark:border-white/20 text-[#00395C] dark:text-white rounded-xl font-bold">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4 text-[#2E8DBB] dark:text-[#49C4CA]" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
