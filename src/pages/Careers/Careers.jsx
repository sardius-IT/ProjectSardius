import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import life1 from '../../assets/life7.jpg';
import life2 from '../../assets/life2.jpeg';
import life3 from '../../assets/life3.jpeg';
import life4 from '../../assets/life4.jpg';
import life5 from '../../assets/life5.jpeg';
import life6 from '../../assets/life6.jpeg';

import ScrollToTopButton from "../../pages/Toparrow";

// Animations
export const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Careers = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-10 min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.div className="relative text-center mb-16" initial="hidden" animate="visible" variants={fadeIn}>
        <motion.h1 className="relative text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-400 mb-6 z-10">
          Join Sardius IT Technologies
        </motion.h1>
        <motion.p className="relative text-base sm:text-lg text-gray-300 mb-8 z-10 max-w-2xl mx-auto">
          Innovate, grow, and make an impact with us. Your journey starts here.
        </motion.p>
        <motion.button
          onClick={() => navigate('/apply')}
          className="relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-base sm:text-lg rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 z-10"
        >
          Apply Now
        </motion.button>
      </motion.div>

      {/* About Section */}
      <motion.section className="mb-16" variants={fadeIn} initial="hidden" animate="visible">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-100 mb-4">Who We Are</h2>
        <p className="text-base sm:text-lg text-gray-400">
          We are an innovative software company shaping the future with cutting-edge technologies. Join us in revolutionizing industries with our creativity and passion.
        </p>
        <p className="text-base sm:text-lg text-gray-400 mt-4">
          Our mission is to bring digital transformation to businesses, creating powerful solutions that change the way people work.
        </p>
      </motion.section>

      {/* Roles & Responsibilities */}
      <motion.section className="mb-16" variants={fadeIn} initial="hidden" animate="visible">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-100 mb-4">Roles & Responsibilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { role: 'Software Developer', responsibilities: 'Develop software applications', requiredSkills: 'Java, Spring Boot, MySQL' },
            { role: 'Frontend Developer', responsibilities: 'Build user-facing interfaces', requiredSkills: 'React.js, Next.js, Tailwind CSS' },
            { role: 'Backend Developer', responsibilities: 'Maintain server-side logic', requiredSkills: 'Node.js, Express.js, MongoDB' },
            { role: 'UI/UX Designer', responsibilities: 'Design intuitive user interfaces', requiredSkills: 'Figma, Sketch, Adobe XD' },
            { role: 'Digital Marketing Executive', responsibilities: 'Create digital marketing strategies', requiredSkills: 'SEO, Ads Manager' },
            { role: 'HR Executive', responsibilities: 'Manage recruitment and employee relations', requiredSkills: 'People Management, HRMS tools' },
          ].map((item, index) => (
            <motion.div key={index} variants={slideInLeft} initial="hidden" animate="visible" className="p-5 bg-gray-800 rounded-xl shadow-xl">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{item.role}</h3>
              <p className="text-gray-300"><strong>Responsibilities:</strong> {item.responsibilities}</p>
              <p className="text-gray-300 mt-2"><strong>Required Skills:</strong> {item.requiredSkills}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Perks & Benefits */}
      <motion.section className="mb-16" initial="hidden" animate="visible" variants={fadeIn}>
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-100 mb-6">Perks & Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Flexible Hours', description: 'We trust our team to manage their time effectively. Work when you’re most productive.' },
            { title: 'Remote Work', description: 'Work from anywhere—your home, a cafe, or even another country.' },
            { title: 'Health Insurance', description: 'Comprehensive health coverage for you and your family to stay worry-free.' },
            { title: 'Upskilling Support', description: 'Access to courses, certifications, and workshops to grow your skillset.' },
            { title: 'Mentorship', description: 'Work with senior experts who’ll guide you throughout your career journey.' },
            { title: 'Annual Retreats', description: 'Team offsites and retreats to relax, bond, and brainstorm in new environments.' },
          ].map((perk, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-5 rounded-xl shadow-md text-white"
            >
              <div className="flex items-center space-x-4 mb-2">
                <FaCheckCircle className="text-blue-400 text-xl" />
                <h4 className="text-lg font-semibold text-blue-400">{perk.title}</h4>
              </div>
              <p className="text-gray-300 text-sm">{perk.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Career Growth */}
      <motion.section className="mb-20" initial="hidden" animate="visible" variants={fadeIn}>
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-100 mb-6">Career Growth at Sardius</h2>
        <div className="border-l-4 border-blue-500 ml-4 space-y-10">
          {[
            { year: 'Year 1', role: 'Trainee Developer', desc: 'Hands-on training and mentorship.' },
            { year: 'Year 2', role: 'Junior Developer', desc: 'Handling live projects and building confidence.' },
            { year: 'Year 3+', role: 'Team Lead / Specialist', desc: 'Leading projects and mentoring freshers.' },
          ].map((stage, i) => (
            <div key={i} className="ml-6 flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center">{i + 1}</div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-400">{stage.year}: {stage.role}</h3>
                <p className="text-gray-300">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Life at Sardius */}
      <motion.section className="mb-16" initial="hidden" animate="visible" variants={fadeIn}>
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-100 mb-6">Life at Sardius</h2>
        <p className="text-gray-400 mb-4">We believe in a culture of collaboration, growth, and celebration. Here's a glimpse into our daily life:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { src: life1, caption: 'Team Building Activities' },
            { src: life2, caption: 'Fun Fridays at Work' },
            { src: life3, caption: 'Birthday Celebrations' },
            { src: life4, caption: 'Creative Workspace Vibes' },
            { src: life5, caption: 'Annual Company Retreat' },
            { src: life6, caption: 'Employee Recognition Day' },
          ].map((item, index) => (
            <div key={index} className="relative group rounded-xl overflow-hidden shadow-lg">
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-xs p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.caption}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Global Exposure */}
      <motion.section className="mb-16" initial="hidden" animate="visible" variants={fadeIn}>
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-100 mb-6">Global Exposure & Onsite Opportunities</h2>
        <p className="text-gray-400 mb-4">At Sardius, we offer client-facing opportunities and international exposure. Many of our team members have worked on projects abroad or collaborated with teams across time zones.</p>
        <ul className="list-disc list-inside text-gray-400 space-y-1">
          <li>Onsite work opportunities with relocation support</li>
          <li>Flexible working hours and remote-first approach</li>
          <li>Cross-border collaboration with global clients</li>
        </ul>
      </motion.section>

      {/* Final CTA */}
      <motion.div className="text-center mt-16" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <button
          onClick={() => navigate('/apply')}
          className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold text-base sm:text-lg rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Start Your Journey
        </button>
      </motion.div>

      {/* Scroll to top + Contact */}
      <section className="p-4">
        <ScrollToTopButton />
      </section>
      
    </div>
  );
};

export default Careers;
