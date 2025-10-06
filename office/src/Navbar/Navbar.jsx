import React from 'react';
import { Link } from 'react-router-dom';  // ✅ Missing import added

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white shadow-md">
      {/* Logo */}
      <h1 className="text-3xl font-bold">
        Gym <span className="text-green-500">Wala</span>
      </h1>

      {/* Links */}
      <div className="flex gap-6 text-lg">
        <Link className="hover:text-green-400" to="/">Home</Link>
        <Link className="hover:text-green-400" to="/about">About</Link>
        <Link className="hover:text-green-400" to="/programs">Programs</Link>
        <Link className="hover:text-green-400" to="/trainer">Trainer</Link>
        <Link className="hover:text-green-400" to="/pricing">Pricing</Link>
        <Link className="hover:text-green-400" to="/contect">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
