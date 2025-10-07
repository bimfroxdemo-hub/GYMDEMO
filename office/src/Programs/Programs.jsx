import React from "react";
import { FaDumbbell } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiCycling } from "react-icons/bi";
import { GrYoga } from "react-icons/gr";
import { GiMusicalNotes, GiWeightLiftingUp, GiFruitBowl } from "react-icons/gi";
import Schedule from "./Schedule";

const programs = [
  {
    icon: FaDumbbell,
    title: "Weight Training",
    color: "text-green-500",
    description:
      "Build strength and muscle with our comprehensive weightlifting programs and expert guidance.",
  },
  {
    icon: BiCycling,
    title: "Cardio",
    color: "text-green-500",
    description:
      "Boost your cardiovascular health with treadmills, bikes, and high-energy cardio sessions.",
  },
  {
    icon: GrYoga,
    title: "Yoga",
    color: "text-green-500",
    description:
      "Find balance and flexibility through our calming yoga classes for all experience levels.",
  },
  {
    icon: GiMusicalNotes,
    title: "Zumba",
    color: "text-green-500",
    description:
      "Dance your way to fitness with our high-energy Zumba classes that make working out fun.",
  },
  {
    icon: GiWeightLiftingUp,
    title: "CrossFit",
    color: "text-green-500",
    description:
      "Push your limits with intense CrossFit workouts designed to build strength and endurance.",
  },
  {
    icon: GiFruitBowl,
    title: "Nutrition Coaching",
    color: "text-green-500",
    description:
      "Optimize your results with personalized nutrition plans tailored to your fitness goals.",
  },
];

const Programs = () => {
  const whatsappNumber = "916353771878";

  const handleProgramClick = (programName) => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Hi! I'm interested in learning more about ${programName}`,
      "_blank"
    );
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      {/* Custom CSS animation */}
      <style>
        {`
          .icon-container {
            transition: transform 0.3s ease-in-out;
          }
          .icon-container:hover {
            transform: scale(1.25);
          }
        `}
      </style>

      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            OUR <span className="text-green-500">PROGRAMS</span>
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 md:text-xl max-w-3xl mx-auto">
            Choose from our diverse range of fitness programs designed to meet
            your unique goals
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:border-green-300 hover:shadow-xl hover:shadow-green-300 transition-all duration-300 text-center"
            >
              {/* Animated Icon */}
              <div className="flex justify-center mb-6">
                <program.icon
                  className={`w-16 h-16 ${program.color} icon-container`}
                />
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                {program.title}
              </h3>
              <p className="text-gray-700 mb-6">{program.description}</p>

              {/* WhatsApp Button */}
              <button
                onClick={() => handleProgramClick(program.title)}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-green-50 hover:border-green-300 hover:text-green-600 transition-all duration-300"
              >
                <IoLogoWhatsapp className="text-green-500 w-7 h-7 sm:w-5 sm:h-5 flex-shrink-0 transition-transform duration-300 hover:scale-125" />
                <span className="flex-1 text-center">
                  ASK ABOUT THIS PROGRAM
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Schedule Section */}
        <Schedule />
      </div>
    </section>
  );
};

export default Programs;
