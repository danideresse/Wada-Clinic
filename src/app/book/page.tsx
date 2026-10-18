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
    <div className="bg-slate-50/50">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary-50/80 via-white to-slate-50/50 py-14 lg:py-18 border-b border-slate-200/60">
        <div className="container max-w-4xl text-center space-y-3">
          <Badge variant="accent">Online Scheduling</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Schedule Your Visit
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Book your consultation in just 2 minutes. Our clinical intake team will confirm your reserved time slot swiftly.
          </p>
        </div>
      </section>

      {/* Booking Container */}
      <section className="py-12 lg:py-20">
        <div className="container max-w-6xl">
          <Suspense
            fallback={
              <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center text-slate-500 shadow-soft">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mb-3" />
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
