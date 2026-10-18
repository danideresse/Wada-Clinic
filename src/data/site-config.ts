export interface SiteConfig {
  name: string;
  tagline: string;
  subHeadline: string;
  description: string;
  mission: string;
  vision: string;
  phone: string;
  phoneDisplay: string;
  emergencyPhone: string;
  email: string;
  website: string;
  telegram: string;
  facebook: string;
  whatsapp: string;
  address: {
    landmark: string;
    city: string;
    region: string;
    country: string;
    full: string;
    mapQueryUrl: string;
  };
  openingHours: {
    emergency: string;
    opd: string;
    inpatient: string;
    laboratory: string;
    pharmacy: string;
  };
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  medicalDisclaimer: string;
}

export const siteConfig: SiteConfig = {
  name: "Wada Hospital",
  tagline: "Your Health, Our Promise",
  subHeadline:
    "Welcome to Wada Hospital, your trusted destination for comprehensive specialist and subspecialist level care. We are dedicated to serving our community with advanced medical expertise and patient-centered clinical excellence.",
  description:
    "Wada Hospital delivers advanced, compassionate specialty care and 24/7 medical excellence to the heart of Adama and beyond. Offering 12+ specialized departments, 30 inpatient beds, cutting-edge diagnostics, and continuous emergency stabilization.",
  mission:
    "To pioneer clinical excellence and compassionate healing across Adama and the wider region, empowering every family with trusted healthcare that transforms lives.",
  vision:
    "To be the leading healthcare provider of choice in the region on national level, recognized for clinical excellence, innovation, and unwavering dedication to community health.",
  phone: "+251997040408",
  phoneDisplay: "0997040408",
  emergencyPhone: "+251997040408",
  email: "care@wadaclinic.com", // Official domain as per brand guideline
  website: "www.wadaclinic.com",
  telegram: "https://t.me/wadaclinic",
  facebook: "https://www.facebook.com/share/g/1FCkj4RtBf/",
  whatsapp: "+251997040408",
  address: {
    landmark: "Infront of Adama Medical College Hospital",
    city: "Adama",
    region: "Oromia",
    country: "Ethiopia",
    full: "Infront of Adama Medical College Hospital, Adama, Ethiopia",
    mapQueryUrl:
      "https://maps.google.com/?q=Adama+Medical+College+Hospital+Adama+Ethiopia",
  },
  openingHours: {
    emergency: "24/7 High-Acuity Emergency Triage & Trauma Care",
    opd: "Monday – Saturday: 8:00 AM – 6:00 PM",
    inpatient: "24/7 Inpatient & High-Dependency Monitoring",
    laboratory: "24/7 Fully Automated Clinical Pathology",
    pharmacy: "24/7 In-House Hospital Pharmacy",
  },
  stats: [
    {
      value: "3+",
      label: "Years of Service",
      description: "Dedicated clinical care in Adama",
    },
    {
      value: "30",
      label: "Inpatient Bed Capacity",
      description: "General, private & close monitoring wards",
    },
    {
      value: "12+",
      label: "Specialist Departments",
      description: "Including neurology, oncology & surgery",
    },
    {
      value: "24/7",
      label: "Emergency & Lab Care",
      description: "Always open when seconds matter",
    },
  ],
  whyChooseUs: [
    {
      title: "Coordinated Specialist Care in One Place",
      description:
        "A dedicated team of doctors and specialists see you in one place, at one time. They listen to your story, understand your goals, and collaborate to accurately diagnose and treat your condition.",
    },
    {
      title: "Comprehensive, High-Acuity 24/7 Care",
      description:
        "Delivering stability, rapid trauma stabilization, and peace of mind around the clock when seconds matter most.",
    },
    {
      title: "Seamless On-Site Diagnostics",
      description:
        "Cutting-edge 24/7 clinical laboratory pathology, digital ultrasound, and imaging seamlessly integrated for swift, accurate, and coordinated decision-making.",
    },
    {
      title: "Bridging Critical Regional Gaps",
      description:
        "Offering rare, high-level medical specialties like neurology, oncology, and hepatobiliary surgery right here in Adama, eliminating the burden of long-distance travel.",
    },
  ],
  medicalDisclaimer:
    "Medical Disclaimer: The clinical information presented on this website is for educational and informational awareness and does not replace individual clinical consultation, diagnosis, or emergency triage. For urgent medical emergencies, immediately contact our 24/7 line at 0997040408 or visit our emergency triage infront of Adama Medical College Hospital.",
};
