import React from "react";
import Image from "../assets/about2.jpg";
import image1 from "../assets/modern.avif";
import image2 from "../assets/about7.jpg";
import image3 from "../assets/about1.jpg";
import image5 from "../assets/about3.jpg";
import image6 from "../assets/about6.avif";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import StrategySection from "../pages/About/StrategySection";
import StatsSection from "../pages/About/StatsSection";
import TrustedBrands from "../pages/Trustedbrands";
import ContactUsButton from "../pages/Contactusbutton";
import ScrollToTopButton from "../pages/Toparrow";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 18 },
    },
  };

  return (
    <div className="text-white py-10">
      <section className="relative w-full sm:h-[500px] md:h-[600px]">
        <img src={Image} alt="About Us" className="absolute w-full h-full object-cover" />
        <div className="absolute w-full h-full bg-black/30" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">About Us</h1>
            <h2 className="text-base sm:text-xl md:text-2xl text-gray-100 leading-relaxed">
              Empowering Enterprises with End-to-End IT Solutions in Development, DevOps, Testing, Staffing, and Digital Marketing.
            </h2>
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-12 px-4 sm:px-6 md:px-10"
      >
        <StrategySection />
      </motion.section>

      <section className="text-gray-50 px-4 sm:px-6 md:px-10 pt-20" id="about_who">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-semibold mb-4">Who We Are</h3>
          <p className="text-xl leading-relaxed">
            We are Sardius IT Technologies, a forward-thinking IT solutions company dedicated to helping businesses thrive in the digital age. We are a team of passionate professionals delivering high-quality services in software development, IT staffing, digital marketing, and cloud technologies.
            <div className="py-3">Driven by Innovation, Powered by People, Proven by Results</div>
            <StatsSection />
            <strong>Headquartered in Hyderabad, India with International reach.</strong>
          </p>
        </div>
        <div className="mb-8 text-center">
          <h3 className="text-3xl font-semibold mb-4">How We Work</h3>
          <p className="text-xl leading-relaxed">
            We collaborate with startups, enterprises, and global organizations across various industries to deliver tailored IT solutions. Our clients trust us for our commitment to quality, innovation, and a partnership-driven approach that drives real business results.
          </p>
        </div>
      </section>

      <section className="text-gray-50 px-4 sm:px-6 md:px-10 pt-10 text-center">
        <h2 className="text-4xl font-bold mb-4">Vision-Driven Digital Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <img src={image1} alt="vision" className="w-full h-auto rounded-lg shadow" />
          <p className="text-base sm:text-lg md:text-xl flex items-center text-center">
            "At Sardius, we leverage AI, data, and cloud technologies to enable clients to lead transformation and achieve sustainable growth."
          </p>
        </div>
      </section>

      <section className="text-gray-50 px-4 sm:px-6 md:px-10 pt-10 text-center">
        <h2 className="text-4xl font-bold mb-4">Cross-Industry IT Expertise</h2>
        <h4 className="font-bold mb-6">
          We bring holistic, industry-specific capabilities to help clients adapt and grow faster than ever.
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center items-center">
            {["Cloud Solutions", "Developer", "Digital Strategy", "Staffing & Consulting"].map((text, i) => (
              <div key={i} className="hover:font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl p-4">
                {text}
              </div>
            ))}
          </div>
          <img src={image2} alt="expertise" className="w-full h-auto rounded-lg shadow" />
        </div>
      </section>

      <section className="text-gray-50 px-4 sm:px-6 md:px-10 pt-10 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
        <img src={image3} alt="history" className="h-96 mx-auto rounded-lg" />
      </section>

      <section className="text-gray-50 px-4 sm:px-6 md:px-10 pt-10 text-center">
        <h2 className="text-4xl font-bold mb-4">Community-Driven Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src={image5} alt="community service" className="w-full h-auto rounded-lg shadow" />
          <p className="text-base sm:text-lg md:text-xl flex items-center text-center">
            We actively promote responsible AI development, community engagement, and skill empowerment to enhance global cybersecurity awareness.
          </p>
        </div>
      </section>

      <section className="text-gray-50 px-4 sm:px-6 md:px-10 py-10">
        <div className="p-4 sm:p-6 md:p-8 rounded-lg shadow-lg bg-gray-800">
          <h3 className="text-3xl font-semibold mb-4">Our Leadership Philosophy</h3>
          <p className="text-lg py-5">
            We cultivate leadership through adaptive mindsets and measurable results. We believe great leaders are built through mentorship, empowerment, and innovation.
          </p>
          <Link to="/careers" className="inline-block bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-md">
            Know more
          </Link>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-12 px-4 sm:px-6 md:px-10"
      >
        <TrustedBrands />
      </motion.section>

      <motion.section
        className="flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-20 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center md:text-left max-w-xl mb-10 md:mb-0" variants={textVariants}>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Have a project in mind? Let’s collaborate.
          </h2>
          <Link to="/contact" className="inline-block bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-md">
            Contact Us
          </Link>
        </motion.div>

        <motion.div className="flex-shrink-0 flex justify-center items-center" variants={imageVariants}>
          <img src={image6} alt="Professional woman smiling" className="w-full max-w-md rounded-3xl shadow-lg" />
        </motion.div>
      </motion.section>

      <section className="w-full h-[400px] sm:h-[500px] md:h-screen overflow-hidden">
        <iframe
          title="Sardius IT Technologies Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2894533508255!2d78.3836257!3d17.4513199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91007a623423%3A0x6f759591de4fa10d!2sSardius%20IT%20Technology!5e0!3m2!1sen!2sin!4v1714997152005!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section className="p-4 fixed bottom-4 right-4 z-50">
        <ScrollToTopButton />
      </section>

      <div className="px-4 py-8">
        <ContactUsButton />
      </div>
    </div>
  );
};

export default About;
