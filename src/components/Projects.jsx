import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../App";
import {
  FiGithub,
  FiExternalLink,
  FiFolder,
  FiArrowRight,
} from "react-icons/fi";

const projectsData = [
  {
    title: "Acquwaa Naturals",
    description:
      "A full-featured e-commerce platform with real-time inventory management and secure payment processing for a natural hair care brand.",
    image:
      "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1741791998/aq_hero_ubrwr3.png",
    tech: ["React", "Framer Motion", "TailwindCSS", "JavaScript", "Paystack"],
    liveLink: "https://acquwaa-naturals.netlify.app",
    githubLink: "https://github.com/Abygurl-D/Acquwaa-Naturals-2",
    category: ["Mobile", "Frontend"],
  },
  {
    title: "Asarfo-Adjei Attorneys",
    description:
      "A responsive and user-friendly website for a law firm that provides a range of legal services to clients.",
    image:
      "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1741792215/law_jenbcg.png",
    tech: [
      "MUI",
      "Framer Motion",
      "React",
      "JavaScript",
      "Google Translate API",
    ],
    liveLink: "https://asarfo-adjei.netlify.app",
    githubLink: "https://github.com/Abygurl-D/Asarfo-Adjei-Attorneys",
    category: ["Mobile", "Frontend"],
  },
  {
    title: "Ike-Dian Fashion",
    description:
      "A responsive and user-friendly website for a fashion brand that provides a range of fashion services to clients.",
    image:
      "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1741792183/ik_csxodv.png",
    tech: ["React", "Framer Motion", "JavaScript", "TailwindCSS", "Paystack"],
    liveLink: "https://ikedian.netlify.app",
    githubLink: "https://github.com/Abygurl-D/Ike-Dian-Fashion",
    category: ["Frontend", "Mobile"],
  },
  {
    title: "Serwaa's Portfolio",
    description:
      "A modern portfolio website with 3D animations and interactive elements.",
    image:
      "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1741792355/new_q4se22.png",
    tech: ["React", "Three.js", "JavaScript", "Framer Motion", "TailwindCSS"],
    liveLink: "https://serwaafolio.netlify.app",
    githubLink: "https://github.com/Abygurl-D/Serwaa-s-Portfolio",
    category: ["3D/Animation", "Frontend", "Mobile"],
  },
  {
    title: "Freelix",
    description:
      " Freelix is a Freelancer Management & Tracking System built to help freelancers manage projects, track time, send invoices, and receive payments easily.",
    image:
      "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1741792111/freelix3_fztfre.png",
    tech: ["React", "JavaScript", "MUI"],
    liveLink: "https://freelix24.netlify.app",
    githubLink: "https://github.com/FREELIX-PROJECT",
    category: ["Full Stack", "Mobile"],
  },
  {
    title: "Fusion Xpress",
    description:
      " FusionXpress is an advertising app designed to connect businesses with their target audience effectively.It delivers a clean, responsive, and user-friendly platform for creating and managing impactful advertisements",
    image:
      "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1741792145/fusionXpress_b6q9nk.png",
    tech: ["React", "JavaScript", "TailwindCSS"],
    liveLink: "https://fusionxpress.netlify.app/",
    githubLink: "https://github.com/CAMM-FUSION/FusionXpress",
    category: ["Full Stack", "Mobile"],
  },
];

