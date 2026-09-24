import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Disciplines } from "@/components/disciplines"
import { FeaturedProjects } from "@/components/featured-projects"
import { SkillsSection } from "@/components/skills-section"
import { AboutSection } from "@/components/about-section"
import { ContactFooter } from "@/components/contact-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Disciplines />
        <FeaturedProjects />
        <SkillsSection />
        <AboutSection />
        <ContactFooter />
      </main>
    </>
  )
}
