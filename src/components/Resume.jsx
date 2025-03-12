import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../App";
import {
  FiCalendar,
  FiMapPin,
  FiAward,
  FiArrowLeft,
  FiBookOpen,
  FiBriefcase,
  FiCheck,
  FiStar,
  FiCode,
  FiGlobe,
  FiServer,
  FiDatabase,
} from "react-icons/fi";
import { SiIbm, SiUnitednations } from "react-icons/si";
import { IoSchoolOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const educationData = [
  {
    degree: "Web Development Program",
    school: "MEST Africa",
    logo: "https://placehold.co/400x400/001F2D/00BFA6?text=MEST&font=playfair",
    location: "Accra, Ghana",
    date: "September - November 2024",
    description: "Intensive web development training program",
    achievements: [
      "Second Best Team Award",
      "Full-stack web development",
      "Collaborative project development",
    ],
  },
  {
    degree: "Bachelor of Arts - Theatre Arts and Archaeology",
    school: "University of Ghana",
    logo: "https://placehold.co/400x400/001F2D/00BFA6?text=UG&font=playfair",
    location: "Legon, Ghana",
    date: "August 2012 - May 2016",
    description: "Double major in Theatre Arts and Archaeology",
    achievements: [
      "Cultural performance productions",
      "Archaeological field research",
      "Interdisciplinary studies",
    ],
  },
  {
    degree: "General Arts",
    school: "Yaa Asantewaa Girls Senior High School",
    logo: "https://placehold.co/400x400/001F2D/00BFA6?text=YAGSS&font=playfair",
    location: "Kumasi, Ghana",
    date: "September 2009 - May 2012",
    description: "General Arts education with focus on humanities",
    achievements: [
      "Strong foundation in arts and humanities",
      "Leadership development",
      "Cultural activities participation",
    ],
  },
];

const experienceData = [
  {
    title: "Web Development and Administrative Manager",
    company: "TradeSync",
    logo: "https://placehold.co/400x400/001F2D/00BFA6?text=TS&font=playfair",
    location: "Ghana",
    date: "2022 - Present",
    description: [
      "Lead web development initiatives and administrative operations",
      "Manage and optimize company's digital presence",
      "Coordinate cross-functional teams and projects",
      "Implement modern web solutions and administrative systems",
    ],
  },
  {
    title: "Web Developer",
    company: "UNDP/MEST YAI Program",
    logo: "https://placehold.co/400x400/001F2D/00BFA6?text=UNDP&font=playfair",
    location: "Ghana",
    date: "2023",
    description: [
      "Developed e-commerce and landing page for Young Africa Innovate program",
      "Implemented responsive design principles",
      "Collaborated with innovators to meet business requirements",
      "Delivered high-quality web solutions within program timeline",
    ],
  },
  {
    title: "General Office Manager",
    company: "IBM Ghana",
    logo: "https://placehold.co/400x400/001F2D/00BFA6?text=IBM&font=playfair",
    location: "Accra, Ghana",
    date: "2019 - 2022",
    description: [
      "Managed office operations and administrative functions",
      "Coordinated with international teams and stakeholders",
      "Implemented efficient office management systems",
      "Supported executive-level operations",
    ],
  },
];

const Resume = () => {
  const { darkMode } = useContext(ThemeContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : "light"}`}>
      <div className="relative bg-gradient-to-b from-[#001F2D] to-[#004D40]">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwIiBzdHJva2U9IiMwMEJGQTYiIG9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] opacity-5">
            <motion.div
              animate={{
                backgroundPosition: ["0px 0px", "100px 100px"],
                transition: {
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          {/* Back Button */}
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-[#00BFA6] mb-8 hover:text-white transition-colors duration-300 group"
            >
              <FiArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </motion.button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-5xl sm:text-6xl font-bold text-white mb-6">
              Professional Journey
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent to-[#00BFA6]" />
              <div className="w-2 h-2 rounded-full bg-[#00BFA6]" />
              <div className="w-20 h-1 bg-gradient-to-l from-transparent to-[#00BFA6]" />
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-12">
              <FiBookOpen className="text-3xl text-[#00BFA6]" />
              <h3 className="text-3xl font-playfair font-bold text-white">
                Education
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-[rgba(0,15,23,0.8)] backdrop-blur-lg border border-[#00BFA6]/20 shadow-[0_0_20px_rgba(0,191,166,0.15)] p-6 h-full transition-transform duration-300 group-hover:-translate-y-2">
                    {/* Logo Placeholder */}
                    <div className="w-16 h-16 mb-4 rounded-lg bg-gradient-to-br from-[#00BFA6]/20 to-[#004D40]/20 backdrop-blur-md flex items-center justify-center overflow-hidden">
                      <img
                        src={edu.logo}
                        alt={edu.school}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h4 className="text-xl font-bold text-white mb-2">
                      {edu.degree}
                    </h4>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <FiMapPin className="text-[#00BFA6]" />
                        <span>{edu.school}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiCalendar className="text-[#00BFA6]" />
                        <span>{edu.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{edu.description}</p>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <FiCheck className="text-[#00BFA6] flex-shrink-0" />
                          <p className="text-gray-400">{achievement}</p>
                        </div>
                      ))}
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#00BFA6]/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#00BFA6]/20 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center gap-4 mb-12">
              <FiBriefcase className="text-3xl text-[#00BFA6]" />
              <h3 className="text-3xl font-playfair font-bold text-white">
                Experience
              </h3>
            </div>

            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-[rgba(0,15,23,0.8)] backdrop-blur-lg border border-[#00BFA6]/20 shadow-[0_0_20px_rgba(0,191,166,0.15)] p-8 transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Logo Column */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#00BFA6]/20 to-[#004D40]/20 backdrop-blur-md flex items-center justify-center overflow-hidden">
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Content Column */}
                      <div className="flex-grow">
                        <h4 className="text-2xl font-bold text-white mb-2">
                          {exp.title}
                        </h4>
                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <FiMapPin className="text-[#00BFA6]" />
                            <span>
                              {exp.company}, {exp.location}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FiCalendar className="text-[#00BFA6]" />
                            <span>{exp.date}</span>
                          </div>
                        </div>
                        <ul className="space-y-3">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <FiStar className="text-[#00BFA6] mt-1 flex-shrink-0" />
                              <span className="text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00BFA6]/20 to-transparent rounded-bl-[64px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#00BFA6]/20 to-transparent rounded-tr-[64px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
