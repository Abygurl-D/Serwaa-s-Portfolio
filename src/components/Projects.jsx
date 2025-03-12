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
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management and secure payment processing.",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=60",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "https://serwaa-ecommerce.netlify.app",
    githubLink: "https://github.com/serwaa-portfolio/ecommerce",
    category: "Full Stack",
  },
  {
    title: "AI Image Generator",
    description:
      "An AI-powered image generation tool using state-of-the-art machine learning models.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
    tech: ["Python", "TensorFlow", "React", "AWS"],
    liveLink: "https://serwaa-ai-image.netlify.app",
    githubLink: "https://github.com/serwaa-portfolio/ai-image",
    category: "AI/ML",
  },
  {
    title: "Social Media Dashboard",
    description:
      "A comprehensive dashboard for social media analytics and content management.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    tech: ["Vue.js", "D3.js", "Firebase", "TailwindCSS"],
    liveLink: "https://serwaa-dashboard.netlify.app",
    githubLink: "https://github.com/serwaa-portfolio/dashboard",
    category: "Frontend",
  },
  {
    title: "3D Portfolio Website",
    description:
      "A modern portfolio website with 3D animations and interactive elements.",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&auto=format&fit=crop&q=60",
    tech: ["React", "Three.js", "GSAP", "Framer Motion"],
    liveLink: "https://serwaafolio.netlify.app",
    githubLink: "https://github.com/serwaa-portfolio/portfolio",
    category: "3D/Animation",
  },
  {
    title: "Mobile Fitness App",
    description:
      "A cross-platform fitness application with workout tracking and social features.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
    tech: ["React Native", "Redux", "Node.js", "MongoDB"],
    liveLink: "https://serwaa-fitness.netlify.app",
    githubLink: "https://github.com/serwaa-portfolio/fitness",
    category: "Mobile",
  },
  {
    title: "Blockchain Explorer",
    description:
      "A blockchain explorer for tracking transactions and smart contracts.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
    tech: ["React", "Web3.js", "Ethereum", "GraphQL"],
    liveLink: "https://serwaa-blockchain.netlify.app",
    githubLink: "https://github.com/serwaa-portfolio/blockchain",
    category: "Blockchain",
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
    "Blockchain",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

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
                } backdrop-blur-xl border border-[#00BFA6]/20 shadow-[0_0_30px_rgba(0,191,166,0.15)] transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(0,191,166,0.3)] group-hover:border-[#00BFA6]/40`}
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
                <div className="p-6">
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

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-[#00BFA6] hover:text-[#00A896] hover:gap-3 transition-all duration-300 text-sm font-medium p-2 -ml-2 rounded-full hover:bg-[#00BFA6]/10 w-full"
                  >
                    <span className="flex items-center gap-2">
                      View Details
                      <FiArrowRight />
                    </span>
                  </button>
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
