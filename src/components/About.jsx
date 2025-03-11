import React from "react";
import { motion } from "framer-motion";
import { FiDownload, FiCode, FiLayout, FiUsers } from "react-icons/fi";

const About = () => {
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
      className="relative min-h-screen py-20 bg-gradient-to-b from-[#001F2D] to-[#004D40]"
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
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
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
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60"
                  alt="Serwaa"
                  className="w-full h-full object-cover"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001F2D] via-transparent to-transparent opacity-50" />
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
              <h3 className="font-playfair text-3xl sm:text-4xl font-bold text-white">
                Frontend Developer
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate frontend developer with a keen eye for creating
                beautiful, intuitive, and functional web experiences.
                Specializing in modern JavaScript frameworks and UI/UX best
                practices, I transform ideas into seamless digital experiences
                that users love.
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
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-[#00BFA6] rounded-full" />
                <p className="text-gray-300">
                  3+ years of experience in frontend development
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-[#00BFA6] rounded-full" />
                <p className="text-gray-300">
                  Expertise in React, JavaScript, and modern web technologies
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-[#00BFA6] rounded-full" />
                <p className="text-gray-300">
                  Strong focus on responsive design and performance optimization
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 rounded-full text-lg font-medium bg-[#00BFA6] text-white hover:bg-[#00A896] transition-colors duration-300"
              >
                <FiDownload className="mr-2" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
