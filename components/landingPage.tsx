"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface landingPageProps {
  onLoadingComplete: () => void;
}

export default function LoadingPage({ onLoadingComplete }: landingPageProps) {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [loadingTextIndex, setLoadingTextIndex] = useState(0)

  const loadingMessages = [
    "Booting portfolio.exe...",
    "Calibrating creativity...",
    "Deploying ideas...",
    "Finalizing setup...",
  ]

  useEffect(() => {
    const textInterval = setInterval(() => {
      setLoadingTextIndex((prev) => (prev + 1) % loadingMessages.length)
    }, 800)

    // faster load (about 4–5 seconds max)
    const loadingInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(loadingInterval)
          clearInterval(textInterval)
          onLoadingComplete()
          return 100
        }
        return prev + Math.random() * 15 + 8
      })
    }, 300)

    return () => {
      clearInterval(loadingInterval)
      clearInterval(textInterval)
    }
  }, [onLoadingComplete, loadingMessages.length])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#81E7AF]/10 via-black to-[#81E7AF]/5 animate-pulse" />
      </div>

      {/* Profile Image with fancy animated border */}
      <div className="relative z-10 text-center">
        <div className="mb-10">
          <div className="relative w-44 h-44 mx-auto">
            {/* glowing animated border */}
            <div className="absolute inset-0 rounded-full border-4 border-[#81E7AF] animate-spin-slow shadow-[0_0_30px_#81E7AF66]" />
            <div className="absolute inset-2 rounded-full border-2 border-gray-800 animate-pulse" />
            <Image
              src="/minula.png"
              alt="Minula Vihanga"
              width={176}
              height={176}
              className="rounded-full object-cover relative z-10"
            />
          </div>
        </div>

        {/* Title and changing text */}
        <h2 className="text-3xl font-bold mb-3 drop-shadow-lg text-[#81E7AF] tracking-wide">
          PORTFOLIO.EXE
        </h2>
        <p className="text-lg font-mono text-[#81E7AFcc] transition-all duration-500 ease-in-out">
          {loadingMessages[loadingTextIndex]}
        </p>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mt-8 mb-4">
          <div className="h-3 bg-gray-900/70 rounded-full overflow-hidden border border-[#81E7AF40]">
            <div
              className="h-full rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${loadingProgress}%`,
                background: `linear-gradient(to right, #81E7AF, #66c29b)`,
                boxShadow: `0 0 12px #81E7AF90`,
              }}
            />
          </div>
        </div>

        {/* Percentage */}
        <div className="text-xl font-mono font-bold text-[#81E7AF]">
          {Math.round(loadingProgress)}%
        </div>
      </div>
    </div>
  )
}


