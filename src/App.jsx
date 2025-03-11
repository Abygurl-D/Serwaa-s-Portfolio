import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills3D";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";

// Create theme context
export const ThemeContext = createContext();

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.classList.toggle("light", !darkMode);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div
                className={`min-h-screen transition-colors duration-300 ${
                  darkMode ? "dark" : "light"
                }`}
              >
                <div className="relative">
                  <Navbar />
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Testimonials />
                  <Contact />
                  <Footer />
                </div>
              </div>
            }
          />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
