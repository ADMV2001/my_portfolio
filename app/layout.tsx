import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-inter" });
const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"], variable: "--font-poppins" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Minula Vihanga | Software Developer Portfolio",
  description: "The personal portfolio of Minula Vihanga, a software developer and AI enthusiast specializing in React, Next.js, and modern web technologies. View my projects and skills.",
  keywords: ["Minula Vihanga", "Software Developer", "Portfolio", "React Developer", "Next.js", "AI Enthusiast", "Sri Lanka"],
  authors: [{ name: "Minula Vihanga" }],
  verification: {
    google: 'GLVonuKIKsAPNcGSkFuBMmyzadWI4wInK8fxCIZoxkQ'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="antialiased font-inter  relative">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/back.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/75 -z-10" />
        {children}
      </body>
    </html>
  )
}
