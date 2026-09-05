import React from "react";
import { Link } from "react-router-dom";
import { IoMdDownload } from "react-icons/io";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800 bg-black/20 text-sm mr-100 mb-8">
       <span className="relative flex h-2.5 w-2.5">
    <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>
    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-400"></span>
       </span>

       <span className="text-blue font-medium">
            Available For Work
        </span>
        <span className="text-gray-500">
            or Ready for Project!
        </span>

        </div>
        <h1 className="text-5xl font-bold mb-4">I'm Meharma Arif </h1>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Full Stack Developer</h2>
        <p className=" text-black-700 font-normal text-4xl">
          I design and develop responsive web <br></br>platforms that seamlessly blend functionality <br></br>with beautiful design.
        </p>
        <div className="flex justify-center space-x-4 mt-6">
        <Link 
        to="/contact"
        className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded hover:bg-blue-500 transition duration-300 ">
          Contact Me
        </Link>
        <a
         href="/ResumeCV.pdf"
         download="Meharma-Arif-CV.pdf"
        className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded hover:bg-blue-500 transition duration-300 flex items-center gap-2 justify-around"
        >
         Download Resume <IoMdDownload />
        </a>
        </div>
      </div>
    </section>
  );
};


export default Hero;