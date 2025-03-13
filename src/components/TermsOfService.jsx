import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../App";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const TermsOfService = () => {
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
              Terms of Service
            </h1>

            <div className="space-y-8 text-gray-300">
              <section className="glass-morphism p-8 rounded-2xl">
                <h2 className="text-2xl font-playfair font-bold text-white mb-4">
                  Agreement to Terms
                </h2>
                <p className="mb-4">
                  By accessing and using this website, you accept and agree to
                  be bound by the terms and conditions of this agreement.
                </p>
              </section>

              <section className="glass-morphism p-8 rounded-2xl">
                <h2 className="text-2xl font-playfair font-bold text-white mb-4">
                  Intellectual Property Rights
                </h2>
                <p className="mb-4">
                  All content on this website, including but not limited to
                  text, graphics, logos, images, and software, is the property
                  of Serwaa and is protected by intellectual property laws.
                </p>
              </section>

              <section className="glass-morphism p-8 rounded-2xl">
                <h2 className="text-2xl font-playfair font-bold text-white mb-4">
                  User Responsibilities
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Respect the rights of other users</li>
                </ul>
              </section>

              <section className="glass-morphism p-8 rounded-2xl">
                <h2 className="text-2xl font-playfair font-bold text-white mb-4">
                  Limitation of Liability
                </h2>
                <p className="mb-4">
                  We shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages resulting from your use of
                  or inability to use the website.
                </p>
              </section>

              <section className="glass-morphism p-8 rounded-2xl">
                <h2 className="text-2xl font-playfair font-bold text-white mb-4">
                  Changes to Terms
                </h2>
                <p className="mb-4">
                  We reserve the right to modify these terms at any time. We
                  will notify users of any changes by updating the date at the
                  top of this agreement.
                </p>
              </section>

              <section className="glass-morphism p-8 rounded-2xl">
                <h2 className="text-2xl font-playfair font-bold text-white mb-4">
                  Contact Information
                </h2>
                <p>
                  For any questions regarding these Terms of Service, please
                  contact us at{" "}
                  <a
                    href="mailto:your.email@example.com"
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

export default TermsOfService;
