"use client"
import { useState } from "react"

interface HeaderProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Header({ activeSection, scrollToSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* This is the part you change */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-3"
          >
            <div className="w-8 h-8 bg-[#81E7AF] rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">MV</span>
            </div>
            <span className="font-semibold text-white text-[20px]">Minula Vihanga</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[
              { name: "Home", id: "home" }, 
              { name: "About", id: "about" },
              { name: "Projects", id: "projects" },
              { name: "Skills", id: "skills" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-[#81E7AF] text-[15px] cursor-pointer ${
                  activeSection === item.id ? "text-[#81E7AF]" : "text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#81E7AF] transition-colors cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 py-4 rounded-b-[20px] bg-gradient-to-b from-black to-gray-900">
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Projects", id: "projects" },
              { name: "Skills", id: "skills" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id)
                  setIsMenuOpen(false) // Close menu on click
                }}
                className={`text-sm font-medium transition-colors hover:text-[#81E7AF] text-[15px] cursor-pointer ${
                  activeSection === item.id ? "text-[#81E7AF]" : "text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}