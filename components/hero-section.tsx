import { Download, Mail, MapPin } from "lucide-react"
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import Image from "next/image"
import ResumeModal from './ResumeModal';
import { useState, useRef, useEffect } from 'react';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const resumeUrl = "/Minula_Vihanga_Resume.pdf";

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Set the video to play at 75% speed. You can change this value.
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background Video */}
      

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30 -z-10" />

      {/* Main Content */}
      <div className="pt-20 lg:pt-9 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="rounded-[35px] p-12 w-full max-w-2xl">
          <div className="space-y-8">
            {/* Avatar and Info */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-32 h-32 bg-black rounded-full border-2 border-black overflow-hidden">
                <Image
                  src="/profile-pic.jpg"
                  alt="Minula Vihanga"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h2 className="text-4xl font-semibold text-white">Minula Vihanga</h2>
                <p className="text-gray-300 text-l mt-2">Software Developer | AI Enthusiast</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-gray-300 text-lg">
                <Mail className="w-6 h-6 text-[#81E7AF]" />
                <span>minulavihanga70@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300 text-lg">
                <MapPin className="w-6 h-6 text-[#81E7AF]" />
                <span>Horana, Sri Lanka</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-4">
              <a
                href="/Minula_Vihanga_Resume.pdf"
                download="Minula_Vihanga_Resume.pdf"
                className="w-full bg-[#81E7AF] text-black font-semibold py-5 px-8 rounded-[20px] hover:bg-white transition-colors flex items-center justify-center space-x-3 cursor-pointer"
              >
                <Download className="w-6 h-6" />
                <span className="text-lg">Download Resume</span>
              </a>
              <button
                onClick={openModal}
                className="w-full border-2 border-[#81E7AF] text-[#81E7AF] font-semibold py-5 px-8 rounded-[20px] hover:bg-white hover:border-0 hover:text-black transition-colors text-lg cursor-pointer hidden md:block"
              >
                <span>Preview Resume</span>
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-8 flex flex-col justify-center">
          <div className="text-5xl md:text-7xl font-bold text-center lg:text-left">
            <span className="text-white">Hi, I'm </span>
            <span className="text-[#81E7AF]">Minula</span>
          </div>

          <div className="text-lg ml-3 lg:ml-0">
            <p className="font-jetbrains mt-2 text-sm sm:text-base leading-6 bg-black/70 text-[#d4d4d4] p-4 rounded-lg shadow-lg overflow-x-auto">
              <span className="text-[#C586C0]">class</span> Minula <span className="text-[#C586C0]">extends</span> Developer {"{"} <br />
              &nbsp;&nbsp;<span className="text-[#C586C0]">constructor</span>() {"{"} <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">super</span>(); <br />
              &nbsp;&nbsp;&nbsp;&nbsp;this.stack = [<span className="text-[#CE9178]">"Full Stack"</span>, <span className="text-[#CE9178]">"Web Development"</span>, <span className="text-[#CE9178]">"Mobile App"</span>]; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;this.interests = [<span className="text-[#CE9178]">"AI"</span>, <span className="text-[#CE9178]">"Tech"</span>, <span className="text-[#CE9178]">"Problem Solving"</span>]; <br />
              &nbsp;&nbsp;{"}"} <br /><br />
              &nbsp;&nbsp;<span className="text-[#4EC9B0]">build</span>() {"{"} <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">return</span> <span className="text-[#CE9178]">"Crafting ideas into reality..."</span>; <br />
              &nbsp;&nbsp;{"}"} <br />
              {"}"} <br /><br />
              const me = <span className="text-[#C586C0]">new</span> Minula(); <br />
              me.build();
            </p>

            {/* Social Links */}
            <div className="flex space-x-6 mt-4 ml-3 cursor-pointer justify-center lg:justify-start">
              <a href="https://www.linkedin.com/in/minula-vihanga-9031b4293" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-115">
                <FaLinkedin className="w-10 h-10 text-gray-300" />
              </a>
              <a href="https://github.com/ADMV2001" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-115">
                <FaSquareGithub className="w-10 h-10 text-gray-300" />
              </a>
              <a href="https://www.instagram.com/minula_v" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-115">
                <FaSquareInstagram className="w-10 h-10 text-gray-300" />
              </a>
              <a href="https://www.facebook.com/share/19vF2UFrbY/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-115">
                <FaFacebookSquare className="w-10 h-10 text-gray-300" />
              </a>
              <a href="mailto:minulavihanga70@gmail.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-115">
                <ImMail className="w-[34px] h-10 text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Preview Modal */}
      <ResumeModal isOpen={isModalOpen} onClose={closeModal} resumeUrl={resumeUrl} />
    </section>
  )
}
