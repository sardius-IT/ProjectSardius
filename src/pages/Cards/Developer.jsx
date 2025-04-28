import React from "react";
import { motion } from "framer-motion";
import cloudImage from "../../assets/modern.avif";
import Illustration from "../../assets/resource.avif";
import clouds from "../../assets/business.avif";
import Cloud from "../../pages/Cards/Cloud";
import ScrollToTopButton from "../../pages/Toparrow";
import ConnectPage from ".././Cards/ConnectPage";

function Developer() {
  const stats = [
    {
      value: "86%",
      description:
        "of companies reported an increase in their cloud initiatives over a two-year period",
    },
    {
      value: "57%",
      description:
        "of IT budgets are spent on maintenance rather than innovation with technologies like cloud and AI",
    },
    {
      value: "2-3x",
      description:
        "probability to innovate for the companies who are using cloud to transform their business and products",
    },
    {
      value: "$10B+",
      description:
        "collective spending on innovation per month by the major cloud providers",
    },
  ];
  return (
    <div className="overflow-x-hidden bg-black">
      {/* Section 1 */}
      <div className="min-h-screen flex items-center p-6 md:p-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={Illustration}
              alt="Cloud Illustration"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Take the world Development Roles
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Software development today involves multiple specialized roles.
              Each plays a critical part in creating fast, reliable, and
              user-friendly applications. Here’s a closer look:
            </p>
          </motion.div>
        </div>
      </div>
      <section className="P-3">
        <Cloud />
      </section>
      {/* Section 2 */}
      <div className="min-h-screen flex items-center justify-center p-6 md:p-12">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Frontend Developer
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              Frontend developers focus on building the parts of websites and
              applications that users interact with directly. They work with
              technologies like HTML, CSS, JavaScript, and frameworks like
              React, Vue.js, and Angular to create intuitive, responsive user
              interfaces.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={cloudImage}
              alt="Frontend Developer"
              className="w-full max-w-xs sm:max-w-sm md:max-w-sm rounded-xl object-cover"
            />
          </motion.div>
        </div>
      </div>
      {/* Section 3 */}
      <div className="min-h-screen flex items-center p-6 md:p-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={clouds}
              alt="Backend Developer"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Backend Developer
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Backend developers work behind the scenes to build the server,
              databases, and APIs that handle the core functionality of
              applications. They focus on ensuring that data is stored, secured,
              and retrieved properly. Common technologies include Node.js,
              Python, Java, Ruby, and SQL databases.
            </p>
          </motion.div>
        </div>
      </div>
      {/* Extra Section */}
      <div className="min-h-screen flex items-center justify-center p-6 md:p-12">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight ">
              QA Engineer
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              Frontend developers focus on building the parts of websites and
              applications that users interact with directly. They work with
              technologies like HTML, CSS, JavaScript, and frameworks like
              React, Vue.js, and Angular to create intuitive, responsive user
              interfaces.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={cloudImage}
              alt="Frontend Developer"
              className="w-full max-w-xs sm:max-w-sm md:max-w-sm rounded-xl object-cover"
            />
          </motion.div>
        </div>
      </div>
      <section>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // 👈 start hidden and below
          animate={{ opacity: 1, y: 0 }} // 👈 fade in and slide up
          transition={{ duration: 0.8, ease: "easeOut" }} // 👈 smooth timing
        >
          <ConnectPage />
        </motion.div>
      </section>
      <section>
        <ScrollToTopButton />
      </section>
    </div>
  );
}

export default Developer;
