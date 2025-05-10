import { motion } from "framer-motion";
import consultingImg from "../../assets/about4.avif"; // Replace with real image path
import innovationImg from "../../assets/sector3.avif";
import transformationImg from "../../assets/staffing2.avif";

const TechnologyConsultants = () => {
  return (
    <div className="pt-20 bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="text-center px-6 py-16 bg-gradient-to-b from-indigo-900 to-gray-800">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-indigo-400"
        >
          Technology Consulting at Sardius IT
        </motion.h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
          Empowering organizations with tailored digital solutions, expert guidance, and scalable innovation.
        </p>
      </section>

      {/* Services Overview */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        {/* 1. IT Strategy & Architecture */}
        <motion.div
          className="md:flex items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="md:w-1/2">
            <img src={consultingImg} alt="IT Strategy" className="rounded-xl shadow-xl" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-indigo-400">IT Strategy & Architecture</h2>
            <p className="mt-4 text-gray-300">
              Our technology consultants align your IT roadmap with your business goals—ensuring performance, scalability,
              and competitive advantage.
            </p>
          </div>
        </motion.div>

        {/* 2. Digital Innovation */}
        <motion.div
          className="md:flex md:flex-row-reverse items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="md:w-1/2">
            <img src={innovationImg} alt="Digital Innovation" className="rounded-xl shadow-xl" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-indigo-400">Digital Innovation</h2>
            <p className="mt-4 text-gray-300">
              We drive digital acceleration using cloud platforms, AI integration, and emerging technologies to reimagine
              customer experiences and streamline operations.
            </p>
          </div>
        </motion.div>

        {/* 3. Transformation & Delivery */}
        <motion.div
          className="md:flex items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="md:w-1/2">
            <img src={transformationImg} alt="Digital Transformation" className="rounded-xl shadow-xl" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-indigo-400">Transformation & Delivery</h2>
            <p className="mt-4 text-gray-300">
              From cloud migrations to agile implementations, Sardius IT delivers full-scale transformation programs with
              measurable impact and real business value.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default TechnologyConsultants;
