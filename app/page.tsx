import AboutSection from "@/components/AboutSection";
import BlogsSection from "@/components/BlogsSection";
import BottomBar from "@/components/BottomBar";
import ExtrasSection from "@/components/ExtrasSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Sidebar from "@/components/Sidebar";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";

export default function Home() {
  return (
    <div className="relative z-10 min-h-screen">
      <div className="max-w-[1360px] mx-auto lg:grid lg:grid-cols-[260px_1fr] lg:px-8">
        <Sidebar />

        <main className="max-w-3xl mx-auto lg:max-w-none lg:mx-0 px-5 md:px-10 lg:pl-12 lg:pr-4 pt-12 sm:pt-14 pb-28 lg:py-12">
          <BottomBar />

          <div className="flex flex-col gap-24">
            <header id="overview" className="scroll-mt-36 lg:scroll-mt-20">
              <HeroSection />
            </header>

            <section id="about" className="scroll-mt-36 lg:scroll-mt-20">
              <AboutSection />
            </section>

            <section id="skills" className="scroll-mt-36 lg:scroll-mt-20">
              <SkillsSection />
            </section>

            <section id="experience" className="scroll-mt-36 lg:scroll-mt-20">
              <ExperienceSection />
            </section>

            <section id="projects" className="scroll-mt-36 lg:scroll-mt-20">
              <ProjectsSection />
            </section>

            <section id="blogs" className="scroll-mt-36 lg:scroll-mt-20">
              <BlogsSection />
            </section>

            <section id="extras" className="scroll-mt-36 lg:scroll-mt-20">
              <ExtrasSection />
            </section>

            {/* Technical Brutalist Footer */}
            <footer className="border-t border-white/15 pt-8 pb-4 flex flex-col md:flex-row items-center md:justify-between text-center md:text-left gap-4">
              <span className="tech-label text-[#85858D]">
                © 2026 AYUSH OSWAL // PUNE, INDIA
              </span>
              <a
                href="mailto:ayushoswal2003@gmail.com"
                className="tech-label text-brand hover:text-[#F2F1EE] transition-colors duration-200"
              >
                AYUSHOSWAL2003@GMAIL.COM ↗
              </a>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
