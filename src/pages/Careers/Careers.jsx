// src/components/careers/Careers.jsx
import React from 'react';

import JobForm from './JobForm';

const Careers = () => {
  return (
    <>
   
    <div className="p-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Careers at Sardius</h1>
      <p className="text-gray-700 mb-12">
        We're always looking for talented people to join our team. Explore our job openings below and apply now.
      </p>
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
       
      </div>

      <h2 className="text-3xl font-semibold text-blue-600 mb-6">Apply Now</h2>
      <JobForm />
     
    </div>
    </>
  );
};

export default Careers;
