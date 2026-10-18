"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { appointmentFormSchema, AppointmentFormValues } from "@/lib/validations";
import { submitAppointmentAction, ActionResponse } from "@/app/actions";
import { servicesData } from "@/data/services";
import { doctorsData } from "@/data/doctors";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/button";
import {
  CalendarCheck,
  CheckCircle2,
  AlertCircle,
  Clock,
  Phone,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface AppointmentFormProps {
  initialServiceSlug?: string;
  initialDoctorId?: string;
}

export function AppointmentForm({
  initialServiceSlug = "",
  initialDoctorId = "",
}: AppointmentFormProps) {
  const [submissionResult, setSubmissionResult] =
    React.useState<ActionResponse | null>(null);
  const [serverError, setServerError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      serviceSlug: initialServiceSlug,
      preferredDoctor: initialDoctorId,
      preferredDate: "",
      preferredTimeSlot: "morning",
      isNewPatient: "yes",
      symptomsNotes: "",
      botWebsiteCheck: "",
    },
  });

  const onSubmit = async (values: AppointmentFormValues) => {
    setServerError(null);
    try {
      const res = await submitAppointmentAction(values);
      if (res.success) {
        setSubmissionResult(res);
        reset();
      } else {
        setServerError(res.message || "Failed to submit request.");
      }
    } catch (err) {
      setServerError("An unexpected network error occurred. Please call the clinic directly.");
    }
  };

  if (submissionResult?.success) {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-white p-8 md:p-10 shadow-card text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 mb-6">
          <CheckCircle2 className="h-9 w-9 stroke-[2.2]" />
        </div>
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 rounded-full mb-3">
          Request Received
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 font-heading mb-3">
          Appointment Scheduled for Confirmation
        </h3>
        <p className="text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
          {submissionResult.message}
        </p>

        {submissionResult.bookingReference && (
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 max-w-xs mx-auto mb-8">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-medium block mb-1">
              Booking Tracking ID
            </span>
            <span className="font-mono text-lg font-bold text-primary tracking-wide">
              {submissionResult.bookingReference}
            </span>
          </div>
        )}

        <div className="border-t border-slate-100 pt-6 text-sm text-slate-500 max-w-md mx-auto space-y-3">
          <p>
            Need urgent medical help or immediate verification? Reach our reception staff directly:
          </p>
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
          >
            <Phone className="h-4 w-4" />
            <span>{siteConfig.phoneDisplay}</span>
          </a>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => setSubmissionResult(null)}
          >
            Book Another Appointment
          </Button>
          <Button asChild variant="default">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Get tomorrow's date string as minimum booking date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-card"
      noValidate
    >
      {serverError && (
        <div className="mb-6 rounded-2xl bg-rose-50 border border-rose-200 p-4 text-rose-800 text-sm flex items-start gap-3">
          <AlertCircle className="h-5 w-5 shrink-0 text-rose-600 mt-0.5" />
          <div>
            <strong className="font-semibold block">Submission Error</strong>
            <span>{serverError}</span>
          </div>
        </div>
      )}

      {/* Honeypot field - visually hidden */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="botWebsiteCheck">Do not fill this</label>
        <input
          id="botWebsiteCheck"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("botWebsiteCheck")}
        />
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900 font-heading mb-1">
            Patient Information
          </h3>
          <p className="text-sm text-slate-500">
            Please provide accurate details so our medical receptionist can confirm your slot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-slate-800 mb-1.5"
            >
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="e.g. John Doe"
              className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
              {...register("fullName")}
              aria-invalid={!!errors.fullName}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-rose-600">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-800 mb-1.5"
            >
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
              {...register("email")}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-rose-600">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-slate-800 mb-1.5"
            >
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="(555) 000-0000"
              className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
              {...register("phone")}
              aria-invalid={!!errors.phone}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-rose-600">{errors.phone.message}</p>
            )}
          </div>

          {/* Patient Status */}
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-1.5">
              Have you visited Wada Hospital before?
            </label>
            <div className="grid grid-cols-2 gap-3 pt-1">
              <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 bg-slate-50/60 cursor-pointer hover:bg-slate-100">
                <input
                  type="radio"
                  value="no"
                  {...register("isNewPatient")}
                  className="text-primary focus:ring-primary"
                />
                <span className="text-xs font-medium text-slate-700">Returning Patient</span>
              </label>
              <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 bg-slate-50/60 cursor-pointer hover:bg-slate-100">
                <input
                  type="radio"
                  value="yes"
                  {...register("isNewPatient")}
                  className="text-primary focus:ring-primary"
                />
                <span className="text-xs font-medium text-slate-700">New Patient</span>
              </label>
            </div>
          </div>
        </div>

        {/* Clinical preferences */}
        <div className="border-t border-slate-100 pt-6">
          <h3 className="text-xl font-bold text-slate-900 font-heading mb-1">
            Appointment Preferences
          </h3>
          <p className="text-sm text-slate-500 mb-5">
            Select the specialty, optional preferred physician, and ideal consultation timing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Service */}
            <div>
              <label
                htmlFor="serviceSlug"
                className="block text-sm font-medium text-slate-800 mb-1.5"
              >
                Required Specialty / Service <span className="text-rose-500">*</span>
              </label>
              <select
                id="serviceSlug"
                className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                {...register("serviceSlug")}
                aria-invalid={!!errors.serviceSlug}
              >
                <option value="">Select a department...</option>
                {servicesData.map((svc) => (
                  <option key={svc.slug} value={svc.slug}>
                    {svc.title}
                  </option>
                ))}
              </select>
              {errors.serviceSlug && (
                <p className="mt-1 text-xs text-rose-600">{errors.serviceSlug.message}</p>
              )}
            </div>

            {/* Doctor */}
            <div>
              <label
                htmlFor="preferredDoctor"
                className="block text-sm font-medium text-slate-800 mb-1.5"
              >
                Preferred Doctor (Optional)
              </label>
              <select
                id="preferredDoctor"
                className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                {...register("preferredDoctor")}
              >
                <option value="">First Available Specialist</option>
                {doctorsData.map((doc) => (
                  <option key={doc.id} value={doc.id}>
                    {doc.name} – {doc.department}
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred Date */}
            <div>
              <label
                htmlFor="preferredDate"
                className="block text-sm font-medium text-slate-800 mb-1.5"
              >
                Preferred Date <span className="text-rose-500">*</span>
              </label>
              <input
                id="preferredDate"
                type="date"
                min={minDate}
                className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                {...register("preferredDate")}
                aria-invalid={!!errors.preferredDate}
              />
              {errors.preferredDate && (
                <p className="mt-1 text-xs text-rose-600">{errors.preferredDate.message}</p>
              )}
            </div>

            {/* Preferred Time Slot */}
            <div>
              <label
                htmlFor="preferredTimeSlot"
                className="block text-sm font-medium text-slate-800 mb-1.5"
              >
                Preferred Time of Day <span className="text-rose-500">*</span>
              </label>
              <select
                id="preferredTimeSlot"
                className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                {...register("preferredTimeSlot")}
                aria-invalid={!!errors.preferredTimeSlot}
              >
                <option value="morning">Morning (8:30 AM – 12:00 PM)</option>
                <option value="afternoon">Afternoon (1:00 PM – 4:30 PM)</option>
                <option value="evening">Late Afternoon / Evening (4:30 PM – 7:00 PM)</option>
              </select>
              {errors.preferredTimeSlot && (
                <p className="mt-1 text-xs text-rose-600">
                  {errors.preferredTimeSlot.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Symptoms / Notes */}
        <div className="border-t border-slate-100 pt-6">
          <label
            htmlFor="symptomsNotes"
            className="block text-sm font-medium text-slate-800 mb-1.5"
          >
            Reason for Visit / Symptoms (Optional)
          </label>
          <textarea
            id="symptomsNotes"
            rows={3}
            placeholder="Briefly describe your symptoms or reason for visit (e.g. routine checkup, persistent cough, knee pain)..."
            className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 resize-y"
            {...register("symptomsNotes")}
          />
          <p className="mt-1 text-xs text-slate-400">
            Confidential medical communication protected under healthcare privacy standards.
          </p>
        </div>

        {/* Submit Button */}
        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>Response guarantee within 2 business hours during open clinic times.</span>
          </div>

          <Button
            type="submit"
            size="lg"
            isLoading={isSubmitting}
            className="w-full sm:w-auto min-w-[200px] bg-[#2E8DBB] hover:bg-[#1e5e80] text-white font-bold"
          >
            <span>Confirm Appointment Request</span>
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </form>
  );
}
