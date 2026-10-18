import Link from "next/link";
import { servicesData } from "@/data/services";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IconRenderer } from "@/components/common/icon-renderer";
import { ArrowRight, CheckCircle2, FlaskConical, Stethoscope, Pill, AlertTriangle } from "lucide-react";

export function ServicesOverviewSection() {
  const featuredServices = servicesData.slice(0, 6);

  return (
    <section className="py-16 lg:py-24 bg-[#F2F8FB] border-y border-[#E9EEF1]">
      <div className="container">
        {/* Support Services Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="rounded-2xl bg-white p-4 border border-[#E9EEF1] shadow-soft flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e0f1f8] text-[#2E8DBB]">
              <FlaskConical className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#00395C] block">24/7 Clinical Lab</span>
              <span className="text-[11px] text-[#1B2B33]/70 block">Rapid pathology tests</span>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 border border-[#E9EEF1] shadow-soft flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e0f1f8] text-[#2E8DBB]">
              <Stethoscope className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#00395C] block">Digital Imaging</span>
              <span className="text-[11px] text-[#1B2B33]/70 block">Ultrasound & X-Ray</span>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 border border-[#E9EEF1] shadow-soft flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e0f1f8] text-[#2E8DBB]">
              <Pill className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#00395C] block">In-House Pharmacy</span>
              <span className="text-[11px] text-[#1B2B33]/70 block">Immediate medications</span>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 border border-[#E9EEF1] shadow-soft flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e0f1f8] text-[#2E8DBB]">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#00395C] block">Emergency Triage</span>
              <span className="text-[11px] text-[#1B2B33]/70 block">24/7 Stabilization</span>
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2E8DBB]">
              12+ Clinical Departments
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00395C] font-heading tracking-tight">
              Specialist & Subspecialist Medical Care
            </h2>
            <p className="text-base text-[#1B2B33]/80 leading-relaxed">
              Serving Adama and the wider region with advanced surgical, neurological, oncological, and inpatient care.
            </p>
          </div>

          <Button asChild size="md" className="self-start md:self-end bg-[#00395C] hover:bg-[#2E8DBB] text-white">
            <Link href="/services" className="flex items-center gap-2 font-bold">
              <span>View All 12 Departments</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredServices.map((service) => (
            <Card
              key={service.slug}
              className="group flex flex-col justify-between hover:border-[#2E8DBB]/40 hover:-translate-y-1 transition-all duration-300 bg-white border-[#E9EEF1]"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F8FB] text-[#2E8DBB] group-hover:bg-[#2E8DBB] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <IconRenderer name={service.iconName} className="h-6 w-6" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#00395C] bg-[#e0f1f8] px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {service.category}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-[#2E8DBB] transition-colors text-[#00395C]">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-3 text-[#1B2B33]/70">
                  {service.shortDescription}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-2">
                <span className="text-xs font-bold text-[#00395C] uppercase tracking-wide block">
                  Procedures & Focus:
                </span>
                <ul className="space-y-1.5">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-[#1B2B33]/80 flex items-start gap-2"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#2E8DBB] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-4 border-t border-[#E9EEF1]">
                <Link
                  href={`/services/${service.slug}`}
                  className="text-xs font-bold text-[#2E8DBB] hover:text-[#00395C] inline-flex items-center gap-1.5 group/link"
                >
                  <span>Department Overview & Details</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
