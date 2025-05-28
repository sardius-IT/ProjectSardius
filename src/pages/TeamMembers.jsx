import React from "react";
import { motion } from "framer-motion";
import image from "../assets/employee/Priya.jpg";
import Renuka from "../assets/employee/renuka.jpg";
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
import Lovathalli from"../assets/employee/Lovathalli.jpg";
import Aishwarya from"../assets/employee/Aishwarya.jpg";
const teamData = [
  { name: "Shreya.A", title: "HR Associate", image: Shreya },
  { name: "Shravani.M", title: "Accounts Executive", image: Shravani },
  
  { name: "Vivek.K", title: "Frontend Developer", image: Vivek },
  { name: "Manisha.P", title: "Frontend Developer", image: Manisha },
  { name: "Mani.k", title: "Backend Developer", image: Mani },
  { name: "Sai Meghana.k", title: "Backend Developer", image: Meghana },
  { name: "Geetha.B", title: "DevOps Engineer", image: Geetha },
  
  { name: "Divya Madhuri.K", title: "QA Engineer", image: Divya },
  { name: "Pavani Konduri", title: "QA Engineer", image: pavani },
  { name: "Charan Vakiti", title: "Digital Marketing Specialist", image: Charan },
 
  { name: "MANASA.P", title: "Digital Marketing Executive", image: MANASA },
  { name: "Rajinikanth.K", title: "Staffing", image: rajinikanth },
  { name: "Yamini Renuka.S", title: "Staffing", image: Renuka },
  
  
  { name: "Perumandla Aishwarya", title: "Staffing", image:Aishwarya  },

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
