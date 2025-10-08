import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Scroll threshold
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Home", "About", "Programs", "Trainer", "Pricing", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      } text-black  `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-black">
          Gym <span className="text-green-500">Wala</span>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-lg">
          {links.map((link) => (
            <Link
              key={link}
              to={link === "Home" ? "/" : `/${link.toLowerCase()}`}

              className="text-black hover:text-green-500 transition-all duration-200"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        } bg-white text-black`}
      >
        {links.map((link) => (
          <Link
            key={link}
            to={link === "Home" ? "/" : `/${link.toLowerCase()}`}

            className="hover:text-green-500 transition-transform duration-200 transform hover:scale-105 py-2 w-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;