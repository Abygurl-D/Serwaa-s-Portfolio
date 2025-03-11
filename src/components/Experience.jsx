import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../App";

const experienceData = [
  {
    title: "Frontend Developer",
    company: "Tech Solutions Inc.",
    companyLogo:
      "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&auto=format&fit=crop&q=60",
    companyImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop&q=60",
    date: "2023 - Present",
    description: [
      "Led development of responsive web applications using React and Next.js",
      "Implemented modern UI/UX designs with Tailwind CSS and Framer Motion",
      "Optimized application performance and improved load times by 40%",
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Frontend Developer",
    company: "Creative Studio",
    companyLogo:
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&auto=format&fit=crop&q=60",
    companyImage:
      "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?w=800&auto=format&fit=crop&q=60",
    date: "2022 - 2023",
    description: [
      "Developed modern, responsive user interfaces for high-profile clients",
      "Created interactive animations and micro-interactions using Framer Motion",
      "Collaborated with designers to ensure pixel-perfect implementation",
    ],
    tech: ["React", "TypeScript", "GSAP", "Styled Components"],
  },
  {
    title: "Frontend Developer Intern",
    company: "Digital Agency",
    companyLogo:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&auto=format&fit=crop&q=60",
    companyImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop&q=60",
    date: "2021 - 2022",
    description: [
      "Built responsive websites using modern frontend technologies",
      "Implemented animations and transitions for enhanced user experience",
      "Optimized website performance and accessibility",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "SASS"],
  },
];

const Experience = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      id="experience"
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
            Experience
          </h2>
          <div className="w-20 h-1 bg-[#00BFA6] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Timeline Line */}
              {index !== experienceData.length - 1 && (
                <div className="absolute left-[50%] top-full w-px h-12 bg-gradient-to-b from-[#00BFA6] to-transparent" />
              )}

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl bg-[rgba(0,15,23,0.8)] backdrop-blur-lg border border-[#00BFA6]/20 shadow-[0_0_20px_rgba(0,191,166,0.15)] transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative overflow-hidden">
                    <motion.div
                      className="relative h-64 md:h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={exp.companyImage}
                        alt={exp.company}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,15,23,0.9)] to-transparent" />
                      <img
                        src={exp.companyLogo}
                        alt={`${exp.company} logo`}
                        className="absolute bottom-4 left-4 w-16 h-16 rounded-xl object-cover bg-[rgba(0,15,23,0.8)] p-2 border border-[#00BFA6]/20"
                      />
                    </motion.div>
                  </div>
                  <div className="p-8 md:w-2/3">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-playfair font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-[#00BFA6] font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <p className="text-gray-400 mt-2 md:mt-0 text-sm">
                        {exp.date}
                      </p>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                          <span className="w-2 h-2 bg-[#00BFA6] rounded-full mt-2 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-1.5 rounded-full text-sm bg-[#00BFA6]/10 text-[#00BFA6] border border-[#00BFA6]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
