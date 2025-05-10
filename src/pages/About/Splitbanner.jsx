import React from "react";
import { motion } from "framer-motion";
import leftBg from "../../assets/about4.avif";
import rightBg from "../../assets/client1.avif";
import earningsBg from "../../assets/career1.avif";
import netzeroBg from "../../assets/ourteam1.avif";
import agenticBg from "../../assets/employee.avif";
import { Link } from "react-router-dom";

const SplitBanner = () => {
  const cards = [
    {
      title: "Career in Sardius",
      content: (
        <>
          <p>
            Offers global and career opportunities in emerging technologies.
          </p>
          <Link
            to="/careers"
            className="mt-4 inline-block bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-2 px-6 rounded-xl transition"
          >
            Learn More
          </Link>
        </>
      ),
      image: earningsBg,
    },
    {
      title: "Our Team",
      content: (
        <>
          <p>
            Our team at Sardius IT Technologies consists of experienced
            professionals dedicated to guiding global career pathways.
          </p>
          <Link
            to="/TeamMembers"
            className="mt-4 inline-block bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-2 px-6 rounded-xl transition"
          >
            Learn More
          </Link>
        </>
      ),
      image: netzeroBg,
    },
    {
      title: "Start a Conversation",
      content: (
        <>
          <p>
            Connect with Sardius IT Technologies for global career guidance and
            internship opportunities.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-block bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-2 px-6 rounded-xl transition"
          >
            Learn More
          </Link>
        </>
      ),
      image: agenticBg,
    },
  ];

  return (
    <>
      {/* Split Banner */}
      <div className="flex flex-col md:flex-row w-full h-[600px] md:h-[500px]">
        {/* Left Panel */}
        <div className="group relative w-full md:w-1/2 h-full flex items-center justify-center overflow-hidden">
          <img
            src={leftBg}
            alt="Left Background"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="relative z-10 text-white text-center max-w-sm sm:max-w-md px-4 sm:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-6xl font-bold mb-2"
            >
              About us
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg md:text-2xl font-semibold"
            >
              Report 2025
            </motion.h3>

            <div className="mt-4 transition-all duration-500 transform md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0">
              <p className="text-sm sm:text-md md:text-sm mb-4">
                Sardius IT Technologies is a global leader in AI-driven digital
                consulting, empowering businesses through innovative solutions
                in cloud, automation, and intelligent analytics.
              </p>

              <Link
                to="/about"
                className="mt-6 inline-block bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 px-10 rounded-2xl transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="group relative w-full md:w-1/2 h-full flex items-center justify-center overflow-hidden">
          <img
            src={rightBg}
            alt="Right Background"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="relative z-10 text-white text-center max-w-sm sm:max-w-md px-4 sm:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-6xl font-bold mb-2"
            >
              Our Client
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg md:text-2xl font-semibold"
            >
              Report 2025
            </motion.h3>

            <div className="mt-4 transition-all duration-500 transform md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0">
              <p className="text-sm sm:text-md md:text-sm mb-4">
                Trusted by clients across education and logistics, Sardius IT
                Technologies delivers results through deep domain expertise and
                agile digital innovation.
              </p>

              <Link
                to="/portfolio"
                className="mt-6 inline-block bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 px-10 rounded-2xl transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 h-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group relative h-[350px] p-6 bg-cover bg-center flex items-center justify-center overflow-hidden"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="absolute inset-0 bg-black/40 z-0"></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white p-4">
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 text-sm space-y-2">
                {card.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SplitBanner;
