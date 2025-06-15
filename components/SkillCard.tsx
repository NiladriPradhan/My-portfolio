// import { motion } from "framer-motion";

// export default function SkillCard({ icon, title, delay }) {
//   return (
//     <motion.div
//       className="bg-transparent rounded-2xl shadow-lg p-6 text-center text-white w-40 h-40 flex flex-col justify-center items-center hover:scale-105 transition-transform"
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay }}
//       viewport={{ once: true }}
//     >
//       <div className="text-4xl mb-2">{icon}</div>
//       <h3 className="text-lg font-semibold">{title}</h3>
//     </motion.div>
//   );
// }

import { useTheme } from "@/ThemeContext";
import { motion } from "framer-motion";

export default function SkillCard({
  icon,
  title,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  delay: number;
}) {
  const { isDarkMode } = useTheme();
  return (
    <motion.div
      className={` rounded-2xl shadow-lg p-6 text-center ${isDarkMode ? " bg-white text-slate-800" :"bg-transparent text-white"}  w-40 h-40 flex flex-col justify-center items-center cursor-pointer`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        scale: 1.1,
        rotate: 2,
        transition: { type: "spring", stiffness: 300 },
      }}
      viewport={{ once: true }}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </motion.div>
  );
}
