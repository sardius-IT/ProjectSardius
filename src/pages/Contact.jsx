import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:8081/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('❌ Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error while sending message:', error);
      setStatus('❌ Something went wrong. Please check your connection.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 text-white">

      {/* Top Heading Section */}
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-16 text-center">
        <motion.h1
          className="text-5xl font-bold tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h1>
        <p className="mt-4 text-lg text-white/80">We are here to help you grow and succeed!</p>
      </div>

      {/* About Company - Top */}
      <motion.div
        className="py-12 px-6 text-center max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        
      </motion.div>

      {/* Contact Form */}
      <div className="flex flex-col md:flex-row p-10 gap-10">
        {/* Left Side - Office Info + Map */}
        <motion.div 
          className="md:w-1/2 flex flex-col gap-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-2">Our Office</h2>
          <p className="text-lg">
            Sardius IT Technologies Pvt. Ltd.<br/>
            2nd Floor, XYZ Building, Hyderabad, India.<br/>
            Phone: +91 9876543210<br/>
            Email: info@sardiustech.com
          </p>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1400186369764!2d78.3860447!3d17.4512169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91007a623423%3A0x6f759591de4fa10d!2sSardius%20IT%20Technology!5e0!3m2!1sen!2sin!4v1681290990000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location"
              className="filter grayscale contrast-125"
            ></iframe>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div 
          className="md:w-1/2 bg-white text-gray-800 rounded-3xl shadow-2xl p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold mb-6 text-center">Get In Touch</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
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
              name="subject"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
          {status && <p className="text-center mt-4 text-sm font-medium">{status}</p>}
        </motion.div>
      </div>

      {/* About Company - Bottom */}
      <motion.div
        className="py-12 px-6 text-center max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-4">Why Choose Sardius IT Technologies?</h2>
        <p className="text-lg text-gray-200">
          From IT development to overseas education, Sardius IT Technologies is your one-stop solution.
          We combine innovation, technology, and personalized services to meet your unique needs. 
          Trust us to deliver excellence at every step of your journey.
        </p>
      </motion.div>

      {/* Social Icons Footer */}
      <div className="flex justify-center gap-6 py-6 bg-black/30">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-400">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-pink-400">
          <FaInstagram />
        </a>
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-green-400">
          <FaWhatsapp />
        </a>
      </div>

    </div>
  );
};

export default ContactForm;
