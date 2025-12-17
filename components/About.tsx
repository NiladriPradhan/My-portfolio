"use client";


import StarBorder from "@/Reactbits/StarBorder/StarBorder";
import React from "react";
import { useTheme } from "@/ThemeContext";
import { motion } from "framer-motion";
export default function About() {
 const { isDarkMode } = useTheme();

 const text = "Frontend Developer";
  return (
    <div className="flex justify-center mx-auto">
      <StarBorder as="button" className="custom-class" color="cyan" speed="5s">
        {/* Title with Gradient & Animation */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h1>
        {/* Description with Fade & Stagger */}
        <div className="max-w-3xl mx-auto">
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-mono text-gray-300 mb-6"
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
            <span className="font-semibold text-indigo-400">
              Niladri Pradhan
            </span>
            , a passionate and creative Frontend Developer with a solid grasp of
            modern web technologies including HTML, CSS, JavaScript, TypeScript,
            and React.js.
            <br className="hidden md:block" />
            <br />
            {`I enjoy crafting smooth, interactive, and user-friendly web
          experiences that solve real-world problems. Currently, I'm looking for
          an exciting opportunity to grow, learn, and contribute to impactful
          projects in a collaborative environment.`}
          </motion.p>
        </div>
      </StarBorder>
    </div>
  );
}
