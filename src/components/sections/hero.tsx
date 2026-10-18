import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/button";
import { WadaOfficialSymbol } from "@/components/common/wada-logo";
import {
  CalendarCheck,
  PhoneCall,
  Clock,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Building2,
  Bed,
  CheckCircle2,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#e0f1f8]/70 via-[#F2F8FB] to-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background soft ambient radial lighting */}
      <div className="absolute top-0 right-0 -mr-28 -mt-28 h-[520px] w-[520px] rounded-full bg-[#3DA8D2]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-28 h-[380px] w-[380px] rounded-full bg-[#49C4CA]/15 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E9EEF1] shadow-xs text-xs font-semibold text-[#00395C]">
              <span className="flex h-2 w-2 rounded-full bg-[#49C4CA] animate-pulse" />
              <span>Open 24/7 • Adama, Ethiopia</span>
              <span className="text-[#2E8DBB]">• Infront of Adama Medical College Hospital</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#00395C] font-heading leading-[1.12]">
              Your Health, <span className="text-gradient">Our Promise.</span>
            </h1>

            {/* Sub-Headline / Welcome Statement from Questionnaire */}
            <p className="text-base sm:text-lg lg:text-xl text-[#1B2B33]/85 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to Wada Hospital, your trusted destination for comprehensive specialist and subspecialist level care. We are dedicated to serving our community with advanced medical expertise and patient-centered clinical excellence.
            </p>

            {/* Modern CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-[#2E8DBB] hover:bg-[#1e5e80] text-white shadow-soft rounded-full px-7 font-bold text-sm tracking-wide"
              >
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2.5">
                  <PhoneCall className="h-4 w-4" />
                  <span>Call {siteConfig.phoneDisplay}</span>
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-[#00395C]/25 text-[#00395C] hover:bg-white rounded-full px-7 font-bold text-sm"
              >
                <Link href="/book" className="flex items-center gap-2">
                  <CalendarCheck className="h-4 w-4 text-[#2E8DBB]" />
                  <span>Book Appointment</span>
                </Link>
              </Button>
            </div>

            {/* Location & Hospital Feature Pills */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-semibold text-[#00395C]">
              <span className="inline-flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-full border border-[#E9EEF1]">
                <Building2 className="h-3.5 w-3.5 text-[#2E8DBB]" />
                <span>Opposite Adama Medical College Hospital</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-full border border-[#E9EEF1]">
                <Clock className="h-3.5 w-3.5 text-[#2E8DBB]" />
                <span>24/7 Emergency & Inpatient Care</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-full border border-[#E9EEF1]">
                <Bed className="h-3.5 w-3.5 text-[#2E8DBB]" />
                <span>30 Inpatient Beds</span>
              </span>
            </div>

            {/* Hospital Metrics Counters */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#E9EEF1]">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-[#2E8DBB]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-[#00395C]">{stat.label}</div>
                  <div className="text-[11px] text-[#1B2B33]/70 hidden sm:block">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Imagery Column with Modern Overlay & Official WADA SVG Mark */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Hospital Visual */}
              <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-card border-4 border-white bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop"
                  alt="Wada Hospital Modern Facility in Adama, Ethiopia"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00395C]/65 via-transparent to-transparent" />
              </div>

              {/* Floating Modern Emblem Badge - Top Left with official SVG Mark */}
              <div className="absolute -top-4 -left-4 sm:-left-6 rounded-2xl glass-panel p-3.5 shadow-card max-w-[210px] border border-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-soft p-1">
                    <WadaOfficialSymbol className="h-8 w-8" color="#2E8DBB" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-[#00395C] block leading-tight font-heading">
                      WADA HOSPITAL
                    </span>
                    <span className="text-[10px] text-[#2E8DBB] font-bold block uppercase tracking-wider">
                      Adama, Ethiopia
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Emergency Badge - Bottom Right */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 rounded-2xl glass-panel p-4 shadow-card max-w-[240px] border border-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00395C] text-[#49C4CA] shadow-soft">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#00395C] block leading-tight">
                      24/7 Emergency Triage
                    </span>
                    <span className="text-[11px] text-[#1B2B33]/70 block">
                      Rapid Trauma Stabilization
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern 24/7 Emergency Quick Action Strip */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#00395C] to-[#1e5e80] text-white p-4 sm:p-5 shadow-soft flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#49C4CA]">
              <Clock className="h-5 w-5 animate-pulse" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#49C4CA] block">
                24/7 Hospital & Emergency Care
              </span>
              <p className="text-xs sm:text-sm text-slate-200">
                Facing a sudden medical emergency? Our clinical triage & surgical teams are ready around the clock.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 bg-[#2E8DBB] hover:bg-[#24759e] text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-sm transition"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>Call Emergency: {siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
