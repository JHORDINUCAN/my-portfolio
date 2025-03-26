import { ContactSection } from "@/components/contact-section"
import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { PortfolioSection } from "@/components/portfolio-section"
import { SkillsSection } from "@/components/skills-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer/>
    </main>
  )
}

