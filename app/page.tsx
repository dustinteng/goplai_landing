import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import SolutionSection from "@/components/solution-section";
import HowItWorksSection from "@/components/how-it-works-section";
import SignUpSection from "@/components/sign-up-section";
import SocialProofSection from "@/components/social-proof-section";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GOPLAI - AI-Powered Sports Community",
  description:
    "GOPLAI is the first AI-powered sports community for amateur athletes. Track your performance, prove your skill, and relive every game with AI-powered highlights.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <SignUpSection />
      <SocialProofSection />
      <Footer />
    </main>
  );
}
