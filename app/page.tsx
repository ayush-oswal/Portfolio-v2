import AboutSection from "@/components/AboutSection";
import BottomBar from "@/components/BottomBar";
import ExtrasSection from "@/components/ExtrasSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-[20px] md:px-0 mb-[150px] relative z-10">
      <div className="flex flex-col gap-20 mt-16">
        <BottomBar />
<header>
          <HeroSection />
        </header>
        <section>
          <AboutSection />
        </section>
        <section>
          <SkillsSection />
        </section>
        <section>
          <ExperienceSection />
        </section>
        <section>
          <ProjectsSection />
        </section>
        <section>
          <ExtrasSection />
        </section>
      </div>
    </main>
  );
}
