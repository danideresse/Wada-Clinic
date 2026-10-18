import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { WadaLogo } from "@/components/common/wada-logo";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  Send,
  Facebook,
  Globe,
  Heart,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#00395C] text-slate-200 border-t border-[#002b45]">
      {/* Upper Footer Content */}
      <div className="container py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Hospital Brand & Promise */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#49C4CA] rounded-lg"
            >
              <WadaLogo variant="white" size="lg" />
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Delivering advanced, compassionate specialty care and 24/7 medical excellence to the heart of Adama and beyond.
            </p>

            {/* Social & Official Channels */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-[#2E8DBB] text-white transition-colors"
                aria-label="Telegram Channel"
              >
                <Send className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-[#2E8DBB] text-white transition-colors"
                aria-label="Facebook Page"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={`https://${siteConfig.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-[#2E8DBB] text-white transition-colors"
                aria-label="Official Website"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>

            <div className="pt-2 text-xs text-slate-300 space-y-1">
              <p>
                <strong className="text-white">Emergency Hotline (24/7):</strong>{" "}
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-[#49C4CA] hover:underline font-bold text-sm ml-1"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Hospital Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-[#49C4CA] transition-colors"
                >
                  About Wada Hospital
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-300 hover:text-[#49C4CA] transition-colors"
                >
                  12+ Specialist Departments
                </Link>
              </li>
              <li>
                <Link
                  href="/doctors"
                  className="text-slate-300 hover:text-[#49C4CA] transition-colors"
                >
                  Medical Specialists
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="text-slate-300 hover:text-[#49C4CA] transition-colors"
                >
                  Schedule an Appointment
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-[#49C4CA] transition-colors"
                >
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours & Availability */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#49C4CA]" />
              <span>Hospital Hours</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
              <li className="flex flex-col">
                <span className="font-semibold text-white">Emergency & Inpatient:</span>
                <span className="text-[#49C4CA] font-medium">24/7 Round-the-Clock</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-white">Outpatient Clinics (OPD):</span>
                <span>{siteConfig.openingHours.opd}</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-white">Laboratory & Pharmacy:</span>
                <span>24/7 On-Site Services</span>
              </li>
            </ul>
          </div>

          {/* Location & Directions */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#49C4CA]" />
              <span>Location in Adama</span>
            </h4>
            <address className="not-italic text-xs text-slate-300 space-y-2 leading-relaxed">
              <p className="font-medium text-white">{siteConfig.address.landmark}</p>
              <p>{siteConfig.address.city}, {siteConfig.address.region}, {siteConfig.address.country}</p>
              <p className="pt-1">
                <a
                  href={siteConfig.address.mapQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#49C4CA] hover:text-white font-semibold"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </p>
              <div className="pt-2 border-t border-white/10 space-y-1">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-slate-200 hover:text-white"
                >
                  <Phone className="h-3 w-3 text-[#49C4CA]" />
                  <span>Reception: {siteConfig.phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-slate-200 hover:text-white"
                >
                  <Mail className="h-3 w-3 text-[#49C4CA]" />
                  <span>{siteConfig.email}</span>
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Medical disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="rounded-xl bg-[#0f2330]/80 p-4 border border-white/5 text-xs text-slate-400 leading-relaxed">
            <span className="font-bold text-slate-200 block mb-1">
              Wada Hospital Medical Disclaimer:
            </span>
            {siteConfig.medicalDisclaimer}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © {currentYear} {siteConfig.name} – {siteConfig.address.city}, {siteConfig.address.country}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-slate-300 font-medium">
            <span>Your Health, Our Promise</span>
            <Heart className="h-3.5 w-3.5 text-[#49C4CA] fill-[#49C4CA]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
