import React from 'react';
import { motion } from 'framer-motion';
import privacyBanner from '../../assets/abstract.avif'; // Replace with your image path

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

const PrivacyPolicy = () => {
  return (
    <motion.div
      className="max-w-5xl mx-auto px-4 py-12"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {/* Banner with centered title */}
      <motion.div
        className="relative w-full h-64 mb-8 rounded-2xl overflow-hidden shadow-lg"
        variants={fadeInUp}
        custom={0}
      >
        <img
          src={privacyBanner}
          alt="Privacy illustration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.h1
            className="text-4xl font-bold text-white text-center"
            variants={fadeInUp}
            custom={1}
          >
            Privacy Policy
          </motion.h1>
        </div>
      </motion.div>

      {/* Privacy Policy content */}
      <motion.section
        className="space-y-6 text-gray-300 leading-relaxed text-justify"
        variants={fadeInUp}
        custom={2}
      >
        <motion.p variants={fadeInUp} custom={3}>
          This Privacy Policy explains how Sardius IT Technologies collects, uses, and protects the personal
          information you provide to us when you use our website or services.
        </motion.p>

        {[
          {
            title: '1. Information We Collect',
            content:
              'We may collect personal information including your name, email address, phone number, company details, and service preferences when you fill out forms, request information, or interact with our site.',
          },
          {
            title: '2. How We Use Your Information',
            content:
              'The information we collect is used to respond to inquiries, deliver requested services, improve our offerings, and communicate updates or marketing content relevant to our services. You may opt out of marketing communications at any time.',
          },
          {
            title: '3. Cookies & Tracking',
            content:
              'We use cookies and similar technologies to analyze trends, track users’ movements, and gather demographic information. You can control cookie usage through your browser settings.',
          },
          {
            title: '4. Data Protection & Security',
            content:
              'Sardius IT Technologies employs appropriate technical and organizational measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction.',
          },
          {
            title: '5. Sharing Your Information',
            content:
              'We do not sell or rent your personal information. We may share information with trusted partners and service providers strictly for business operations or legal compliance, under confidentiality agreements.',
          },
          {
            title: '6. Your Rights',
            content:
              <>
                You have the right to access, correct, or delete your personal information. To exercise these rights,
                please contact us at{' '}
                <a href="mailto:privacy@sardius.tech" className="text-blue-600 underline">
                  privacy@sardius.tech
                </a>
                .
              </>
          },
          {
            title: '7. External Links',
            content:
              'Our website may contain links to other sites. We are not responsible for the privacy practices or content of external websites.',
          },
          {
            title: '8. Policy Updates',
            content:
              'Sardius IT Technologies may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.',
          },
          {
            title: '9. Contact Information',
            content: <>
              For any questions regarding this Privacy Policy, please contact us at:{' '}
              <a href="mailto:info@sardius.tech" className="text-blue-600 underline">
                info@sardius.tech
              </a>
              .
            </>
          },
        ].map((section, idx) => (
          <motion.div key={idx} variants={fadeInUp} custom={idx + 4}>
            <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-100">{section.title}</h2>
            <p>{section.content}</p>
          </motion.div>
        ))}
      </motion.section>
    </motion.div>
  );
};

export default PrivacyPolicy;
