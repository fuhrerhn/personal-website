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
    <div className="mx-auto min-h-screen max-w-[1440px] px-6 py-12 md:px-12 md:py-16 lg:flex lg:items-start lg:gap-24 lg:px-24 lg:py-0">
      <Sidebar />

      <main id="content" className="pt-24 lg:flex-1 lg:py-24 xl:py-28">
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

        <footer className="type-body-sm max-w-md pb-16 text-fg-muted">
          Designed in Figma, built with Next.js and Tailwind CSS, deployed on Vercel. Set in
          Geist.
        </footer>
      </main>
    </div>
  );
}
