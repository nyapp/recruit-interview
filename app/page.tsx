import { FeedbackGuideSection } from "@/components/FeedbackGuideSection";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PracticeRolesSection } from "@/components/PracticeRolesSection";
import { TipsSection } from "@/components/TipsSection";

export default function Home() {
  return (
    <div className="min-h-full bg-background">
      <main className="mx-auto grid w-full max-w-2xl gap-4 px-4 py-6 pb-10 sm:px-6 sm:py-8">
        <HeroSection />
        <HowItWorksSection />
        <FeedbackGuideSection />
        <PracticeRolesSection />
        <TipsSection />
      </main>
    </div>
  );
}
