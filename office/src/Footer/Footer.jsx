import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 flex flex-col justify-between">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center sm:text-left">
        {/* 🏋️ Left Column - Logo + About + Social Icons */}
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="font-bold text-3xl mb-2">
            GYM <span className="text-green-500">Wala</span>
          </h1>
          <p className="text-gray-300 mb-4 max-w-xs">
            Your journey to a stronger, healthier you starts here.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-2 justify-center sm:justify-start flex-wrap">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-green-500 transition-all"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-green-500 transition-all"
            >
              <FaFacebook />
            </a>
            <a
              href="https://wa.me/916353771878"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-green-500 transition-all"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-green-500 transition-all"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-green-500 transition-all"
            >
              <FaTelegram />
            </a>
          </div>
        </div>

        {/* ⚡ Middle Column - Quick Links */}
        <div className="flex flex-col items-center sm:items-start">
          <p className="font-bold text-xl mb-3">Quick Links</p>
          <Link
            to="/about"
            className="text-gray-300 hover:text-green-500 transition-all"
          >
            About
          </Link>
          <Link
            to="/programs"
            className="text-gray-300 hover:text-green-500 transition-all"
          >
            Programs
          </Link>
          <Link
            to="/trainer"
            className="text-gray-300 hover:text-green-500 transition-all"
          >
            Trainer
          </Link>
          <Link
            to="/pricing"
            className="text-gray-300 hover:text-green-500 transition-all"
          >
            Pricing
          </Link>
        </div>

        {/* 🕒 Right Column - Opening Hours */}
        <div className="flex flex-col items-center sm:items-start">
          <p className="font-bold text-xl mb-3">Opening Hours</p>
          <div>
            <p>Monday - Friday</p>
            <p className="text-green-500">5:00 AM - 11:00 PM</p>
            <p className="mt-2">Saturday - Sunday</p>
            <p className="text-green-500">6:00 AM - 9:00 PM</p>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="border-gray-700 my-8 w-full" />

      {/* Bottom Text */}
      <p className="text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} GYM Wala. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
