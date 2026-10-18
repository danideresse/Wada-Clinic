import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { doctorsData } from "@/data/doctors";
import { siteConfig } from "@/data/site-config";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CalendarCheck,
  Award,
  Globe,
  Clock,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Specialist Physicians & Clinical Staff",
  description:
    "Meet the clinical team and specialists at Wada Hospital in Adama, Ethiopia. Dedicated to compassionate healing across 12+ medical departments.",
};

export default function DoctorsPage() {
  return (
    <div className="bg-[#F2F8FB] dark:bg-[#001724] transition-colors duration-300">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#e0f1f8]/80 via-white to-[#F2F8FB] dark:from-[#002238] dark:via-[#001724] dark:to-[#001724] py-16 lg:py-20 border-b border-[#E9EEF1] dark:border-slate-800">
        <div className="container max-w-4xl text-center space-y-4">
          <Badge className="bg-[#e0f1f8] dark:bg-[#00395C] text-[#00395C] dark:text-[#49C4CA] border-[#2E8DBB]/30 dark:border-[#49C4CA]/30 font-bold">
            Wada Hospital Medical Team
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#00395C] dark:text-white font-heading tracking-tight">
            Specialist & Consultant Clinicians
          </h1>
          <p className="text-lg text-[#1B2B33]/85 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            A dedicated team of doctors and specialists seeing you in one place, at one time. Listening to your story, understanding your goals, and working together to restore your health.
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctorsData.map((doc) => (
              <div
                key={doc.id}
                id={doc.id}
                className="group rounded-3xl border border-[#E9EEF1] dark:border-slate-800/80 bg-white dark:bg-[#002238] overflow-hidden shadow-soft transition-all duration-300 hover:shadow-card hover:border-[#2E8DBB]/40 dark:hover:border-[#49C4CA]/40 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Photo */}
                <div className="relative aspect-[4/3] w-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00395C]/80 via-transparent to-transparent" />
                  {doc.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/95 dark:bg-[#001724]/90 text-[#00395C] dark:text-[#49C4CA] shadow-sm border border-transparent dark:border-slate-700">
                        {doc.badge}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#49C4CA] block">
                      {doc.department}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div>
                      <h2 className="text-xl font-bold text-[#00395C] dark:text-white font-heading group-hover:text-[#2E8DBB] dark:group-hover:text-[#49C4CA] transition-colors">
                        {doc.name}
                      </h2>
                      <p className="text-xs font-semibold text-[#2E8DBB] dark:text-[#49C4CA] mt-0.5">
                        {doc.role}
                      </p>
                    </div>

                    <div className="space-y-1.5 text-xs text-[#1B2B33]/80 dark:text-slate-300 border-y border-[#E9EEF1] dark:border-slate-800 py-3">
                      <div className="flex items-center gap-2">
                        <Award className="h-3.5 w-3.5 text-[#2E8DBB] dark:text-[#49C4CA] shrink-0" />
                        <span>{doc.qualifications}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-[#2E8DBB] dark:text-[#49C4CA] shrink-0" />
                        <span>{doc.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-3.5 w-3.5 text-[#1B2B33]/50 dark:text-slate-400 shrink-0" />
                        <span>Languages: {doc.languages.join(", ")}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#1B2B33]/80 dark:text-slate-300 leading-relaxed">
                      {doc.bio}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E9EEF1] dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-[#1B2B33]/60 dark:text-slate-400 font-semibold">
                      {doc.experienceYears}+ years exp.
                    </span>
                    <Button asChild size="sm" className="bg-[#2E8DBB] hover:bg-[#1e5e80] text-white font-bold shadow-soft">
                      <Link
                        href={`/book?doctor=${doc.id}`}
                        className="flex items-center gap-1.5"
                      >
                        <CalendarCheck className="h-3.5 w-3.5" />
                        <span>Book Visit</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Reassurance Banner */}
          <div className="mt-16 rounded-3xl bg-[#00395C] dark:bg-[#002238] border border-transparent dark:border-slate-800 text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-float">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Need guidance choosing the right department?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Our clinical triage coordinators in Adama are available 24/7 to assess symptoms and connect you with the appropriate medical specialty.
              </p>
            </div>
            <Button asChild size="lg" className="shrink-0 bg-[#2E8DBB] hover:bg-[#1e5e80] text-white font-bold shadow-soft">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
