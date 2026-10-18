import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Phone, CheckCircle2, MapPin } from "lucide-react";

export function CTABannerSection() {
  return (
    <section className="py-16 lg:py-20 bg-[#00395C] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-[#2E8DBB]/25 blur-3xl pointer-events-none rounded-full" />

      <div className="container relative z-10 text-center max-w-4xl mx-auto space-y-6">
        <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#49C4CA] bg-white/10 border border-[#49C4CA]/30 rounded-full">
          Your Health, Our Promise
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-white leading-tight">
          Comprehensive Specialist & High-Acuity Care in Adama
        </h2>

        <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          From 24/7 emergency stabilization to subspecialty consultations in neurology, oncology, and surgery. We are here when seconds matter.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          {/* Primary CTA from Questionnaire */}
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-[#2E8DBB] hover:bg-[#1e5e80] text-white shadow-lg font-bold"
          >
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>Contact us with {siteConfig.phoneDisplay}</span>
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto bg-white/10 text-white border-white/20 hover:bg-white/20 font-bold"
          >
            <Link href="/book" className="flex items-center gap-2">
              <CalendarCheck className="h-4 w-4 text-[#49C4CA]" />
              <span>Schedule Outpatient Visit</span>
            </Link>
          </Button>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 border-t border-white/10">
          <span className="flex items-center gap-1.5 font-medium">
            <MapPin className="h-4 w-4 text-[#49C4CA]" />
            Infront of Adama Medical College Hospital
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="h-4 w-4 text-[#49C4CA]" />
            30 Inpatient Beds (General & Private)
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="h-4 w-4 text-[#49C4CA]" />
            24/7 On-Site Pathology & Pharmacy
          </span>
        </div>
      </div>
    </section>
  );
}
