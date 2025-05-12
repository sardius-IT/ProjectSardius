import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CardsPage from "../pages/Cards/Cards";
import TeamCategories from "../pages/Team/Teamcategories";
import Splitbanner from "../pages/About/Splitbanner";
import video1 from "../assets/programming.mp4";
import video2 from "../assets/Sardius IT.mp4";
import video3 from "../assets/programming2.mp4";
import video4 from "../assets/programming 3.mp4";
import { Link } from "react-router-dom";
import StatsSection from "../pages/About/StatsSection";
import ContactUsButton from "../pages/Contactusbutton";
import ScrollToTopButton from "../pages/Toparrow";

const slides = [
  {
    title: "Innovate, Elevate",
    subtitle: "We Build. We Market.",
    video: video3,
  },
  {
    title: "Accelerate with Sardius ",
    subtitle: "We Grow Your Business",
    video: video4,
  },
  {
    title: "Future-Ready Solutions",
    subtitle: "Empowering Digital Excellence",
    video: video3,
  },
];

const letterVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const animateText = (text) => (
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
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );

  const cards = [
    {
      text: "Expert Team of Professionals",
      content:
        "Our team consists of highly skilled and certified professionals with deep expertise across various IT domains.",
      bgColor: "bg-red-700",
      pattern: "bg-[url('/patterns/red.svg')]",
      link: "/careers",
    },
    {
      text: "Proven Track Record",
      content:
        "Our proven history of client success demonstrates our ability to overcome challenges and deliver impactful solutions every time.",
      bgColor: "bg-blue-700",
      pattern: "bg-[url('/patterns/blue.svg')]",
      link: "/careers",
    },
    {
      text: "Dedicated Support",
      content:
        "Our commitment to client support ensures that you always have a reliable partner to rely on for ongoing success.",
      bgColor: "bg-purple-800",
      pattern: "bg-[url('/patterns/purple.svg')]",
      link: "/careers",
    },
  ];

  const stages = [
    {
      year: "Year 1",
      role: "Trainee Developer",
      desc: "Hands-on Training and Mentorship.",
    },
    {
      year: "Year 2",
      role: "Junior Developer",
      desc: "Handling live Projects and Building Confidence.",
    },
    {
      year: "Year 3+",
      role: "Team Lead / Specialist",
      desc: "Leading Projects and Mentoring Freshers.",
    },
  ];

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          key={slides[index].video}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={slides[index].video}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4 sm:px-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-blue-200 mb-4">
            {animateText(slides[index].title)}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
            {animateText(slides[index].subtitle)}
          </p>
        </div>
      </div>

      {/* Split Banner */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-12 px-4 sm:px-8"
      >
        <Splitbanner />
      </motion.section>

      {/* Stats */}
      <motion.section
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 px-4 sm:px-8"
      >
        <StatsSection />
      </motion.section>

      {/* Team */}
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-12 px-4 sm:px-8"
      >
        <TeamCategories />
      </motion.section>

      {/* Services Cards */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-12 px-4 sm:px-8"
      >
        <h2 className="text-4xl sm:text-6xl font-bold text-center mb-10">
          <span className="bg-gradient-to-r from-blue-400 via-pink-400 to-gray-800 bg-clip-text text-transparent">
            Our Services
          </span>
        </h2>
        <CardsPage />
      </motion.section>

      {/* Why Choose Us Cards */}
      <h2 className="text-3xl sm:text-5xl font-bold px-4 sm:px-8 my-10 text-white">
        Why Sardius IT Technologies Stands Above the Rest
      </h2>

      <section className="bg-black py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative group ${card.bgColor} ${card.pattern} bg-cover bg-center text-white h-72 rounded-md shadow-lg overflow-hidden flex items-center justify-center`}
            >
              <h2 className="absolute text-center px-6 text-xl font-serif transition-all duration-500 ease-in-out opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-90">
                {card.text}
              </h2>
              <div className="absolute flex flex-col items-center justify-center px-6 text-center transition-all duration-500 ease-in-out opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100">
                <p className="text-sm font-serif mb-4">{card.content}</p>
                <Link
                  to={card.link}
                  className="inline-flex items-center text-white font-semibold px-3 py-2 relative group"
                >
                  Learn more
                  <svg
                    className="ml-2 transition-transform group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                  <span className="absolute bottom-0 left-0 h-[1px] w-full bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Career Growth Timeline */}
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-100 mb-6 px-4 sm:px-8">
        Career Growth at Sardius
      </h2>

      <motion.section
        className="mb-20 px-4 sm:px-8 relative"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="absolute left-6 top-0 w-1 bg-blue-500 rounded"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.2 }}
        />
        <div className="ml-10 space-y-10 relative">
          {stages.map((stage, i) => (
            <motion.div
              key={i}
              variants={itemVariant}
              className="flex flex-col sm:flex-row items-start sm:space-x-4 space-y-2 sm:space-y-0"
            >
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center z-10">
                {i + 1}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-400">
                  {stage.year}: {stage.role}
                </h3>
                <p className="text-gray-300 mt-1">{stage.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Scroll to Top Button */}
      <section className="p-4 sm:px-8 mt-10 space-y-6">
        <ScrollToTopButton />
      </section>
    </>
  );
};

export default Home;
