import { FaCss3Alt, FaGitAlt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { useTheme } from "@/ThemeContext";

const skills = [
  { title: "Javascript", icon: <FaJs className="text-yellow-300" /> },
  { title: "React", icon: <FaReact className="text-cyan-400" /> },
  { title: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { title: "Tailwind", icon: <SiTailwindcss className="text-blue-400" /> },
  { title: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { title: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { title: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { title: "Git", icon: <FaGitAlt className="text-orange-600" /> },
];

export default function Skills() {
  const { isDarkMode } = useTheme();
  return (
    <section
      id="skills"
      className={`py-20 mt-10 ${
        isDarkMode ? "bg-white text-slate-800" : "bg-black text-white"
      }  text-center flex flex-col justify-center items-center min-h-screen`}
    >
      <motion.h2
        className="text-5xl font-bold mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.title}
            title={skill.title}
            icon={skill.icon}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
