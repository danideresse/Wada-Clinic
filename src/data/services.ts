export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image: string;
  features: string[];
  commonConditions: string[];
  consultationDuration: string;
  category: "surgical" | "medical" | "specialty" | "diagnostic";
  isCoreDepartment?: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    slug: "anesthesia-critical-pain-medicine",
    title: "Anesthesia, Critical, and Pain Medicine",
    shortDescription:
      "Comprehensive perioperative care, advanced life support for critically ill patients, and specialized management for acute and chronic pain conditions.",
    fullDescription:
      "This department provides comprehensive perioperative care, advanced life support for critically ill patients, and specialized management for acute and chronic pain conditions. Procedures include general and regional anesthesia administration, continuous hemodynamic monitoring, and targeted interventional pain therapies.",
    iconName: "ShieldAlert",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    features: [
      "General and regional anesthesia administration",
      "Continuous hemodynamic monitoring & ICU life support",
      "Targeted interventional acute & chronic pain therapies",
      "Pre-anesthetic evaluation & safe postoperative recovery",
    ],
    commonConditions: [
      "Post-Surgical Critical Stabilization",
      "Chronic Neuropathic & Spine Pain",
      "Acute Trauma Pain Management",
      "Perioperative Hemodynamic Instability",
    ],
    consultationDuration: "24/7 Service & Scheduled Clinics",
    category: "surgical",
    isCoreDepartment: true,
  },
  {
    slug: "gastrointestinal",
    title: "Gastrointestinal (GI) Medicine",
    shortDescription:
      "Specializing in the digestive tract and liver, managing reflux, ulcers, inflammatory bowel disease, and chronic liver disorders with endoscopy and colonoscopy.",
    fullDescription:
      "Specializing in the digestive tract and liver, this department manages conditions such as acid reflux, peptic ulcers, inflammatory bowel disease, and chronic liver disorders. Diagnostic and therapeutic procedures include routine endoscopies, colonoscopies, and specialized gastrointestinal evaluations.",
    iconName: "ActivitySquare",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Diagnostic upper GI endoscopy & gastroscopy",
      "Colonoscopy & polyp screening evaluations",
      "Therapeutic interventions for GI bleeding & strictures",
      "Chronic inflammatory bowel disease (IBD) management",
    ],
    commonConditions: [
      "Acid Reflux & GERD",
      "Peptic Ulcer Disease & H. pylori",
      "Crohn's Disease & Ulcerative Colitis",
      "Chronic Liver Disease & Cirrhosis",
    ],
    consultationDuration: "30 – 45 mins",
    category: "medical",
    isCoreDepartment: true,
  },
  {
    slug: "general-surgery",
    title: "General Surgery & Trauma Care",
    shortDescription:
      "Acute, elective, and trauma-related abdominal, soft tissue, and endocrine surgical interventions performed by experienced surgical teams.",
    fullDescription:
      "This surgical service handles a broad spectrum of acute, elective, and trauma-related conditions involving the abdomen, soft tissues, and endocrine system. Common procedures include appendectomies, hernia repairs, cholecystectomies, and emergency trauma interventions.",
    iconName: "Stethoscope",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Emergency trauma laparotomy & injury stabilization",
      "Elective & emergency appendectomy and cholecystectomy",
      "Advanced abdominal wall hernia repairs",
      "Soft tissue and endocrine gland surgical procedures",
    ],
    commonConditions: [
      "Acute Appendicitis & Peritonitis",
      "Abdominal & Inguinal Hernias",
      "Gallstones & Acute Cholecystitis",
      "Blunt & Penetrating Surgical Trauma",
    ],
    consultationDuration: "30 – 45 mins",
    category: "surgical",
    isCoreDepartment: true,
  },
  {
    slug: "gynecology-obstetrics",
    title: "Gynecology and Obstetrics",
    shortDescription:
      "Dedicated women's health covering routine and high-risk pregnancies, safe deliveries (vaginal and cesarean), and minimally invasive gynecological surgeries.",
    fullDescription:
      "Dedicated to women's health, this department provides comprehensive care for routine and high-risk pregnancies, reproductive disorders, and hormonal imbalances. Services range from prenatal care and safe deliveries (vaginal and cesarean) to advanced minimally invasive gynecological surgeries.",
    iconName: "Baby",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Comprehensive prenatal screening & high-risk maternal triage",
      "Safe labor, spontaneous vaginal and cesarean deliveries",
      "Minimally invasive gynecological surgical procedures",
      "Reproductive endocrinology and hormonal health treatments",
    ],
    commonConditions: [
      "High-Risk Pregnancies & Preeclampsia",
      "Uterine Fibroids & Ovarian Cysts",
      "Pelvic Inflammatory Disease (PID)",
      "Menstrual Irregularities & Menopausal Health",
    ],
    consultationDuration: "30 – 45 mins",
    category: "specialty",
    isCoreDepartment: true,
  },
  {
    slug: "hepatobiliary-surgery",
    title: "Hepatobiliary Surgery",
    shortDescription:
      "Complex surgical diseases of the liver, gallbladder, bile ducts, and pancreas, including complex resections and biliary tree reconstructions.",
    fullDescription:
      "Focusing on complex surgical diseases of the liver, gallbladder, bile ducts, and pancreas, this specialized unit treats conditions such as tumors, gallstones, and biliary strictures. Procedures include complex resections, gallbladder removals, and targeted reconstructions of the biliary tree.",
    iconName: "Bone",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Complex hepatic resections & tumor removals",
      "Biliary tract reconstruction for benign & malignant strictures",
      "Advanced pancreatic surgical evaluations",
      "Laparoscopic & open cholecystectomy for severe disease",
    ],
    commonConditions: [
      "Hepatic Tumors & Lesions",
      "Obstructive Jaundice & Bile Duct Stones",
      "Biliary Strictures & Choledochal Cysts",
      "Pancreatic Neoplasms & Complex Cysts",
    ],
    consultationDuration: "45 – 60 mins",
    category: "surgical",
    isCoreDepartment: true,
  },
  {
    slug: "internal-medicine",
    title: "Internal Medicine",
    shortDescription:
      "Comprehensive adult medical diagnosis, systemic illness management, and long-term therapeutic regimens for chronic conditions like hypertension and diabetes.",
    fullDescription:
      "This department diagnoses, manages, and provides long-term care for complex adult medical conditions, systemic illnesses, and chronic diseases like hypertension and diabetes. Clinicians utilize comprehensive health assessments, diagnostic workups, and individualized therapeutic regimens to optimize patient well-being.",
    iconName: "Stethoscope",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Comprehensive adult diagnostic workups & health assessments",
      "Individualized chronic disease management (Hypertension, Diabetes)",
      "Cardiovascular and metabolic risk stratification",
      "Inpatient adult stabilization and systemic illness care",
    ],
    commonConditions: [
      "Uncontrolled Hypertension & Heart Failure",
      "Type 1 & Type 2 Diabetes Mellitus",
      "Complex Infectious Diseases",
      "Multisystem Chronic Disorders",
    ],
    consultationDuration: "30 – 45 mins",
    category: "medical",
    isCoreDepartment: true,
  },
  {
    slug: "neurology",
    title: "Neurology",
    shortDescription:
      "Specialized care for nervous system disorders including stroke, epilepsy, chronic migraines, neuropathies, and neurodegenerative conditions.",
    fullDescription:
      "Dedicated to disorders of the nervous system, this specialty addresses conditions such as stroke, epilepsy, chronic migraines, neuropathies, and neurodegenerative diseases. Care involves detailed neurological examinations, EEG diagnostics, and specialized long-term medical management plans, bridging a critical healthcare gap in Adama.",
    iconName: "HeartPulse",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Detailed neurological examinations & cognitive assessments",
      "Electroencephalogram (EEG) diagnostic evaluations",
      "Acute stroke triage and post-stroke rehabilitation protocols",
      "Tailored anticonvulsant and migraine management plans",
    ],
    commonConditions: [
      "Acute Stroke & Transient Ischemic Attacks (TIA)",
      "Epilepsy & Seizure Disorders",
      "Chronic Migraines & Cluster Headaches",
      "Peripheral Neuropathy & Parkinson's Disease",
    ],
    consultationDuration: "45 – 60 mins",
    category: "specialty",
    isCoreDepartment: true,
  },
  {
    slug: "oncology",
    title: "Oncology & Cancer Care",
    shortDescription:
      "Comprehensive diagnosis, staging, and therapeutic management of various cancer types with personalized chemotherapy and multidisciplinary planning.",
    fullDescription:
      "This critical service focuses on the comprehensive diagnosis, staging, and therapeutic management of various cancer types. Procedures and services include personalized chemotherapy protocols, supportive cancer care, and coordinated multidisciplinary treatment planning right in Adama.",
    iconName: "ShieldCheck",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Precision oncological staging & tumor marker evaluation",
      "Safe, personalized chemotherapy administration protocols",
      "Palliative and supportive cancer pain relief care",
      "Coordinated multidisciplinary tumor review & counseling",
    ],
    commonConditions: [
      "Gastrointestinal & Colorectal Cancers",
      "Breast & Gynecological Malignancies",
      "Hematologic Malignancies & Lymphomas",
      "Advanced Solid Tumors Requiring Systemic Therapy",
    ],
    consultationDuration: "45 – 60 mins",
    category: "specialty",
    isCoreDepartment: true,
  },
  {
    slug: "pathology",
    title: "Pathology & 24/7 Clinical Laboratory",
    shortDescription:
      "Diagnostic backbone of Wada Hospital: analyzing tissue biopsies, blood samples, and fluid cytology with rapid reporting to guide clinical teams.",
    fullDescription:
      "Serving as the diagnostic backbone of the hospital, this department analyzes tissue biopsies, blood samples, and fluid cytology to detect diseases, infections, and malignancies. Services include surgical pathology examinations, fine-needle aspirations, and rapid 24/7 diagnostic lab reporting to guide clinical teams.",
    iconName: "ActivitySquare",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    features: [
      "24/7 Fully automated clinical chemistry & hematology",
      "Surgical pathology examinations & histological biopsy review",
      "Fine-needle aspiration (FNA) & fluid cytology",
      "Microbiology cultures and antibiotic sensitivity profiling",
    ],
    commonConditions: [
      "Rapid Infection & Sepsis Profiling",
      "Malignancy Detection & Tumor Biopsies",
      "Hematologic & Clotting Disorders",
      "Organ Function & Metabolic Markers",
    ],
    consultationDuration: "Continuous 24/7 Service",
    category: "diagnostic",
    isCoreDepartment: true,
  },
  {
    slug: "pediatrics",
    title: "Pediatrics & Adolescent Care",
    shortDescription:
      "Dedicated medical care for infants, children, and adolescents, covering acute illnesses, childhood infections, and developmental monitoring.",
    fullDescription:
      "This department provides dedicated medical care tailored specifically to infants, children, and adolescents, covering acute illnesses, childhood infections, and developmental monitoring. Services include routine immunizations, growth assessments, and pediatric critical care management.",
    iconName: "Baby",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Routine childhood immunizations & growth assessments",
      "Acute pediatric illness diagnosis (fevers, respiratory infections)",
      "Pediatric high-dependency and critical stabilization",
      "Developmental, nutritional, and milestone counseling",
    ],
    commonConditions: [
      "Pneumonia, Bronchiolitis & Childhood Asthma",
      "Neonatal & Pediatric Sepsis",
      "Gastrointestinal Infections & Dehydration",
      "Nutritional Deficiencies & Failure to Thrive",
    ],
    consultationDuration: "30 – 40 mins",
    category: "medical",
    isCoreDepartment: true,
  },
  {
    slug: "radiology",
    title: "Radiology & Diagnostic Imaging",
    shortDescription:
      "Advanced imaging visualizations to detect fractures, internal injuries, tumors, and cardiovascular abnormalities with high-resolution X-rays and ultrasounds.",
    fullDescription:
      "Utilizing advanced imaging technology, this unit provides precise diagnostic visualizations to detect fractures, internal injuries, tumors, and cardiovascular abnormalities. Services encompass X-rays, ultrasounds, and other specialized imaging studies to support swift clinical decisions.",
    iconName: "Sparkles",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
    features: [
      "High-resolution digital X-ray diagnostics",
      "Color Doppler & abdominal/pelvic ultrasounds",
      "Obstetric & fetal anatomy ultrasound imaging",
      "Rapid emergency trauma radiological evaluations",
    ],
    commonConditions: [
      "Skeletal Fractures & Joint Dislocations",
      "Internal Hemorrhage & Trauma Injury",
      "Abdominal Pathologies & Gallstones",
      "Soft Tissue Tumors & Vascular Anomalies",
    ],
    consultationDuration: "20 – 30 mins",
    category: "diagnostic",
    isCoreDepartment: true,
  },
  {
    slug: "urology",
    title: "Urology",
    shortDescription:
      "Focusing on the urinary tract system in both genders and the male reproductive system, treating stones, infections, and prostate conditions.",
    fullDescription:
      "Focusing on the urinary tract system in both genders and the male reproductive system, this department treats conditions such as kidney stones, urinary tract infections, and prostate disorders. Procedures include cystoscopies, stone removal treatments, and various minimally invasive urological surgeries.",
    iconName: "Clock",
    image:
      "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Diagnostic and interventional cystoscopy",
      "Kidney and bladder stone removal therapies",
      "Benign prostatic hyperplasia (BPH) and prostate care",
      "Minimally invasive urological surgical procedures",
    ],
    commonConditions: [
      "Kidney, Ureteral & Bladder Calculi",
      "Recurrent & Complicated UTIs",
      "Benign Prostatic Enlargement & Urinary Retention",
      "Urologic Traumas & Strictures",
    ],
    consultationDuration: "30 – 45 mins",
    category: "surgical",
    isCoreDepartment: true,
  },
];
