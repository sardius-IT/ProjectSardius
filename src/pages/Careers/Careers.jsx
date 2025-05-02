import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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

const Careers = () => {
  const navigate = useNavigate();

  return (
    <div className="p-10 min-h-screen bg-gradient-to-br from-grey-700 via-gray-950 to--700 text-white">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-16 relative"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h1 className="text-6xl font-extrabold text-gray-50 mb-6">
          Join Sardius IT Technologies
        </motion.h1>
        <motion.p className="text-xl text-gray-400 mb-8">
          Innovate, grow, and make an impact with us. Your journey starts here.
        </motion.p>
        <motion.button
          onClick={() => navigate('/apply')}
          className="px-8 py-4 bg-gradient-to-r  from-blue-500 to-blue-600 text-white font-bold text-lg rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
        >
          Apply Now
        </motion.button>
      </motion.div>

      {/* About Section */}
      <motion.section className="mb-16" variants={fadeIn} initial="hidden" animate="visible">
        <h2 className="text-4xl font-semibold text-gray-50 mb-4">Who We Are</h2>
        <p className="text-lg text-gray-400">
          We are an innovative software company shaping the future with cutting-edge technologies. Join us in revolutionizing industries with our creativity and passion.
        </p>
      </motion.section>

      {/* Technologies Section with Grid Layout */}
      <motion.section className="mb-16" variants={fadeIn} initial="hidden" animate="visible">
        <h2 className="text-4xl font-semibold text-gray-50 mb-4">Technologies We Use</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div variants={slideIn} initial="hidden" animate="visible" className="p-6 bg-gray-800 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-40 mb-2">Frontend</h3>
            <p className="text-gray-300">React.js, Next.js, Tailwind CSS</p>
          </motion.div>
          <motion.div variants={slideIn} initial="hidden" animate="visible" className="p-6 bg-gray-800 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-40 mb-2">Backend</h3>
            <p className="text-gray-300">Java, Spring Boot, Node.js</p>
          </motion.div>
          <motion.div variants={slideIn} initial="hidden" animate="visible" className="p-6 bg-gray-800 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-40 mb-2">Database</h3>
            <p className="text-gray-400">MySQL, MongoDB</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Employee Testimonials */}
      <motion.section className="mb-16" variants={fadeIn} initial="hidden" animate="visible">
        <h2 className="text-4xl font-semibold text-gray-40 mb-4">Employee Testimonials</h2>
        <div className="flex space-x-8">
          <motion.div
            variants={hoverEffect}
            initial="rest"
            whileHover="hover"
            className="bg-gray-800 p-6 rounded-xl shadow-xl w-1/3"
          >
            <p className="text-lg text-gray-200">
              "At Sardius, every day is a chance to innovate and grow. The team is collaborative, and I’ve learned so much."
            </p>
            <p className="mt-4 text-gray-400">— Mani.k, Software Engineer</p>
          </motion.div>
          <motion.div
            variants={hoverEffect}
            initial="rest"
            whileHover="hover"
            className="bg-gray-800 p-6 rounded-xl shadow-xl w-1/3"
          >
            <p className="text-lg text-gray-200">
              "I feel empowered here to make real-world impacts with the latest technologies. It's an incredible place to work!"
            </p>
            <p className="mt-4 text-gray-400">— Vivek.k, Frontend Developer </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Current Job Openings */}
      <motion.section className="mb-16" variants={fadeIn} initial="hidden" animate="visible">
        <h2 className="text-4xl font-semibold text-gray-40 mb-4">Current Job Openings</h2>
        <div className="space-y-8">
          <motion.div
            variants={slideIn}
            initial="hidden"
            animate="visible"
            className="p-6 bg-gray-800 rounded-xl shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-gray-40 mb-2">Frontend Developer</h3>
            <p className="text-gray-400">We are looking for a frontend developer skilled in React.js to create dynamic user interfaces.</p>
            <button
              onClick={() => navigate('/apply')}
              className="mt-4 px-6 py-2 bg-gradient-to-r  from-blue-500 to-blue-600 text-white font-semibold rounded-lg"
            >
              Apply Now
            </button>
          </motion.div>

          <motion.div
            variants={slideIn}
            initial="hidden"
            animate="visible"
            className="p-6 bg-gray-800 rounded-xl shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-gray-40 mb-2">Backend Developer</h3>
            <p className="text-gray-400">Join us as a backend developer with expertise in Java and Spring Boot to work on impactful projects.</p>
            <button
              onClick={() => navigate('/apply')}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg"
            >
              Apply Now
            </button>
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
};

export default Careers;






