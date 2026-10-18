import Link from "next/link";
import { faqsData } from "@/data/faqs";
import { AccordionGroup } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, PhoneCall } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function FAQSection() {
  const accordionItems = faqsData.map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: <p className="text-[#1B2B33]/85 leading-relaxed">{faq.answer}</p>,
  }));

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-[#E9EEF1]">
      <div className="container max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#00395C] bg-[#e0f1f8] rounded-full border border-[#2E8DBB]/30">
            <HelpCircle className="h-3.5 w-3.5 text-[#2E8DBB]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00395C] font-heading tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#1B2B33]/80 leading-relaxed max-w-xl mx-auto">
            Everything you need to know about emergency care, outpatient scheduling, and our hospital facilities in Adama.
          </p>
        </div>

        {/* Accessible Accordion */}
        <AccordionGroup items={accordionItems} />

        {/* Help footer */}
        <div className="mt-12 rounded-2xl bg-[#F2F8FB] border border-[#E9EEF1] p-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left gap-4">
          <div>
            <h4 className="font-bold text-[#00395C] text-base">
              Have a question not answered here?
            </h4>
            <p className="text-xs sm:text-sm text-[#1B2B33]/70 mt-0.5">
              Our hospital administrative team is available 24/7 to guide you.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex flex-wrap gap-2.5 justify-center">
            <Button asChild variant="outline" size="sm" className="border-[#00395C]/30 text-[#00395C] font-bold hover:bg-[#e0f1f8]">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5">
                <PhoneCall className="h-3.5 w-3.5 text-[#2E8DBB]" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </Button>
            <Button asChild size="sm" className="bg-[#2E8DBB] hover:bg-[#1e5e80] text-white font-bold">
              <Link href="/contact">Contact Hospital</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
