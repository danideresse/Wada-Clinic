import { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { ContactForm } from "@/components/forms/contact-form";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Send,
  Facebook,
  Car,
  AlertTriangle,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Location | Infront of Adama Medical College Hospital",
  description:
    "Find Wada Hospital in Adama, Ethiopia. Contact our 24/7 emergency hotline at 0997040408, view hospital hours, and connect with our clinical team.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#F2F8FB] dark:bg-[#001724] transition-colors duration-300">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#e0f1f8]/80 via-white to-[#F2F8FB] dark:from-[#002238] dark:via-[#001724] dark:to-[#001724] py-16 lg:py-20 border-b border-[#E9EEF1] dark:border-slate-800">
        <div className="container max-w-4xl text-center space-y-4">
          <Badge className="bg-[#e0f1f8] dark:bg-[#00395C] text-[#00395C] dark:text-[#49C4CA] border-[#2E8DBB]/30 dark:border-[#49C4CA]/30 font-bold">
            Hospital Contact & Location
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#00395C] dark:text-white font-heading tracking-tight">
            We Are Here When You Need Us
          </h1>
          <p className="text-lg text-[#1B2B33]/85 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Located infront of Adama Medical College Hospital, providing 24/7 high-acuity emergency stabilization and structured outpatient clinical consultations.
          </p>
        </div>
      </section>

      {/* Main Details & Form */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Hospital Details */}
            <div className="lg:col-span-5 space-y-8">
              {/* Emergency Banner */}
              <div className="rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 p-5 text-amber-900 dark:text-amber-200 text-xs sm:text-sm space-y-1.5 shadow-sm">
                <div className="flex items-center gap-2 font-bold text-amber-950 dark:text-amber-100">
                  <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>24/7 High-Acuity Emergency Care</span>
                </div>
                <p className="leading-relaxed">
                  For acute trauma, sudden surgical emergencies, or critical illness, call our emergency triage immediately or come directly to our hospital.
                </p>
                <div className="pt-1">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="inline-flex items-center gap-2 font-bold text-base text-[#00395C] dark:text-[#49C4CA] hover:underline"
                  >
                    <Phone className="h-4 w-4 text-[#2E8DBB] dark:text-[#49C4CA]" />
                    <span>Emergency Hotline: {siteConfig.phoneDisplay}</span>
                  </a>
                </div>
              </div>

              {/* Contact Information Cards */}
              <div className="rounded-3xl border border-[#E9EEF1] dark:border-slate-800/80 bg-white dark:bg-[#002238] p-6 sm:p-8 shadow-soft space-y-6">
                <h2 className="text-xl font-bold text-[#00395C] dark:text-white font-heading">
                  Wada Hospital Contact Info
                </h2>

                <div className="space-y-4 text-sm text-[#1B2B33] dark:text-slate-200">
                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e0f1f8] dark:bg-[#001724] text-[#2E8DBB] dark:text-[#49C4CA] border border-transparent dark:border-slate-800">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-bold text-[#00395C] dark:text-[#49C4CA] block text-xs uppercase tracking-wider">
                        General Inquiry & Reception
                      </span>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="text-base font-extrabold text-[#2E8DBB] dark:text-[#3DA8D2] hover:underline"
                      >
                        {siteConfig.phoneDisplay}
                      </a>
                      <span className="text-xs text-[#1B2B33]/70 dark:text-slate-400 block">
                        Direct scheduling & clinical triage desk
                      </span>
                    </div>
                  </div>

                  {/* Telegram */}
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e0f1f8] dark:bg-[#001724] text-[#2E8DBB] dark:text-[#49C4CA] border border-transparent dark:border-slate-800">
                      <Send className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-bold text-[#00395C] dark:text-[#49C4CA] block text-xs uppercase tracking-wider">
                        Official Telegram Channel
                      </span>
                      <a
                        href={siteConfig.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#2E8DBB] dark:text-[#3DA8D2] hover:underline inline-flex items-center gap-1"
                      >
                        <span>t.me/wadaclinic</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  {/* Facebook */}
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e0f1f8] dark:bg-[#001724] text-[#2E8DBB] dark:text-[#49C4CA] border border-transparent dark:border-slate-800">
                      <Facebook className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-bold text-[#00395C] dark:text-[#49C4CA] block text-xs uppercase tracking-wider">
                        Facebook Community Page
                      </span>
                      <a
                        href={siteConfig.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#2E8DBB] dark:text-[#3DA8D2] hover:underline inline-flex items-center gap-1"
                      >
                        <span>facebook.com/wadaclinic</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3.5 pt-2 border-t border-[#E9EEF1] dark:border-slate-800">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e0f1f8] dark:bg-[#001724] text-[#2E8DBB] dark:text-[#49C4CA] border border-transparent dark:border-slate-800">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <span className="font-bold text-[#00395C] dark:text-[#49C4CA] block text-xs uppercase tracking-wider">
                        Hospital Location
                      </span>
                      <p className="text-[#00395C] dark:text-white font-semibold">
                        {siteConfig.address.landmark}
                      </p>
                      <p className="text-xs text-[#1B2B33]/70 dark:text-slate-400">
                        {siteConfig.address.city}, {siteConfig.address.region}, {siteConfig.address.country}
                      </p>
                      <a
                        href={siteConfig.address.mapQueryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#2E8DBB] dark:text-[#49C4CA] inline-flex items-center gap-1 hover:underline pt-0.5"
                      >
                        <span>Open in Google Maps</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="rounded-3xl border border-[#E9EEF1] dark:border-slate-800/80 bg-white dark:bg-[#002238] p-6 sm:p-8 shadow-soft space-y-4">
                <div className="flex items-center gap-2.5 text-[#00395C] dark:text-white font-extrabold font-heading text-lg">
                  <Clock className="h-5 w-5 text-[#2E8DBB] dark:text-[#49C4CA]" />
                  <span>Clinical Operating Hours</span>
                </div>
                <div className="space-y-2.5 text-xs sm:text-sm text-[#1B2B33] dark:text-slate-200">
                  <div className="flex justify-between py-1.5 border-b border-[#E9EEF1] dark:border-slate-800">
                    <span className="font-bold text-[#00395C] dark:text-white">Emergency & Inpatient:</span>
                    <span className="text-[#2E8DBB] dark:text-[#49C4CA] font-bold">24 Hours / 7 Days</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#E9EEF1] dark:border-slate-800">
                    <span className="font-semibold text-[#00395C] dark:text-slate-300">Outpatient (OPD):</span>
                    <span className="dark:text-slate-300">{siteConfig.openingHours.opd}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="font-semibold text-[#00395C] dark:text-slate-300">Clinical Lab & Pharmacy:</span>
                    <span className="text-[#2E8DBB] dark:text-[#49C4CA] font-semibold">24/7 On-Site</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="mb-4">
                <h2 className="text-2xl font-extrabold text-[#00395C] dark:text-white font-heading">
                  Send Us a Direct Message
                </h2>
                <p className="text-sm text-[#1B2B33]/70 dark:text-slate-400">
                  For inquiries, appointment requests, or medical coordinator consultations.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>

          {/* Interactive Map Section */}
          <div className="mt-16 rounded-3xl border border-[#E9EEF1] dark:border-slate-800/80 overflow-hidden shadow-card bg-white dark:bg-[#002238]">
            <div className="p-6 border-b border-[#E9EEF1] dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e0f1f8] dark:bg-[#001724] text-[#2E8DBB] dark:text-[#49C4CA]">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#00395C] dark:text-white font-heading">
                    {siteConfig.address.landmark}
                  </h3>
                  <p className="text-xs text-[#1B2B33]/70 dark:text-slate-400">
                    {siteConfig.address.city}, {siteConfig.address.region}, {siteConfig.address.country}
                  </p>
                </div>
              </div>
              <a
                href={siteConfig.address.mapQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#2E8DBB] dark:text-[#49C4CA] hover:underline inline-flex items-center gap-1.5"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="relative aspect-[21/9] min-h-[320px] w-full bg-slate-100 dark:bg-slate-900">
              <iframe
                title="Wada Hospital Adama Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Adama+Medical+College+Hospital+Adama+Ethiopia&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
