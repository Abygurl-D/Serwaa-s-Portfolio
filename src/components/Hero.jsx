import React, { useContext, Suspense, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { ThemeContext } from "../App";
import CanvasLoader from "./CanvasLoader";

// Temporary placeholder component
const Computers = ({ isMobile }) => {
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <mesh scale={isMobile ? 0.7 : 0.75} position={[0, -3, -1.5]}>
        <torusGeometry args={[3, 1, 16, 100]} />
        <meshStandardMaterial color="#00BFA6" metalness={0.8} roughness={0.2} />
      </mesh>
    </mesh>
  );
};

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);
  const [isMobile, setIsMobile] = React.useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [currentText, setCurrentText] = React.useState(0);
  const texts = ["Hi, I'm Abigail Serwaa Debrah", " A Frontend Web Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className={`relative w-full h-screen overflow-hidden ${
        darkMode
          ? "bg-gradient-to-b from-[#001F2D] to-[#004D40]"
          : "bg-gradient-to-b from-white to-[#E8F5F3]"
      }`}
      id="home"
    >
      {/* Animated background patterns */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className={`absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwIiBzdHJva2U9IiMwMEJGQTYiIG9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] ${
            darkMode ? "opacity-10" : "opacity-5"
          }`}
        />
      </div>

      {/* Hero Image with Clip Path */}
      <div className="absolute right-0 top-0 w-[45%] h-screen overflow-hidden hidden lg:block">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-l from-[#00BFA6]/20 to-transparent mix-blend-overlay" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=800&auto=format&fit=crop&q=60')",
              clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,31,45,0.7)] to-transparent" />
          </div>
        </div>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 flex flex-col items-start justify-center px-6 lg:px-20 z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div
            className={`text-5xl sm:text-7xl font-playfair font-black ${
              darkMode ? "text-white" : "text-[#001F2D]"
            } mb-6 h-[180px] sm:h-[240px] relative overflow-hidden`}
          >
            <motion.div
              key={currentText}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{
                y: { type: "spring", stiffness: 100, damping: 20 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-x-0"
            >
              {texts[currentText]}
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-xl sm:text-2xl ${
              darkMode ? "text-gray-300" : "text-gray-700"
            } mb-8 font-light`}
          >
            Crafting pixel-perfect, responsive web experiences
            <br className="hidden sm:block" /> with modern technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start justify-start gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-[#00BFA6] text-white rounded-full font-medium text-lg hover:bg-[#00A896] transition-colors duration-300 w-full sm:w-auto"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-[#00BFA6] text-[#00BFA6] rounded-full font-medium text-lg hover:bg-[#00BFA6] hover:text-white transition-colors duration-300 w-full sm:w-auto"
            >
              Let's Connect
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 3D Model Section */}
      <div className="absolute w-full h-[50vh] bottom-0 lg:hidden">
        <Canvas
          frameloop="demand"
          shadows
          dpr={[1, 2]}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              autoRotate
              autoRotateSpeed={5}
            />
            <Computers isMobile={isMobile} />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 w-full flex justify-center items-center"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-[35px] h-[64px] rounded-3xl border-4 border-[#00BFA6] flex justify-center items-start p-2"
        >
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-[#00BFA6]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
