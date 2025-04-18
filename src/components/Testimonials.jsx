import React, { useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../App";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonialData = [
  {
    name: "Naa Shika Asante",
    role: "C.E.O of Acquwaa Naturals",
    image:
      "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1741811305/nash_tdjsgj.webp",
    content:
      "Working with Serwaa was an absolute pleasure. Her attention to detail and creative problem-solving skills made our project a huge success.",
    company: "Acquwaa Naturals",
  },
  {
    name: "Ralphael Gyambrah",
    role: "Partner at Asarfo-Adjei Attorneys",
    image:
      "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1741811253/ralph_zhgabt.webp",
    content:
      "Serwaa's expertise in modern web technologies  helped us bring our vision to life.",
    company: "Asarfo-Adjei Attorneys",
  },
  {
    name: "Isaac Osei",
    role: "C.E.O of Ike-Dian Fashion",
    image:
      "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1741811265/osei_y167vp.webp",
    content:
      "The level of professionalism and creativity that Serwaa brings to the table is exceptional. She's a true asset to any project.",
    company: "Ike-Dian Fashion",
  },
  {
    name: "Calvin  Bekoe",
    role: "Lead Developer at Camm Fusion",
    image:
      "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1741811278/calvin_osibo9.webp",
    content:
      "Her ability to write clean, efficient code while maintaining excellent user experience is remarkable. A true professional in every sense.",
    company: "Camm Fusion",
  },
  {
    name: "Mabel Hackman",
    role: "Web Developer at Camm Fusion",
    image:
      "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1741811287/mabel_asfn4r.webp",
    content:
      "Collaborating with Serwaa was inspiring. Her understanding of both design principles and technical implementation is rare to find.",
    company: "Camm Fusion",
  },
  {
    name: "Jay Banner",
    role: "Manager at Nacee Music",
    image:
      "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1741811242/Jay_lfh4qt.webp",
    content:
      "Serwaa delivered beyond our expectations. Her frontend expertise and attention to user experience transformed our application.",
    company: "Nacee Music",
  },
];

const companyLogos = [
  {
    name: "Acquwaa Naturals",
    logo: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1741208487/android-chrome-512x512_i2xrfj.png",
  },
  {
    name: "Asarfo-Adjei Attorneys",
    logo: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1741809986/vgb-images-2_esvoos.jpg",
  },
  {
    name: "Ike-Dian Fashion",
    logo: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1741700662/WhatsApp_Image_2025-03-11_at_13.39.58_mjgekn.jpg",
  },
  {
    name: "Camm Fusion",
    logo: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1741810540/DALL_E_2025-03-12_20.15.09_-_A_sleek_and_modern_logo_for_Camm_Fusion_a_web_development_company._The_design_features_a_fusion_of_abstract_digital_elements_such_as_interconnecte_zzwhwr.webp",
  },
  {
    name: "Nacee Music",
    logo: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1741810860/DALL_E_2025-03-12_20.20.33_-_A_bold_and_artistic_logo_for_Nacee_Music_a_modern_music_brand._The_design_features_a_combination_of_sleek_typography_and_iconic_musical_elements_li_usm0zt.webp",
  },
];

const TestimonialCard = ({ data, isLeft }) => (
  <motion.div
    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: isLeft ? 50 : -50 }}
    className="relative overflow-hidden rounded-2xl bg-[rgba(0,15,23,0.8)] backdrop-blur-lg border border-[#00BFA6]/20 shadow-[0_0_20px_rgba(0,191,166,0.15)] p-8"
  >
    <div className="absolute top-0 left-0 w-full h-1">
      <motion.div
        className="h-full bg-[#00BFA6]"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 5, ease: "linear" }}
      />
    </div>
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00BFA6] to-transparent opacity-20 blur-lg transform scale-150" />
        <img
          src={data.image}
          alt={data.name}
          className="w-20 h-20 rounded-full object-cover border-2 border-[#00BFA6] relative z-10"
        />
      </div>
      <p className="text-base md:text-lg text-gray-300 mt-6 mb-4 italic relative">
        <span className="absolute -top-4 -left-2 text-4xl text-[#00BFA6] opacity-50">
          "
        </span>
        {data.content}
        <span className="absolute -bottom-4 -right-2 text-4xl text-[#00BFA6] opacity-50">
          "
        </span>
      </p>
      <h3 className="text-lg font-playfair font-bold text-white">
        {data.name}
      </h3>
      <p className="text-[#00BFA6] text-sm">{data.role}</p>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const { darkMode } = useContext(ThemeContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev + 2) % testimonialData.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonials();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
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
          <h2
            className={`font-playfair text-4xl sm:text-5xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-[#001F2D]"
            }`}
          >
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-[#00BFA6] mx-auto" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="relative mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <TestimonialCard
                key={`left-${currentIndex}`}
                data={testimonialData[currentIndex]}
                isLeft={true}
              />
              <TestimonialCard
                key={`right-${(currentIndex + 1) % testimonialData.length}`}
                data={
                  testimonialData[(currentIndex + 1) % testimonialData.length]
                }
                isLeft={false}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 relative"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00BFA6]/0 via-[#00BFA6]/5 to-[#00BFA6]/0" />
          <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00BFA6]/50 to-transparent" />
          <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00BFA6]/50 to-transparent" />

          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-2xl font-playfair font-bold text-center mb-16 ${
              darkMode ? "text-white" : "text-[#001F2D]"
            }`}
          >
            Trusted By Industry Leaders
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center max-w-6xl mx-auto px-6">
            {companyLogos.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  filter: "brightness(1.2)",
                  boxShadow: "0 0 30px rgba(0, 191, 166, 0.3)",
                }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[rgba(0,15,23,0.9)] to-[rgba(0,15,23,0.95)] backdrop-blur-xl border border-[#00BFA6]/10 aspect-square"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00BFA6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[#00BFA6] opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />

                {/* Logo Container */}
                <div className="relative h-full w-full p-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00BFA6]/0 to-[#00BFA6]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-full w-full object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-500"
                  />

                  {/* Company Name Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0,15,23,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-[#00BFA6] text-lg font-medium">
                      {company.name}
                    </p>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-[#00BFA6]/10 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
