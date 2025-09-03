import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus,
  SiReact, SiNodedotjs, SiMongodb, SiPostgresql, SiDocker, SiNextdotjs
} from "react-icons/si";

export default function SkillsSection() {
  const languages = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <SiPython /> },
    { name: "C++", icon: <SiCplusplus /> },
  ];

  const tools = [
    { name: "React", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Docker", icon: <SiDocker /> },
  ];
  
  const education = [
    {
      institution: "NSBM Green University",
      degree: "BSc (Hons) in Software Engineering",
      years: "2023 - Present",
      grade: "Following",
    },
    {
      institution: "President's College, Horana",
      degree: "Advanced Level - Physical Science Stream",
      years: "2018 - 2020",
      grade: "G.C.E. Advanced Level",
    },
  ];

  // A helper component for each skill card
  const SkillCard = ({ icon, name }) => (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-xl transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
      <div className="text-xl text-gray-300 mb-2">{icon}</div>
      <span className="text-white text-[15px] text-center">{name}</span>
    </div>
  );

  return (
    <section id="skills" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto space-y-16">
        <h2 className="text-4xl font-bold text-center text-white">Skills & Education</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Languages */}
          <div className="bg-gradient-to-t from-black to-gray-900 rounded-[25px] p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-8 text-[#AAFF00] text-center">Languages</h3>
            {/* This is the new responsive grid for icons */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
              {languages.map((skill, index) => (
                <SkillCard key={index} icon={skill.icon} name={skill.name} />
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="bg-gradient-to-t from-black to-gray-900 rounded-[25px] p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-8 text-[#AAFF00] text-center">Tools & Technologies</h3>
            {/* This is the new responsive grid for icons */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
              {tools.map((skill, index) => (
                <SkillCard key={index} icon={skill.icon} name={skill.name} />
              ))}
            </div>
          </div>
        </div>

        {/* Education Section remains the same */}
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
  );
}