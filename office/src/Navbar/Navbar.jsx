import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Home", "About", "Programs", "Trainer", "Pricing", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-black">
          Gym <span className="text-green-500">Wala</span>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-lg font-medium">
          {links.map((link) => {
            const path = link === "Home" ? "/" : `/${link.toLowerCase()}`;
            const isActive = link !== "Home" && location.pathname === path;
            return (
              <Link
                key={link}
                to={path}
                className={`relative transition-all duration-300 hover:scale-105 ${
                  isActive
                    ? "text-green-500 font-bold"
                    : "text-black hover:text-green-500"
                }`}
              >
                {link}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-green-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer text-black transition-transform duration-300 hover:scale-110"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        {links.map((link) => {
          const path = link === "Home" ? "/" : `/${link.toLowerCase()}`;
          const isActive = link !== "Home" && location.pathname === path;
          return (
            <Link
              key={link}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={`py-3 text-center w-full transition-all duration-300 transform hover:scale-105 ${
                isActive ? "text-green-500 font-bold" : "text-black hover:text-green-500"
              }`}
            >
              {link}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
