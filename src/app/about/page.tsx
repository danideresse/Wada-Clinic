import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WadaOfficialSymbol } from "@/components/common/wada-logo";
import {
  ShieldCheck,
  HeartHandshake,
  Microscope,
  Award,
  Users,
  Sparkles,
  PhoneCall,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Mission, Vision & Hospital Facilities",
  description:
    "Learn about Wada Hospital's mission to pioneer clinical excellence in Adama, Ethiopia. 30 inpatient beds, 12+ specialist departments, and 24/7 emergency care.",
};

const PILLARS = [
  {
    icon: HeartHandshake,
    title: "Compassion & Warmth",
    description:
      "Care delivered with genuine human touch, dignity, and active listening. We prioritize patient comfort and shared decision-making at every step.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Clinical Excellence",
    description:
      "Upholding rigorous diagnostic accuracy, evidence-based treatment regimens, and hospital-grade safety standards in every clinical department.",
  },
  {
    icon: Microscope,
    title: "Clarity & Modern Diagnostics",
    description:
      "24/7 on-site automated laboratory pathology and digital ultrasound imaging ensuring swift, unambiguous answers when seconds count.",
  },
  {
    icon: Users,
    title: "Community & Renewal",
    description:
      "Dedicated to bridging critical medical gaps in Adama and the surrounding region with specialized oncology, neurology, and surgical programs.",
  },
];

