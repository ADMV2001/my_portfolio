import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus,  SiPhp, SiDart,
  SiReact, SiNodedotjs, SiMongodb, SiMysql, SiFirebase, SiSpring, SiNextdotjs,
  SiTailwindcss, SiGit, SiGithub, SiPostman, SiIntellijidea, SiApache, SiGooglecloud,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiVisualstudio, DiDotnet } from "react-icons/di";
import { FaJava, FaHtml5, FaCss3Alt, FaLaptopCode, FaDatabase } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb"; // fallback for C++
import { SiArduino, SiSupabase, SiVercel } from "react-icons/si";

import Image from "next/image";

export default function SkillsSection() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <SiReact className="text-[#61DBFB] text-3xl" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white text-3xl"/> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4] text-3xl"/> },
        { name: "React Native", icon: <SiReact className="text-[#61DBFB] text-3xl"/> },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#5FA04E] text-3xl"/> },
        { name: "Express JS", icon: <SiNodedotjs className="text-white text-3xl"/> },
        { name: "Spring Boot", icon: <SiSpring className="text-[#6DB33F] text-3xl"/> },
        { name: ".NET", icon: <DiDotnet className="text-[#512BD4] text-3xl"/> },
        { name: "Firebase", icon: <SiFirebase className="text-[#DD2C00] text-3xl"/> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248] text-3xl"/> },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1] text-3xl"/> },
        { name: "SSMS", icon: <FaDatabase className="text-yellow-500 text-3xl"/> },
      ],
    },
    {
      title: "Development Tools & Technologies",
      skills: [
        { name: "Git", icon: <SiGit className="text-[#F05032] text-3xl"/> },
        { name: "GitHub", icon: <SiGithub className="text-white text-3xl"/> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37] text-3xl"/> },
        { name: "VS Code", icon: <VscVscode className="text-[#2F80ED] text-3xl"/> },
        { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-white text-3xl"/> },
        { name: "Apache NetBeans", icon: <SiApache className="text-[#1B6AC6] text-3xl"/> },
        { name: "Visual Studio", icon: <DiVisualstudio className="text-purple-500 text-3xl"/> },
        { name: "Cursor", icon: <FaLaptopCode className="text-black text-3xl"/> },
        { name: "Google APIs", icon: <SiGooglecloud className="text-[#61DBFB] text-3xl"/> },
        { name: "LangGraph", icon: <FaLaptopCode className="text-[#1C3C3C] text-3xl"/> },
        { name: "LangChain", icon: <FaLaptopCode className="text-[#1C3C3C] text-3xl"/> },
        { name: "Arduino IDE", icon: <SiArduino className="text-[#00878F] text-3xl"/> },
        { name: "Supabase", icon: <SiSupabase className="text-[#3FCF8E] text-3xl"/> },
        { name: "Vercel", icon: <SiVercel className="text-black text-3xl"/> },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E] text-3xl"/> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] text-3xl"/> },
        { name: "Java", icon: <FaJava className="text-[#ED8B00] text-3xl"/> },
        { name: "Python", icon: <SiPython className="text-[#3776AB] text-3xl"/> },
        { name: "Dart", icon: <SiDart className="text-[#0175C2] text-3xl"/> },
        { name: "C", icon: <TbBrandCpp className="text-[#A8B9CC] text-3xl"/> },
        { name: "C#", icon: <TbBrandCpp className="text-[#A8B9CC] text-3xl"/> },
        { name: "PHP", icon: <SiPhp className="text-[#777BB4] text-3xl"/> },
      ],
    },
  ];

  const education = [
    {
      institution: "Plymouth University, UK (via NSBM)",
      degree: "BSc (Hons) in Software Engineering",
      years: "2024 - present",
      grade: "Following",
      logo: "/plymouth-logo.png",
    },
    {
      institution: "NSBM Green University",
      degree: "BSc (Hons) in Software Engineering",
      years: "2023 - Present",
      grade: "Following",
      logo: "/nsbm-logo.png",
    },
    
    {
      institution: "Sripalee College, Horana",
      degree: "Advanced Level - Biological Science Stream",
      years: "2012 - 2022",
      grade: "G.C.E. Advanced Level",
      logo: "/sripalee-logo.jpeg",
    },
  ];

  type SkillCardProps = {
  icon: React.ReactNode;
  name: string;
};

  const SkillCard = ({ icon, name }: SkillCardProps) => (
    <div className=" flex flex-col items-center justify-center p-4 rounded-full bg-gray-800/50 hover:bg-gray-700/70 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="text-2xl text-[#81E7AF] mb-2">{icon}</div>
      <span className="text-gray-200 text-sm text-center">{name}</span>
    </div>
  );

  return (
    <section id="skills" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto space-y-16">
        <h2 className="text-4xl font-bold text-center text-white">
          Skills & Education
        </h2>

        {/* Skills in groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="space-y-6 p-4 px-8 rounded-[35px] bg-gradient-to-t from-black to-gray-900">
              <h3 className="text-[21px] font-semibold text-[#81E7AF] text-left ml-[10px] mb-8">
                {group.title} 
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {group.skills.map((skill, i) => (
                  <SkillCard key={i} icon={skill.icon} name={skill.name} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education (unchanged) */}
        <div className="rounded-[35px] bg-gradient-to-t from-black to-gray-900 p-8 border border-gray-800 shadow-sm">
          <h3 className="text-[22px] font-semibold mb-8 text-[#81E7AF] text-center">
            Education
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex items-start gap-6 border-l-4 border-[#81E7AF] pl-6"
              >
                {/* School/University Logo */}
                <div className="flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
                  <Image
                    src={edu.logo}
                    alt={edu.institution}
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>

                {/* Education Details */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">
                      {edu.institution}
                    </h4>
                    <span className="text-gray-300 font-medium">{edu.years}</span>
                  </div>
                  <p className="text-gray-300 mb-1">{edu.degree}</p>
                  <p className="text-gray-400">{edu.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
