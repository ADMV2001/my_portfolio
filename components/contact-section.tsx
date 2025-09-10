import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react"
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{ message: string; success: boolean } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setSubmissionStatus({ message: data.message, success: true });
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    } catch (error: any) {
      setSubmissionStatus({ message: error.message, success: false });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-black relative overflow-hidden"
    >
      

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-[#81E7AF] to-white bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </div>

        <div className="relative">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#81E7AF]/5 via-transparent to-purple-500/5 rounded-2xl"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white mb-1">Get in Touch</h3>
                  <p className="text-base text-gray-300 leading-relaxed">
                    I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply chat
                    about technology and innovation.
                  </p>
                </div>

                <div className="space-y-4">
                  <a href="mailto:minulavihanga70@gmail.com" target="_blank" rel="noopener noreferrer" className="mb-4 block">
                  <div className="group flex items-center space-x-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-[#81E7AF]/20 to-[#81E7AF]/5 group-hover:from-[#81E7AF]/30 group-hover:to-[#81E7AF]/10 transition-all duration-300">
                      <Mail className="w-5 h-5 text-[#81E7AF]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">Email</p>
                      <span className="text-white text-sm font-medium">minulavihanga70@gmail.com</span>
                    </div>
                  </div>
                  </a>

                  <a href="https://github.com/ADMV2001" target="_blank" rel="noopener noreferrer" className="mb-4 block">
                    <div className="cursor-pointer group flex items-center space-x-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-[#81E7AF]/20 to-[#81E7AF]/5 group-hover:from-[#81E7AF]/30 group-hover:to-[#81E7AF]/10 transition-all duration-300">
                      <Github className="w-5 h-5 text-[#81E7AF]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">GitHub</p>
                      <span className="text-white text-sm font-medium">github.com/ADMV2001</span>
                    </div>
                  </div>
                  </a>
                  
                  <a href="https://www.linkedin.com/in/minula-vihanga-9031b4293" target="_blank" rel="noopener noreferrer" className="mb-4 block">
                    <div className="group flex items-center space-x-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-[#81E7AF]/20 to-[#81E7AF]/5 group-hover:from-[#81E7AF]/30 group-hover:to-[#81E7AF]/10 transition-all duration-300">
                      <Linkedin className="w-5 h-5 text-[#81E7AF]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">LinkedIn</p>
                      <span className="text-white text-sm font-medium">linkedin.com/in/minula-vihanga</span>
                    </div>
                  </div>
                  </a>
                  

                  <div className="group flex items-center space-x-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-[#81E7AF]/20 to-[#81E7AF]/5 group-hover:from-[#81E7AF]/30 group-hover:to-[#81E7AF]/10 transition-all duration-300">
                      <MapPin className="w-5 h-5 text-[#81E7AF]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">Location</p>
                      <span className="text-white text-sm font-medium">Horana, Sri Lanka</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-[#81E7AF]/10 border border-green-500/20">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-semibold">Available for Projects</span>
                  </div>
                  <p className="text-gray-300 text-xs">
                    Currently accepting new freelance projects and collaboration opportunities.
                  </p>
                </div>
              </div>

                            {/* Right Column: Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4">Send a Message</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#81E7AF]/50 text-white placeholder-gray-400"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#81E7AF]/50 text-white placeholder-gray-400"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#81E7AF]/50 text-white placeholder-gray-400"
                  />
                  <textarea
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#81E7AF]/50 resize-none text-white placeholder-gray-400"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full bg-gradient-to-r from-[#81E7AF] to-[#99EE00] text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                {/* Submission Status Message */}
                {submissionStatus && (
                  <div className={`text-center mt-4 p-2 rounded-lg text-sm ${submissionStatus.success ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                    {submissionStatus.message}
                  </div>
                )}
              </form>

            </div>
          </div>

          <div className="absolute -top-5 -left-5 w-10 h-10 bg-gradient-to-br from-[#81E7AF]/30 to-transparent rounded-full blur-sm"></div>
          <div className="absolute -bottom-5 -right-5 w-12 h-12 bg-gradient-to-tl from-purple-500/30 to-transparent rounded-full blur-sm"></div>
        </div>
      </div>
    </section>
  )
}
