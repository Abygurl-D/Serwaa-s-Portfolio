import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../App";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const PrivacyPolicy = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : "light"}`}>
      <div className="relative bg-gradient-to-b from-[#001F2D] to-[#004D40]">
        {/* Background Pattern */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwIiBzdHJva2U9IiMwMEJGQTYiIG9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] opacity-5" />
        </div>

        <div className="max-w-4xl mx-auto px-6 py-24 relative z-10">
          {/* Back Button */}
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-[#00BFA6] mb-8 hover:text-white transition-colors duration-300"
            >
              <FiArrowLeft />
              Back to Home
            </motion.button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8">
              Privacy Policy
            </h1>

            <div className="space-y-8 text-gray-300">
              <section className="glass-morphism p-8 rounded-2xl">
                <h2 className="text-2xl font-playfair font-bold text-white mb-4">
                  Introduction
                </h2>
                <p className="mb-4">
                  This Privacy Policy outlines how we collect, use, and protect
                  your personal information when you visit our website.
                </p>
              </section>

              <section className="glass-morphism p-8 rounded-2xl">
                <h2 className="text-2xl font-playfair font-bold text-white mb-4">
                  Information We Collect
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Usage data and analytics</li>
                  <li>Cookies and tracking information</li>
                </ul>
              </section>

              <section className="glass-morphism p-8 rounded-2xl">
                <h2 className="text-2xl font-playfair font-bold text-white mb-4">
                  How We Use Your Information
                </h2>
                <p className="mb-4">We use your information to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Respond to your inquiries and messages</li>
                  <li>Improve our website and services</li>
                  <li>Send relevant updates and communications</li>
                </ul>
              </section>

              <section className="glass-morphism p-8 rounded-2xl">
                <h2 className="text-2xl font-playfair font-bold text-white mb-4">
                  Data Protection
                </h2>
                <p className="mb-4">
                  We implement various security measures to protect your
                  personal information and ensure it remains confidential.
                </p>
              </section>

              <section className="glass-morphism p-8 rounded-2xl">
                <h2 className="text-2xl font-playfair font-bold text-white mb-4">
                  Your Rights
                </h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Access your personal data</li>
                  <li>Request data correction or deletion</li>
                  <li>Opt-out of communications</li>
                </ul>
              </section>

              <section className="glass-morphism p-8 rounded-2xl">
                <h2 className="text-2xl font-playfair font-bold text-white mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us at{" "}
                  <a
                    href="mailto:thehairapist123@gmail.com"
                    className="text-[#00BFA6] hover:text-white transition-colors duration-300"
                  >
                    thehairapist123@gmail.com
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
