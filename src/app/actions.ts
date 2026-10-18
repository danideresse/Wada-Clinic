"use server";

import { appointmentFormSchema, contactFormSchema } from "@/lib/validations";

export interface ActionResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
  bookingReference?: string;
}

/**
 * Server Action for appointment booking requests.
 * Currently validates input and simulates notification dispatch.
 * // TODO: Connect this action to an email service (Resend / SendGrid / Nodemailer)
 * // and persist requests to a clinic management database (e.g., PostgreSQL / Prisma / Supabase).
 */
export async function submitAppointmentAction(
  formData: unknown
): Promise<ActionResponse> {
  // Simulate network/server latency for realistic UX
  await new Promise((resolve) => setTimeout(resolve, 800));

  const parsed = appointmentFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please check the form for errors and try again.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // Honeypot bot detection check
  if (parsed.data.botWebsiteCheck && parsed.data.botWebsiteCheck.length > 0) {
    // Silently drop bot submissions
    return {
      success: true,
      message: "Appointment request received.",
      bookingReference: "WD-REF-SPAM-FILTERED",
    };
  }

  const bookingRef = `WADA-${Math.random().toString(36).substring(2, 7).toUpperCase()}-${Date.now().toString().slice(-4)}`;

  console.log("=== [WADA HOSPITAL] NEW APPOINTMENT SUBMISSION ===");
  console.log("Reference:", bookingRef);
  console.log("Patient:", parsed.data.fullName, `(${parsed.data.email})`);
  console.log("Phone:", parsed.data.phone);
  console.log("Service Slug:", parsed.data.serviceSlug);
  console.log("Doctor:", parsed.data.preferredDoctor || "Any Available");
  console.log("Date/Time:", parsed.data.preferredDate, parsed.data.preferredTimeSlot);
  console.log("New Patient:", parsed.data.isNewPatient);
  console.log("Notes:", parsed.data.symptomsNotes || "None provided");
  console.log("===============================================");

  // TODO: Send confirmation email to patient & notification email to clinic reception
  // Example with Resend:
  // await resend.emails.send({
  //   from: 'Wada Clinic <appointments@yourdomain.com>',
  //   to: parsed.data.email,
  //   subject: `Appointment Request Received [${bookingRef}]`,
  //   react: AppointmentEmailTemplate({ data: parsed.data, ref: bookingRef }),
  // });

  return {
    success: true,
    message: "Your appointment request has been successfully submitted! Our clinic coordinator will contact you shortly to confirm your scheduled time.",
    bookingReference: bookingRef,
  };
}

/**
 * Server Action for general contact enquiries.
 * // TODO: Connect to email dispatch and CRM inbox.
 */
export async function submitContactAction(
  formData: unknown
): Promise<ActionResponse> {
  await new Promise((resolve) => setTimeout(resolve, 600));

  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please fix the errors in your submission.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  if (parsed.data.botWebsiteCheck && parsed.data.botWebsiteCheck.length > 0) {
    return {
      success: true,
      message: "Thank you for reaching out.",
    };
  }

  console.log("=== [WADA HOSPITAL] NEW CONTACT MESSAGE ===");
  console.log("From:", parsed.data.fullName, `(${parsed.data.email})`);
  console.log("Subject:", parsed.data.subject);
  console.log("Message:", parsed.data.message);
  console.log("========================================");

  // TODO: Send notification email to reception desk
  return {
    success: true,
    message: "Thank you for your message. A member of our clinical team will get back to you within 1 business day.",
  };
}
