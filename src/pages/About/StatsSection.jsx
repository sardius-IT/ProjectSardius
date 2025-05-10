import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const stats = [
  { number: 150, label: "Projects Completed", suffix: "+" },
  { number: 1000000, label: "Earned Worldwide", suffix: "" },
  { number: 200, label: "Professional Members", suffix: "+" },
];

const formatNumber = (value) => {
  return value >= 1000000
    ? (value / 1000000).toFixed(1) + "M"
    : Math.floor(value);
};

const StatItem = ({ number, label, suffix }) => {
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    controls.start({ count: number });
  }, [controls, number]);

  useEffect(() => {
    const duration = 2000;
    const startTime = performance.now();

    const step = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * number);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(number);
      }
    };

    requestAnimationFrame(step);
  }, [number]);

  return (
    <motion.div
      className="text-center sm:w-1/3 w-full px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-3xl sm:text-4xl font-bold text-white">
        {formatNumber(count)}
        {suffix}
      </h3>
      <p className="text-sm text-gray-400 mt-1">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="flex justify-center py-16 px-4">
      <div className="flex flex-wrap justify-center sm:justify-between gap-y-10 gap-x-6 bg-gray-900 rounded-xl shadow-lg px-6 sm:px-10 py-8 w-full max-w-5xl">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            number={stat.number}
            label={stat.label}
            suffix={stat.suffix}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
