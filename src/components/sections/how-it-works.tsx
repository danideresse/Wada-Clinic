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
    <section className="py-16 lg:py-24 bg-white dark:bg-[#001724] transition-colors">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2E8DBB] dark:text-[#49C4CA]">
            Effortless Healthcare Access
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00395C] dark:text-white font-heading tracking-tight">
            How Care Works at Wada Hospital
          </h2>
          <p className="text-base text-[#1B2B33]/80 dark:text-slate-300 leading-relaxed">
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
                className="relative rounded-3xl border border-[#E9EEF1] dark:border-white/10 bg-[#F2F8FB] dark:bg-[#002238] p-8 flex flex-col justify-between group hover:border-[#2E8DBB]/40 hover:bg-white dark:hover:bg-[#002b45] hover:shadow-card transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00395C] dark:bg-[#2E8DBB] text-[#49C4CA] dark:text-white shadow-soft group-hover:scale-105 transition-transform">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="font-heading text-3xl font-extrabold text-slate-300 dark:text-slate-600 group-hover:text-[#2E8DBB] transition-colors">
                      {step.stepNumber}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#00395C] dark:text-white font-heading mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#1B2B33]/80 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-[#2E8DBB] hover:bg-[#1e5e80] dark:bg-[#2E8DBB] dark:hover:bg-[#3DA8D2] text-white font-bold shadow-soft rounded-full px-7">
            <Link href="/book" className="flex items-center gap-2">
              <span>Schedule Outpatient Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-[#00395C]/30 dark:border-white/20 text-[#00395C] dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-white/10 rounded-full px-7">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2">
              <PhoneCall className="h-4 w-4 text-[#2E8DBB] dark:text-[#49C4CA]" />
              <span>Call: {siteConfig.phoneDisplay}</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
