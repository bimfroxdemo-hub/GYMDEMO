import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa6";

const images = ["/bg2.png", "/yoga.png", "/banner4.png"]; // 🖼️ add your images here

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === images.length - 1 && direction === 1) {
          setDirection(-1);
          return prev - 1;
        } else if (prev === 0 && direction === -1) {
          setDirection(1);
          return prev + 1;
        } else {
          return prev + direction;
        }
      });
    }, 5000); // ⏱️ change image every 5 seconds

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <section className="relative flex justify-center items-center overflow-hidden">
      {/* Background Image Slider */}
      <div
        className="flex transition-transform duration-[2000ms] ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`banner-${index}`}
            className="w-full object-cover h-[calc(100vh-230px)] sm:h-[calc(100vh-140px)] md:h-screen flex-shrink-0"
          />
        ))}
      </div>

      {/* Overlay Text & Button */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 py-[15px] sm:py-[15px] md:py-0">
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

        {/* WhatsApp Button */}
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

      {/* Bottom Bullets */}
      <div className="absolute bottom-5 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-green-500" : "bg-white/70 hover:bg-white"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Banner;
