import EnergyOverview from "@/components/industries/EnergyOverview";
import EnergyChallenges from "@/components/industries/EnergyChallenges";
import WhyFortunaEnergySection from "@/components/industries/WhyFortunaEnergySection";
import EnergyProductsSection from "@/components/industries/EnergyProductsSection";

export default function EnergyUtilitiesPage() {
  return (
    <>
      <EnergyOverview />
      <EnergyChallenges />
      <WhyFortunaEnergySection />
      <EnergyProductsSection />
    </>
  );
}