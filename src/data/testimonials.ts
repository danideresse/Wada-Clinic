export interface Testimonial {
  id: string;
  patientName: string;
  tag: string;
  serviceReceived: string;
  quote: string;
  rating: number;
  date: string;
}

// TODO: Replace with real patient testimonials and consented reviews
export const testimonialsData: Testimonial[] = [
  {
    id: "review-1",
    patientName: "Sarah M.", // TODO: Real patient consent / initials
    tag: "Family Patient (5+ Years)",
    serviceReceived: "General & Family Medicine",
    quote:
      "Wada Clinic transformed the way our entire family approaches health. From prompt appointment times to doctors who genuinely listen without rushing, we have never felt so well cared for.",
    rating: 5,
    date: "October 2024",
  },
  {
    id: "review-2",
    patientName: "David L.", // TODO: Real patient consent / initials
    tag: "Cardiac Screening Patient",
    serviceReceived: "Cardiology",
    quote:
      "The cardiology team caught an irregular rhythm during an annual physical that had gone unnoticed elsewhere. The swift diagnostic follow-up and calm reassurance gave me total peace of mind.",
    rating: 5,
    date: "September 2024",
  },
  {
    id: "review-3",
    patientName: "Elena R.", // TODO: Real patient consent / initials
    tag: "Parent of 2",
    serviceReceived: "Pediatrics",
    quote:
      "Taking toddlers to the doctor used to be stressful, but the pediatric team at Wada Clinic made my kids feel instantly at ease with warm smiles and thoughtful care. Highly recommended!",
    rating: 5,
    date: "August 2024",
  },
  {
    id: "review-4",
    patientName: "Marcus K.", // TODO: Real patient consent / initials
    tag: "Sports Rehabilitation",
    serviceReceived: "Orthopedics & Physical Therapy",
    quote:
      "After a severe knee injury, the physical therapy team designed a structured recovery program that got me back to running months ahead of schedule. Truly professional clinical care.",
    rating: 5,
    date: "July 2024",
  },
];
