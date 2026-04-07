import { UrgencyBar } from "@/components/UrgencyBar";
import { HeroSection } from "@/components/HeroSection";
import { SocialProofBar } from "@/components/SocialProofBar";
import { StatsSection } from "@/components/StatsSection";
import { SyllabusSection } from "@/components/SyllabusSection";
import { SpeakerSection } from "@/components/SpeakerSection";
import { VideoSection } from "@/components/VideoSection";
import { AudienceSection } from "@/components/AudienceSection";
import { EventSection } from "@/components/EventSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { SeatCountProvider } from "@/components/SeatCountProvider";
import { LandingPopups } from "@/components/LandingPopups";

export default function Home() {
  return (
    <SeatCountProvider>
      <UrgencyBar />
      <main className="pb-24 md:pb-0">
        <HeroSection />
        <SocialProofBar />
        <StatsSection />
        <SyllabusSection />
        <SpeakerSection />
        <VideoSection />
        <AudienceSection />
        <EventSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
        <Footer />
      </main>
      <LandingPopups />
      <WhatsAppFloat />
      <StickyMobileCTA />
    </SeatCountProvider>
  );
}
