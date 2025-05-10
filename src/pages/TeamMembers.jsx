import React from "react";
import { motion } from "framer-motion";
import image from "../assets/employee/Priya.jpg";
import image1 from "../assets/abstract.avif";
import image4 from "../assets/friends.webp";
import Vivek from "../assets/employee/vivek.jpg";
import Shreya from "../assets/employee/Shreya.A.jpg";
import Charan from "../assets/employee/Chran Vakiti.jpg";
import Mani from "../assets/employee/koude mani.jpg";
import Shravani from "../assets/employee/SHRAVIN.jpg";
import Shilpa from "../assets/employee/shilpa.jpg";
import Kalyani from "../assets/employee/kanyani.jpg";
import rajinikanth from "../assets/employee/rajinikanth.jpg";
import Manisha from "../assets/employee/Manisha.jpg";
import Bhavani from "../assets/employee/Bhavani.jpg";
import Meghana from "../assets/employee/Meghana.jpg";
import Geetha from "../assets/employee/Geetha.jpg";
import MANASA from "../assets/employee/MANASA.jpg";
import pavani from "../assets/employee/pavani.jpg";
import Divya from "../assets/employee/divya.jpg";
import Anitha from "../assets/employee/Anitha.jpg";
import Lovathalli from"../assets/employee/Lovathalli.jpg"

const teamData = [
  { name: "Shreya.A", title: "HR Associate", image: Shreya },
  { name: "Shravani.M", title: "Accounts Executive", image: Shravani },
  { name: "Shilpa.k", title: "IT Recruitment", image: Shilpa },
  { name: "Vivek.K", title: "Frontend Developer", image: Vivek },
  { name: "Manisha.P", title: "Frontend Developer", image: Manisha },
  { name: "Mani.k", title: "Backend Developer", image: Mani },
  { name: "Sai Meghana.k", title: "Backend Developer", image: Meghana },
  { name: "Geetha.B", title: "DevOps Engineer", image: Geetha },
  { name: "Anitha.N", title: "DevOps Engineer", image: Anitha },
  { name: "Divya Madhuri.K", title: "QA Engineer", image: Divya },
  { name: "Pavani Konduri", title: "QA Engineer", image: pavani },
  { name: "Charan Vakiti", title: "Digital Marketing Specialist", image: Charan },
  { name: "Bhavani.G", title: "Digital Marketing Executive", image: Bhavani },
  { name: "MANASA.P", title: "Digital Marketing Executive", image: MANASA },
  { name: "Rajinikanth.K", title: "Staffing", image: rajinikanth },
  { name: "Yamini Renuka.S", title: "Staffing", image: image1 },
  { name: "Kalyani.M", title: "Staffing", image: Kalyani },
  { name: "Lovathalli", title: "Staffing", image:Lovathalli  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const TeamMembers = () => {
  return (
    <>
    <h1 className="text-4xl md:text-5xl text-center font-bold py-6 text-white">
      About Our Director
    </h1>

    {/* Director Section */}
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center gap-8 px-6 py-10 text-white max-w-7xl mx-auto"
    >
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt="Director"
          loading="lazy"
          className="rounded-3xl mx-auto w-full max-w-sm object-cover shadow-xl"
        />
      </div>
      <div className="md:w-1/2 py-5">
        <h2 className="text-2xl font-bold text-white py-2">
          <span className="italic">Ms</span>. Priyadarshini Talluri
        </h2>
        <p className="text-sm text-gray-400 mb-2">
          Founder & Director, Sardius IT Company
        </p>
        <p className="text-gray-300 leading-relaxed py-4">
          Ms. Priyadarshini Talluri, the Founder and Director of Sardius IT Company, is a dynamic and forward-thinking leader with a strong passion for technology and innovation. With a clear vision to bridge the gap between digital challenges and transformative solutions, she established Sardius IT as a trusted provider of cutting-edge IT services.
        </p>
      </div>
    </motion.section>

    {/* Team Members Section */}
    <section className="py-12 px-6 text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-400">Sardius Core Team</h2>
        <p className="text-gray-400 mt-2">
          Dedicated professionals who drive Sardius IT forward
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {teamData.map((member, index) => (
          <motion.div
            key={index}
            className="text-center"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              className="w-36 h-36 mx-auto rounded-full object-cover shadow-md"
            />
            <h3 className="text-lg font-semibold text-blue-500 mt-4">
              {member.name}
            </h3>
            <hr className="w-2/3 mx-auto my-2 border-gray-500" />
            <p className="text-sm text-gray-300">{member.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </>
  );
};

export default TeamMembers;
