export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "appointments" | "emergency" | "visits" | "facilities";
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    category: "emergency",
    question: "Do I need an appointment for emergency care at Wada Hospital?",
    answer:
      "No. Our high-acuity emergency triage and trauma stabilization units are open 24/7 every day of the year. In case of acute symptoms, trauma, or critical illness, you can arrive directly at our hospital infront of Adama Medical College Hospital or call our emergency hotline at 0997040408.",
  },
  {
    id: "faq-2",
    category: "appointments",
    question: "How do I schedule an outpatient (OPD) specialist consultation?",
    answer:
      "You can book outpatient visits online through our booking form, call our reception directly at 0997040408 during OPD hours (Monday – Saturday, 8:00 AM – 6:00 PM), or message our official Telegram channel at t.me/wadaclinic.",
  },
  {
    id: "faq-3",
    category: "facilities",
    question: "What are your inpatient bed capacities and accommodations?",
    answer:
      "Wada Hospital features a 30-bed inpatient capacity configured with comfortable general wards and private rooms, supported by dedicated care units and continuous nursing supervision for patients requiring post-surgical or intensive monitoring.",
  },
  {
    id: "faq-4",
    category: "facilities",
    question: "Are laboratory tests and pharmacy available on-site around the clock?",
    answer:
      "Yes. Our clinical laboratory operates 24/7 with automated hematology, clinical chemistry, microbiology, and tissue pathology. We also house a fully stocked 24/7 in-house pharmacy so prescribed medications and medical supplies are accessible immediately.",
  },
  {
    id: "faq-5",
    category: "visits",
    question: "Where is Wada Hospital located in Adama?",
    answer:
      "We are conveniently located directly Infront of Adama Medical College Hospital in Adama, Oromia, Ethiopia. Patient parking and direct ambulance access are available at the front entrance.",
  },
  {
    id: "faq-6",
    category: "appointments",
    question: "Which high-level medical specialties are available at Wada Hospital?",
    answer:
      "We offer 12+ specialist departments, including rare and high-acuity fields such as Neurology (with EEG diagnostics), Oncology (staging and chemotherapy protocols), General Surgery, Hepatobiliary Surgery, Anesthesia & Pain Medicine, Gynecology & Obstetrics, Pediatrics, and Urology.",
  },
];
