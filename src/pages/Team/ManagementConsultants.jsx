import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import image1 from "../../assets/deops1.avif"; // Replace with actual consulting images
import image2 from "../../assets/devops2.avif";
import image3 from "../../assets/resource.avif";
import image4 from "../../assets/mulitile AI.webp";
import TrustedBrands from "../../pages/Trustedbrands";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactUsButton from "../../pages/Contactusbutton";
import ScrollToTopButton from "../../pages/Toparrow";

export default function ManagementConsultants() {
  const images = [image1, image2];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const slideIn = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const hoverEffect = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };
  const steps = [
    {
      number: "1",
      title: "Connect with a Consulting Specialist",
      description:
        "Our specialist will assess your business challenges and recommend the right consulting expertise for your industry and goals.",
    },
    {
      number: "2",
      title: "Meet Vetted Consultants",
      description:
        "We’ll match you with seasoned consultants who’ve delivered successful transformations in similar domains.",
    },
    {
      number: "3",
      title: "Engage with Confidence",
      description:
        "Start with a short-term engagement or consultation. Expand only when you're satisfied with the impact and insights.",
    },
  ];

  const skillCategories = [
    {
      title: "Business Strategy & Operations",
      skills: [
        "Market Entry Strategy",
        "Cost Optimization",
        "Growth Planning",
        "Business Model Innovation",
        "Operations Excellence",
        "Change Management",
      ],
    },
    {
      title: "Digital Transformation",
      skills: [
        "Enterprise Architecture",
        "Process Automation",
        "AI-Driven Analytics",
        "Cloud Migration",
        "IT Strategy",
        "Customer Experience (CX)",
      ],
    },
    {
      title: "Financial & Risk Advisory",
      skills: [
        "M&A Advisory",
        "Financial Modeling",
        "Compliance & Risk",
        "Revenue Forecasting",
        "Cost-Benefit Analysis",
      ],
    },
  ];

  const teamCategories = [
    {
      title: "Strategy Consultants",
      description:
        "Our Strategy Consultants help shape your long-term vision, create actionable roadmaps, and guide you through high-stakes decisions.",
      path: "/StrategyConsultants",
    },
    {
      title: "Technology Consultants",
      description:
        "Leverage our Technology Consultants to drive digital innovation and align your IT Roadmap with business objectives.",
      path: "/TechnologyConsultants",
    },
    {
      title: "Financial Consultants",
      description:
        "Our Financial Consultants bring expertise in structuring deals, managing risk, and driving profitability.",
      path: "/FinancialConsultants",
    },
  ];
  const consultants = [
    {
      name: "Jakub Rehor",
      role: "Finance Expert",
      previous: "McKinsey & Company",
      image: image1,
    },
    {
      name: "Vincent Grandjean",
      role: "Business Strategist",
      previous: "EY",
      image: image3,
    },
    {
      name: "Margaryta Pugachova",
      role: "M&A Expert",
      previous: "Deloitte",
      image: image4,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold text-white leading-tight"
            >
              We Don’t Just Consult — We Build Success Stories
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-white mt-6 text-lg"
            >
              At Sardius IT Technologies, From business strategy to operational
              efficiency, our experts analyze, plan, and execute solutions that
              drive real growth. With deep industry knowledge and a
              results-driven mindset, they turn complex challenges into clear
              opportunities helping your business scale smartly and sustainably
            </motion.p>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link
                to="/contact"
                className="mt-8 inline-block bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-md transition"
              >
                Hire a Consultant
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <img
              src={images[currentImage]}
              alt="Management Consultant"
              className="rounded-full w-64 h-64 md:w-72 md:h-72 object-cover shadow-xl transition-all duration-700 ease-in-out"
            />
          </motion.div>
        </div>
      </section>

      {/* Trusted Brands */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-12"
      >
        <TrustedBrands />
      </motion.section>

      {/* Categories Section */}
      <div className="py-16 px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-center text-gray-100 mb-4">
          Find the Right Consultant for Your Business
        </h1>
        <p className="text-center text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
          Get access to a curated pool of business, technology, and finance
          consultants who deliver real outcomes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {teamCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-gray rounded-lg shadow-sm shadow-white p-6 hover:bg-gradient-to-r from-blue-400 to-blue-500 hover:text-white transition-all duration-300 flex flex-col justify-between min-h-[350px] relative"
            >
              <div>
                <h3 className="text-2xl py-2 font-semibold mb-2 group-hover:text-white text-white">
                  {cat.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-200 text-sm">
                  {cat.description}
                </p>
              </div>
              <Link
                to={cat.path}
                className="absolute bottom-6 left-6 flex items-center space-x-2 text-blue-600 group-hover:text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
              >
                <span>View {cat.title}</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Steps */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 ">
        <h1 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
          How to Hire Management Consultants Through Sardius
        </h1>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-24 md:gap-48 w-full max-w-7xl">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              className="flex flex-col items-center text-center relative  px-6 py-8 rounded-xl shadow-md md:hover:shadow-xl transition"
            >
              {index !== 0 && (
                <div className="absolute -left-48 top-16 transform -translate-y-1/2 h-px bg-blue-500 w-40 hidden md:block">
                  <div className="absolute -right-3 top-1/2 transform -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="#3B82F6"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4l6 8-6 8"
                      />
                    </svg>
                  </div>
                </div>
              )}
              <div className="w-16 h-16 rounded-full border-2 border-blue-500 flex items-center justify-center text-2xl text-blue-600 font-bold">
                {step.number}
              </div>
              <h3 className="mt-8 font-bold text-white text-center">
                {step.title}
              </h3>
              <p className="mt-6 text-sm max-w-xs text-gray-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="min-h-screen py-12 px-6 bg-gray-950">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Looking for Specific Consulting Skills?
          </h1>
          <p className="text-lg text-white">
            Whether you're entering new markets, optimizing processes, or
            undergoing a digital transformation — we’ve got the consultants to
            guide you.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="text-white p-6"
            >
              <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="hover:text-indigo-400 transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-5">
        <div className="max-w-4xl mx-auto text-center bg-blue-100 rounded-2xl p-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Need a Specialized Consultant?
          </h2>
          <p className="text-gray-800 text-sm mb-8">
            Whether you're scaling, pivoting, or launching — we help you engage
            consultants who deliver results.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-md transition"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* our team*/}

      
      <section className="p-4">
        <ScrollToTopButton />
      </section>
      
    </>
  );
}
