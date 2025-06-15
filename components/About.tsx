"use client";

import { useTheme } from "@/ThemeContext";
import { motion } from "framer-motion";

export default function About() {
  const { isDarkMode } = useTheme();

  const text = "Frontend Developer";

  return (
    <section
      id="about"
      className={`relative flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${
        isDarkMode
          ? "bg-white text-slate-900"
          : "bg-gradient-to-tr from-gray-900 via-black to-gray-800 text-white"
      }`}
    >
      {/* Background Glow */}
      {/* <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[400px] h-[400px] rounded-full bg-indigo-500 opacity-20 blur-3xl animate-pulse"></div>
      </div> */}

      {/* Title with Gradient & Animation */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h1>

      {/* Typing Effect for Role */}

      {/* Description with Fade & Stagger */}
      <div className="max-w-3xl mx-auto">
        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-mono text-indigo-400 mb-6"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          {text}
        </motion.p>
        <motion.p
          className={`text-base sm:text-lg md:text-xl leading-relaxed ${
            isDarkMode ? "text-slate-800" : "text-gray-300"
          }`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Hello! I&apos;m{" "}
          <span className="font-semibold text-indigo-400">Niladri Pradhan</span>
          , a passionate and creative Frontend Developer with a solid grasp of
          modern web technologies including HTML, CSS, JavaScript, TypeScript,
          and React.js.
          <br className="hidden md:block" />
          <br />I enjoy crafting smooth, interactive, and user-friendly web
          experiences that solve real-world problems. Currently, I'm looking for
          an exciting opportunity to grow, learn, and contribute to impactful
          projects in a collaborative environment.
        </motion.p>
      </div>
    </section>
  );
}
