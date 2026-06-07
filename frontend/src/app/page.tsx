import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustSection } from "@/components/landing/TrustSection";
import { TrustedBySection } from "@/components/landing/TrustedBySection";
import { PricingSection } from "@/components/landing/PricingSection";
import { MarketplaceSection } from "@/components/landing/MarketplaceSection";
import { AISection } from "@/components/landing/AISection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <TrustedBySection />
        <PricingSection />
        <MarketplaceSection />
        <AISection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
