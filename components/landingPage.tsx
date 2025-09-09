"use client"

import { useState, useEffect } from "react"
import { Terminal, Cpu, Layers } from 'lucide-react'

interface landingPageProps {
  onLoadingComplete: () => void;
}

export default function LoadingPage({ onLoadingComplete }: landingPageProps) {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [loadingTextIndex, setLoadingTextIndex] = useState(0)
  const [matrixChars, setMatrixChars] = useState<Array<{ char: string; x: number; y: number; opacity: number }>>([])

  const loadingMessages = [
    "Initializing dark mode...",
    "Loading neural networks...",
    "Compiling shadows...",
    "Brewing midnight code...",
    "Assembling dark matter...",
    "Synchronizing pixels...",
    "Almost in the zone...",
  ]

  useEffect(() => {
    const textInterval = setInterval(() => {
      setLoadingTextIndex((prev) => (prev + 1) % loadingMessages.length)
    }, 1000)

    const matrixInterval = setInterval(() => {
      setMatrixChars((prev) => {
        const newChars = [...prev]
        if (Math.random() > 0.7) {
          newChars.push({
            char: String.fromCharCode(0x30a0 + Math.random() * 96),
            x: Math.random() * window.innerWidth,
            y: -20,
            opacity: 1,
          })
        }
        return newChars
          .map((char) => ({
            ...char,
            y: char.y + 2,
            opacity: char.opacity - 0.02,
          }))
          .filter((char) => char.y < window.innerHeight + 20 && char.opacity > 0)
          .slice(-50)
      })
    }, 100)

    const loadingInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(loadingInterval)
          clearInterval(textInterval)
          clearInterval(matrixInterval)
          // Add your navigation logic here
          // Example: router.push('/portfolio') or window.location.href = '/portfolio'
          onLoadingComplete();
          return 100
        }
        return prev + Math.random() * 6 + 1.5
      })
    }, 400)

    return () => {
      clearInterval(loadingInterval)
      clearInterval(textInterval)
      clearInterval(matrixInterval)
    }
  }, [onLoadingComplete, loadingMessages.length])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {matrixChars.map((char, index) => (
          <div
            key={index}
            className="absolute font-mono text-sm"
            style={{
              left: char.x,
              top: char.y,
              opacity: char.opacity,
              color: "#81E7AF",
            }}
          >
            {char.char}
          </div>
        ))}
      </div>

      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#81E7AF]/5 via-black to-[#81E7AF]/3 animate-pulse" />
        <div
          className="absolute inset-0 bg-gradient-to-tl from-[#81E7AF]/2 via-transparent to-[#81E7AF]/4 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#81E7AF]/10 to-[#81E7AF]/8 rounded-full blur-3xl animate-float shadow-lg shadow-[#81E7AF]/20" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#81E7AF]/6 to-purple-400/4 rounded-full blur-3xl animate-float shadow-lg shadow-[#81E7AF]/15"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#81E7AF]/12 to-[#81E7AF]/8 rounded-full blur-3xl animate-float shadow-lg shadow-[#81E7AF]/25"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center">
        {/* Spinner */}
        <div className="mb-12">
          <div className="w-40 h-40 mx-auto mb-6 relative">
            <div
              className="absolute inset-0 border-2 rounded-full animate-spin shadow-lg"
              style={{
                borderColor: "#81E7AF",
                opacity: 0.6,
                animationDuration: "4s",
                boxShadow: `0 0 20px #81E7AF40`,
              }}
            />
            <div
              className="absolute inset-2 border-2 rounded-full animate-spin shadow-lg"
              style={{
                borderColor: "#81E7AF",
                opacity: 0.8,
                animationDirection: "reverse",
                animationDuration: "3s",
                boxShadow: `0 0 15px #81E7AF30`,
              }}
            />
            <div
              className="absolute inset-4 border-2 rounded-full animate-spin shadow-lg"
              style={{
                borderColor: "#81E7AF",
                opacity: 0.9,
                animationDuration: "2s",
                boxShadow: `0 0 10px #81E7AF50`,
              }}
            />
            <div
              className="absolute inset-6 border rounded-full animate-spin shadow-lg"
              style={{
                borderColor: "rgba(147, 51, 234, 0.4)",
                animationDirection: "reverse",
                animationDuration: "1.5s",
                boxShadow: `0 0 8px rgba(147, 51, 234, 0.3)`,
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <Terminal className="w-8 h-8 animate-pulse absolute" style={{ color: "#81E7AF" }} />
                <Cpu className="w-6 h-6 animate-pulse absolute top-2 left-2" style={{ color: "#81E7AF" }} />
                <Layers
                  className="w-4 h-4 animate-pulse absolute top-4 left-4"
                  style={{ color: "rgba(147, 51, 234, 0.8)" }}
                />
                <div
                  className="absolute inset-0 w-8 h-8 rounded-lg blur-md animate-pulse"
                  style={{ backgroundColor: "#81E7AF20" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Title and Loading Text */}
        <div className="mb-8 h-20 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-3 drop-shadow-lg animate-pulse" style={{ color: "#81E7AF" }}>
            PORTFOLIO.EXE
          </h2>
          <p
            className="text-lg font-mono font-medium transition-all duration-500 ease-in-out transform tracking-wider"
            style={{ color: "#81E7AFcc" }}
          >
            {loadingMessages[loadingTextIndex]}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-96 mx-auto mb-8">
          <div className="relative">
            <div
              className="h-3 bg-gray-900/50 rounded-full overflow-hidden backdrop-blur-sm border"
              style={{ borderColor: "#81E7AF40" }}
            >
              <div
                className="h-full rounded-full transition-all duration-500 ease-out relative shadow-lg"
                style={{
                  width: `${loadingProgress}%`,
                  background: `linear-gradient(to right, #81E7AF, #81E7AFdd, rgba(147, 51, 234, 0.8))`,
                  boxShadow: `0 0 15px #81E7AF50`,
                }}
              >
                <div
                  className="absolute inset-0 rounded-full blur-sm opacity-60 animate-pulse"
                  style={{ background: `linear-gradient(to right, #81E7AF80, #81E7AF60, rgba(147, 51, 234, 0.5))` }}
                />
                <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-r from-transparent to-white/30 rounded-full animate-pulse" />
              </div>
            </div>
            <div
              className="absolute top-0 h-3 rounded-full blur-lg transition-all duration-500 ease-out"
              style={{
                width: `${loadingProgress}%`,
                background: `linear-gradient(to right, #81E7AF80, #81E7AF60, rgba(147, 51, 234, 0.4))`,
              }}
            />
          </div>
        </div>

        {/* Percentage */}
        <div className="text-2xl font-mono font-bold drop-shadow-lg animate-pulse" style={{ color: "#81E7AF" }}>
          {Math.round(loadingProgress)}%
        </div>

        {/* System Status */}
        <div className="mt-8 flex justify-center space-x-6 text-xs font-mono" style={{ color: "#81E7AF99" }}>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#81E7AF" }} />
            <span>SYSTEM ONLINE</span>
          </div>
          <div className="flex items-center space-x-1">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "#81E7AF", animationDelay: "0.5s" }}
            />
            <span>NEURAL NET ACTIVE</span>
          </div>
          <div className="flex items-center space-x-1">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "rgba(147, 51, 234, 0.8)", animationDelay: "1s" }}
            />
            <span>CREATIVITY MODULE LOADED</span>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div
        className="absolute top-1/6 left-1/5 w-4 h-4 rounded-full animate-float blur-sm shadow-lg"
        style={{ backgroundColor: "#81E7AF66", boxShadow: `0 0 10px #81E7AF50` }}
      />
      <div
        className="absolute top-1/4 right-1/5 w-3 h-3 rounded-full animate-float blur-sm shadow-lg"
        style={{ backgroundColor: "#81E7AF80", animationDelay: "1s", boxShadow: `0 0 8px #81E7AF40` }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-5 h-5 rounded-full animate-float blur-sm shadow-lg"
        style={{
          backgroundColor: "rgba(147, 51, 234, 0.5)",
          animationDelay: "2s",
          boxShadow: `0 0 12px rgba(147, 51, 234, 0.4)`,
        }}
      />
      <div
        className="absolute bottom-1/5 right-1/4 w-3.5 h-3.5 rounded-full animate-float blur-sm shadow-lg"
        style={{ backgroundColor: "#81E7AF70", animationDelay: "0.5s", boxShadow: `0 0 9px #81E7AF45` }}
      />

      {/* Scanning Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent to-transparent animate-scan shadow-lg"
          style={{
            background: `linear-gradient(to right, transparent, #81E7AF, transparent)`,
            boxShadow: `0 0 10px #81E7AF80`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent to-transparent animate-scan shadow-lg"
          style={{
            animationDelay: "1s",
            animationDirection: "reverse",
            background: `linear-gradient(to right, transparent, #81E7AF, transparent)`,
            boxShadow: `0 0 8px #81E7AF60`,
          }}
        />
      </div>

      {/* Corner Brackets */}
      <div className="absolute top-8 left-8 font-mono text-2xl" style={{ color: "#81E7AF50" }}>
        ┌
      </div>
      <div className="absolute top-8 right-8 font-mono text-2xl" style={{ color: "#81E7AF50" }}>
        ┐
      </div>
      <div className="absolute bottom-8 left-8 font-mono text-2xl" style={{ color: "#81E7AF50" }}>
        └
      </div>
      <div className="absolute bottom-8 right-8 font-mono text-2xl" style={{ color: "#81E7AF50" }}>
        ┘
      </div>
    </div>
  )
}