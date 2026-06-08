import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { LiveMarketSection } from "@/components/landing/LiveMarketSection";
import { TrustedBySection } from "@/components/landing/TrustedBySection";
import { PricingSection } from "@/components/landing/PricingSection";
import { MarketplaceSection } from "@/components/landing/MarketplaceSection";
import { AISection } from "@/components/landing/AISection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";
import { getDictionary } from "@/i18n/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  return (
    <div className="bg-white">
      <Navbar dict={dict.navbar} lang={lang} />
      <main>
        <Hero dict={dict.hero} lang={lang} />
        <LiveMarketSection />
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
