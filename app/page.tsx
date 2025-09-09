"use client"

import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"

import Image from "next/image";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 64 // Height of fixed header
      const elementPosition = element.offsetTop - headerHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen text-white">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Minula Vihanaga.</p>
        </div>
      </footer>

      {/* Fixed Chatbot Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="relative w-18 h-18 rounded-full backdrop-blur-lg text-black cursor-pointer hover:scale-110 shadow-2xl transition-all duration-300 flex items-center justify-center p-2">
          <Image
            src="/bot.png"
            alt="Chatbot Icon"
            layout="fill" // Makes the image fill the parent
            objectFit="contain" // Ensures the whole image is visible
            className="rounded-full p-2" // Add padding to keep the image slightly smaller than the button
          />
        </button>
      </div>
    </div>
  )
}
