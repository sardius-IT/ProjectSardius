// src/pages/Sectors.jsx

import { useState } from "react";
import { motion } from "framer-motion";
import CardsPage from "../pages/Cards/Cards";
import Demand from "../pages/Team/Demand";
import heroVideo from "../assets/Sardius IT.mp4";
import Splitbanner from "../pages/About/Splitbanner";
import image1 from "../assets/sector1.avif";
import image2 from "../assets/sector2.avif";
import image3 from "../assets/sector3.avif";
import image4 from "../assets/sector5.avif";
import TrustedBrands from "../pages/Trustedbrands";
import ContactUsButton from "../pages/Contactusbutton";
import ScrollToTopButton from "../pages/Toparrow";

const Sectors = () => {
  const [filter, setFilter] = useState('');
  const [activeFilter, setActiveFilter] = useState('');

  const handleFilterClick = (filterType) => {
    setActiveFilter(filterType === activeFilter ? '' : filterType);
  };

  const handleSelect = (option) => {
    setFilter(option);
    setActiveFilter('');
  };

  const insights = [
    {
      title: "Navigating Trade Tariff Disruptions in Global Supply Chains: A Call to Action",
      subtitle: "Making Supply Chains a Competitive Advantage.Making Supply Chains a Competitive Advantage.",
      image: image1,
      reverse: false,
    },
    {
      title: "The Rise of Agentic AI",
      subtitle:
        "Agentic AI enables autonomous decision-making by continuously learning and adapting, transforming industries while requiring robust governance and a strategic balance between innovation and control.",
      image: image2,
      reverse: true,
    },
    {
      title: "Agentic AI: The New Frontier in Financial Services Innovation",
      subtitle:
        "Agentic AI is redefining the future of financial services, enabling autonomous decision-making, automation, and intelligent operations at scale.",
      image: image3,
      reverse: false,
    },
    {
      title: "How Your Business Can Leverage AI to its Full Potential",
      subtitle:
        "Explore a comprehensive range of effective strategies aimed at aligning business goals with AI and Gen AI to maximize outcomes. From understanding the intricacies of AI integration to identifying tailored approaches for leveraging Gen AI capabilities, uncover the key tactics and best practices that can propel your organization towards achieving enhanced results and sustainable growth.",
      image: image4,
      reverse: true,
    },
  ];

  return (
    <>
      {/* Hero Section with Single Video */}
      <section className="relative min-h-[70vh] pt-20 flex items-center justify-center text-center overflow-hidden">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-white px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-blue-400">
            Stay ahead of change
          </h1>
          <p className="mt-6 max-w-3xl text-lg md:text-xl text-gray-200 mx-auto">
            Explore our research, insights, and examples of real client impact, designed to help you embrace the key forces of change and get to value faster.
          </p>
        </motion.div>
      </section>

      <motion.section
        className="min-h-screen"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <CardsPage filter={filter} />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full py-10 px-4"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          {insights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row ${item.reverse ? "md:flex-row-reverse" : ""} items-center gap-6`}
            >
              <div className="md:w-1/2 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-2xl shadow"
                />
              </div>
              <div className="md:w-1/2 w-full px-2 md:px-4">
                <h2 className="text-2xl font-semibold text-gray-50 mb-2">{item.title}</h2>
                <hr className="w-20 h-1 bg-purple-600 border border-purple-600 " />
                <p className="text-gray-400 py-2">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-12"
      >
        <Splitbanner />
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-12"
      >
        <TrustedBrands />
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="p-4"
      >
        <ScrollToTopButton />
      </motion.section>

     
    </>
  );
};

export default Sectors;
