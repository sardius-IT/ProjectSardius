import React, { useState } from 'react';
import { motion } from 'framer-motion';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    yearsOfExperience: '',
    recentEducation: '',
    resume: null,
    coverLetter: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'resume') {
        formDataToSend.append(key, formData[key]);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch('http://localhost:8081/api/job-application', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setStatus('✅ Application submitted successfully!');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          position: '',
          yearsOfExperience: '',
          recentEducation: '',
          resume: null,
          coverLetter: '',
        });
      } else {
        setStatus('❌ Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Error while submitting application:', error);
      setStatus('❌ Something went wrong. Please check your connection.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-800 text-white p-8">
      <motion.div
        className="max-w-lg mx-auto bg-white text-gray-800 rounded-lg shadow-xl p-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold text-center mb-6">Job Application</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            name="position"
            placeholder="Position Applying For"
            required
            value={formData.position}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            name="yearsOfExperience"
            placeholder="Years of Experience"
            value={formData.yearsOfExperience}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            name="recentEducation"
            placeholder="Recent Education"
            value={formData.recentEducation}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="file"
            name="resume"
            onChange={handleFileChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="coverLetter"
            placeholder="Cover Letter"
            required
            rows="4"
            value={formData.coverLetter}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            Submit Application
          </button>
        </form>

        {status && (
          <motion.p
            className="text-center mt-4 text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {status}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default JobApplicationForm;
