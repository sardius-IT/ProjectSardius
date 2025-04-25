// src/components/careers/JobForm.jsx
import React, { useState } from 'react';

const JobForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    jobPosition: '',
    resume: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted!');
    // Here you would typically send the form data to a backend
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-gray-700">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-700">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="jobPosition" className="block text-gray-700">Job Position</label>
        <select
          id="jobPosition"
          name="jobPosition"
          value={formData.jobPosition}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        >
          <option value="">Select Position</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Product Manager">Product Manager</option>
        </select>
      </div>

      <div>
        <label htmlFor="resume" className="block text-gray-700">Resume (PDF)</label>
        <input
          type="file"
          id="resume"
          name="resume"
          accept="application/pdf"
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-3 rounded-md"
      >
        Submit Application
      </button>
    </form>
  );
};

export default JobForm;
