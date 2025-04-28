// src/pages/Sectors.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CardsPage from '../pages/Cards/Cards'; // ✅ Correct import

const Sectors = () => {
  const [filter, setFilter] = useState('');
  const [activeFilter, setActiveFilter] = useState('');

  const handleFilterClick = (filterType) => {
    setActiveFilter(filterType === activeFilter ? '' : filterType);
  };

  const handleSelect = (option) => {
    setFilter(option);
    setActiveFilter('');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-950 text-center px-6">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-blue-500"
        >
          Stay ahead of change
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 max-w-3xl text-lg md:text-xl text-gray-300"
        >
          Explore our research, insights, and examples of real client impact, designed to help you embrace the key forces of change and get to value faster.
        </motion.p>
      </section>
    {/* Cards Section */}


<motion.section
  className="min-h-screen"
  initial={{ opacity: 0, y: 50 }}  
  animate={{ opacity: 1, y: 0 }}      
  transition={{ duration: 0.8, ease: "easeOut" }} 
>
  <CardsPage filter={filter} className="bg-amber-400" />
</motion.section>
</>
  );
};


export default Sectors;
