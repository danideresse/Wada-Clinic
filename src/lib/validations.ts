import { z } from "zod";

export const appointmentFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Please enter a valid telephone number")
    .max(25, "Phone number is too long"),
  serviceSlug: z.string().min(1, "Please select a service or consultation type"),
  preferredDoctor: z.string().optional(),
  preferredDate: z.string().min(1, "Please choose your preferred appointment date"),
  preferredTimeSlot: z.string().min(1, "Please choose your preferred time of day"),
  isNewPatient: z.enum(["yes", "no"]).default("yes"),
  symptomsNotes: z
    .string()
    .max(1000, "Notes cannot exceed 1000 characters")
    .optional(),
  // Honeypot field for bot spam prevention. Must remain empty.
  botWebsiteCheck: z.string().max(0, "Bot detected").optional(),
});

export type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
  // Honeypot field
  botWebsiteCheck: z.string().max(0, "Bot detected").optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
