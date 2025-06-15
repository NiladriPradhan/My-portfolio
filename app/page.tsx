"use client";
import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SplashCursor from "@/Reactbits/SplashCursor/SplashCursor";
import { useTheme } from "@/ThemeContext";

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isDarkMode } = useTheme();
  return (
    <div>
      <main
        className={` pt-[80px] ${
          isDarkMode ? "text-black bg-white" : "text-white bg-black"
        }`}
      >
        <SplashCursor />
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
    </div>
  );
}
