import AutomotiveOverview from "@/components/industries/AutomotiveOverview";
import AutomotiveChallenges from "@/components/industries/AutomotiveChallenges";
import WhyFortunaAutomotiveSection from "@/components/industries/WhyFortunaAutomotiveSection";
import AutomotiveProductsSection from "@/components/industries/AutomotiveProductsSection";

export default function AutomotivePage() {
  return (
    <>
      <AutomotiveOverview />
      <AutomotiveChallenges />
      <WhyFortunaAutomotiveSection />
      <AutomotiveProductsSection />
    </>
  );
}