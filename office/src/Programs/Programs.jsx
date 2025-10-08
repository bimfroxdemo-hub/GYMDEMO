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
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            OUR <span className="text-green-500">PROGRAMS</span>
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 md:text-xl max-w-3xl mx-auto">
            Choose from our diverse range of fitness programs designed to meet your unique goals
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="relative group bg-white p-8 rounded-xl shadow-md border border-gray-200 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-400 text-center"
            >
              {/* Soft Green Glow */}
              <div className="absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-green-200/40 via-green-200/30 to-green-200/40 blur-3xl"></div>

              {/* Animated Icon */}
              <div className="flex justify-center mb-6">
                <program.icon
                  className={`w-16 h-16 ${program.color} transform transition-transform duration-300 group-hover:scale-110`}
                />
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{program.title}</h3>
              <p className="text-gray-700 mb-6">{program.description}</p>

              {/* WhatsApp Button with Glow */}
              <button
                onClick={() => handleProgramClick(program.title)}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-green-500 rounded-lg text-green-500 font-medium bg-white transition-all duration-300 hover:bg-green-500 hover:text-white hover:shadow-lg hover:shadow-green-400"
              >
                <IoLogoWhatsapp className="w-7 h-7 sm:w-5 sm:h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
                <span className="flex-1 text-center">ASK ABOUT THIS PROGRAM</span>
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
