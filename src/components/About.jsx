import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { HiOutlineCode } from 'react-icons/hi';

const FeaturedWork = () => {
  const techCoreSkills = [
    'Python', 'C++', 'React.js', 'JavaScript', 'Kotlin', 
    'Git & GitHub', 'Tailwind CSS', 'Android Studio', 'MySQL', 'Bootstrap'
  ];

  const strategicFocus = [
    'Full Stack Web Dev',
    'Mobile App Development',
    'Software Architecture',
    'Object-Oriented Design',
    'Database Systems'
  ];

  return (
    <section 
    id="About"
    className="w-full bg-[#050505] text-white py-20 px-4 sm:px-6 lg:px-8 font-sans rounded-3xl sm:rounded-4xl">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-blue-500/20 text-white text-[11px] font-bold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              Portfolio Highlights
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Featured Work
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl">
              A curated selection of my most impactful projects in Web and Mobile Software Engineering.
            </p>
          </div>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Top About Me Card */}
            <div className="bg-[#0e0e11] border border-slate-800/80 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-indigo-400 font-mono text-sm font-bold mb-4">
                <h5>About Me</h5>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I am a Software Engineering student driven by a mission to build intelligent, scalable systems. My expertise lies in bridging complex algorithms with high-performance web architecture to design robust solutions that solve real-world problems.
              </p>
            </div>

            {/* Bottom Projects Grid (2 Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Project Card 1: Shop AI */}
              <div className="group relative border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition overflow-hidden bg-[#0e0e11]">
                <div className="absolute inset-0 from-black via-black/70 to-transparent pointer-events-none h-full" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Shop AI (Entrepreneurship)
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                      An intelligent e-commerce store integrated with AI recommendations, dynamic search filters, and secure checkout UI built for a smooth shopping experience.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-black/50 border border-white/10 px-2.5 py-1 rounded-md text-slate-300">REACT</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-black/50 border border-white/10 px-2.5 py-1 rounded-md text-slate-300">TAILWIND CSS</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-black/50 border border-white/10 px-2.5 py-1 rounded-md text-slate-300">AI API</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-black/50 border border-white/10 px-2.5 py-1 rounded-md text-slate-300">PYTHON</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-black/50 border border-white/10 px-2.5 py-1 rounded-md text-slate-300">MONGODB</span>
                    </div>
                  </div>

                  <Link 
                    to="https://meharma-arif-developer.github.io/Shop-AI/"
                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold transition text-white bg-blue-600 px-4 w-full py-2.5 rounded-lg border border-blue-500/20 hover:bg-blue-700">
                    View Project <FaArrowUpRightFromSquare className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Project Card 2: Personal Portfolio Website */}
              <div className="group relative border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition overflow-hidden bg-[#0e0e11]">
                <div className="absolute inset-0 from-black via-black/70 to-transparent pointer-events-none h-full" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Personal Portfolio Website
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                      A modern, responsive portfolio application engineered using React, Vite, and Tailwind CSS with custom glassmorphic styling and email integration.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-black/50 border border-white/10 px-2.5 py-1 rounded-md text-slate-300">REACT (VITE)</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-black/50 border border-white/10 px-2.5 py-1 rounded-md text-slate-300">TAILWIND CSS</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-black/50 border border-white/10 px-2.5 py-1 rounded-md text-slate-300">JAVASCRIPT</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-black/50 border border-white/10 px-2.5 py-1 rounded-md text-slate-300">BOOTSTRAP</span>
                    </div>
                  </div>

                  <Link 
                  to="https://portfolio-website-neon-sigma-18.vercel.app/"
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold transition text-white bg-blue-600 px-4 w-full py-2.5 rounded-lg border border-blue-500/20 hover:bg-blue-700">
                    View Project <FaArrowUpRightFromSquare className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column (4 Cols) */}
          <div className="lg:col-span-4 bg-[#0e0e11] border border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            
            {/* Tech Core Pills */}
            <div>
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm mb-6">
                <HiOutlineCode className="w-5 h-5" /> Tech Core
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {techCoreSkills.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#141417] border border-slate-800 text-slate-300 hover:border-slate-700 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Strategic Focus List */}
            <div className="border-t border-slate-800/60 pt-6">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4">
                STRATEGIC FOCUS
              </h4>
              <ul className="space-y-3 text-sm text-slate-300">
                {strategicFocus.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedWork;