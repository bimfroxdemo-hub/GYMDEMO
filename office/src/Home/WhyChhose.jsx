import React, { useState } from 'react';
import { GoPeople } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import { GoTrophy } from "react-icons/go";
import { CiDumbbell } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const WhyChoose = () => {
  const [activeCard, setActiveCard] = useState(null); // for mobile tap
  const [activeReview, setActiveReview] = useState(null);

  const cards = [
    { id: 1, icon: <GoPeople className="text-6xl text-green-500" />, title: "5000+", desc: "Certified trainers guiding you safely and effectively." },
    { id: 2, icon: <IoMdTime className="text-6xl text-green-500" />, title: "24/7", desc: "Open anytime to fit your schedule conveniently." },
    { id: 3, icon: <GoTrophy className="text-6xl text-green-500" />, title: "15+", desc: "Years of experience helping members achieve goals." },
    { id: 4, icon: <CiDumbbell className="text-6xl text-green-500" />, title: "50+", desc: "Different types of modern gym equipment." },
  ];

  const reviews = [
    { id: 1, name: "John Doe", review: "This gym changed my life! Amazing trainers and facilities." },
    { id: 2, name: "Sarah Smith", review: "Highly recommend FITCORE. The results are real and fast!" },
    { id: 3, name: "Michael Brown", review: "Friendly staff, modern equipment, and great environment." },
    { id: 4, name: "Emma Wilson", review: "Best gym experience ever! 5-star training and support." },
  ];

  return (
    <div className="py-20 px-6 bg-gray-100">
      {/* WHY CHOOSE FITCORE */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
        WHY CHOOSE Gym <span className="text-green-500"> Wala</span>
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => setActiveCard(card.id === activeCard ? null : card.id)} // toggle green shadow on click
            className={`bg-white p-8 rounded-2xl flex flex-col items-center text-center transition-transform duration-300 cursor-pointer
              ${activeCard === card.id ? "scale-105 shadow-[0_0_25px_rgba(34,197,94,0.5)]" : "hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.5)]"}`}
          >
            <div className="mb-4">{card.icon}</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">{card.title}</h2>
            <p className="text-gray-600 text-sm md:text-base">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* SUCCESS STORIES */}
      <div className="mb-12">
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-4">
          SUCCESS <span className="text-green-500">STORIES</span>
        </h1>
        <hr className="w-24 border-2 border-green-500 mx-auto mb-4" />
        <p className="text-center text-sm md:text-base mb-12">
          Real transformations from real members
        </p>

        {/* Review Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              onClick={() => setActiveReview(review.id === activeReview ? null : review.id)} // toggle green shadow on click
              className={`bg-white p-6 rounded-2xl flex flex-col items-center text-center transition-transform duration-300 cursor-pointer
                ${activeReview === review.id ? "scale-105 shadow-[0_0_25px_rgba(34,197,94,0.5)]" : "hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.5)]"}`}
            >
              <div className="flex mb-2">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-400 mx-0.5" />
                ))}
              </div>
              <h3 className="font-bold text-lg mb-2">{review.name}</h3>
              <p className="text-gray-600 text-sm">{review.review}</p>
            </div>
          ))}
        </div>
      </div>

      <div  >
  <hr className=' mt-25' />
      </div>
    </div>
  );
};

export default WhyChoose;
