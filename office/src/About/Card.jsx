import React from "react";
import { AiOutlineFileProtect } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { GiElectric, GiRainbowStar } from "react-icons/gi";
import { FiTarget } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";

const Card = () => {
  const cardd = [
    {
      id: 1,
      title: "Excellence",
      des: "We maintain the highest standards in equipment, cleanliness, and service quality.",
      icon: <AiOutlineFileProtect size={50} />,
    },
    {
      id: 2,
      title: "Passion",
      des: "Our team is passionate about fitness and helping you achieve your goals.",
      icon: <FaRegHeart size={50} />,
    },
    {
      id: 3,
      title: "Innovation",
      des: "We use the latest technology and training techniques to optimize results.",
      icon: <GiElectric size={50} />,
    },
    {
      id: 4,
      title: "Focus",
      des: "Personalized programs designed to keep you motivated and on track.",
      icon: <FiTarget size={50} />,
    },
    {
      id: 5,
      title: "Community",
      des: "Join a supportive community that inspires growth and commitment.",
      icon: <BsPeople size={50} />,
    },
    {
      id: 6,
      title: "Inspiration",
      des: "We motivate members to push limits and reach their peak performance.",
      icon: <GiRainbowStar size={50} />,
    },
  ];

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-20 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardd.map((item) => (
          <div
            key={item.id}
            className="relative group rounded-3xl overflow-hidden flex flex-col items-center text-center border border-gray-200 shadow-md p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-400"
          >
            {/* Soft Glow on Hover */}
            <div className="absolute inset-0 -z-10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-green-200/40 via-green-200/30 to-green-200/40 blur-3xl"></div>

            <div className="text-green-500 mb-4 transform transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-green-500 mb-3">
              {item.title}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">{item.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
