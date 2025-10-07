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
      {/* Inline CSS for pop/bounce effect */}
      <style>
        {`
          .pop-hover {
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out;
          }
          .pop-hover:hover {
            transform: scale(1.05);
            box-shadow: 0 20px 25px -5px rgba(34,197,94,0.2), 0 10px 10px -5px rgba(34,197,94,0.1);
            border-color: #22c55e; /* Tailwind green-500 */
          }

          @keyframes icon-pop {
            0% { transform: scale(1); }
            50% { transform: scale(1.3); }
            70% { transform: scale(1.15); }
            100% { transform: scale(1.25); }
          }

          .icon-pop-hover:hover {
            animation: icon-pop 0.4s ease forwards;
          }
        `}
      </style>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardd.map((item) => (
          <div
            key={item.id}
            className="pop-hover bg-white border-1 shadow-lg border-gray-100 rounded-3xl p-8 flex flex-col items-center text-center hover:border-green-100 hover:shadow-xl hover:shadow-green-300 transition-all duration-300"
          >
            <div className="text-green-500 mb-4 icon-pop-hover">
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
