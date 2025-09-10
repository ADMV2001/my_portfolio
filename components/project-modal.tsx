"use client"

import { X, Github, ExternalLink } from "lucide-react"
import { useEffect, Fragment } from "react" // Import Fragment
import { Dialog, Transition } from '@headlessui/react' // Import Dialog and Transition
import Image from "next/image" // Import Next.js Image component

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
  // useEffect for body overflow is no longer strictly necessary with Headless UI's Dialog,
  // but keeping it here doesn't hurt and offers a fallback.
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

  if (!project) return null // Only render if project data is available

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Backdrop (liquid glass effect) */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl max-h-[90vh] overflow-y-auto transform rounded-2xl 
                                       bg-black/10 backdrop-blur-xl border border-gray-700 
                                       shadow-2xl shadow-black/70 p-0 text-left align-middle transition-all">
                {/* Modal Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-700">
                  <Dialog.Title as="h2" className="text-3xl font-semibold text-[#81E7AF]">
                    {project.title}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 space-y-6">
                  {/* Role */}
                  <div>
                    <h3 className="text-md  text-[#81E7AF] mb-1">My Role: <span className="text-gray-300">{project.role}</span></h3>
                  </div>

                  {/* Project Image (Optimized with Next.js Image) */}
                  <div className="relative w-full h-64 rounded-lg overflow-hidden border border-gray-700">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      layout="fill"
                      objectFit="co" // Use "contain" if you prefer the image not to be cropped
                      quality={80}
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-md  text-[#81E7AF] mb-2">Description</h3>
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-3 bg-gray-700/50 text-white font-semibold py-3 px-6 rounded-lg 
                                 hover:bg-gray-600/70 hover:text-[#81E7AF] transition-all duration-300 border border-gray-600"
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
                        className="inline-flex items-center space-x-2 bg-[#81E7AF]/80 text-black font-semibold py-3 px-6 rounded-lg 
                                   hover:bg-[#81E7AF] transition-colors duration-300 shadow-md"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-md text-[#81E7AF] mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <h3 className="text-md text-[#81E7AF] mb-3">Tools Used</h3>
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}