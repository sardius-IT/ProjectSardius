import React, { useState } from "react";
import { motion } from "framer-motion";
import MulitileAI from "../../assets/frontend2.png";
import Mulitile from "../../assets/frontend1.png";
import Back from "../../assets/backend1.avif";
import Backe from "../../assets/backend2.avif";
import Qa from "../../assets/qa1.avif";
import Qas from "../../assets/qa2.avif";
import Devo from "../../assets/deops1.avif";
import Devops from "../../assets/devops2.avif";
import Mobile from "../../assets/mobile1.avif";
import Mobiles from "../../assets/mobile2.avif";
import Staffing from "../../assets/staffing1.avif";
import Staffings from "../../assets/staffing2.avif";
import Friends from "../../assets/staffing.avif";
import Dm1 from "../../assets/dm1.avif";
import Dm2 from "../../assets/dm2.avif";
import Dm3 from "../../assets/dm3.avif";
import Dm4 from "../../assets/dm4.avif";
import Dm5 from "../../assets/dm5.avif";
import Dm6 from "../../assets/dm6.jpg";

import Abstract from "../../assets/abstract.avif";
import Business from "../../assets/business.avif";

import { Link } from "react-router-dom";
import Developer from "../Cards/Developer";


// Sample cards
const cards = [
  {
    category: "Development",
    title: "Frontend Developer",
    image: MulitileAI,
    hoverText: "At Sardius IT Technologies, we specialize in creating responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and modern frameworks.",
    hoverimage:Mulitile ,
    link: "/developer", // ✅ USE A STRING PATH, not Developer component
  },
  {
    category: "Development",
    title: "Backend Developer",
    image: Back,
    hoverText: "We build robust, secure server-side applications using technologies like Node.js, Python, and databases.",
    hoverimage: Backe,
    link: "/leadership",
  },
  {
    category: "Development",
    title: "QA Engineer",
    image: Qa,
    hoverText: "We ensure the quality and reliability of software through rigorous testing, automation, and defect tracking.",
    hoverimage: Qas,
    link: "/leadership",
  },
  {
    category: "Development",
    title: "DevOps Engineer",
    image: Devo,
    hoverbackground: "bg-gradient-to-r from-purple-500 to-pink-500",
    hoverText: "We streamline software development and deployment by integrating automation, CI/CD pipelines, and cloud infrastructure.",
    hoverimage:Devops,
    link: "/leadership",
  },
  {
    category: "Development",
    title: "Mobile App Developer",
    image: Mobile,
    hoverText: "They specialize in building mobile applications for Android and iOS platforms.",
    hoverimage: Mobiles,
    link: "/leadership",
  },
  {
    category: "Staffing",
    title: "Permanent Staffing",
    background: "bg-gradient-to-br from-purple-300 via-pink-300 to-pink-200",
    hoverText: "At Sardius IT Technologies, our permanent staffing solutions help organizations build strong, long-term teams by sourcing and placing highly qualified IT professionals. We focus on understanding your company culture and technical needs to deliver candidates who align with your goals and contribute to sustained growth.",
    image: Friends,
    link: "/Staffing",
  },
  {
    category: "Staffing",
    title: "Temporary/Contract Staffing",
    background: "bg-gradient-to-br from-purple-300 via-pink-300 to-pink-200",
    hoverText: "We offer both temporary and contract staffing solutions to help businesses meet their short-term and project-based needs. Our skilled IT professionals are quickly onboarded to deliver high-quality results, providing flexibility and expertise without long-term commitments.",
    image: Staffings ,
    link: "/Staffing",
  },
  {
    category: "Staffing",
    title: "Staff Augmentation",
    background: "bg-gradient-to-br from-purple-300 via-pink-300 to-pink-200",
    hoverText: "Our staffing augmentation services provide businesses with specialized IT talent to supplement their existing teams. We offer flexible, on-demand resources to fill skill gaps and accelerate project timelines, ensuring your team has the expertise needed to drive success.",
    image: Staffing,
    link: "/Staffing",
  },
  {
    category: "Staffing",
    title: "Remote/Offshore Staffing",
    background: "bg-gradient-to-br from-pink-300 via-pink-400 to-pink-200",
    hoverText: "Our remote and offshore staffing solutions connect businesses with top-tier IT professionals from around the world.",
    hoverimage: Abstract,
    image: Staffings,
    link: "/Staffing",
  },
  {
    category: "Digital Marketing",
    title: "Social Media Marketing",
    background: "bg-gradient-to-br from-pink-300 via-pink-400 to-pink-200",
    hoverText: "We specialize in creating tailored social media marketing strategies to boost brand visibility and engagement.",
    hoverimage:Dm5,
    image: Dm6,
    link: "/DigitalMarketing",
  },
  {
    category: "Digital Marketing",
    title: "Search Engine Optimization (SEO)",
    background: "bg-gradient-to-br from-pink-300 via-pink-400 to-pink-200",
    hoverText: "We offer expert SEO services to enhance your website’s visibility and drive organic traffic.",
    hoverimage:Dm1,
    image: Dm2,
    link: "/DigitalMarketing",
  },
  {
    category: "Digital Marketing",
    title: "Content Marketing",
    background: "bg-gradient-to-br from-pink-300 via-pink-400 to-pink-200",
    hoverText: "Our content marketing services help businesses create valuable, engaging content to attract and retain customers..",
    hoverimage:Dm3,
    image:Dm4,
    link: "/economy",
  },
  
  {
    category: "Digital Marketing",
    title: "Pay-Per-Click (PPC) Advertising",
    background: "bg-gradient-to-br from-pink-300 via-pink-400 to-pink-200",
    hoverText: "Our PPC services drive targeted traffic and maximize ROI through strategic paid ad campaigns",
    hoverimage: Dm3,
    image: Dm4,
    link: "/economy",
  },
  {
    category: "Digital Marketing",
    title: "Youtube Marketing",
    background: "bg-gradient-to-br from-pink-300 via-pink-400 to-pink-200",
    hoverText: "Our YouTube marketing services help businesses grow their brand through engaging video content.",
    hoverimage: Dm3,
    image:Dm5,
    link: "/economy",
  },
];

