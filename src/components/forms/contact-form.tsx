"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormValues } from "@/lib/validations";
import { submitContactAction, ActionResponse } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";

export function ContactForm() {
  const [submissionResult, setSubmissionResult] =
    React.useState<ActionResponse | null>(null);
  const [serverError, setServerError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      botWebsiteCheck: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setServerError(null);
    try {
      const res = await submitContactAction(values);
      if (res.success) {
        setSubmissionResult(res);
        reset();
      } else {
        setServerError(res.message || "Failed to submit message.");
      }
    } catch {
      setServerError("An unexpected error occurred. Please call or email the clinic directly.");
    }
  };

  if (submissionResult?.success) {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-white p-8 md:p-10 shadow-card text-center animate-in fade-in duration-300">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 mb-4">
          <CheckCircle2 className="h-8 w-8 stroke-[2.2]" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 font-heading mb-2">
          Message Sent Successfully
        </h3>
        <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm leading-relaxed">
          {submissionResult.message}
        </p>
        <Button
          type="button"
          variant="outline"
          onClick={() => setSubmissionResult(null)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-card"
      noValidate
    >
      {serverError && (
        <div className="mb-6 rounded-2xl bg-rose-50 border border-rose-200 p-4 text-rose-800 text-sm flex items-start gap-3">
          <AlertCircle className="h-5 w-5 shrink-0 text-rose-600 mt-0.5" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Honeypot field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="botWebsiteCheckContact">Do not fill</label>
        <input
          id="botWebsiteCheckContact"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("botWebsiteCheck")}
        />
      </div>

      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="contactFullName"
              className="block text-sm font-medium text-slate-800 mb-1.5"
            >
              Your Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="contactFullName"
              type="text"
              placeholder="e.g. Jane Smith"
              className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
              {...register("fullName")}
              aria-invalid={!!errors.fullName}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-rose-600">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="contactEmail"
              className="block text-sm font-medium text-slate-800 mb-1.5"
            >
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              id="contactEmail"
              type="email"
              placeholder="jane@example.com"
              className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
              {...register("email")}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-rose-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="contactPhone"
              className="block text-sm font-medium text-slate-800 mb-1.5"
            >
              Phone Number (Optional)
            </label>
            <input
              id="contactPhone"
              type="tel"
              placeholder="(555) 000-0000"
              className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
              {...register("phone")}
            />
          </div>

          <div>
            <label
              htmlFor="contactSubject"
              className="block text-sm font-medium text-slate-800 mb-1.5"
            >
              Subject <span className="text-rose-500">*</span>
            </label>
            <input
              id="contactSubject"
              type="text"
              placeholder="e.g. Question about insurance coverage"
              className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
              {...register("subject")}
              aria-invalid={!!errors.subject}
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-rose-600">{errors.subject.message}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="contactMessage"
            className="block text-sm font-medium text-slate-800 mb-1.5"
          >
            Your Message <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="contactMessage"
            rows={5}
            placeholder="How can our clinical or administrative team assist you today?"
            className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 resize-y"
            {...register("message")}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-rose-600">{errors.message.message}</p>
          )}
        </div>

        <div className="pt-2 flex justify-end">
          <Button
            type="submit"
            size="lg"
            isLoading={isSubmitting}
            className="w-full sm:w-auto bg-[#2E8DBB] hover:bg-[#1e5e80] text-white font-bold"
          >
            <Send className="h-4 w-4 mr-2" />
            <span>Send Message</span>
          </Button>
        </div>
      </div>
    </form>
  );
}
