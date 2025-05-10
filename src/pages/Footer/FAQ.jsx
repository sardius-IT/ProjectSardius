import { useState } from 'react';
import { motion } from 'framer-motion';
import faqBanner from '../../assets/abstract.avif'; // Replace with your actual image path

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What services does Sardius IT Technologies offer?',
      answer:
        'We offer Cloud Solutions, Cybersecurity, Digital Strategy, and Staffing & Consulting services.',
    },
    {
      question: 'How can I get started with your services?',
      answer:
        'Simply reach out to us via the contact form or give us a call to schedule a consultation.',
    },
    {
      question: 'What industries do you serve?',
      answer:
        'We serve a variety of industries, including healthcare, finance, education, and tech startups.',
    },
    {
      question: 'What makes Sardius IT Technologies different?',
      answer:
        'We focus on providing tailored, scalable IT solutions and dedicated consulting services to help businesses succeed in the digital age.',
    },
    {
      question: 'How can I contact customer support?',
      answer:
        'You can reach our support team via email or the support portal on our website.',
    },
    {
      question: 'What is your process for Testing & Screening?',
      answer:
        'Our testing process includes rigorous functional, performance, and security testing using both manual and automated tools. We also conduct comprehensive screening of our staff and candidates to ensure top-tier talent and reliable service delivery.',
    },
  ];

  return (
    <motion.div
      className="max-w-5xl mx-auto px-4 py-12"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      {/* Banner with Title */}
      <motion.div
        className="relative w-full h-64 mb-10 rounded-2xl overflow-hidden shadow-lg"
        variants={fadeInUp}
        custom={0}
      >
        <img
          src={faqBanner}
          alt="FAQ Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.h1
            className="text-4xl font-bold text-white text-center"
            variants={fadeInUp}
            custom={1}
          >
            Frequently Asked Questions
          </motion.h1>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div className="space-y-4" variants={fadeInUp} custom={2}>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border-b border-gray-300"
            variants={fadeInUp}
            custom={index + 3}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left p-4 hover:bg-gray-800 focus:outline-none"
            >
              <h2 className="text-xl font-semibold text-gray-100">
                {faq.question}
              </h2>
            </button>
            {activeIndex === index && (
              <motion.div
                className="p-4 bg-gray-900 border border-gray-700 rounded-md"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FAQ;
