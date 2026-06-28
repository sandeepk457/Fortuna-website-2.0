import WarehouseOverview from "@/components/industries/WarehousingOverview";
import WarehouseChallenges from "@/components/industries/WarehouseChallenges";
import WhyFortunaWarehouseSection from "@/components/industries/WhyFortunaWarehouseSection";
import WarehouseProductsSection from "@/components/industries/WarehouseProductsSection";

export default function WarehousingPage() {
  return (
    <>
      <WarehouseOverview />
      <WarehouseChallenges />
      <WhyFortunaWarehouseSection />
      <WarehouseProductsSection />
    </>
  );
}