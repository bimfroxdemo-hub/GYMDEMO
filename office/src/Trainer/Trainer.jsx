import React from "react";
import harsh from "../../public/inder1.png";
import babli from "../../public/babli.png";
import shaan from "../../public/shaan1.png";
import sakshi from "../../public/sakshi.png";
import { IoLogoWhatsapp } from "react-icons/io";
import Certifications from "./Certifications";

const trainers = [
  {
    name: "SHAAN PATEL",
    expertise: "Strength & Conditioning",
    image: shaan,
    bio: "10+ years of experience in bodybuilding and strength and training",
  },
  {
    name: "BABLI PARIHAR",
    expertise: "HIIT & Functional Training",
    image: babli,
    bio: "Certified CrossFit coach and nutrition specialist",
  },
  {
    name: "INDER VERMA",
    expertise: "Olympic Weightlifting",
    image: harsh,
    bio: "Former competitive athlete with 8 years coaching experience",
  },
  {
    name: "SAKSHI SHAH",
    expertise: "Yoga & Mindfulness",
    image: sakshi,
    bio: "Certified yoga instructor specializing in flexibility and recovery",
  },
];

const Trainer = () => {
  const whatsappNumber = "9147726227";

  const handleTrainerClick = (trainerName) => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Hi! I'd like to chat with ${trainerName}`,
      "_blank"
    );
  };

  return (
    <section className="px-4 py-20 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            MEET YOUR <span className="text-green-500">TRAINERS</span>
          </h2>
          <div className="w-20 h-1 bg-green-500 rounded mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert coaches dedicated to helping you achieve your fitness goals
          </p>
        </div>

        {/* TRAINERS SECTION */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-400 group flex flex-col"
            >
              {/* IMAGE SECTION */}
              <div className="relative w-full h-72 sm:h-80 md:h-72 lg:h-80 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={`${trainer.name} - Fitness trainer`}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* TEXT SECTION */}
              <div className="p-5 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{trainer.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{trainer.expertise}</p>
                  <p className="text-gray-600 text-sm">{trainer.bio}</p>
                </div>
                {/* WHATSAPP BUTTON */}
                <button
                  onClick={() => handleTrainerClick(trainer.name)}
                  className="flex items-center justify-center w-full py-2 px-4 bg-green-400 hover:bg-green-600 text-white font-medium rounded-md transition-colors duration-300 mt-2"
                >
                  <IoLogoWhatsapp className="w-5 h-5 mr-2" />
                  Connect Now
                </button>
              </div>

              {/* Soft Green Glow on Hover */}
              <div className="absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-green-200/40 via-green-200/30 to-green-200/40 blur-3xl"></div>
            </div>
          ))}
        </div>
        <Certifications />
      </div>
    </section>
  );
};

export default Trainer;
