import { testimonialsData } from "@/data/testimonials";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200/60">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Patient Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
            Loved and Trusted by Our Community
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Real stories from individuals and families who rely on Wada Clinic for their everyday and specialized healthcare needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="relative rounded-3xl border border-slate-200/90 bg-white p-8 shadow-soft flex flex-col justify-between hover:shadow-card hover:border-primary-200 transition-all duration-300"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary-200" />
                </div>

                <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              {/* Patient info */}
              <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-sm">
                      {item.patientName}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="h-3 w-3" />
                      <span>Verified Patient</span>
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    {item.tag} • {item.serviceReceived}
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-medium">
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
