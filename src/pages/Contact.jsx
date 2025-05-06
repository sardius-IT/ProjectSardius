import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import ConnectPage from ".././pages/Cards/ConnectPage";

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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from from-black via-black to-bg-black text-white">

      {/* Top Heading Section */}
      <div className="bg-gradient-to-r from-gray-500 via-black-500 to-black-500 p-16 text-center shadow-xl">
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

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row p-10 gap-10">
        {/* Left - Info + Map */}
        <motion.div
          className="md:w-1/2 flex flex-col gap-6 bg-white text-gray-800 rounded-3xl shadow-2xl p-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-emerald-950">Sardius IT Technologies</h2>

            <p className="mb-2"><strong>📍 Address:</strong>  Silicon Park, Plot No.23-24,  4thFloor,VIPHills,Madhapur,Hyderabad,500081.</p>

            <p className="mb-2"><strong>📧 Email:</strong> info@sardius.co.in</p>

            <p className="mb-4"><strong>📞 Phone:</strong> +91 98765 43210</p>
          </div>

          <div className="overflow-hidden rounded-xl border-2 border-purple-300 shadow-lg">
            <iframe
              title="Company Location"
              src="https://www.google.com/search?q=sardius+it+technologies&sca_esv=62f82ff636d943ce&sxsrf=AHTn8zqs8VZb3I6hEVarXJhcq90JVOy1iQ%3A1746531035428&ei=2_IZaIb2Gf2cvr0PpYyEkAs&ved=0ahUKEwjGz9KP346NAxV9jq8BHSUGAbIQ4dUDCBA&uact=5&oq=sardius+it+technologies&gs_lp=Egxnd3Mtd2l6LXNlcnAiF3NhcmRpdXMgaXQgdGVjaG5vbG9naWVzMgUQABiABDICECYyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgUQABjvBTIIEAAYogQYiQUyCBAAGKIEGIkFMgUQABjvBUjmPVCPF1j5NXAEeACQAQCYAb4CoAHCDKoBBzAuMS4zLjK4AQPIAQD4AQGYAgigAt8IwgIIEAAYgAQYsAPCAgcQABiwAxgewgIOEAAYgAQYsAMYhgMYigXCAggQABiwAxjvBcICCxAAGLADGKIEGIkFwgIHEAAYgAQYDcICBhAAGA0YHpgDAIgGAZAGCpIHBzQuMC4yLjKgB-kusgcFMi0yLjK4B8EI&sclient=gws-wiz-serp&lqi=ChdzYXJkaXVzIGl0IHRlY2hub2xvZ2llc1oZIhdzYXJkaXVzIGl0IHRlY2hub2xvZ2llc5IBHWNvbXB1dGVyX3N1cHBvcnRfYW5kX3NlcnZpY2VzqgFcCggvbS8wN2MxdhABKhAiDHRlY2hub2xvZ2llcygAMh8QASIb2iQPUmLyGCHuLj0ptAV0wbh_MjpQ0s74xNpcMhsQAiIXc2FyZGl1cyBpdCB0ZWNobm9sb2dpZXM#rlimm=8031489964217704717https://www.google.com/search?q=sardius+it+technologies&sca_esv=62f82ff636d943ce&sxsrf=AHTn8zqs8VZb3I6hEVarXJhcq90JVOy1iQ%3A1746531035428&ei=2_IZaIb2Gf2cvr0PpYyEkAs&ved=0ahUKEwjGz9KP346NAxV9jq8BHSUGAbIQ4dUDCBA&uact=5&oq=sardius+it+technologies&gs_lp=Egxnd3Mtd2l6LXNlcnAiF3NhcmRpdXMgaXQgdGVjaG5vbG9naWVzMgUQABiABDICECYyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgUQABjvBTIIEAAYogQYiQUyCBAAGKIEGIkFMgUQABjvBUjmPVCPF1j5NXAEeACQAQCYAb4CoAHCDKoBBzAuMS4zLjK4AQPIAQD4AQGYAgigAt8IwgIIEAAYgAQYsAPCAgcQABiwAxgewgIOEAAYgAQYsAMYhgMYigXCAggQABiwAxjvBcICCxAAGLADGKIEGIkFwgIHEAAYgAQYDcICBhAAGA0YHpgDAIgGAZAGCpIHBzQuMC4yLjKgB-kusgcFMi0yLjK4B8EI&sclient=gws-wiz-serp&lqi=ChdzYXJkaXVzIGl0IHRlY2hub2xvZ2llc1oZIhdzYXJkaXVzIGl0IHRlY2hub2xvZ2llc5IBHWNvbXB1dGVyX3N1cHBvcnRfYW5kX3NlcnZpY2VzqgFcCggvbS8wN2MxdhABKhAiDHRlY2hub2xvZ2llcygAMh8QASIb2iQPUmLyGCHuLj0ptAV0wbh_MjpQ0s74xNpcMhsQAiIXc2FyZGl1cyBpdCB0ZWNobm9sb2dpZXM#rlimm=8031489964217704717"
              width="100%"
              height="260"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* Right - Contact Form */}
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
          {status && (
            <p className={`text-center mt-4 text-sm font-medium ${status.startsWith('✅') ? 'text-green-600' : 'text-red-500'}`}>
              {status}
            </p>
          )}
        </motion.div>
      </div>

      {/* ConnectPage Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ConnectPage />
      </motion.section>

      {/* Social Media Footer */}
      <motion.div
        className="bg-black bg-opacity-30 py-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
            <FaInstagram />
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
            <FaWhatsapp />
          </a>
        </div>
      </motion.div>

    </div>
  );
};
export default ContactForm;