import MaxWithWrapper from "@/components/ui/wrappers/max-with-wrapper";
import {
  IntroductionSection,
  TechStackSection,
  CraftPromotionSection,
  ProjectDescriptionSection,
  SocialLinkSection,
} from "@/components/sections";

export default function Home() {
  return (
    <MaxWithWrapper className="flex flex-col justify-center items-center gap-16 my-12">
      <IntroductionSection />
      <TechStackSection />
      <CraftPromotionSection />
      <ProjectDescriptionSection />
      <SocialLinkSection />
    </MaxWithWrapper>
  );
}
