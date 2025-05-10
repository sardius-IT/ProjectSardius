// components/StrategySection.jsx
import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/about5.avif";
import jsIcon from "../../assets/backend.png";
import phpIcon from "../../assets/frontend.png";
import invisionIcon from "../../assets/devops.png";
import iosIcon from "../../assets/digitalmarketing.png";
import { FaBullseye, FaLightbulb, FaComments, FaTools } from "react-icons/fa";

const StrategySection = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
      },
    }),
  };

  return (
    <section className="flex flex-col lg:flex-row justify-center items-center px-6 sm:px-8 py-16 gap-12">
      {/* Left Side - Image */}
      <motion.div
        className="relative w-full max-w-xs sm:max-w-sm md:max-w-md"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={image}
          alt="Employee"
          className="rounded-3xl shadow-xl w-full"
        />

        {/* Overlay Icons */}
        <img
          src={phpIcon}
          alt="Frontend"
          className="absolute top-[-30px] left-1/4 transform -translate-x-1/2 w-14 sm:w-16"
        />
        <img
          src={jsIcon}
          alt="Backend"
          className="absolute top-1/4 left-[-10px] w-14 sm:w-16"
        />
        <img
          src={invisionIcon}
          alt="DevOps"
          className="absolute bottom-1/5 left-[-10px] w-14 sm:w-16"
        />
        <img
          src={iosIcon}
          alt="Digital Marketing"
          className="absolute bottom-[-10px] left-10 w-16 sm:w-20"
        />
      </motion.div>

      {/* Right Side - Content */}
      <motion.div
        className="max-w-xl w-full px-2"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h4 className="text-purple-600 font-semibold text-base sm:text-lg mb-2">
          Why Choose Us
        </h4>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 leading-tight">
          Our Investment And Business Strategies.
        </h2>

        {/* Feature Items */}
        {[ 
          {
            icon: <FaLightbulb className="text-purple-600 text-4xl sm:text-5xl mr-4" />,
            title: "Our Mission",
            description:
              "Our mission is to empower businesses through cutting-edge technology solutions tailored for efficiency, innovation, and sustainable growth.",
          },
          {
            icon: <FaComments className="text-purple-600 text-4xl sm:text-5xl mr-4" />,
            title: "Our Vision",
            description:
              "Our goal is to set industry standards in innovation, trust, and excellence by enabling businesses to harness the full potential of modern technologies.",
          },
          {
            icon: <FaBullseye className="text-purple-600 text-4xl sm:text-5xl mr-4" />,
            title: "Focus On Quality",
            description:
              "From development to deployment, we ensure our solutions are robust, scalable, and future-proof, providing lasting value to our clients.",
          },
          {
            icon: <FaTools className="text-purple-600 text-4xl sm:text-5xl mr-4" />,
            title: "End-to-End Services",
            description:
              "From consulting to deployment and ongoing support, we offer a complete suite of IT services under one roof for seamless execution.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="flex items-start mb-6"
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            custom={i + 1}
            viewport={{ once: true }}
          >
            {item.icon}
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-gray-500 text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default StrategySection;
