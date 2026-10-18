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
      setServerError("An unexpected error occurred. Please call or email the hospital directly.");
    }
  };

  if (submissionResult?.success) {
    return (
      <div className="rounded-3xl border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-[#002238] p-8 md:p-10 shadow-card text-center animate-in fade-in duration-300">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mb-4">
          <CheckCircle2 className="h-8 w-8 stroke-[2.2]" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading mb-2">
          Message Sent Successfully
        </h3>
        <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6 text-sm leading-relaxed">
          {submissionResult.message}
        </p>
        <Button
          type="button"
          variant="outline"
          onClick={() => setSubmissionResult(null)}
          className="border-slate-300 dark:border-white/20 text-slate-700 dark:text-slate-200"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#002238] p-6 md:p-10 shadow-card transition-colors"
      noValidate
    >
      {serverError && (
        <div className="mb-6 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 p-4 text-rose-800 dark:text-rose-300 text-sm flex items-start gap-3">
          <AlertCircle className="h-5 w-5 shrink-0 text-rose-600 dark:text-rose-400 mt-0.5" />
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
              className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-1.5"
            >
              Your Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="contactFullName"
              type="text"
              placeholder="e.g. Abebech Gobena"
              className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#001724] px-4 py-3 text-sm text-slate-900 dark:text-white transition focus:border-[#2E8DBB] focus:bg-white dark:focus:bg-[#001724] focus:outline-none focus:ring-2 focus:ring-[#2E8DBB]/20"
              {...register("fullName")}
              aria-invalid={!!errors.fullName}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-rose-600 dark:text-rose-400">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="contactEmail"
              className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-1.5"
            >
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              id="contactEmail"
              type="email"
              placeholder="name@example.com"
              className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#001724] px-4 py-3 text-sm text-slate-900 dark:text-white transition focus:border-[#2E8DBB] focus:bg-white dark:focus:bg-[#001724] focus:outline-none focus:ring-2 focus:ring-[#2E8DBB]/20"
              {...register("email")}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-rose-600 dark:text-rose-400">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="contactPhone"
              className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-1.5"
            >
              Phone Number (Optional)
            </label>
            <input
              id="contactPhone"
              type="tel"
              placeholder="0997040408"
              className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#001724] px-4 py-3 text-sm text-slate-900 dark:text-white transition focus:border-[#2E8DBB] focus:bg-white dark:focus:bg-[#001724] focus:outline-none focus:ring-2 focus:ring-[#2E8DBB]/20"
              {...register("phone")}
            />
          </div>

          <div>
            <label
              htmlFor="contactSubject"
              className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-1.5"
            >
              Subject <span className="text-rose-500">*</span>
            </label>
            <input
              id="contactSubject"
              type="text"
              placeholder="e.g. Question about surgery consultation"
              className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#001724] px-4 py-3 text-sm text-slate-900 dark:text-white transition focus:border-[#2E8DBB] focus:bg-white dark:focus:bg-[#001724] focus:outline-none focus:ring-2 focus:ring-[#2E8DBB]/20"
              {...register("subject")}
              aria-invalid={!!errors.subject}
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-rose-600 dark:text-rose-400">{errors.subject.message}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="contactMessage"
            className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-1.5"
          >
            Your Message <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="contactMessage"
            rows={5}
            placeholder="How can our clinical team assist you today?"
            className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#001724] px-4 py-3 text-sm text-slate-900 dark:text-white transition focus:border-[#2E8DBB] focus:bg-white dark:focus:bg-[#001724] focus:outline-none focus:ring-2 focus:ring-[#2E8DBB]/20 resize-y"
            {...register("message")}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-rose-600 dark:text-rose-400">{errors.message.message}</p>
          )}
        </div>

        <div className="pt-2 flex justify-end">
          <Button
            type="submit"
            size="lg"
            isLoading={isSubmitting}
            className="w-full sm:w-auto bg-[#2E8DBB] hover:bg-[#1e5e80] text-white font-bold rounded-xl"
          >
            <Send className="h-4 w-4 mr-2" />
            <span>Send Message</span>
          </Button>
        </div>
      </div>
    </form>
  );
}
