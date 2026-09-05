import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-slate-800">
          
          {/* Name & Description */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">
              Meharma Arif<span className="text-blue-500">.</span>
            </h2>

            <p className="text-slate-400 text-sm mt-2 max-w-sm">
              Frontend Developer passionate about building modern,
              responsive, and user-friendly web applications.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-5 text-sm text-slate-400">
            <a href="#home" className="hover:text-blue-500 transition">
              Home
            </a>

            <a href="#about" className="hover:text-blue-500 transition">
              About
            </a>

            <a href="#skills" className="hover:text-blue-500 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-blue-500 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-blue-500 transition">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/meharma-arif-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-blue-600 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/meharma-arif-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-blue-600 transition"
            >
              <FaLinkedin />
            </a>

            {/* Back to Top */}
            <a
              href="/"
              className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition"
            >
              <FaArrowUp />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Meharma Arif. All rights reserved.
          </p>

          <p>
            Built with <span className="text-blue-500">React</span> &
            <span className="text-blue-500"> Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;