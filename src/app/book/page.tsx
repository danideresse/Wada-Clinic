import { Suspense } from "react";
import { Metadata } from "next";
import { BookingClient } from "./booking-client";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Schedule your doctor consultation at Wada Clinic. Select your preferred date, medical specialty, and physician.",
};

export default function BookAppointmentPage() {
  return (
    <div className="bg-[#F2F8FB] dark:bg-[#001724] transition-colors duration-300">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#e0f1f8]/80 via-white to-[#F2F8FB] dark:from-[#002238] dark:via-[#001724] dark:to-[#001724] py-14 lg:py-18 border-b border-[#E9EEF1] dark:border-slate-800">
        <div className="container max-w-4xl text-center space-y-3">
          <Badge className="bg-[#e0f1f8] dark:bg-[#00395C] text-[#00395C] dark:text-[#49C4CA] border-[#2E8DBB]/30 dark:border-[#49C4CA]/30 font-bold">
            Online Scheduling
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00395C] dark:text-white font-heading tracking-tight">
            Schedule Your Visit
          </h1>
          <p className="text-base sm:text-lg text-[#1B2B33]/85 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Book your consultation in just 2 minutes. Our clinical intake team will confirm your reserved time slot swiftly.
          </p>
        </div>
      </section>

      {/* Booking Container */}
      <section className="py-12 lg:py-20">
        <div className="container max-w-6xl">
          <Suspense
            fallback={
              <div className="rounded-3xl border border-[#E9EEF1] dark:border-slate-800 bg-white dark:bg-[#002238] p-12 text-center text-[#1B2B33]/70 dark:text-slate-400 shadow-soft">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-[#2E8DBB] border-t-transparent mb-3" />
                <p className="text-sm">Loading appointment scheduling system...</p>
              </div>
            }
          >
            <BookingClient />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
