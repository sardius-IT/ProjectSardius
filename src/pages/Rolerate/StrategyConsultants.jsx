import { motion } from "framer-motion";
import strategyImg from "../../assets/about7.jpg"; // Replace with your actual image path
import growthImg from "../../assets/about2.jpg";
import digitalImg from "../../assets/about6.avif";

const StrategyConsultants = () => {
  return (
    <div className="pt-20 bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="text-center px-6 py-16 bg-gradient-to-b from-blue-900 to-gray-800">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-blue-400"
        >
          Strategy Consulting for a Smarter Tomorrow
        </motion.h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
          Empowering businesses with strategic insights, data-driven decisions, and transformation roadmaps.
        </p>
      </section>

      {/* Section: What We Do */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        <motion.div
          className="md:flex md:items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:w-1/2">
            <img src={strategyImg} alt="Strategy Meeting" className="rounded-xl shadow-xl" />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold text-blue-400">Strategic Advisory</h2>
            <p className="mt-4 text-gray-300">
              Our consultants work closely with senior leadership to help define, refine, and implement strategic
              roadmaps—ensuring alignment between vision and execution.
            </p>
          </div>
        </motion.div>

        {/* Section: Key Services */}
        <motion.div
          className="md:flex md:flex-row-reverse md:items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:w-1/2">
            <img src={growthImg} alt="Business Growth" className="rounded-xl shadow-xl" />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold text-blue-400">Business Growth Strategies</h2>
            <p className="mt-4 text-gray-300">
              We identify high-potential markets and unlock revenue streams through data-backed insights,
              competitive analysis, and innovative expansion tactics.
            </p>
          </div>
        </motion.div>

        {/* Section: Digital Strategy */}
        <motion.div
          className="md:flex md:items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:w-1/2">
            <img src={digitalImg} alt="Digital Transformation" className="rounded-xl shadow-xl" />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold text-blue-400">Digital Transformation</h2>
            <p className="mt-4 text-gray-300">
              We help enterprises navigate change and digitize operations—leveraging AI, automation, and emerging tech to
              accelerate results.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default StrategyConsultants;
