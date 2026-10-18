"use client";

import { useSearchParams } from "next/navigation";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { siteConfig } from "@/data/site-config";
import { Phone, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

export function BookingClient() {
  const searchParams = useSearchParams();
  const serviceSlug = searchParams.get("service") || "";
  const doctorId = searchParams.get("doctor") || "";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
      {/* Left Form Column */}
      <div className="lg:col-span-8">
        <AppointmentForm
          initialServiceSlug={serviceSlug}
          initialDoctorId={doctorId}
        />
      </div>

      {/* Right Sidebar Info */}
      <div className="lg:col-span-4 space-y-6">
        {/* Urgent Telephone Box */}
        <div className="rounded-3xl border border-[#2E8DBB]/30 dark:border-slate-800 bg-[#e0f1f8]/70 dark:bg-[#002238] p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00395C] dark:bg-[#001724] text-[#49C4CA] shadow-soft border border-slate-700/40">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00395C] dark:text-[#49C4CA] block">
                Prefer to Call?
              </span>
              <span className="text-xs text-[#1B2B33]/70 dark:text-slate-400 block">
                Direct phone scheduling
              </span>
            </div>
          </div>
          <p className="text-xs text-[#1B2B33]/80 dark:text-slate-300 leading-relaxed">
            Our clinical intake desk in Adama is ready to assist with appointment slots, doctor availability, and 24/7 emergency guidance.
          </p>
          <a
            href={`tel:${siteConfig.phone}`}
            className="block text-center rounded-xl bg-[#2E8DBB] text-white py-2.5 px-4 text-sm font-bold hover:bg-[#1e5e80] transition shadow-soft"
          >
            Call {siteConfig.phoneDisplay}
          </a>
        </div>

        {/* What to Expect */}
        <div className="rounded-3xl border border-[#E9EEF1] dark:border-slate-800/80 bg-white dark:bg-[#002238] p-6 shadow-soft space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#00395C] dark:text-white flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#2E8DBB] dark:text-[#49C4CA]" />
            <span>Consultation Guidelines</span>
          </h3>
          <ul className="space-y-3 text-xs text-[#1B2B33]/80 dark:text-slate-300">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#2E8DBB] dark:text-[#49C4CA] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#00395C] dark:text-[#49C4CA]">OPD Scheduling:</strong> Outpatient consultations run Monday through Saturday with dedicated specialist slots.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#2E8DBB] dark:text-[#49C4CA] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#00395C] dark:text-[#49C4CA]">What to Bring:</strong> A valid identification, any prior diagnostic lab/radiology records, and current medications.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#2E8DBB] dark:text-[#49C4CA] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#00395C] dark:text-[#49C4CA]">Emergency Care:</strong> For sudden acute symptoms, our 24/7 triage provides immediate stabilization without prior booking.
              </span>
            </li>
          </ul>
        </div>

        {/* Location & Inpatient */}
        <div className="rounded-3xl border border-[#E9EEF1] dark:border-slate-800/80 bg-white dark:bg-[#002238] p-6 shadow-soft space-y-2.5">
          <div className="flex items-center gap-2 text-[#00395C] dark:text-white font-bold text-sm">
            <ShieldCheck className="h-4 w-4 text-[#2E8DBB] dark:text-[#49C4CA]" />
            <span>Campus Location & Wards</span>
          </div>
          <p className="text-xs text-[#1B2B33]/70 dark:text-slate-400 leading-relaxed">
            Conveniently located infront of Adama Medical College Hospital. Offering 30 inpatient beds across general and private wards with close clinical monitoring.
          </p>
        </div>
      </div>
    </div>
  );
}
