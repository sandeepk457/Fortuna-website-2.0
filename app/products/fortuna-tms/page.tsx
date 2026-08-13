import HeroSection from "./components/HeroSection";
import PlatformSection from "./components/PlatformSection";
import ModulesSection from "./components/ModulesSection";
import { ArchitectureSection } from "./components/ArchitectureSection";
import WorkflowSection from "./components/WorkflowSection";
import TechnologySection from "./components/TechnologySection";
import OperaionalBenefits from "./components/OperationalBenefits";
import IndustriesSection from "./components/IndustriesSection";
import SecuritySection from "./components/SecuritySection";
import FAQSection from "./components/FAQSection";
import FinalCTASection from "./components/FinalCTASection";

export default function FortunaTMSPage() {
  return (
    <>
      <HeroSection />
      <PlatformSection />
      <ModulesSection />
      <ArchitectureSection />
      <WorkflowSection />
      <TechnologySection />
      <OperaionalBenefits />
      <IndustriesSection />
      <SecuritySection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}