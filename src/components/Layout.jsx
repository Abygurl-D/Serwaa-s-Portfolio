import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../App";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-primary text-white-100" : "bg-white text-primary"
      }`}
    >
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
