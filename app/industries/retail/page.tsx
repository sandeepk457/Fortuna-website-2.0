import RetailOverview from "@/components/industries/RetailOverview";
import RetailChallenges from "@/components/industries/RetailChallenges";
import WhyFortunaRetailSection from "@/components/industries/WhyFortunaRetailSection";
import RetailProductsSection from "@/components/industries/RetailProductsSection";

export default function RetailPage() {
  return (
    <>
      <RetailOverview />
      <RetailChallenges />
      <WhyFortunaRetailSection />
      <RetailProductsSection />
    </>
  );
}