// Project Modal
const ProjectModal = ({ project, onClose }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        className={`relative max-w-4xl w-full overflow-hidden rounded-2xl ${
          darkMode
            ? "bg-gradient-to-br from-[rgba(0,15,23,0.9)] to-[rgba(0,15,23,0.95)]"
            : "bg-gradient-to-br from-white/90 to-white/95"
        } backdrop-blur-xl border border-[#00BFA6]/20 shadow-[0_0_50px_rgba(0,191,166,0.25)]`}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        {/* Header Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t ${
              darkMode ? "from-[rgba(0,15,23,1)]" : "from-white"
            } to-transparent`}
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 text-white/80 hover:bg-black/40 transition-colors duration-300"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3
            className={`text-3xl font-playfair font-bold ${
              darkMode ? "text-white" : "text-[#001F2D]"
            } mb-4`}
          >
            {project.title}
          </h3>

          <p
            className={`${
              darkMode ? "text-gray-300" : "text-gray-600"
            } text-lg mb-6 leading-relaxed`}
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-1.5 rounded-full text-sm bg-[#00BFA6]/10 text-[#00BFA6] border border-[#00BFA6]/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => window.open(project.githubLink, "_blank")}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#00BFA6] text-white hover:bg-[#00A896] transition-colors duration-300"
            >
              <FiGithub className="text-lg" />
              View Code
            </button>
            <button
              onClick={() => window.open(project.liveLink, "_blank")}
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#00BFA6] text-[#00BFA6] hover:bg-[#00BFA6] hover:text-white transition-colors duration-300"
            >
              <FiExternalLink className="text-lg" />
              Live Demo
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categories = [
    "All",
    "Frontend",
    "Full Stack",
    "Mobile",
    "3D/Animation",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) =>
          project.category.includes(selectedCategory)
        );

  const handleProjectClick = (e, project) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedProject(project);
  };

  const handleGithubClick = (e, link) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = link;
  };

  const handleLiveClick = (e, link) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = link;
  };

  return (
    <section
      id="projects"
      className={`relative min-h-screen py-20 ${
        darkMode
          ? "bg-gradient-to-b from-[#001F2D] to-[#004D40]"
          : "bg-gradient-to-b from-white to-[#E8F5F3]"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className={`absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwIiBzdHJva2U9IiMwMEJGQTYiIG9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] ${
            darkMode ? "opacity-10" : "opacity-5"
          }`}
        />
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
            className={`font-playfair text-4xl sm:text-5xl font-bold ${
              darkMode ? "text-white" : "text-[#001F2D]"
            } mb-4`}
          >
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-[#00BFA6] mx-auto" />
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#00BFA6] text-white"
                  : `${
                      darkMode
                        ? "bg-[rgba(0,191,166,0.1)] text-white hover:bg-[rgba(0,191,166,0.2)]"
                        : "bg-[rgba(0,191,166,0.1)] text-[#001F2D] hover:bg-[rgba(0,191,166,0.2)]"
                    }`
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className={`relative overflow-hidden rounded-2xl ${
                  darkMode ? "bg-[rgba(0,15,23,0.8)]" : "bg-white"
                } backdrop-blur-xl border border-[#00BFA6]/20 shadow-[0_0_30px_rgba(0,191,166,0.15)] transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(0,191,166,0.3)] group-hover:border-[#00BFA6]/40 h-[450px]`}
              >
                {/* Project Image */}
                <div
                  className="relative h-48 overflow-hidden cursor-pointer"
                  onClick={() => window.open(project.liveLink, "_blank")}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#00BFA6] mix-blend-color opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 h-[258px] flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-[#00BFA6] hover:text-[#00A896] transition-colors duration-300 p-2 rounded-full hover:bg-[#00BFA6]/10"
                    >
                      <FiFolder className="text-2xl" />
                    </button>
                    <div className="flex gap-3">
                      <button
                        onClick={() =>
                          window.open(project.githubLink, "_blank")
                        }
                        className="text-[#00BFA6] hover:text-[#00A896] transition-colors duration-300 p-2 rounded-full hover:bg-[#00BFA6]/10"
                      >
                        <FiGithub size={20} />
                      </button>
                      <button
                        onClick={() => window.open(project.liveLink, "_blank")}
                        className="text-[#00BFA6] hover:text-[#00A896] transition-colors duration-300 p-2 rounded-full hover:bg-[#00BFA6]/10"
                      >
                        <FiExternalLink size={20} />
                      </button>
                    </div>
                  </div>

                  <div
                    className="cursor-pointer group"
                    onClick={() => window.open(project.liveLink, "_blank")}
                  >
                    <h3
                      className={`text-xl font-playfair font-bold ${
                        darkMode ? "text-white" : "text-[#001F2D]"
                      } mb-2 group-hover:text-[#00BFA6] transition-colors duration-300`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      } text-sm mb-4 line-clamp-2`}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded-full bg-[#00BFA6]/10 text-[#00BFA6] border border-[#00BFA6]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence mode="sync">
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
