import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSkills } from "@/components/AboutSkills";
import { ProjectsJourney } from "@/components/ProjectsJourney";
import { LearningPrinciples } from "@/components/LearningPrinciples";
import { GitHubContact } from "@/components/GitHubContact";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <AboutSkills />
        <ProjectsJourney />
        <LearningPrinciples />
        <GitHubContact />
      </main>
      <Footer />
    </>
  );
}
