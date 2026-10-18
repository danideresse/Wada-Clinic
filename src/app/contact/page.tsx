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
    <div className="bg-[#F2F8FB]">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#e0f1f8]/80 via-white to-[#F2F8FB] py-16 lg:py-20 border-b border-[#E9EEF1]">
        <div className="container max-w-4xl text-center space-y-4">
          <Badge className="bg-[#e0f1f8] text-[#00395C] border-[#2E8DBB]/30 font-bold">
            Hospital Contact & Location
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#00395C] font-heading tracking-tight">
            We Are Here When You Need Us
          </h1>
          <p className="text-lg text-[#1B2B33]/85 leading-relaxed max-w-2xl mx-auto">
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
              <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 text-amber-900 text-xs sm:text-sm space-y-1.5 shadow-sm">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0" />
                  <span>24/7 High-Acuity Emergency Care</span>
                </div>
                <p className="leading-relaxed">
                  For acute trauma, sudden surgical emergencies, or critical illness, call our emergency triage immediately or come directly to our hospital.
                </p>
                <div className="pt-1">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="inline-flex items-center gap-2 font-bold text-base text-[#00395C] hover:underline"
                  >
                    <Phone className="h-4 w-4 text-[#2E8DBB]" />
                    <span>Emergency Hotline: {siteConfig.phoneDisplay}</span>
                  </a>
                </div>
              </div>

              {/* Contact Information Cards */}
              <div className="rounded-3xl border border-[#E9EEF1] bg-white p-6 sm:p-8 shadow-soft space-y-6">
                <h2 className="text-xl font-bold text-[#00395C] font-heading">
                  Wada Hospital Contact Info
                </h2>

                <div className="space-y-4 text-sm text-[#1B2B33]">
                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e0f1f8] text-[#2E8DBB]">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-bold text-[#00395C] block text-xs uppercase tracking-wider">
                        General Inquiry & Reception
                      </span>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="text-base font-extrabold text-[#2E8DBB] hover:underline"
                      >
                        {siteConfig.phoneDisplay}
                      </a>
                      <span className="text-xs text-[#1B2B33]/70 block">
                        Direct scheduling & clinical triage desk
                      </span>
                    </div>
                  </div>

                  {/* Telegram */}
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e0f1f8] text-[#2E8DBB]">
                      <Send className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-bold text-[#00395C] block text-xs uppercase tracking-wider">
                        Official Telegram Channel
                      </span>
                      <a
                        href={siteConfig.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#2E8DBB] hover:underline inline-flex items-center gap-1"
                      >
                        <span>t.me/wadaclinic</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  {/* Facebook */}
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e0f1f8] text-[#2E8DBB]">
                      <Facebook className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-bold text-[#00395C] block text-xs uppercase tracking-wider">
                        Facebook Community Page
                      </span>
                      <a
                        href={siteConfig.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#2E8DBB] hover:underline inline-flex items-center gap-1"
                      >
                        <span>facebook.com/wadaclinic</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3.5 pt-2 border-t border-[#E9EEF1]">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e0f1f8] text-[#2E8DBB]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <span className="font-bold text-[#00395C] block text-xs uppercase tracking-wider">
                        Hospital Location
                      </span>
                      <p className="text-[#00395C] font-semibold">
                        {siteConfig.address.landmark}
                      </p>
                      <p className="text-xs text-[#1B2B33]/70">
                        {siteConfig.address.city}, {siteConfig.address.region}, {siteConfig.address.country}
                      </p>
                      <a
                        href={siteConfig.address.mapQueryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#2E8DBB] inline-flex items-center gap-1 hover:underline pt-0.5"
                      >
                        <span>Open in Google Maps</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="rounded-3xl border border-[#E9EEF1] bg-white p-6 sm:p-8 shadow-soft space-y-4">
                <div className="flex items-center gap-2.5 text-[#00395C] font-extrabold font-heading text-lg">
                  <Clock className="h-5 w-5 text-[#2E8DBB]" />
                  <span>Clinical Operating Hours</span>
                </div>
                <div className="space-y-2.5 text-xs sm:text-sm text-[#1B2B33]">
                  <div className="flex justify-between py-1.5 border-b border-[#E9EEF1]">
                    <span className="font-bold text-[#00395C]">Emergency & Inpatient:</span>
                    <span className="text-[#2E8DBB] font-bold">24 Hours / 7 Days</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#E9EEF1]">
                    <span className="font-semibold text-[#00395C]">Outpatient (OPD):</span>
                    <span>{siteConfig.openingHours.opd}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="font-semibold text-[#00395C]">Clinical Lab & Pharmacy:</span>
                    <span className="text-[#2E8DBB] font-semibold">24/7 On-Site</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="mb-4">
                <h2 className="text-2xl font-extrabold text-[#00395C] font-heading">
                  Send Us a Direct Message
                </h2>
                <p className="text-sm text-[#1B2B33]/70">
                  For inquiries, appointment requests, or medical coordinator consultations.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>

          {/* Interactive Map Section */}
          <div className="mt-16 rounded-3xl border border-[#E9EEF1] overflow-hidden shadow-card bg-white">
            <div className="p-6 border-b border-[#E9EEF1] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e0f1f8] text-[#2E8DBB]">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#00395C] font-heading">
                    {siteConfig.address.landmark}
                  </h3>
                  <p className="text-xs text-[#1B2B33]/70">
                    {siteConfig.address.city}, {siteConfig.address.region}, {siteConfig.address.country}
                  </p>
                </div>
              </div>
              <a
                href={siteConfig.address.mapQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#2E8DBB] hover:underline inline-flex items-center gap-1.5"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="relative aspect-[21/9] min-h-[320px] w-full bg-slate-100">
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
