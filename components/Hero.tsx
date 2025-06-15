import dynamic from "next/dynamic";
import { useTheme } from "@/ThemeContext";
import { motion } from "framer-motion";
import { memo } from "react";
import StarBorder from "@/Reactbits/StarBorder/StarBorder";
import TrueFocus from "@/Reactbits/TrueFocus/TrueFocus";

const Particles = dynamic(() => import("@/Reactbits/Particles/Particles"), {
  ssr: false,
});
const BlurText = dynamic(() => import("@/Reactbits/BlurText/BlurText"), {
  ssr: false,
});

const Hero = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="hero"
      className={`relative min-h-screen ${
        isDarkMode ? "bg-white text-slate-800" : "bg-black text-white"
      } text-center flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-12`}
    >
      {/* Particle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Background Image with Tailwind (No inline style) */}
      <motion.div
        className="absolute inset-0 bg-[url('/your-image.jpg')] bg-cover bg-center z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-4xl text-center">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Hi, I am
          <span className="text-6xl ml-2 font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Niladri Pradhan
          </span>
        </motion.h1>

        <div className="flex justify-center mb-4">
          <BlurText
            text="Welcome to My Portfolio"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-2xl sm:text-4xl md:text-6xl font-extrabold leading-snug text-center"
          />
        </div>

        <div className="text-center mb-6">
          <TrueFocus
            sentence="Frontend React.Js"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </div>

        <motion.p
          className={`text-base sm:text-lg md:text-xl max-w-xl mx-auto mt-2 mb-8 leading-relaxed ${
            isDarkMode ? "text-gray-500" : "text-gray-300"
          }`}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I am a passionate developer building blazing-fast, responsive, and
          interactive web experiences using modern frontend technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <a href="#about" aria-label="Get Started">
            <StarBorder
              as="button"
              className="px-6 py-3 text-base sm:text-lg md:text-xl font-semibold"
              color="cyan"
              speed="5s"
            >
              Get Started
            </StarBorder>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Hero);