const FACILITIES = [
  {
    title: "30-Bed Inpatient Care Units",
    subtitle: "General & Private Wards",
    description:
      "Comfortable general and private inpatient suites designed for close monitoring, quiet recuperation, and round-the-clock nursing supervision.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Outpatient Department (OPD)",
    subtitle: "Structured Specialist Consultations",
    description:
      "Dedicated consultation suites offering streamlined workflows and unhurried appointments across 12+ clinical specialties.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "24/7 Laboratory & Digital Imaging",
    subtitle: "On-Site Diagnostic Backbone",
    description:
      "Fully integrated clinical pathology, biochemistry, cytology, and digital ultrasound diagnostics delivering immediate answers.",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#F2F8FB] dark:bg-[#001724] transition-colors">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#e0f1f8]/80 via-white to-[#F2F8FB] dark:from-[#002b45]/30 dark:via-[#001724] dark:to-[#001724] py-16 lg:py-20 border-b border-[#E9EEF1] dark:border-white/10">
        <div className="container max-w-4xl text-center space-y-4">
          <Badge className="bg-[#e0f1f8] dark:bg-white/10 text-[#00395C] dark:text-[#49C4CA] border-[#2E8DBB]/30 dark:border-white/10 font-bold">
            About Wada Hospital
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#00395C] dark:text-white font-heading tracking-tight">
            Your Health, Our Promise
          </h1>
          <p className="text-lg text-[#1B2B33]/85 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Delivering advanced, compassionate specialty care and 24/7 medical excellence to the heart of Adama and beyond.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-[#001c2e] border-b border-[#E9EEF1] dark:border-white/10 transition-colors">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <div className="rounded-3xl border border-[#E9EEF1] dark:border-white/10 bg-gradient-to-br from-[#F2F8FB] to-white dark:from-[#002238] dark:to-[#002238] p-8 sm:p-10 shadow-soft space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00395C] dark:bg-[#2E8DBB] text-[#49C4CA] dark:text-white shadow-soft">
                <Sparkles className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2E8DBB] dark:text-[#49C4CA] block">
                Our Purpose
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00395C] dark:text-white font-heading">
                Mission Statement
              </h2>
              <blockquote className="text-base sm:text-lg text-[#1B2B33] dark:text-slate-200 leading-relaxed italic border-l-4 border-[#2E8DBB] pl-4">
                &ldquo;{siteConfig.mission}&rdquo;
              </blockquote>
            </div>

            {/* Vision Card */}
            <div className="rounded-3xl border border-[#E9EEF1] dark:border-white/10 bg-gradient-to-br from-[#F2F8FB] to-white dark:from-[#002238] dark:to-[#002238] p-8 sm:p-10 shadow-soft space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2E8DBB] text-white shadow-soft">
                <Award className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2E8DBB] dark:text-[#49C4CA] block">
                Our Future
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00395C] dark:text-white font-heading">
                Vision Statement
              </h2>
              <blockquote className="text-base sm:text-lg text-[#1B2B33] dark:text-slate-200 leading-relaxed italic border-l-4 border-[#49C4CA] pl-4">
                &ldquo;{siteConfig.vision}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Identity & Story */}
      <section className="py-16 lg:py-24 bg-[#F2F8FB] dark:bg-[#001724] transition-colors">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2E8DBB] dark:text-[#49C4CA]">
                Hospital Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00395C] dark:text-white font-heading tracking-tight leading-tight">
                A steady hand in healthcare for Adama and the wider region.
              </h2>
              <div className="space-y-4 text-[#1B2B33]/85 dark:text-slate-300 leading-relaxed text-base">
                <p>
                  Wada Hospital exists to provide care that people can rely on — delivered with warmth, competence, and dignity. Every touchpoint of our hospital, from the mark on our entrance to the tone of a nurse&apos;s note, carries that same sense of reassurance.
                </p>
                <p>
                  Located directly in front of Adama Medical College Hospital, our hospital brings together 12+ clinical specialties including general surgery, internal medicine, gynecology and obstetrics, pediatrics, and rare high-acuity specialties such as neurology, oncology, and hepatobiliary surgery.
                </p>
                <p>
                  With 30 dedicated inpatient beds, a 24/7 fully automated clinical laboratory, high-resolution diagnostic imaging, and an in-house pharmacy, our patients receive swift, coordinated care without delay.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-[#2E8DBB] hover:bg-[#1e5e80] dark:bg-[#2E8DBB] dark:hover:bg-[#3DA8D2] text-white font-bold rounded-full px-7">
                  <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2">
                    <PhoneCall className="h-5 w-5" />
                    <span>Contact: {siteConfig.phoneDisplay}</span>
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-[#00395C]/30 dark:border-white/20 text-[#00395C] dark:text-white font-bold hover:bg-white dark:hover:bg-white/10 rounded-full px-7">
                  <Link href="/services">Explore 12+ Departments</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-card border-4 border-white dark:border-[#002b45] bg-slate-100 dark:bg-slate-800">
                <Image
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop"
                  alt="Wada Hospital Building and Wards in Adama, Ethiopia"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-2xl glass-panel p-5 shadow-card max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white dark:bg-[#001724] shadow-soft p-1">
                    <WadaOfficialSymbol className="h-9 w-9" color="#2E8DBB" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#00395C] dark:text-white block">
                      30 Inpatient Beds
                    </span>
                    <span className="text-xs text-[#2E8DBB] dark:text-[#49C4CA] font-semibold block">
                      General & Private Wards
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-16 lg:py-24 bg-white dark:bg-[#001c2e] border-y border-[#E9EEF1] dark:border-white/10 transition-colors">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2E8DBB] dark:text-[#49C4CA]">
              Brand Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00395C] dark:text-white font-heading tracking-tight">
              Compassion · Trust · Clarity · Vitality
            </h2>
            <p className="text-base text-[#1B2B33]/80 dark:text-slate-300">
              Caring, dependable, calm, and modern — a healthcare partner that feels like a steady hand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#E9EEF1] dark:border-white/10 bg-[#F2F8FB] dark:bg-[#002238] p-6 shadow-soft hover:shadow-card transition flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white dark:bg-[#001724] text-[#2E8DBB] dark:text-[#49C4CA] shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#00395C] dark:text-white font-heading">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1B2B33]/80 dark:text-slate-300 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities Showcase */}
      <section className="py-16 lg:py-24 bg-[#F2F8FB] dark:bg-[#001724] transition-colors">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2E8DBB] dark:text-[#49C4CA]">
              Inpatient & Outpatient Facilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00395C] dark:text-white font-heading tracking-tight">
              Hospital Facilities Designed for Healing
            </h2>
            <p className="text-base text-[#1B2B33]/80 dark:text-slate-300">
              Modern clinical spaces supporting comprehensive inpatient monitoring, urgent emergency stabilization, and structured outpatient clinics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FACILITIES.map((facility, idx) => (
              <div
                key={idx}
                className="group rounded-3xl border border-[#E9EEF1] dark:border-white/10 overflow-hidden shadow-soft bg-white dark:bg-[#002238] flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#2E8DBB] dark:text-[#49C4CA] block mb-1">
                      {facility.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-[#00395C] dark:text-white font-heading">
                      {facility.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1B2B33]/75 dark:text-slate-300 leading-relaxed mt-2">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
