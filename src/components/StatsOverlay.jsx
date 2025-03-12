import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../App";
import { FaBriefcase, FaCode, FaSmile, FaMedal } from "react-icons/fa";

const StatsCard = ({ icon: Icon, title, value, delay }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative p-6 rounded-2xl backdrop-blur-md ${
        darkMode
          ? "bg-[#001F2D]/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-[#00BFA6]/20"
          : "bg-white/80 shadow-[0_8px_30px_rgba(0,191,166,0.1)] border border-[#00BFA6]/10"
      } transform hover:-translate-y-1 transition-all duration-300`}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div
          className={`p-4 rounded-xl ${
            darkMode ? "bg-[#00BFA6]/10" : "bg-[#00BFA6]/5"
          }`}
        >
          <Icon className="w-8 h-8 text-[#00BFA6]" />
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
          className={`text-4xl font-bold ${
            darkMode ? "text-white" : "text-[#001F2D]"
          }`}
        >
          {value}
        </motion.span>
        <h3
          className={`text-lg font-medium ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const StatsOverlay = () => {
  const { darkMode } = useContext(ThemeContext);
  const stats = [
    {
      icon: FaBriefcase,
      value: "3+",
      title: "Years Experience",
    },
    {
      icon: FaCode,
      value: "50+",
      title: "Projects Completed",
    },
    {
      icon: FaSmile,
      value: "30+",
      title: "Satisfied Clients",
    },
    {
      icon: FaMedal,
      value: "15+",
      title: "Certifications",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#004D40] to-[#001F2D]">
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwIiBzdHJva2U9IiMwMEJGQTYiIG9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className={`font-playfair text-4xl sm:text-5xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-[#001F2D]"
            }`}
          >
            My Journey in Numbers
          </h2>
          <div className="w-20 h-1 bg-[#00BFA6] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <StatsCard
              key={stat.title}
              icon={stat.icon}
              value={stat.value}
              title={stat.title}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsOverlay;
