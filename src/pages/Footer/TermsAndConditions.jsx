import React from 'react';
import { motion } from 'framer-motion';
import termsBanner from '../../assets/friends.webp'; // Make sure the image is in src/assets/

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

const TermsAndConditions = () => {
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
        className="relative w-full h-64 mb-10 rounded-2xl overflow-hidden shadow-lg"
        variants={fadeInUp}
        custom={0}
      >
        <img
          src={termsBanner}
          alt="Terms and Conditions Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.h1
            className="text-4xl font-bold text-white text-center"
            variants={fadeInUp}
            custom={1}
          >
            Terms & Conditions
          </motion.h1>
        </div>
      </motion.div>

      {/* Terms content */}
      <motion.section
        className="space-y-6 text-gray-300 leading-relaxed text-justify"
        variants={fadeInUp}
        custom={2}
      >
        <motion.p variants={fadeInUp} custom={3}>
          Welcome to Sardius IT Technologies. These Terms and Conditions ("Terms") outline the rules and regulations
          for the use of our website and services. By accessing this website, you accept these Terms in full. Do not
          continue to use Sardius IT Technologies' website if you do not agree to all of the terms stated on this page.
        </motion.p>

        {[
          {
            title: '1. Services Overview',
            content:
              'Sardius IT Technologies offers IT consulting, staffing, cloud solutions, cybersecurity, and digital strategy services. These services may be subject to specific agreements or contracts that take precedence over these Terms where applicable.',
          },
          {
            title: '2. User Responsibilities',
            content:
              'As a user of our website, you agree not to misuse the content or access our services for unlawful purposes. You are responsible for ensuring that your use of the website complies with all local laws and regulations.',
          },
          {
            title: '3. Intellectual Property Rights',
            content:
              'All materials on this website, including text, graphics, logos, and software, are the intellectual property of Sardius IT Technologies or its licensors. Reproduction or redistribution of any content without written permission is strictly prohibited.',
          },
          {
            title: '4. Confidentiality',
            content:
              'Any information shared with Sardius IT Technologies through this website or through our services will be treated with appropriate confidentiality in accordance with our Privacy Policy.',
          },
          {
            title: '5. Disclaimer of Warranties',
            content:
              'All content on this website is provided "as is" without warranties of any kind. While we strive to ensure accuracy, Sardius IT Technologies does not guarantee the completeness, reliability, or availability of the information.',
          },
          {
            title: '6. Limitation of Liability',
            content:
              'Sardius IT Technologies shall not be liable for any indirect, incidental, or consequential damages arising out of your use or inability to use our website or services.',
          },
          {
            title: '7. Third-Party Links',
            content:
              'Our site may include links to external websites that are not operated by us. We do not endorse and are not responsible for the content or practices of any third-party websites.',
          },
          {
            title: '8. Modifications',
            content:
              'Sardius IT Technologies reserves the right to revise these Terms at any time. Changes will be posted on this page, and continued use of the website implies acceptance of the updated terms.',
          },
          {
            title: '9. Governing Law',
            content:
              'These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Sardius IT Technologies operates, without regard to its conflict of law provisions.',
          },
          {
            title: '10. Contact Us',
            content: (
              <>
                For any questions or concerns regarding these Terms, please contact us at:{' '}
                <a
                  href="mailto:info@sardius.tech"
                  className="text-blue-600 underline"
                >
                  info@sardius.tech
                </a>
              </>
            ),
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

export default TermsAndConditions;
