import { motion } from "framer-motion";
import financeImg from "../../assets/about6.avif"; // Replace with your real image paths
import analyticsImg from "../../assets/staffing2.avif";
import planningImg from "../../assets/sector3.avif";

const FinancialConsultants = () => {
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
          Financial Consulting Services at Sardius IT
        </motion.h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
          Empowering enterprises with strategic financial insights, tech-driven planning, and risk-aligned decision-making.
        </p>
      </section>

      {/* Service Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        {/* 1. Financial Strategy & IT Alignment */}
        <motion.div
          className="md:flex items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="md:w-1/2">
            <img src={financeImg} alt="Financial Strategy" className="rounded-xl shadow-xl" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold  text-white">Financial Strategy & IT Alignment</h2>
            <p className="mt-4 text-gray-300">
              Our consultants integrate finance with IT operations—ensuring sustainable investments, optimized spend, and
              technology-backed growth strategies.
            </p>
          </div>
        </motion.div>

        {/* 2. Analytics & Reporting */}
        <motion.div
          className="md:flex md:flex-row-reverse items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="md:w-1/2">
            <img src={analyticsImg} alt="Finance Analytics" className="rounded-xl shadow-xl" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold  text-white">Finance Analytics & Business Intelligence</h2>
            <p className="mt-4 text-gray-300">
              Leverage real-time dashboards, predictive modeling, and data visualizations to unlock insights that shape
              smarter decisions.
            </p>
          </div>
        </motion.div>

        {/* 3. Strategic Budgeting & Risk Advisory */}
        <motion.div
          className="md:flex items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="md:w-1/2">
            <img src={planningImg} alt="Budget Planning" className="rounded-xl shadow-xl" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold  text-white">Strategic Budgeting & Risk Advisory</h2>
            <p className="mt-4 text-gray-300">
              From digital transformation ROI to IT risk mitigation, we guide companies through dynamic financial
              planning with confidence and clarity.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default FinancialConsultants;
