import React from "react";
import { motion } from "framer-motion";
import PortfolioVideo from "../assets/programming.mp4";
import TrustedBrands from "../pages/Trustedbrands";
import TeamCategories from "./Team/Teamcategories";
import { Link } from "react-router-dom";
import Demand from "./Team/Demand";
import Whychoosetoptal from "../pages/Team/Whychoosetoptal";
import Clientsatisfaction from "../pages/Team/Clientsatisfaction";
import ContactUsButton from "../pages/Contactusbutton";
import ScrollToTopButton from "../pages/Toparrow";

export default function Portfolio() {
  const steps = [
    {
      number: "1",
      title: "Talk to One of Our Industry Experts",
      description:
        "An expert on our team will work with you to understand your goals, technical needs, and team dynamics.",
    },
    {
      number: "2",
      title: "Work With Hand-Selected Talent",
      description:
        "Within days, we'll introduce you to the right developer for your project. Average time to match is under 24 hours.",
    },
    {
      number: "3",
      title: "The Right Fit, Guaranteed",
      description:
        "Work with your new team member on a trial basis (pay only if satisfied), ensuring you hire the right people for the job.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Hide video on small to save bandwidth */}
        <video
          className="hidden sm:block absolute top-0 left-0 w-full h-full object-cover"
          src={PortfolioVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

        {/* Animated Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 flex flex-col items-center sm:items-start justify-center text-center sm:text-left h-full px-4 sm:px-8 lg:px-16"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Where{" "}
            <span className="text-blue-400">Top Talent</span> Meets
            <br className="block sm:hidden" /> Top Performance<sup>®</sup>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white mt-4 max-w-lg">
            Our employees are handpicked for their expertise, innovation, and
            passion for excellence. With a strong commitment to continuous
            learning and client success, they consistently deliver
            high-quality results that exceed expectations.
          </p>
          <Link
            to="/HireOptions"
            className="mt-6 sm:mt-8 inline-block bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-md transition"
          >
            Recruit Top IT Talent
          </Link>
        </motion.div>
      </div>

      {/* Trusted Brands */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-12 px-4 sm:px-8 lg:px-16"
      >
        <TrustedBrands />
      </motion.section>

      {/* Team Categories */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-12 px-4 sm:px-8 lg:px-16"
      >
        <TeamCategories />
      </motion.section>

      {/* Steps Section */}
      <section className="py-12 px-4 sm:px-8 lg:px-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
          Hiring Made Easy
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.3, duration: 0.6 }}
              className="flex flex-col items-center text-center max-w-xs"
            >
              {/* Connector arrow only on md+ */}
              {idx !== 0 && (
                <div className="hidden md:block absolute left-[-160px] top-1/2 transform -translate-y-1/2">
                  <div className="h-px w-36 bg-blue-500 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
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
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-blue-500 flex items-center justify-center text-xl sm:text-2xl text-blue-500 font-bold">
                {step.number}
              </div>
              <h3 className="mt-6 sm:mt-8 text-lg sm:text-xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-4 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose & Client Satisfaction */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-12 px-4 sm:px-8 lg:px-16"
      >
        <Whychoosetoptal />
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-12 px-4 sm:px-8 lg:px-16"
      >
        <Clientsatisfaction />
      </motion.section>

      {/* Footer Buttons */}
      <section className="py-8 px-4 sm:px-8 lg:px-16 space-y-4 flex flex-col sm:flex-row items-center justify-between">
        <ScrollToTopButton />
        <ContactUsButton />
      </section>
    </>
  );
}
