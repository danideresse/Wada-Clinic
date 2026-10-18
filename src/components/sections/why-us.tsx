import {
  Users,
  Clock,
  Microscope,
  Award,
  Check,
} from "lucide-react";

const VALUE_PROPS = [
  {
    icon: Users,
    title: "Coordinated Specialist Care in One Place",
    description:
      "At Wada Hospital, a dedicated team of doctors and specialists will see you in one place, at one time. They'll listen to your story, learn your goals, and work together to accurately diagnose and treat your condition so you can get back to your life as quickly as possible.",
    points: [
      "Multidisciplinary team consultations in a single visit",
      "Shared, unified clinical patient charts across specialties",
      "Attentive listening focused on your personal recovery goals",
    ],
  },
  {
    icon: Clock,
    title: "Comprehensive, High-Acuity 24/7 Care",
    description:
      "Comprehensive, high-acuity 24/7 care that delivers stability and peace of mind when seconds matter.",
    points: [
      "Round-the-clock emergency triage and trauma stabilization",
      "Critical care and hemodynamic life support capabilities",
      "On-call surgical and internal medicine specialists 24/7",
    ],
  },
  {
    icon: Microscope,
    title: "Seamless On-Site Cutting-Edge Diagnostics",
    description:
      "Cutting-edge diagnostics seamlessly integrated on-site for swift, accurate, and coordinated care.",
    points: [
      "24/7 automated clinical laboratory pathology & blood testing",
      "High-resolution digital ultrasound & diagnostic imaging",
      "Instant clinical coordination between labs and doctors",
    ],
  },
  {
    icon: Award,
    title: "Bridging Critical Gaps in Regional Healthcare",
    description:
      "Bridging critical gaps in regional healthcare by offering rare, high-level specialties like neurology and oncology right here in the city.",
    points: [
      "Specialized neurology exams, EEG diagnostics & stroke care",
      "Comprehensive oncology staging & chemotherapy protocols",
      "Eliminating the burden of long-distance medical travel",
    ],
  },
];

export function WhyUsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2E8DBB]">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00395C] font-heading tracking-tight">
            Advanced Clinical Care Focused on You
          </h2>
          <p className="text-base text-[#1B2B33]/80 leading-relaxed">
            Delivering advanced, compassionate specialty care and 24/7 medical excellence to the heart of Adama and beyond.
          </p>
        </div>

        {/* 4 Value Pillars from Questionnaire */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {VALUE_PROPS.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl border border-[#E9EEF1] bg-gradient-to-br from-white via-[#F2F8FB] to-[#e0f1f8]/40 p-8 shadow-soft transition-all duration-300 hover:shadow-card hover:border-[#2E8DBB]/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00395C] text-[#49C4CA] shadow-soft group-hover:scale-105 transition-transform">
                      <Icon className="h-6 w-6 stroke-[2]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#00395C] font-heading">
                      {prop.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#1B2B33]/85 leading-relaxed mb-6">
                    {prop.description}
                  </p>
                </div>

                <ul className="space-y-2 border-t border-[#E9EEF1] pt-5">
                  {prop.points.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="text-xs sm:text-sm text-[#1B2B33] flex items-center gap-2.5"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e0f1f8] text-[#2E8DBB]">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
