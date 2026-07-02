import HeroSection from "@/sections/home/HeroSection";
import AboutSection from "@/sections/home/AboutSection";
import EcosystemsSection from "@/sections/home/EcosystemSection";
import IndustriesSection from "@/sections/home/IndustriesSection";
import WhyFortunaSection from "@/sections/home/WhyFortunaSection";
import ConnectedSupplyChainSection from "@/sections/home/ConnectedSupplyChainSection";
import CTASection from "@/sections/home/CTASection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <EcosystemsSection />
      <IndustriesSection />
      <WhyFortunaSection />
      <ConnectedSupplyChainSection />
      <CTASection />
    </main>
  );
}
