import MaxWithWrapper from "@/components/ui/wrappers/max-with-wrapper";
import {
  IntroductionSection,
  TechStackSection,
  ProjectDescriptionSection,
  SocialLinkSection,
} from "@/components/sections";

export default function Home() {
  return (
    <MaxWithWrapper className="flex flex-col justify-center items-center gap-16 my-12">
      <IntroductionSection />
      <TechStackSection />
      <ProjectDescriptionSection />
      <SocialLinkSection />
    </MaxWithWrapper>
  );
}
