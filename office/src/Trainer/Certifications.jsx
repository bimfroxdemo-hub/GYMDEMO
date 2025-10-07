import React from "react";
import { FaAward, FaShieldAlt, FaUsers, FaFire } from "react-icons/fa";

const certifications = [
  { icon: FaAward, title: "NASM Certified", count: "12 Trainers" },
  { icon: FaShieldAlt, title: "ACE Certified", count: "8 Trainers" },
  { icon: FaUsers, title: "CrossFit L2", count: "6 Trainers" },
  { icon: FaFire, title: "Nutrition Specialists", count: "5 Trainers" },
];

const Certifications = () => {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* CERTIFICATE SECTION */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            CERTIFIED <span className="text-green-500">EXPERTS</span>
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Our trainers hold industry-leading certifications
          </p>
        </div>

        {/* CERTIFICATION SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((certi, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:border-green-300 hover:shadow-xl hover:shadow-green-300 transition-all duration-300 text-center"
            >
              <div className="flex justify-center">
                <certi.icon
                  className="text-green-500 text-5xl mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                />
              </div>
              <h3 className="text-gray-800 font-semibold text-lg mb-1">
                {certi.title}
              </h3>
              <p className="text-green-500 font-medium">{certi.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
