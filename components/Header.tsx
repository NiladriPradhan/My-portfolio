"use client";
import useSectionInView from "@/hooks/useSectionInView";
import { useTheme } from "@/ThemeContext";
import { Moon, SunDim } from "lucide-react";

export default function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const heroVisible = useSectionInView("hero");

  return (
    <header
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 
        w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[520px] 
        rounded-full py-2 px-4 border border-gray-600 
        backdrop-blur-md bg-opacity-40 transition-all duration-500 z-50
        ${isDarkMode ? "bg-transparent text-black" : "bg-transparent text-white"}
        ${heroVisible ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0"}
      `}
    >
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h1 className="text-lg sm:text-xl font-bold whitespace-nowrap">My Portfolio</h1>

        <nav className="flex-1">
          <ul className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-6 text-sm sm:text-base">
            <li><a href="#hero" className="hover:text-indigo-500 transition">Home</a></li>
            <li><a href="#about" className="hover:text-indigo-500 transition">About</a></li>
            <li><a href="#projects" className="hover:text-indigo-500 transition">Projects</a></li>
            <li><a href="#skills" className="hover:text-indigo-500 transition">Skills</a></li>
          </ul>
        </nav>

        <button
          onClick={toggleTheme}
          className="ml-2 text-xl text-gray-600 dark:text-gray-300"
        >
          {isDarkMode ? (
            <Moon className="text-orange-300" />
          ) : (
            <SunDim className="text-white" />
          )}
        </button>
      </div>
    </header>
  );
}
