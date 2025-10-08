import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="relative flex justify-center items-center">
      {/* Background Image */}
      <img
        src="/bg2.png"
        alt="banner"
        className="w-full object-cover h-[calc(100vh-230px)] sm:h-[calc(100vh-140px)] md:h-screen"
        // h-[calc(100vh-30px)] subtracts 15px top + 15px bottom
      />

      {/* Overlay Text + Button */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 
                      py-[15px] sm:py-[15px] md:py-0">
        <p className="text-5xl sm:text-6xl md:text-8xl font-serif text-white drop-shadow-lg">
          STRONGER
        </p>
        <p className="text-5xl sm:text-6xl md:text-8xl font-sans font-bold text-green-500 drop-shadow-lg">
          EVERY DAY
        </p>

        <p className="text-[18px] sm:text-[22px] md:text-[30px] text-white mt-4 drop-shadow-md">
          Transform your body, elevate your mind, and unleash
        </p>
        <p className="text-[18px] sm:text-[22px] md:text-[30px] text-white drop-shadow-md mb-8">
          your potential at Gym <span className="text-green-500">Wala</span>
        </p>

        {/* ✅ Center WhatsApp Button */}
        <a
          href="https://wa.me/916353771878"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white flex items-center gap-2 px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
        >
          <FaWhatsapp size={35} />
          <span className="font-semibold">WhatsApp</span>
        </a>
      </div>
    </section>
  );
};

export default Banner;
