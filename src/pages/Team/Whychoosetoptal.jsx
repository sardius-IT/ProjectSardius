import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import Image2 from "../../assets/irst.gif";
import cloudImage from "../../assets/y.png";
import clouds from "../../assets/Mouli Logo.png";
import cloud from "../../assets/vgrow.png";
import image from "../../assets/Vani Narne.png";
import image1 from "../../assets/JU.png";
const cards = [
  {
    title: "Careers Navigators",
    image: cloudImage,
  },
  {
    title: "IRST",
    image: Image2,
  },
  {
    title: "Mouli",
    image: clouds,
  },
  {
    title: "V Grow",
    image: cloud,
  },
  {
    title: "Vani Narne",
    image: image,
  },
  {
    title: "JPR",
    image: image1,
  },
];

const WhyChooseToptal = () => {
  return (
    <div className="min-h-screen py-12 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Why Organizations Choose</h1>
      <p className="text-gray-600 mb-12">
        Discover the many ways in which our clients have embraced the benefits of the Toptal network.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden shadow-lg group">
            <div className="w-full h-64 overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white rounded-full px-4 py-2 flex items-center text-sm gap-2">
              <FontAwesomeIcon icon={faImage} /> {card.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseToptal;
