import HeroSection from "./components/HeroSection";
import BusinessImpactSection from "./components/BusinessImpactSection";
import CapabilitesSection from "./components/CapabilitiesSection";
import CTASection from "./components/CTASection";
export default function FortunaEAMPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BusinessImpactSection />
      <CapabilitesSection />
      <CTASection />
    </main>
  );
}