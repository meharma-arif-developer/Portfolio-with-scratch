import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="#"
          className="text-2xl font-bold text-gray-900 tracking-tight"
        >
          Meharma Arif<span className="text-blue-600">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>

          <Link
            to="/About"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            About
          </Link>

          <Link
            to="/Skills"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Skills
          </Link>

          <Link
            to="/Projects"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Projects
          </Link>

          <Link
            to="/Contact"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Contact Button */}
        <Link
          to="/Contact"
          className="hidden md:block bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors"
        >
          Let's Talk
        </Link>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-800 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-5 space-y-4 font-medium shadow-lg">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/About"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-blue-600"
          >
            About
          </Link>

          <Link
            to="/Skills"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-blue-600"
          >
            Skills
          </Link>

          <Link
            to="/Projects"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-blue-600"
          >
            Projects
          </Link>

          <Link
            to="/Contact"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-blue-600"
          >
            Contact
          </Link>

          <Link
            to="/Contact"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors mt-2"
          >
            Let's Talk
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;