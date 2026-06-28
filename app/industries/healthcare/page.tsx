import HealthcareOverview from "@/components/industries/HealthcareOverview";
import HealthcareChallenges from "@/components/industries/HealthcareChallenges";
import WhyFortunaHealthcareSection from "@/components/industries/WhyFortunaHealthcareSection";
import HealthcareProductsSection from "@/components/industries/HealthcareProductsSection";

export default function HealthcarePage() {
  return (
    <>
      <HealthcareOverview />
      <HealthcareChallenges />
      <WhyFortunaHealthcareSection />
      <HealthcareProductsSection />
    </>
  );
}