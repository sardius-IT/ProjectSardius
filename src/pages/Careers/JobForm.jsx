import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const JobApplicationForm = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');
  const [resumeUrl, setResumeUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const form = formRef.current;
    const coverLetter = form?.coverLetter?.value || '';
    if (coverLetter.length > 1000) {
      setStatus('❌ Cover letter is too long (max 1000 characters).');
      return;
    }

    const formData = {
      fullName: form.fullName.value,
      email: form.email.value,
      phone: form.phone.value,
      address: form.address.value,
      position: form.position.value,
      yearsOfExperience: form.yearsOfExperience.value,
      currentCTC: form.currentCTC.value,
      expectedCTC: form.expectedCTC.value,
      recentEducation: form.recentEducation.value,
      collegeName: form.collegeName.value,
      idNumber: form.idNumber.value,
      percentage: form.percentage.value,
      github: form.github.value,
      linkedin: form.linkedin.value,
      coverLetter: form.coverLetter.value,
      resumeUrl: resumeUrl, // from UploadThing
    };

    emailjs.send(
      'service_8dgk1pb',
      'template_mgwh5nt',
      formData,
      'UOogBBctFuQoWc7s-'
    ).then(() => {
      setStatus('✅ Application submitted successfully!');
      form.reset();
      setResumeUrl('');
    }).catch((err) => {
      console.error(err);
      setStatus('❌ Failed to send application. Try again.');
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-800 text-white p-8">
      <motion.div
        className="max-w-3xl mx-auto bg-white text-gray-800 rounded-lg shadow-xl p-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold text-center mb-6">Job Application</h1>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <input type="text" name="fullName" placeholder="Full Name" required className="w-full p-3 rounded-lg border" />
          <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 rounded-lg border" />
          <input type="tel" name="phone" placeholder="Phone Number" className="w-full p-3 rounded-lg border" />
          <input type="text" name="address" placeholder="Address" className="w-full p-3 rounded-lg border" />
          <input type="text" name="position" placeholder="Applying For (Position)" className="w-full p-3 rounded-lg border" />
          <input type="text" name="yearsOfExperience" placeholder="Years of Experience" className="w-full p-3 rounded-lg border" />
          <input type="text" name="currentCTC" placeholder="Current CTC" className="w-full p-3 rounded-lg border" />
          <input type="text" name="expectedCTC" placeholder="Expected CTC" className="w-full p-3 rounded-lg border" />
          <input type="text" name="recentEducation" placeholder="Recent Education" className="w-full p-3 rounded-lg border" />
          <input type="text" name="collegeName" placeholder="College Name" className="w-full p-3 rounded-lg border" />
          <input type="text" name="idNumber" placeholder="ID Number" className="w-full p-3 rounded-lg border" />
          <input type="text" name="percentage" placeholder="Percentage" className="w-full p-3 rounded-lg border" />

   

          <div className="flex items-center gap-2">
            <FaGithub className="text-gray-700 text-xl" />
            <input type="url" name="github" placeholder="GitHub Profile URL" className="flex-1 p-3 rounded-lg border" />
          </div>
          <div className="flex items-center gap-2">
            <FaLinkedin className="text-blue-600 text-xl" />
            <input type="url" name="linkedin" placeholder="LinkedIn Profile URL" className="flex-1 p-3 rounded-lg border" />
          </div>

          <textarea name="coverLetter" placeholder="Cover Letter (max 1000 chars)" rows="4" maxLength={1000} className="w-full p-3 rounded-lg border resize-none"></textarea>

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
