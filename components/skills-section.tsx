export default function SkillsSection() {
  const languages = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Python", level: 75 },
    { name: "Java", level: 70 },
    { name: "C++", level: 65 },
  ]

  const tools = [
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 70 },
    { name: "PostgreSQL", level: 75 },
    { name: "Docker", level: 65 },
    { name: "AWS", level: 60 },
  ]

  const education = [
    {
      institution: "University of Colombo",
      degree: "Bachelor of Science in Computer Science",
      years: "2020 - 2024",
      grade: "First Class Honours",
    },
    {
      institution: "Royal College Colombo",
      degree: "Advanced Level - Physical Science Stream",
      years: "2017 - 2019",
      grade: "3A passes",
    },
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto space-y-16">
        <h2 className="text-4xl font-bold text-center text-white">Skills & Education</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Languages */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-[#AAFF00]">Languages</h3>
            <div className="space-y-6">
              {languages.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-[#AAFF00]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-[#AAFF00] h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-[#AAFF00]">Tools & Technologies</h3>
            <div className="space-y-6">
              {tools.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-[#AAFF00]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-[#AAFF00] h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
          <h3 className="text-2xl font-bold mb-8 text-[#AAFF00] text-center">Education</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="border-l-4 border-[#AAFF00] pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-xl font-semibold text-white">{edu.institution}</h4>
                  <span className="text-[#AAFF00] font-medium">{edu.years}</span>
                </div>
                <p className="text-gray-300 mb-1">{edu.degree}</p>
                <p className="text-gray-400">{edu.grade}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
