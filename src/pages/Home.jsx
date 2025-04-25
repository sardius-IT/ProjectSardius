import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Video from "../assets/Sardius IT.mp4";

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

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Function to animate the text letter by letter
  const animateText = (text) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
        }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: index * 0.05, // Delay for each letter
              duration: 0.3,
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={Video}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-10 flex flex-col items-start justify-center h-full w-full bg-black/50 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-200">
          {animateText(slides[index].title)}
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-200">
          {animateText(slides[index].subtitle)}
        </p>
      </div>
    </div>
  );
};

export default Home;
