import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Video from "../assets/Sardius IT.mp4";
import CardsPage from "../pages/Cards/Cards";

// Slide data
const slides = [
  {
    title: "Innovate, Elevate",
    subtitle: "We Build. We Market.",
  },
  {
    title: "Accelerate with Sardius IT",
    subtitle: "We Grow Your Business",
  },
  {
    title: "Future-Ready Solutions",
    subtitle: "Empowering Digital Excellence",
  },
];

// Variants for single letter animation
const letterVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Function to animate text letter-by-letter
  const animateText = (text) => {
    return (
      <motion.div
        className="flex justify-center flex-wrap"
        initial="initial"
        animate="animate"
      >
        {text.split("").map((char, idx) => (
          <motion.span
            key={idx}
            variants={letterVariants}
            transition={{ delay: idx * 0.05 }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={Video}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-start justify-center text-center h-full px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-blue-200 mb-4">
            {animateText(slides[index].title)}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
            {animateText(slides[index].subtitle)}
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <section className="">
        <CardsPage />
      </section>
    </>
  );
};

export default Home;
