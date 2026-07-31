import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSkills } from "@/components/AboutSkills";
import { ProjectsJourney } from "@/components/ProjectsJourney";
import { LearningPrinciples } from "@/components/LearningPrinciples";
import { GitHubContact } from "@/components/GitHubContact";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <div className="signal-marquee" aria-hidden="true"><div>BUILD WITH PURPOSE <span>✦</span> LEARN IN PUBLIC <span>✦</span> DESIGN FOR PEOPLE <span>✦</span> SHIP THOUGHTFULLY <span>✦</span> BUILD WITH PURPOSE <span>✦</span> LEARN IN PUBLIC <span>✦</span> DESIGN FOR PEOPLE <span>✦</span> SHIP THOUGHTFULLY <span>✦</span></div></div>
        <Reveal><AboutSkills /></Reveal>
        <Reveal><ProjectsJourney /></Reveal>
        <Reveal><LearningPrinciples /></Reveal>
        <Reveal><GitHubContact /></Reveal>
      </main>
      <Footer />
    </>
  );
}
