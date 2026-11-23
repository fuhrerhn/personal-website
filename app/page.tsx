import type { Metadata } from "next";
import { Copyright } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { About } from "@/components/sections/about";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Section } from "@/components/sections/section";
import { Skills } from "@/components/sections/skills";
import { Sidebar } from "@/components/sidebar/sidebar";
import { ThemeToggle } from "@/components/sidebar/theme-toggle";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="mx-auto max-w-[1440px] px-6 md:px-12 xl:px-24">
      <JsonLd />

      {/* small screens: theme toggle stays in view while scrolling */}
      <div className="fixed right-4 bottom-4 z-40 lg:hidden">
        <ThemeToggle className="rounded-full border border-line bg-surface/90 p-3 shadow-md backdrop-blur" />
      </div>

      <div className="min-h-screen py-12 md:py-16 lg:flex lg:items-start lg:gap-12 lg:py-0 xl:gap-24">
        <Sidebar />

        {/* same bottom padding as the sidebar, so the form lines up with the social icons */}
        <main id="content" className="pt-24 pb-16 lg:flex-1 xl:pt-28 xl:pb-20">
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
          <Section id="contact">
            <Contact />
          </Section>
        </main>
      </div>

      <Copyright />
    </div>
  );
}
