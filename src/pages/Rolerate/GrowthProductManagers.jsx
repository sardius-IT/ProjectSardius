import { motion } from "framer-motion";
import growthImg from "../../assets/about3.jpg"; // Replace with your actual image paths
import engagementImg from "../../assets/about6.avif";
import experimentsImg from "../../assets/deops1.avif";

const GrowthProductManagers = () => {
  return (
    <div className="pt-20 bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="text-center px-6 py-16 ">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          Growth Product Managers at Sardius IT
        </motion.h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
          At Sardius IT, our Growth Product Managers drive user acquisition, activation, and retention through experimentation and data-led strategy.
        </p>
      </section>

      {/* Service Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        {/* 1. Growth Strategy & Metrics */}
        <motion.div
          className="md:flex items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="md:w-1/2">
            <img src={growthImg} alt="Growth Strategy" className="rounded-xl shadow-xl" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-white">Growth Strategy & KPIs</h2>
            <p className="mt-4 text-gray-300">
              We align product strategy with business growth metrics—focusing on improving conversion funnels, customer lifetime value, and market penetration through continuous analysis.
            </p>
          </div>
        </motion.div>

        {/* 2. User Retention & Experience */}
        <motion.div
          className="md:flex md:flex-row-reverse items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="md:w-1/2">
            <img src={engagementImg} alt="User Engagement" className="rounded-xl shadow-xl" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-white">User Engagement & Retention</h2>
            <p className="mt-4 text-gray-300">
              We optimize onboarding flows, trigger-based communication, and behavioral data to create sticky experiences that keep users coming back.
            </p>
          </div>
        </motion.div>

        {/* 3. Experimentation & Optimization */}
        <motion.div
          className="md:flex items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="md:w-1/2">
            <img src={experimentsImg} alt="Experimentation" className="rounded-xl shadow-xl" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-white">A/B Testing & Data Experiments</h2>
            <p className="mt-4 text-gray-300">
              Growth PMs at Sardius run experiments across the product journey, using A/B testing and analytics to validate hypotheses and maximize business outcomes.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default GrowthProductManagers;
