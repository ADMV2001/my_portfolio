import { Mail, Github, Linkedin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Contact</h2>
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Get in touch</h3>
              <p className="text-gray-400">I'm always open to discussing new opportunities and interesting projects.</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#AAFF00]" />
                  <span className="text-gray-300">minula@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="w-5 h-5 text-[#AAFF00]" />
                  <span className="text-gray-300">github.com/minula</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-[#AAFF00]" />
                  <span className="text-gray-300">linkedin.com/in/minula</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AAFF00] text-white placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AAFF00] text-white placeholder-gray-400"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AAFF00] resize-none text-white placeholder-gray-400"
              />
              <button className="w-full bg-[#AAFF00] text-black font-semibold py-3 px-6 rounded-lg hover:bg-[#99EE00] transition-colors">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
