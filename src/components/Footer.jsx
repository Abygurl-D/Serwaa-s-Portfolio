import React from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiHeart,
} from "react-icons/fi";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FiGithub size={20} />,
      url: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin size={20} />,
      url: "https://linkedin.com/in/yourusername",
    },
    {
      name: "Twitter",
      icon: <FiTwitter size={20} />,
      url: "https://twitter.com/yourusername",
    },
    {
      name: "Email",
      icon: <FiMail size={20} />,
      url: "mailto:your.email@example.com",
    },
  ];

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#001F2D] pt-16 pb-8">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-[#00BFA6]/50 to-transparent" />
        <div className="h-20 bg-gradient-to-b from-[#004D40] to-transparent opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold text-white">
              Serwaa
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Crafting beautiful digital experiences with modern web
              technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#00BFA6] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Accra, Ghana</li>
              <li>
                <a
                  href="mailto:your.email@example.com"
                  className="text-gray-400 hover:text-[#00BFA6] transition-colors duration-300"
                >
                  your.email@example.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+233123456789"
                  className="text-gray-400 hover:text-[#00BFA6] transition-colors duration-300"
                >
                  +233 123 456 789
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[rgba(0,191,166,0.1)] text-[#00BFA6] hover:bg-[#00BFA6] hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#00BFA6]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-1">
              © 2024 Serwaa. Made with <FiHeart className="text-[#00BFA6]" /> in
              Ghana
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
