import React from "react";
import Card from "./Card";

const About = () => {
  const idd = [
    {
      id: 1,
      title: "Our Mission",
      desc: "To empower individuals to reach their peak physical and mental performance through world-class training, cutting-edge equipment, and unwavering support."
    },
    {
      id: 2,
      title: "Our Vision",
      desc: "To be the premier fitness destination where every member feels motivated, supported, and inspired to push beyond their limits every single day."
    },
    {
      id: 3,
      title: "State-of-the-Art Equipment",
      URL: "1.jpg"
    },
    {
      id: 4,
      title: "Energizing Group Classes",
      URL: "2.jpg"
    }
  ];

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-20">
      {/* ABOUT HEADER */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold flex justify-center text-center gap-3 mb-4 mt-8">
        ABOUT <span className="text-green-500">Gym Wala</span>
      </h1>
      <div className="h-1 w-24 bg-green-400 mx-auto mt-4 mb-6"></div>
      
      <p className="text-center text-gray-600 text-base sm:text-lg lg:text-xl mb-12 px-2 sm:px-6">
        Welcome to Gym Wala! We help you achieve your fitness goals with certified trainers, modern equipment, and a supportive environment.
      </p>

      {/* ABOUT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
        {idd.map((item) => (
          <div
            key={item.id}
            className="relative group rounded-2xl overflow-hidden flex flex-col items-center text-center border border-gray-200 shadow-sm transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-300"
          >
            {/* Soft Glow on Hover */}
            <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-green-200/40 via-green-200/30 to-green-200/40 blur-3xl"></div>

            {item.URL && (
              <img
                src={item.URL}
                alt={item.title}
                className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-t-2xl relative z-10 
                           transform transition-transform duration-500 ease-in-out 
                           group-hover:scale-105 group-hover:translate-y-1
                           animate-float"
              />
            )}
            <div className="p-6 relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-green-500 mb-2">{item.title}</h2>
              {item.desc && <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* OUR VALUES */}
      <div className="mt-16 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
          OUR <span className="text-green-500">VALUES</span>
        </h1>
        <div className="h-1 w-24 bg-green-400 mt-4 mb-4"></div>
        <p className="text-center text-base sm:text-lg lg:text-xl mb-8 px-2 sm:px-6">
          The principles that drive everything we do
        </p>
        <div className="w-full">
          <Card />
        </div>
      </div>

      {/* Floating animation CSS */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default About;
