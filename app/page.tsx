import { Copyright, SiteCredits } from "@/components/footer";
import { About } from "@/components/sections/about";
import { Achievements } from "@/components/sections/achievements";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Section } from "@/components/sections/section";
import { Skills } from "@/components/sections/skills";
import { Sidebar } from "@/components/sidebar/sidebar";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1440px] px-6 md:px-12 xl:px-24">
      <div className="min-h-screen py-12 md:py-16 lg:flex lg:items-start lg:gap-12 lg:py-0 xl:gap-24">
        <Sidebar />

        <main id="content" className="pt-24 lg:flex-1 xl:pt-28">
          <Section id="about">
            <About />
          </Section>
          <Section id="education">
            <Education />
          </Section>
          <Section id="experience">
            <Experience />
          </Section>
          <Section id="projects">
            <Projects />
          </Section>
          <Section id="achievements">
            <Achievements />
          </Section>
          <Section id="skills">
            <Skills />
          </Section>

          <SiteCredits />
        </main>
      </div>

      <Copyright />
    </div>
  );
}
