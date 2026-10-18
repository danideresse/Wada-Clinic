import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { siteConfig } from "@/data/site-config";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconRenderer } from "@/components/common/icon-renderer";
import {
  CalendarCheck,
  Clock,
  CheckCircle2,
  Phone,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Building2,
} from "lucide-react";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return servicesData.map((svc) => ({
    slug: svc.slug,
  }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Department Not Found",
    };
  }

  return {
    title: `${service.title} | ${siteConfig.name}`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.shortDescription,
      images: [{ url: service.image }],
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const otherServices = servicesData
    .filter((s) => s.slug !== service.slug)
    .slice(0, 4);

  return (
    <div className="bg-[#F2F8FB] dark:bg-[#001724] transition-colors duration-300">
      {/* Breadcrumb & Hero */}
      <section className="bg-gradient-to-b from-[#e0f1f8]/80 via-white to-[#F2F8FB] dark:from-[#002238] dark:via-[#001724] dark:to-[#001724] py-12 lg:py-16 border-b border-[#E9EEF1] dark:border-slate-800">
        <div className="container max-w-5xl">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2E8DBB] dark:text-[#49C4CA] hover:text-[#00395C] dark:hover:text-white transition mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to All 12 Clinical Departments</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge className="bg-[#e0f1f8] dark:bg-[#00395C] text-[#00395C] dark:text-[#49C4CA] border-[#2E8DBB]/30 dark:border-[#49C4CA]/30 font-bold uppercase tracking-wider text-[11px]">
              Wada Hospital • {service.category} Care
            </Badge>
            <span className="text-xs text-[#1B2B33]/70 dark:text-slate-300 font-semibold flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[#2E8DBB] dark:text-[#49C4CA]" />
              <span>{service.consultationDuration}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00395C] dark:text-white font-heading tracking-tight mb-4">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-[#1B2B33]/85 dark:text-slate-300 leading-relaxed max-w-3xl">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Main Detail Content */}
      <section className="py-12 lg:py-20">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left Main Body */}
            <div className="lg:col-span-8 space-y-10">
              {/* Feature Image */}
              <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-card border border-[#E9EEF1] dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover"
                />
              </div>

              {/* Department Description */}
              <div className="rounded-3xl border border-[#E9EEF1] dark:border-slate-800/80 bg-white dark:bg-[#002238] p-8 space-y-4 shadow-soft">
                <h2 className="text-2xl font-bold text-[#00395C] dark:text-white font-heading">
                  Department Overview & Clinical Scope
                </h2>
                <p className="text-[#1B2B33]/85 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  {service.fullDescription}
                </p>
              </div>

              {/* Procedures & Offerings */}
              <div className="rounded-3xl border border-[#E9EEF1] dark:border-slate-800/80 bg-white dark:bg-[#002238] p-8 space-y-4 shadow-soft">
                <h2 className="text-2xl font-bold text-[#00395C] dark:text-white font-heading">
                  Clinical Procedures & Offerings
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F2F8FB] dark:bg-[#001724] border border-[#E9EEF1] dark:border-slate-800 text-sm text-[#1B2B33] dark:text-slate-200"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#2E8DBB] dark:text-[#49C4CA] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conditions Treated */}
              <div className="rounded-3xl border border-[#E9EEF1] dark:border-slate-800/80 bg-white dark:bg-[#002238] p-8 space-y-4 shadow-soft">
                <h2 className="text-2xl font-bold text-[#00395C] dark:text-white font-heading">
                  Conditions Evaluated & Managed
                </h2>
                <div className="flex flex-wrap gap-2 pt-1">
                  {service.commonConditions.map((condition, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#e0f1f8] dark:bg-[#001724] text-[#00395C] dark:text-[#49C4CA] border border-[#2E8DBB]/30 dark:border-[#49C4CA]/30"
                    >
                      {condition}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Consultation & Scheduling Card */}
              <div className="rounded-3xl border border-[#2E8DBB]/30 dark:border-[#49C4CA]/30 bg-gradient-to-b from-white to-[#F2F8FB] dark:from-[#002238] dark:to-[#001724] p-6 shadow-card space-y-5 sticky top-24">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00395C] dark:bg-[#001724] text-[#49C4CA] shadow-soft border border-slate-700/50">
                    <IconRenderer name={service.iconName} className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2E8DBB] dark:text-[#49C4CA] block">
                      Hospital Care
                    </span>
                    <span className="text-base font-extrabold text-[#00395C] dark:text-white block leading-tight">
                      {service.title.split("&")[0]}
                    </span>
                  </div>
                </div>

                <div className="border-t border-[#E9EEF1] dark:border-slate-800 pt-4 space-y-3 text-xs text-[#1B2B33]/80 dark:text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[#1B2B33]/60 dark:text-slate-400">Department:</span>
                    <span className="font-bold text-[#00395C] dark:text-white capitalize">
                      {service.category} Service
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[#1B2B33]/60 dark:text-slate-400">Availability:</span>
                    <span className="font-bold text-[#00395C] dark:text-white">
                      {service.consultationDuration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[#1B2B33]/60 dark:text-slate-400">Location:</span>
                    <span className="font-bold text-[#00395C] dark:text-white">
                      Adama Hospital Campus
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-2.5">
                  <Button asChild size="lg" className="w-full bg-[#2E8DBB] hover:bg-[#1e5e80] text-white shadow-soft font-bold">
                    <Link
                      href={`/book?service=${service.slug}`}
                      className="flex items-center justify-center gap-2"
                    >
                      <CalendarCheck className="h-5 w-5" />
                      <span>Book Consultation</span>
                    </Link>
                  </Button>
                  <Button asChild size="md" variant="outline" className="w-full border-[#00395C]/30 dark:border-slate-700 text-[#00395C] dark:text-white hover:bg-slate-100 dark:hover:bg-[#00395C] font-bold">
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="flex items-center justify-center gap-2"
                    >
                      <Phone className="h-4 w-4 text-[#2E8DBB] dark:text-[#49C4CA]" />
                      <span>Call {siteConfig.phoneDisplay}</span>
                    </a>
                  </Button>
                </div>
              </div>

              {/* Other Departments */}
              <div className="rounded-3xl border border-[#E9EEF1] dark:border-slate-800/80 bg-white dark:bg-[#002238] p-6 shadow-soft space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#00395C] dark:text-[#49C4CA]">
                  Other Clinical Departments
                </h3>
                <div className="space-y-2">
                  {otherServices.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/services/${other.slug}`}
                      className="flex items-center justify-between p-3 rounded-xl border border-[#E9EEF1] dark:border-slate-800 hover:border-[#2E8DBB]/40 dark:hover:border-[#49C4CA]/40 hover:bg-[#F2F8FB] dark:hover:bg-[#001724] transition group"
                    >
                      <span className="text-xs font-semibold text-[#1B2B33] dark:text-slate-200 group-hover:text-[#2E8DBB] dark:group-hover:text-[#49C4CA]">
                        {other.title}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 text-[#1B2B33]/40 dark:text-slate-400 group-hover:text-[#2E8DBB] dark:group-hover:text-[#49C4CA] group-hover:translate-x-1 transition" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
