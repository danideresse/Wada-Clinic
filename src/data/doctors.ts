export interface Doctor {
  id: string;
  name: string;
  role: string;
  department: string;
  qualifications: string;
  experienceYears: number;
  bio: string;
  languages: string[];
  schedule: string;
  image: string;
  badge?: string;
}

// TODO: Replace placeholders with confirmed Wada Hospital consultant physician profiles
export const doctorsData: Doctor[] = [
  {
    id: "dr-neurology",
    name: "Dr. [Neurology Consultant]", // TODO: Real doctor name
    role: "Senior Consultant Neurologist",
    department: "Neurology",
    qualifications: "MD, Specialty in Neurology & Neurophysiology",
    experienceYears: 12,
    bio: "Specializing in acute stroke triage, electroencephalography (EEG) evaluations, epilepsy management, and chronic neuropathies, bridging a vital regional medical specialty in Adama.",
    languages: ["Amharic", "Afaan Oromoo", "English"],
    schedule: "Mon, Wed, Fri: 8:30 AM – 4:00 PM",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
    badge: "Neurology Specialist",
  },
  {
    id: "dr-general-surgery",
    name: "Dr. [General & Trauma Surgeon]", // TODO: Real doctor name
    role: "Lead General & Trauma Surgeon",
    department: "General Surgery",
    qualifications: "MD, Fellow of the College of Surgeons",
    experienceYears: 15,
    bio: "Overseeing elective abdominal surgeries, emergency trauma laparotomies, appendectomies, and hernia repairs with 24/7 surgical coverage.",
    languages: ["Amharic", "Afaan Oromoo", "English"],
    schedule: "Tue, Thu, Sat: 9:00 AM – 5:00 PM & 24/7 On-Call",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
    badge: "Surgical Lead",
  },
  {
    id: "dr-oncology",
    name: "Dr. [Medical Oncologist]", // TODO: Real doctor name
    role: "Consultant Medical Oncologist",
    department: "Oncology",
    qualifications: "MD, Board Certified in Medical Oncology",
    experienceYears: 14,
    bio: "Directing individualized chemotherapy regimens, supportive cancer care, staging evaluations, and collaborative multidisciplinary tumor reviews.",
    languages: ["Amharic", "English"],
    schedule: "Mon, Tue, Thu: 9:00 AM – 3:30 PM",
    image:
      "https://images.unsplash.com/photo-1594824813583-718617d12f38?q=80&w=800&auto=format&fit=crop",
    badge: "Oncology Care",
  },
  {
    id: "dr-obgyn",
    name: "Dr. [Obstetrics & Gynecology Specialist]", // TODO: Real doctor name
    role: "Senior Consultant Obstetrician & Gynecologist",
    department: "Gynecology and Obstetrics",
    qualifications: "MD, Specialist in Obstetrics and Gynecology",
    experienceYears: 13,
    bio: "Dedicated to maternal and fetal health, managing high-risk pregnancies, safe deliveries (cesarean and vaginal), and minimally invasive gynecological procedures.",
    languages: ["Amharic", "Afaan Oromoo", "English"],
    schedule: "Mon, Wed, Fri: 8:00 AM – 5:00 PM",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
    badge: "Women's Health",
  },
  {
    id: "dr-internal-med",
    name: "Dr. [Internal Medicine Specialist]", // TODO: Real doctor name
    role: "Consultant Physician – Internal Medicine",
    department: "Internal Medicine",
    qualifications: "MD, Specialist in Internal Medicine",
    experienceYears: 16,
    bio: "Managing complex adult multi-system conditions, hypertension, diabetes mellitus, infectious diseases, and inpatient medical stabilization.",
    languages: ["Amharic", "Afaan Oromoo", "English"],
    schedule: "Mon – Fri: 8:30 AM – 4:30 PM",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "dr-pediatrics",
    name: "Dr. [Pediatric Care Specialist]", // TODO: Real doctor name
    role: "Consultant Pediatrician",
    department: "Pediatrics",
    qualifications: "MD, Specialist in Pediatrics & Child Health",
    experienceYears: 11,
    bio: "Providing comprehensive child healthcare, routine immunizations, pediatric emergency triage, and developmental assessment in a caring environment.",
    languages: ["Amharic", "Afaan Oromoo", "English"],
    schedule: "Mon, Tue, Thu, Sat: 8:30 AM – 3:30 PM",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop",
  },
];
