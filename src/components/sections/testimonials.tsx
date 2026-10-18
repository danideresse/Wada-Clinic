import { testimonialsData } from "@/data/testimonials";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#F2F8FB] to-white dark:from-[#001724] dark:to-[#001c2e] border-t border-[#E9EEF1] dark:border-white/10 transition-colors">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2E8DBB] dark:text-[#49C4CA]">
            Patient Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00395C] dark:text-white font-heading tracking-tight">
            Loved and Trusted by Our Community
          </h2>
          <p className="text-base text-[#1B2B33]/80 dark:text-slate-300 leading-relaxed">
            Real stories from individuals and families who rely on Wada Hospital for everyday and specialized clinical care in Adama.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="relative rounded-3xl border border-[#E9EEF1] dark:border-white/10 bg-white dark:bg-[#002238] p-8 shadow-soft flex flex-col justify-between hover:shadow-card hover:border-[#2E8DBB]/30 transition-all duration-300"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-[#2E8DBB]/20 dark:text-[#49C4CA]/20" />
                </div>

                <blockquote className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              {/* Patient info */}
              <div className="border-t border-[#E9EEF1] dark:border-white/10 pt-4 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#00395C] dark:text-white text-sm">
                      {item.patientName}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="h-3 w-3" />
                      <span>Verified Patient</span>
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">
                    {item.tag} • {item.serviceReceived}
                  </span>
                </div>
                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
