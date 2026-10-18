import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/data/services";
import { siteConfig } from "@/data/site-config";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconRenderer } from "@/components/common/icon-renderer";
import { ArrowRight, CheckCircle2, Clock, CalendarCheck, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Clinical Departments & Medical Specialties",
  description:
    "Explore the 12+ specialized medical departments at Wada Hospital in Adama, including Anesthesia, Surgery, Neurology, Oncology, Gynecology, Pediatrics, Pathology, and Radiology.",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#F2F8FB] dark:bg-[#001724] transition-colors duration-300">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#e0f1f8]/80 via-white to-[#F2F8FB] dark:from-[#002238] dark:via-[#001724] dark:to-[#001724] py-16 lg:py-20 border-b border-[#E9EEF1] dark:border-slate-800">
        <div className="container max-w-4xl text-center space-y-4">
          <Badge className="bg-[#e0f1f8] dark:bg-[#00395C] text-[#00395C] dark:text-[#49C4CA] border-[#2E8DBB]/30 dark:border-[#49C4CA]/30 font-bold">
            Wada Hospital Clinical Scope
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#00395C] dark:text-white font-heading tracking-tight">
            Specialist & Subspecialist Level Care
          </h1>
          <p className="text-lg text-[#1B2B33]/85 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Dedicated to serving our community with advanced medical expertise, coordinated surgical suites, 24/7 diagnostic laboratory, and patient-centered clinical excellence in Adama.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24">
        <div className="container space-y-10">
          {servicesData.map((service, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={service.slug}
                id={service.slug}
                className="rounded-3xl border border-[#E9EEF1] dark:border-slate-800/80 bg-white dark:bg-[#002238] p-6 sm:p-8 lg:p-10 shadow-soft overflow-hidden hover:border-[#2E8DBB]/40 dark:hover:border-[#49C4CA]/40 transition-all duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-5 relative ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-card bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 space-y-5 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e0f1f8] dark:bg-[#00395C] text-[#2E8DBB] dark:text-[#49C4CA]">
                        <IconRenderer name={service.iconName} className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#00395C] dark:text-slate-200 bg-[#F2F8FB] dark:bg-[#001724] border border-[#E9EEF1] dark:border-slate-800 px-3 py-1 rounded-full">
                        {service.category} Department
                      </span>
                      <span className="text-xs font-semibold text-[#1B2B33]/70 dark:text-slate-300 flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-[#2E8DBB] dark:text-[#49C4CA]" />
                        <span>{service.consultationDuration}</span>
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00395C] dark:text-white font-heading">
                      {service.title}
                    </h2>

                    <p className="text-sm sm:text-base text-[#1B2B33]/85 dark:text-slate-300 leading-relaxed">
                      {service.fullDescription}
                    </p>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#00395C] dark:text-[#49C4CA] mb-2.5">
                        Key Clinical Procedures & Diagnostics
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-[#1B2B33] dark:text-slate-200"
                          >
                            <CheckCircle2 className="h-4 w-4 text-[#2E8DBB] dark:text-[#49C4CA] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#E9EEF1] dark:border-slate-800 flex flex-wrap items-center gap-4">
                      <Button asChild size="md" className="bg-[#2E8DBB] hover:bg-[#1e5e80] text-white font-bold shadow-soft">
                        <Link
                          href={`/book?service=${service.slug}`}
                          className="flex items-center gap-2"
                        >
                          <CalendarCheck className="h-4 w-4" />
                          <span>Book Outpatient Visit</span>
                        </Link>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        size="md"
                        className="border-[#00395C]/30 text-[#00395C] dark:border-slate-700 dark:text-white hover:bg-[#F2F8FB] dark:hover:bg-[#00395C] font-bold"
                      >
                        <Link
                          href={`/services/${service.slug}`}
                          className="flex items-center gap-2"
                        >
                          <span>Department Details</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>

                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="text-[#00395C] dark:text-slate-200 dark:hover:text-white dark:hover:bg-slate-800/50 font-semibold"
                      >
                        <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5">
                          <PhoneCall className="h-3.5 w-3.5 text-[#2E8DBB] dark:text-[#49C4CA]" />
                          <span>Call {siteConfig.phoneDisplay}</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
