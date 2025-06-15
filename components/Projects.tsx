import RollingGallery from "@/Reactbits/RollingGallery/RollingGallery";
import { useTheme } from "@/ThemeContext";
import { motion } from "framer-motion";

export default function Projects() {
  const { isDarkMode } = useTheme();

  const baseClasses = "relative w-full min-h-screen flex items-center justify-center px-4 py-20 sm:px-6 lg:px-8";
  const themeBg = isDarkMode ? "bg-white text-slate-900" : "bg-black text-white";

  return (
    <section id="projects" className={`${baseClasses} ${themeBg}`}>
      <div className="w-full max-w-7xl mx-auto text-center">
        {/* Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-semibold bg-gradient-to-r from-gray-300 to-gray-600 bg-clip-text text-transparent mb-10"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h1>

        {/* Rolling Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <RollingGallery autoplay pauseOnHover />
        </motion.div>
      </div>
    </section>
  );
}
