import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustSection } from "@/components/landing/TrustSection";
import { MarketplaceSection } from "@/components/landing/MarketplaceSection";
import { AISection } from "@/components/landing/AISection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col pt-20">
        <Hero />
        <TrustSection />
        <MarketplaceSection />
        <AISection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
