import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { CalendarCheck, PhoneCall, Stethoscope, ArrowRight } from "lucide-react";

const STEPS = [
  {
    stepNumber: "01",
    title: "Schedule or Call",
    description:
      "Select your required specialty from our 12+ departments online, or call our 24/7 reception desk at 0997040408 for immediate scheduling.",
    icon: CalendarCheck,
  },
  {
    stepNumber: "02",
    title: "Coordinated Triage",
    description:
      "Our clinical coordinator verifies your appointment time and department, and provides arrival directions to our facility infront of Adama Medical College Hospital.",
    icon: PhoneCall,
  },
  {
    stepNumber: "03",
    title: "Specialist Care & Recovery",
    description:
      "See dedicated specialists in one place, supported by 24/7 on-site laboratory pathology, digital ultrasound, and dedicated 30-bed inpatient care units.",
    icon: Stethoscope,
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2E8DBB]">
            Effortless Healthcare Access
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00395C] font-heading tracking-tight">
            How Care Works at Wada Hospital
          </h2>
          <p className="text-base text-[#1B2B33]/80 leading-relaxed">
            Healthcare access designed around patients. Fast coordination, unhurried specialist consultations, and 24/7 emergency readiness.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl border border-[#E9EEF1] bg-[#F2F8FB] p-8 flex flex-col justify-between group hover:border-[#2E8DBB]/40 hover:bg-white hover:shadow-card transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00395C] text-[#49C4CA] shadow-soft group-hover:scale-105 transition-transform">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="font-heading text-3xl font-extrabold text-slate-300 group-hover:text-[#2E8DBB] transition-colors">
                      {step.stepNumber}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#00395C] font-heading mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#1B2B33]/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-[#2E8DBB] hover:bg-[#1e5e80] text-white font-bold shadow-soft">
            <Link href="/book" className="flex items-center gap-2">
              <span>Schedule Outpatient Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-[#00395C]/30 text-[#00395C] font-bold">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2">
              <PhoneCall className="h-4 w-4 text-[#2E8DBB]" />
              <span>Call: {siteConfig.phoneDisplay}</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
