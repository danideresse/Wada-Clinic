import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { ShieldCheck, CalendarCheck, Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 bg-slate-50/50">
      <div className="max-w-lg w-full text-center space-y-6">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-primary-100 text-primary shadow-soft">
          <ShieldCheck className="h-10 w-10 stroke-[2.2]" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary-50 px-3 py-1 rounded-full">
            Page Not Found • Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            We couldn&apos;t find this medical page
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md mx-auto">
            The page you are looking for might have been moved or updated. Let&apos;s get you back to the right place.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button asChild variant="default" size="md" className="w-full sm:w-auto">
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </Button>

          <Button asChild variant="outline" size="md" className="w-full sm:w-auto">
            <Link href="/book" className="flex items-center gap-2">
              <CalendarCheck className="h-4 w-4" />
              <span>Book Appointment</span>
            </Link>
          </Button>
        </div>

        <div className="pt-6 border-t border-slate-200 text-xs text-slate-500">
          Need immediate assistance? Call our clinic directly at{" "}
          <a
            href={`tel:${siteConfig.phone}`}
            className="font-semibold text-primary hover:underline"
          >
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
