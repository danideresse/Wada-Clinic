import Link from "next/link";
import Image from "next/image";
import { doctorsData } from "@/data/doctors";
import { Button } from "@/components/ui/button";
import { CalendarCheck, ArrowRight, Award } from "lucide-react";

export function DoctorsPreviewSection() {
  const featuredDoctors = doctorsData.slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-[#F2F8FB] dark:bg-[#001c2e]/60 border-t border-[#E9EEF1] dark:border-white/10 transition-colors">
      <div className="container">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2E8DBB] dark:text-[#49C4CA]">
              Medical Team & Specialists
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00395C] dark:text-white font-heading tracking-tight">
              Experienced Healthcare Specialists
            </h2>
            <p className="text-base text-[#1B2B33]/80 dark:text-slate-300 leading-relaxed">
              At Wada Hospital, a dedicated team of doctors and specialists will see you in one place, at one time. Listening to your story and working together for your health.
            </p>
          </div>

          <Button asChild variant="outline" size="md" className="self-start md:self-end border-[#00395C]/30 dark:border-white/20 text-[#00395C] dark:text-white font-bold hover:bg-[#e0f1f8] dark:hover:bg-white/10 rounded-full px-6">
            <Link href="/doctors" className="flex items-center gap-2">
              <span>View Specialists</span>
              <ArrowRight className="h-4 w-4 text-[#2E8DBB] dark:text-[#49C4CA]" />
            </Link>
          </Button>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="group rounded-3xl border border-[#E9EEF1] dark:border-white/10 bg-white dark:bg-[#002238] overflow-hidden shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Doctor Photo */}
              <div className="relative aspect-[4/3] w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00395C]/70 dark:from-[#001724]/90 via-transparent to-transparent" />
                {doc.badge && (
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white dark:bg-[#001724] text-[#00395C] dark:text-white shadow-sm">
                      {doc.badge}
                    </span>
                  </div>
                )}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#49C4CA] block">
                    {doc.department}
                  </span>
                </div>
              </div>

              {/* Info Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#00395C] dark:text-white font-heading group-hover:text-[#2E8DBB] dark:group-hover:text-[#49C4CA] transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#2E8DBB] dark:text-[#49C4CA] mt-0.5">
                    {doc.role}
                  </p>
                  <p className="text-xs text-[#1B2B33]/70 dark:text-slate-400 mt-1 flex items-center gap-1.5">
                    <Award className="h-3.5 w-3.5 text-[#2E8DBB] dark:text-[#49C4CA] shrink-0" />
                    <span>{doc.qualifications}</span>
                  </p>

                  <p className="text-xs sm:text-sm text-[#1B2B33]/80 dark:text-slate-300 leading-relaxed mt-3.5 line-clamp-3">
                    {doc.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E9EEF1] dark:border-white/10 flex items-center justify-between">
                  <span className="text-xs text-[#1B2B33]/60 dark:text-slate-400 font-semibold">
                    {doc.experienceYears}+ years exp.
                  </span>
                  <Button asChild size="sm" className="bg-[#2E8DBB] hover:bg-[#1e5e80] dark:bg-[#2E8DBB] dark:hover:bg-[#3DA8D2] text-white font-bold rounded-full px-4">
                    <Link
                      href={`/book?doctor=${doc.id}`}
                      className="flex items-center gap-1.5"
                    >
                      <CalendarCheck className="h-3.5 w-3.5" />
                      <span>Book Visit</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