const filters = ["Development", "Staffing", "Digital Marketing"];

const CardsPage = () => {
  const [activeFilter, setActiveFilter] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  const defaultCards = [
    ...cards.filter((card) => card.category === "Development").slice(0, 1),
    ...cards.filter((card) => card.category === "Staffing").slice(0, 1),
    ...cards.filter((card) => card.category === "Digital Marketing").slice(0, 1),
  ];

  const filteredCards = activeFilter
    ? cards.filter((card) => card.category === activeFilter).slice(0, 6)
    : defaultCards;

  return (
    <div className="min-h-screen bg-black px-8 py-10 text-white">
      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-8 mb-10 relative">
        {filters.map((filter) => (
          <motion.button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="relative px-8 py-2  rounded-2xl font-bold text-white"
          >
            {filter}
            {activeFilter === filter && (
              <motion.div
                layoutId="underline"
                className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-500 rounded-full"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-10 justify-center">
        {filteredCards.map((card, idx) => (
          <motion.div
            key={idx}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
            className={`relative w-72 flex flex-col justify-between rounded-lg overflow-hidden shadow-lg cursor-pointer ${
              card.background
                ? card.background
                : card.dark
                ? "bg-[#0a0a0a]"
                : "bg-white"
            }`}
          >
            {/* Normal Content */}
            <div
              className={`p-10 transition-all duration-300 ${
                hoveredCard === idx ? "opacity-0" : "opacity-100"
              }`}
            >
              <p
                className={`text-sm font-semibold ${
                  card.dark ? "text-white" : "text-gray-800"
                }`}
              >
                {card.category}
              </p>
              <h2
                className={`mt-4 font-bold ${
                  card.dark ? "text-white" : "text-black"
                }`}
              >
                {card.title}
              </h2>
            </div>

            {/* Normal Image */}
            {card.image && (
              <img
                src={card.image}
                alt="Card illustration"
                className={`w-full object-cover h-52 transition-all duration-300 ${
                  hoveredCard === idx ? "opacity-0" : "opacity-100"
                }`}
              />
            )}

            {/* Hover content */}
            {hoveredCard === idx && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-start bg-gradient-to-r from-purple-500 to-pink-500 text-center p-4 space-y-4"
              >
                <div className="text-lg font-bold">{card.title}</div>
                <p className="flex text-start text-sm">{card.hoverText}</p>
                {card.hoverimage && (
                  <img
                    src={card.hoverimage}
                    alt="Hover illustration"
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                )}
                <Link
                to={card.link}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition uppercase"
              >
         Know More
              </Link>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Go Back Button */}
      {activeFilter && (
        <div className="flex justify-end py-5">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter("")}
            className="px-4 py-2 text-white rounded-2xl border font-bold hover:bg-blue-700 transition"
          >
            Go Back
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default CardsPage;

