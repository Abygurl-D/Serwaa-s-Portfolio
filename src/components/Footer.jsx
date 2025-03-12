import React from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiHeart,
  FiHome,
  FiUser,
  FiCode,
  FiFolder,
  FiMessageCircle,
  FiPhone,
  FiMapPin,
  FiAward,
} from "react-icons/fi";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FiGithub size={20} />,
      url: "https://github.com/Abygurl-D",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin size={20} />,
      url: "https://www.linkedin.com/in/abigail-debrah-a54024b0/",
    },
    {
      name: "Twitter",
      icon: <FiTwitter size={20} />,
      url: "https://x.com/AbbyDtheDev",
    },
    {
      name: "Email",
      icon: <FiMail size={20} />,
      url: "mailto:your.email@example.com",
    },
  ];

  const footerLinks = [
    { name: "Home", href: "#home", icon: <FiHome size={16} /> },
    { name: "About", href: "#about", icon: <FiUser size={16} /> },
    { name: "Skills", href: "#skills", icon: <FiCode size={16} /> },
    { name: "Projects", href: "#projects", icon: <FiFolder size={16} /> },
    {
      name: "Testimonials",
      href: "#testimonials",
      icon: <FiAward size={16} />,
    },
    { name: "Contact", href: "#contact", icon: <FiMessageCircle size={16} /> },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#001F2D] to-[#001219] pt-16 pb-8">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-[#00BFA6]/50 to-transparent" />
        <div className="h-20 bg-gradient-to-b from-[#004D40] to-transparent opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative">
              <h3 className="text-3xl font-playfair font-bold text-white">
                Serwaa
              </h3>
              <div className="absolute -bottom-3 left-0 w-16 h-1 bg-gradient-to-r from-[#00BFA6] to-transparent rounded-full"></div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Crafting beautiful digital experiences with modern web
              technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[rgba(0,191,166,0.1)] text-[#00BFA6] hover:bg-[#00BFA6] hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,191,166,0.3)]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4">
            <div className="relative mb-6">
              <h4 className="text-xl font-playfair font-bold text-white">
                Quick Links
              </h4>
              <div className="absolute -bottom-3 left-0 w-12 h-1 bg-gradient-to-r from-[#00BFA6] to-transparent rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-[#00BFA6] transition-all duration-300 flex items-center gap-3 group"
                >
                  <span className="text-[#00BFA6]/70 group-hover:text-[#00BFA6] transition-colors duration-300">
                    {link.icon}
                  </span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <div className="relative mb-6">
              <h4 className="text-xl font-playfair font-bold text-white">
                Contact Info
              </h4>
              <div className="absolute -bottom-3 left-0 w-12 h-1 bg-gradient-to-r from-[#00BFA6] to-transparent rounded-full"></div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400 group">
                <span className="text-[#00BFA6]/70">
                  <FiMapPin size={16} />
                </span>
                Accra, Ghana
              </div>
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-3 text-gray-400 hover:text-[#00BFA6] transition-all duration-300 group"
              >
                <span className="text-[#00BFA6]/70 group-hover:text-[#00BFA6] transition-colors duration-300">
                  <FiMail size={16} />
                </span>
                your.email@example.com
              </a>
              <a
                href="tel:+233123456789"
                className="flex items-center gap-3 text-gray-400 hover:text-[#00BFA6] transition-all duration-300 group"
              >
                <span className="text-[#00BFA6]/70 group-hover:text-[#00BFA6] transition-colors duration-300">
                  <FiPhone size={16} />
                </span>
                +233 123 456 789
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#00BFA6]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-1">
              © {new Date().getFullYear()} Serwaa. Made with{" "}
              <FiHeart className="text-[#00BFA6]" /> in Ghana
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/privacy"
                className="text-sm text-gray-400 hover:text-[#00BFA6] transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-sm text-gray-400 hover:text-[#00BFA6] transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
