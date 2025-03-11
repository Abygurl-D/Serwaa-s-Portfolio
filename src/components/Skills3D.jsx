import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../App";

const skillsData = [
  {
    category: "Frontend Development",
    description: "Building beautiful, responsive user interfaces",
    skills: [
      {
        name: "HTML5",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#E34F26"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>`,
        level: 90,
      },
      {
        name: "CSS3",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#1572B6"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>`,
        level: 90,
      },
      {
        name: "JavaScript",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#F7DF1E"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>`,
        level: 85,
      },
      {
        name: "React",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#61DAFB"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>`,
        level: 90,
      },
      {
        name: "TypeScript",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="#3178C6"><path d="M0 200V0h400v400H0M316.7 130.1c-16-6.6-31.1-9.5-45.6-9.5-13.5 0-25.3 2.3-35.3 7-10 4.7-14.9 11.6-14.9 21.1 0 5.3 1.9 9.8 5.6 13.5 3.8 3.7 8.5 6.9 14.2 9.6 5.7 2.7 13.2 5.2 22.6 7.4 11.8 2.9 21.7 5.8 29.7 8.6 8 2.8 14.9 7.2 20.7 13.1 5.8 5.9 8.7 14.1 8.7 24.4 0 11.3-3.5 20.9-10.6 28.8-7.1 7.9-16.7 13.9-28.9 18-12.2 4.1-25.8 6.2-41 6.2-12 0-24.1-1.3-36.4-3.8-12.3-2.5-23.1-6-32.4-10.5v-40.2c10.9 6.5 22.5 11.5 34.7 15 12.2 3.5 23.7 5.3 34.4 5.3 14.5 0 26.9-2.5 37.2-7.6 10.3-5.1 15.4-12.4 15.4-22.1 0-6.2-2.1-11.3-6.2-15.4-4.1-4.1-9.3-7.5-15.6-10.2-6.3-2.7-14.5-5.3-24.6-7.8-11.4-2.9-21-5.7-28.7-8.4-7.7-2.7-14.3-6.8-19.8-12.3-5.5-5.5-8.3-13.2-8.3-23.1 0-10.7 3.1-19.8 9.4-27.3 6.3-7.5 15.2-13.2 26.7-17.1 11.5-3.9 24.8-5.9 39.9-5.9 11.1 0 22.5 1.1 34.1 3.3 11.6 2.2 21.7 5 30.3 8.4v37.9c-9.9-5.3-20.1-9.3-30.6-12zM162 285.9h-96.5v-33.7H200v33.7h-96.8v114.6h-41.2V285.9z"/></svg>`,
        level: 85,
      },
    ],
  },
  {
    category: "UI/UX Design",
    description: "Creating intuitive and engaging user experiences",
    skills: [
      {
        name: "Figma",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 57" fill="#F24E1E"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/><path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#1ABCFE"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#1ABCFE"/></svg>`,
        level: 90,
      },
      {
        name: "Adobe XD",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#FF61F6"><path d="M480 0H32C14.3 0 0 14.3 0 32v448c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zm-89.7 418.5h-59.5L195.7 93.5h59.5l135.1 325zM146.2 288h59.5l26.8 64.5h-59.5L146.2 288z"/></svg>`,
        level: 85,
      },
    ],
  },
];

const Skills = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      id="skills"
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
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-[#00BFA6] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="relative"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                  {category.category}
                </h3>
                <p className="text-gray-400">{category.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.02 }}
                    className="relative overflow-hidden rounded-2xl bg-[rgba(0,15,23,0.8)] backdrop-blur-lg border border-[#00BFA6]/20 shadow-[0_0_20px_rgba(0,191,166,0.15)] p-6"
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className="w-12 h-12 mb-4"
                        dangerouslySetInnerHTML={{ __html: skill.icon }}
                      />
                      <h4 className="text-lg font-medium text-white mb-3">
                        {skill.name}
                      </h4>
                      <div className="w-full h-2 bg-[rgba(0,191,166,0.1)] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-[#00BFA6] rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                      <span className="text-[#00BFA6] text-sm mt-2">
                        {skill.level}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
