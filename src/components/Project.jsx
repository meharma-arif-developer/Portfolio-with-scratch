import react from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  return (
    <section 
    id="Project"
    className="w-full bg-[#050505] text-white py-20 px-4 sm:px-6 lg:px-8 font-sans rounded-3xl sm:rounded-4xl">
      <div className="max-w-6xl mx-auto">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-blue-500/20 text-white text-[11px] font-bold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-700"></span>
              Projects Overview
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              My Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl">
              A showcase of my most significant projects, demonstrating my skills in web and mobile development, software architecture, and problem-solving.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <div className="bg-[#0e0e11] border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition overflow-hidden">
            <div className="flex items-center gap-2 text-indigo-700 text-2xl font-mono font-bold mb-4">
              <h5>Personal Portfolio</h5>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              A personal portfolio website built with React and Tailwind CSS, showcasing my skills, projects, and experience in software development. The site features a responsive design, smooth animations, and an intuitive user interface.
            </p>
            <Link 
            to="https://portfolio-website-neon-sigma-18.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition flex items-center justify-center gap-2">
              View Project <FaExternalLinkAlt />
            </Link>
            <Link 
            to="https://github.com/meharma-arif-developer"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition flex items-center justify-center gap-2">
              GitHub Repo <FaGithub />
            </Link>
          </div>
          {/* Project Card 2 */}
          <div className="bg-[#0e0e11] border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition overflow-hidden">
            <div className="flex items-center gap-2  text-indigo-700 text-2xl font-mono font-bold mb-4">
              <h5>Recipe Finder</h5>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              A web application that allows users to search for recipes based on ingredients they have at home. Built with React and integrated with a third-party recipe API, the app provides detailed recipe instructions, nutritional information, and user reviews.
            </p>
            <Link 
            to="https://recipe-finder-phi-nine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition flex items-center justify-center gap-2">
              View Project <FaExternalLinkAlt />
            </Link>
            <Link 
            to="https://github.com/meharma-arif-developer"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition flex items-center justify-center gap-2">
              GitHub Repo <FaGithub />
            </Link>
          </div>
          {/* Project Card 3 */}
          <div className="bg-[#0e0e11] border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition overflow-hidden">
            <div className="flex items-center gap-2 text-indigo-700 text-2xl font-mono font-bold mb-4">
              <h5>Task Management App</h5>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              A simple yet effective task management application built with React, allowing users to create, organize, and track their daily tasks. The app includes features like task prioritization, due dates, and progress tracking.
            </p>
            <Link
            to="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition flex items-center justify-center gap-2">
              View Project <FaExternalLinkAlt />
            </Link>
             <Link
              to="https://github.com/meharma-arif-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition flex items-center justify-center gap-2"
            >
              GitHub Repo <FaGithub />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;