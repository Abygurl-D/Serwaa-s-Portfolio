import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useLoader } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";
import { ThemeContext } from "../App";
import { TextureLoader } from "three";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";

const projectsData = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management and secure payment processing.",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=60",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "https://ecommerce.demo",
    githubLink: "https://github.com/username/ecommerce",
    category: "Full Stack",
  },
  {
    title: "AI Image Generator",
    description:
      "An AI-powered image generation tool using state-of-the-art machine learning models.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
    tech: ["Python", "TensorFlow", "React", "AWS"],
    liveLink: "https://ai-image.demo",
    githubLink: "https://github.com/username/ai-image",
    category: "AI/ML",
  },
  {
    title: "Social Media Dashboard",
    description:
      "A comprehensive dashboard for social media analytics and content management.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    tech: ["Vue.js", "D3.js", "Firebase", "TailwindCSS"],
    liveLink: "https://dashboard.demo",
    githubLink: "https://github.com/username/dashboard",
    category: "Frontend",
  },
  {
    title: "3D Portfolio Website",
    description:
      "A modern portfolio website with 3D animations and interactive elements.",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&auto=format&fit=crop&q=60",
    tech: ["React", "Three.js", "GSAP", "Framer Motion"],
    liveLink: "https://portfolio.demo",
    githubLink: "https://github.com/username/portfolio",
    category: "3D/Animation",
  },
  {
    title: "Mobile Fitness App",
    description:
      "A cross-platform fitness application with workout tracking and social features.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
    tech: ["React Native", "Redux", "Node.js", "MongoDB"],
    liveLink: "https://fitness.demo",
    githubLink: "https://github.com/username/fitness",
    category: "Mobile",
  },
  {
    title: "Blockchain Explorer",
    description:
      "A blockchain explorer for tracking transactions and smart contracts.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
    tech: ["React", "Web3.js", "Ethereum", "GraphQL"],
    liveLink: "https://blockchain.demo",
    githubLink: "https://github.com/username/blockchain",
    category: "Blockchain",
  },
];

// 3D Project Card
const ProjectCard = ({
  position,
  rotation,
  scale,
  project,
  onClick,
  isHovered,
}) => {
  const [hovered, setHovered] = useState(false);
  const texture = useLoader(TextureLoader, project.image);

  const { scale: cardScale } = useSpring({
    scale: hovered || isHovered ? 1.1 : 1,
    config: { tension: 300, friction: 10 },
  });

  return (
    <a.mesh
      position={position}
      rotation={rotation}
      scale={cardScale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => onClick(project)}
    >
      <boxGeometry args={[2, 3, 0.1]} />
      <meshStandardMaterial
        color={hovered ? "#00BFA6" : "#004D40"}
        metalness={0.7}
        roughness={0.2}
      />
      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[1.8, 2]} />
        <meshBasicMaterial map={texture} transparent opacity={0.9} />
      </mesh>
    </a.mesh>
  );
};

// Project Modal
const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-4xl w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[rgba(0,15,23,0.9)] to-[rgba(0,15,23,0.95)] backdrop-blur-xl border border-[#00BFA6]/20 shadow-[0_0_50px_rgba(0,191,166,0.25)]"
        onClick={(e) => e.stopPropagation()}
        layoutId={`project-${project.title}`}
      >
        {/* Header Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,15,23,1)] to-transparent" />

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
          <h3 className="text-3xl font-playfair font-bold text-white mb-4">
            {project.title}
          </h3>

          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
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
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#00BFA6] text-white hover:bg-[#00A896] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub className="text-lg" />
              View Code
            </motion.a>
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#00BFA6] text-[#00BFA6] hover:bg-[#00BFA6] hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiExternalLink className="text-lg" />
              Live Demo
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

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

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section
      id="projects"
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
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-[#00BFA6] mx-auto" />
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#00BFA6] text-white"
                  : "bg-[rgba(0,15,23,0.8)] text-gray-300 hover:bg-[#00BFA6]/20 border border-[#00BFA6]/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* 3D Grid */}
        <div className="relative h-[600px] mb-20">
          <Canvas
            camera={{ position: [0, 0, 15], fov: 45 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
            {projectsData.map((project, index) => {
              const angle = (index * Math.PI * 2) / projectsData.length;
              const radius = 6;
              return (
                <ProjectCard
                  key={index}
                  position={[
                    Math.cos(angle) * radius,
                    Math.sin(angle * 2) * 2,
                    Math.sin(angle) * radius,
                  ]}
                  rotation={[0, -angle, 0]}
                  project={project}
                  onClick={handleProjectClick}
                  isHovered={hoveredIndex === index}
                />
              );
            })}
          </Canvas>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              layoutId={`project-${project.title}`}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[rgba(0,15,23,0.9)] to-[rgba(0,15,23,0.95)] backdrop-blur-xl border border-[#00BFA6]/20 shadow-[0_0_30px_rgba(0,191,166,0.15)]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,15,23,1)] via-[rgba(0,15,23,0.7)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    className="px-6 py-3 rounded-full bg-[#00BFA6] text-white hover:bg-[#00A896] transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <FiFolder className="text-[#00BFA6] text-2xl" />
                  <div className="flex gap-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#00BFA6] transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub size={20} />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#00BFA6] transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-playfair font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-[#00BFA6]/10 text-[#00BFA6] border border-[#00BFA6]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-[#00BFA6]/10 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
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
