import { motion } from "framer-motion";
import productVisionImg from "../../assets/devops2.avif"; // Replace with your actual image paths
import lifecycleImg from "../../assets/about3.jpg";
import collaborationImg from "../../assets/client1.avif";

const TechnicalProductManagers = () => {
  return (
    <div className="pt-20 bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="text-center px-6 py-16 ">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-cyan-200"
        >
          Technical Product Managers at Sardius IT
        </motion.h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
          Bridging technology, business, and user needs—our Product Managers lead the delivery of scalable, high-impact digital products.
        </p>
      </section>

      {/* Service Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        {/* Product Vision & Strategy */}
        <motion.div
          className="md:flex items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="md:w-1/2">
            <img src={productVisionImg} alt="Product Strategy" className="rounded-xl shadow-xl" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-cyan-400">Product Vision & Strategy</h2>
            <p className="mt-4 text-gray-300">
              Our TPMs define clear product roadmaps that align with market needs and technical feasibility—turning
              business goals into innovative solutions.
            </p>
          </div>
        </motion.div>

        {/* Lifecycle Ownership */}
        <motion.div
          className="md:flex md:flex-row-reverse items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="md:w-1/2">
            <img src={lifecycleImg} alt="Lifecycle Management" className="rounded-xl shadow-xl" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-cyan-400">End-to-End Product Lifecycle</h2>
            <p className="mt-4 text-gray-300">
              From ideation to delivery and iteration, our managers own the full product lifecycle, ensuring agility,
              stakeholder alignment, and customer-centric development.
            </p>
          </div>
        </motion.div>

        {/* Tech Collaboration */}
        <motion.div
          className="md:flex items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="md:w-1/2">
            <img src={collaborationImg} alt="Technical Collaboration" className="rounded-xl shadow-xl" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-cyan-400">Cross-Functional Collaboration</h2>
            <p className="mt-4 text-gray-300">
              Sardius TPMs work closely with engineers, UX teams, QA, and business leaders—ensuring a seamless blend of
              technical execution and market-driven features.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default TechnicalProductManagers;
