"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"
import ProjectModal from "./project-modal"

interface Project {
  title: string
  role: string
  image: string
  description: string
  githubLink: string
  liveLink?: string   
  technologies: string[]
  tools: string[]
  shortDescription: string
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects: Project[] = [
    {
      title: "ZenPath – Online Mental Health Support System",
      role: "Team Leader",
      image: "/zenpath.jpg",
      shortDescription: "MERN-stack solution for stressed and anxious individuals to collaborate and get support from the qualified professionals.",
      description:
        "A full-stack platform designed to connect patients, therapists, and admins in a secure and seamless environment. Key features include role-based dashboards, therapist verification, patient onboarding, session scheduling, in-app chat, and real-time video consultations powered by Jitsi Meet API. The system also integrates a Zen Wallet with Stripe payments, enabling patients to purchase and redeem Zen Coins for therapy sessions.",
      githubLink: "https://github.com/ADMV2001/Zenpath-Frontend.git",
      technologies: ["React", "Node.js","Express.js", "TailwindCSS", "MongoDB", "Stripe API", "Jitsi API"],
      tools: ["VS Code", "Postman", "MongoDB Atlas", "Git", "GitHub"],
    },
    {
      title: "Realtime Asset Tracker - IoT Solution",
      role: "Team Leader",
      image: "/iot.jpg",
      shortDescription: " IoT solution for real-time asset tracking and management with user dashboard to track and keep information.",
      description:
        "We have developed oursecond-year IoT project, a 'Real-Time Asset Tracking Device with IoT integration' and user dashboard to interact. An ESP32 gathers DHT22 temperature/humidity, NEO-6M GPS, and MPU6050 motion data and sends it via SIM800L GPRS to Firebase. A Node.js/Express backend with Socket.IO streams live updates to a React/Tailwind frontend, which displays an animated vehicle icon on a React-Leaflet map, dynamic sensor charts, accident alerts, and a 100-entry history with user-set thresholds.",
      githubLink: "https://github.com/ADMV2001/IoT-Asset-Tracker-Frontend.git",
      technologies: ["React", "Leaflet Map", "TailwindCSS", "Socket.io", "Node.js", "Express.js", "Firebase Realtime Database"],
      tools: ["VS Code", "Arduino IDE", "Firebase Admin SDK", "Git", "GitHub"],
    },
    {
      title: "StudyMate – AI Study Companion",
      role: "Personal Project",
      image: "/studymate.jpg",
      shortDescription: "AI powered study companion for student to summarize, explain and generate MCQs and download them in the form of PDF.",
      description:
        "An intelligent study assistant built with Next.js and Tailwind CSS, designed to make revision faster and smarter. StudyMate allows students to generate quizzes from PDFs, create AI-powered study notes and explanations, and download/share results as TXT or standards-compliant PDFs. The platform is fully responsive, optimized for both desktop and mobile, and features a clean, modern UI. Powered by Google Gemini’s multimodal API, StudyMate transforms any study material into actionable, personalized learning tools.",
      githubLink: "https://github.com/ADMV2001/StudyMate.git",
      liveLink: "https://studymate-five.vercel.app/",
      technologies: ["Next.js", "TailwindCSS", "Gemini API", "jsPDF"],
      tools: ["VS Code"],
    },
    {
      title: "Feedback and Sentiment Analysis - Multi AI Agent System",
      role: "Personal Project",
      image: "/preview/project4.png",
      shortDescription: "Automated Restaurant Feedback Multi-Agent System – An AI-powered solution that analyzes customer reviews and generates personalized replies while visualizing sentiment trends. Built with LangChain, LangGraph, and Groq API for hands-on multi-agent experience.",
      description:
        "This project explores the power of multi-agent AI systems by combining language model intelligence with data-driven insights. The Feedback Agent analyzes customer reviews from a Kaggle dataset and generates polite, personalized responses, while the Visualization Agent plots sentiment patterns over time to help restaurants understand customer feedback. Built using Python, LangChain, LangGraph, Groq API, Pandas, and Seaborn, this system gave me practical experience in designing end-to-end AI workflows for real-world applications.",
      githubLink: "https://github.com/minula/weather-dashboard",
      technologies: ["Python", "LangChain", "LangGraph", "Groq", "Seaborn"],
      tools: ["VS Code", "Kaggle"],
    },
  ]

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <>
      <section id="projects" className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => handleProjectClick(project)}
                className="relative group cursor-pointer rounded-2xl bg-gradient-to-t from-black to-gray-900 border-gray-400 
                          backdrop-blur-md p-6 shadow-lg transition-all duration-300 
                           hover:border-[#AAFF00]/50"
              >
                {/* Title + Icon */}
                <div className="flex w-[300px] items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-[#AAFF00]">
                    {project.title}
                  </h3>
                  <ExternalLink className="absolute top-3 right-3 w-5 h-5 text-gray-400 group-hover:text-[#AAFF00] transition-colors" />
                </div>
                

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full 
                                bg-[#AAFF00] text-black border border-[#AAFF00]/20
                                group-hover:bg-gray-200 group-hover:text-black 
                                transition-colors"
                    >
                      {tech}
                    </span>
                    
                  ))}
                </div>
                
                
              </div>
              
            ))}
          </div>

        </div>
      </section>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
