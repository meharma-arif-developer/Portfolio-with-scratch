import React from 'react';

const Skills = () => {
  const Language = [
    { name: 'Python', level: 'Advanced' },
    { name: 'C++', level: 'Intermediate' },
    { name: 'React.js', level: 'Advanced' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'Kotlin', level: 'Intermediate' },
    { name: 'Tailwind CSS', level: 'Intermediate' },
    { name: 'MySQL', level: 'Intermediate' },
    { name: 'Bootstrap', level: 'Intermediate' },
  ];
  const devTools = [
    { name: 'Visual Studio Code', level: 'Advanced' },
    { name: 'Android Studio', level: 'Intermediate' },
    { name: 'Git & GitHub', level: 'Advanced' },
    { name: 'Postman', level: 'Intermediate' },
    { name: 'Figma', level: 'Intermediate' },
  ];

  return (
    <section id="Skills"
    className="w-full text-black py-20 px-4 sm:px-6 lg:px-8 font-sans rounded-3xl sm:rounded-4xl">
      <div className="max-w-6xl mx-auto">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-blue-500/20 text-black text-[11px] font-bold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-700"></span>
              Skills Overview
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Technical Skills
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-xl">
              A comprehensive overview of my technical skills and proficiencies in various programming languages, frameworks, and tools.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Language.map((language, index) => (
            <div key={index} className="bg-[#0e0e11] border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition overflow-hidden">
              <div className="flex items-center gap-2 text-indigo-400 font-mono text-sm font-bold mb-4">
                <h5>{language.name}</h5>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Proficiency Level: {language.level}
              </p>
            </div>
          ))}
        </div>

        {/* Development Tools Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-10">
            Development Tools
            </h2>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {devTools.map((tool, index) => (
            <div key={index} className="bg-[#0e0e11] border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition overflow-hidden">
              <div className="flex items-center gap-2 text-indigo-400 font-mono text-sm font-bold mb-4">
                <h5>{tool.name}</h5>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Proficiency Level: {tool.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;