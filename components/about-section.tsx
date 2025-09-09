export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-black">
      {/* MODIFIED: Increased max-width for a larger section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-22 text-center text-white">About Me</h2>
        
        {/* MODIFIED: Removed the background, border, and padding classes for an open layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Video */}
          <div className="w-full h-auto rounded-lg overflow-hidden shadow-lg">
            <video
              src="/about-video.mp4"
              loop
              muted
              autoPlay
              playsInline
              controls={false}
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Right Column: Description */}
          <div>
            <p className="text-lg leading-relaxed text-gray-300 text-justify">
              Hi, I'm <span className="text-[#81E7AF]">Minula Vihanga</span>, a software developer and AI enthusiast with a passion for building clean, user-friendly applications. My background in the sciences gives me a unique and analytical approach to problem-solving, a skill I now apply to crafting digital experiences with React, Next.js, and React Native.

As a student at NSBM, I am constantly learning and am currently diving deeper into the world of AI. I'm actively seeking opportunities to contribute to impactful projects and continue to grow as a developer. I'd love to connect!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}