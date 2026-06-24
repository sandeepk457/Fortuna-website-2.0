import WhoWeAreSection from "@/components/about/WhoWeAreSection";
import MissionVisionValuesSection from "@/components/about/MissionVisionValuesSection";
import SupplyChainNetworkSection from "@/components/about/SupplyChainNetworkSection";
import GlobalVisionSection from "@/components/about/GlobalVisionSection";
import InnovationFrameworkSection from "@/components/about/InnovationFrameworkSection";

export default function AboutPage() {
  return (
    <>
      <WhoWeAreSection />
      <MissionVisionValuesSection />
        <SupplyChainNetworkSection />
        <GlobalVisionSection />
        <InnovationFrameworkSection />
    </>
  );
}