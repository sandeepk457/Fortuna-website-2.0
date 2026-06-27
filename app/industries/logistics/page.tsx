import LogisticsOverview from "@/components/industries/LogisticsOverview";
import LogisticsChallenges from "@/components/industries/LogisticsChallenges";
import WhyFortunaLogisticsSection from "@/components/industries/WhyFortunaLogisticsSection";
import LogisticsProductsSection from "@/components/industries/LogisticsProductsSection";

export default function LogisticsPage() {
  return (
    <>
      <LogisticsOverview />

      <LogisticsChallenges />

      <WhyFortunaLogisticsSection />

      <LogisticsProductsSection />
    </>
  );
}