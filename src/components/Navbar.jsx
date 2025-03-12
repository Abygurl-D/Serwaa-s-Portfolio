import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { ThemeContext } from "../App";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? "bg-[#001F2D]/90 backdrop-blur-sm"
            : "bg-white/90 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <motion.h1
              className={`text-2xl font-playfair font-bold ${
                darkMode ? "text-white" : "text-[#001F2D]"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              Serwaa
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active-nav-link"
                className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 ${
                  darkMode
                    ? "text-white hover:bg-[#00BFA6]/20"
                    : "text-[#001F2D] hover:bg-[#00BFA6]/10"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Theme Toggle */}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-colors duration-300 ${
                darkMode
                  ? "bg-[#00BFA6]/20 text-[#00BFA6] hover:bg-[#00BFA6]/30"
                  : "bg-[#00BFA6]/10 text-[#00BFA6] hover:bg-[#00BFA6]/20"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className={darkMode ? "text-white" : "text-[#001F2D]"}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${
              darkMode ? "bg-[#001F2D]" : "bg-white"
            } border-t ${
              darkMode ? "border-[#00BFA6]/20" : "border-[#00BFA6]/10"
            }`}
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active-nav-link"
                  className={`block cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 ${
                    darkMode
                      ? "text-white hover:bg-[#00BFA6]/20"
                      : "text-[#001F2D] hover:bg-[#00BFA6]/10"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Theme Toggle */}
              <button
                onClick={() => {
                  setDarkMode(!darkMode);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                  darkMode
                    ? "text-white hover:bg-[#00BFA6]/20"
                    : "text-[#001F2D] hover:bg-[#00BFA6]/10"
                }`}
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
