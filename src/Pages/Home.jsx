import React from "react";
import { FaAtom, FaFlask, FaMicroscope, FaBook, FaCloud } from "react-icons/fa"; // Import icons

function Home() {
  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url("/sciencebg3.jpg")' }}
    >
      <div className="absolute inset-0 flex justify-center mt-36 items-start text-center text-4xl font-bold text-white  sha z-0">
        <h1>
          স্বাগতম <span className="text-2xl font-bold text-red-600">TO</span>{" "}
          বিজ্ঞান গল্প
        </h1>
      </div>
      ;{/* Bubbles */}
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <div className="absolute bubble bubble-1">
          <div className="glass-bubble">
            <FaAtom className="text-blue-600 text-4xl" />
            <h1 className="text-white">Physics</h1>
          </div>
        </div>
        <div className="absolute bubble bubble-2">
          <div className="glass-bubble">
            <FaFlask className="text-amber-600 text-4xl" />
            <h1 className="text-white">Chemistry</h1>
          </div>
        </div>
        <div className="absolute bubble bubble-3">
          <div className="glass-bubble">
            <FaMicroscope className="text-green-500 text-4xl" />
            <h1 className="text-white">Biology</h1>
          </div>
        </div>
        <div className="absolute bubble bubble-4">
          <div className="glass-bubble">
            <FaBook className="text-white text-4xl" />
            <h1 className="text-white">Education</h1>
          </div>
        </div>
        {/* New Bubble */}
        <div className="absolute bubble bubble-5">
          <div className="glass-bubble">
            <FaCloud className="text-blue-300 text-4xl" />
            <h1 className="text-white">Meteorology</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
