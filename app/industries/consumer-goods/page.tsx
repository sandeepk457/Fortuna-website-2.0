import ConsumerGoodsOverview from "@/components/industries/ConsumerGoodsOverview";
import ConsumerGoodsChallenges from "@/components/industries/ConsumerGoodsChallenges";
import WhyFortunaConsumerGoodsSection from "@/components/industries/WhyFortunaConsumerGoodsSection";
import ConsumerGoodsProductsSection from "@/components/industries/ConsumerGoodsProductsSection";

export default function ConsumerGoodsPage() {
  return (
    <>
      <ConsumerGoodsOverview />
      <ConsumerGoodsChallenges />
      <WhyFortunaConsumerGoodsSection />
      <ConsumerGoodsProductsSection />
    </>
  );
}