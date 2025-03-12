import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiCode, FiLayout, FiUsers, FiEye } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { ThemeContext } from "../App";

const About = () => {
  const { darkMode } = useContext(ThemeContext);
  const highlights = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and well-documented code",
    },
    {
      icon: <FiLayout className="w-6 h-6" />,
      title: "Modern UI",
      description: "Creating responsive and intuitive user interfaces",
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "User-Centric",
      description: "Focusing on exceptional user experiences and interactions",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen py-20 pb-48 bg-gradient-to-b from-[#001F2D] to-[#004D40] z-10"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwIiBzdHJva2U9IiMwMEJGQTYiIG9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-[#00BFA6] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto h-[600px]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
                  alt="Serwaa"
                  className="w-full h-full object-cover object-center"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001F2D] via-transparent to-transparent opacity-50 rounded-2xl" />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-[#00BFA6] rounded-xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-[#00BFA6] rounded-xl -z-10" />
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#00BFA6] opacity-20 blur-3xl -z-20" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3
                className={`text-3xl font-playfair font-bold ${
                  darkMode ? "text-white" : "text-[#001F2D]"
                }`}
              >
                Frontend Web Developer
              </h3>
              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-800"
                }`}
              >
                I'm a passionate frontend developer focused on creating
                beautiful, responsive, and user-friendly web applications. With
                a strong foundation in modern web technologies, I bring designs
                to life with clean code and smooth animations.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative overflow-hidden rounded-2xl bg-[rgba(0,15,23,0.8)] backdrop-blur-lg border border-[#00BFA6]/20 shadow-[0_0_20px_rgba(0,191,166,0.15)] p-6"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="text-[#00BFA6]">{item.icon}</div>
                    <h4 className="text-lg font-medium text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#00BFA6] text-white hover:bg-[#00A896] transition-colors duration-300"
              >
                <FiDownload className="text-lg" />
                Download Resume
              </motion.a>
              <RouterLink to="/resume">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#00BFA6] text-[#00BFA6] hover:bg-[#00BFA6] hover:text-white transition-colors duration-300"
                >
                  <FiEye className="text-lg" />
                  View Resume
                </motion.button>
              </RouterLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
