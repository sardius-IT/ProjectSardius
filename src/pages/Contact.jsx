import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm(
        'service_5bardgk',       // ✅ Your EmailJS Service ID
        'template_5uu3mym',      // ✅ Your EmailJS Template ID
        form.current,
        'UOogBBctFuQoWc7s-'      // ✅ Your EmailJS Public Key (User ID)
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus('❌ Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white text-gray-800 p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          className="w-full p-3 mb-4 border border-gray-300 rounded resize-none"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded hover:scale-105 transition"
        >
          Send Message
        </button>

        {status && (
          <p
            className={`text-center mt-4 font-medium ${
              status.startsWith('✅') ? 'text-green-600' : 'text-red-500'
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
