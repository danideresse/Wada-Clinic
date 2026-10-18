import { HeroSection } from "@/components/sections/hero";
import { ServicesOverviewSection } from "@/components/sections/services-overview";
import { WhyUsSection } from "@/components/sections/why-us";
import { DoctorsPreviewSection } from "@/components/sections/doctors-preview";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq-section";
import { CTABannerSection } from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverviewSection />
      <WhyUsSection />
      <DoctorsPreviewSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABannerSection />
    </>
  );
}
