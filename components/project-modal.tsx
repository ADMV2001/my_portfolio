"use client"

import { X, Github, ExternalLink } from "lucide-react"
import { useEffect } from "react"

interface Project {
  title: string
  role: string
  image: string
  description: string
  githubLink: string
  liveLink?: string   
  technologies: string[]
  tools: string[]
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen || !project) return null 

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-t from-black to-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-3xl font-bold text-[#AAFF00]">{project.title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors p-2">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Role */}
          <div>
            <h3 className="text-lg font-semibold text-[#AAFF00] mb-2">My Role : <span className="text-gray-300">{project.role}</span></h3>
            
          </div>

          {/* Project Image */}
          <div>
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-64 object-contain rounded-lg border border-gray-700"
            />
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-[#AAFF00] mb-2">Description</h3>
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
          </div>

          {/* GitHub Link */}
          <div className="flex flex-wrap gap-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gray-300 white text-black font-semibold py-3 px-6 rounded-lg hover:bg-white transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#AAFF00] text-black font-semibold py-3 px-6 rounded-lg hover:bg-[#caff5f] transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-[#AAFF00] mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-semibold text-[#AAFF00] mb-3">Tools Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
