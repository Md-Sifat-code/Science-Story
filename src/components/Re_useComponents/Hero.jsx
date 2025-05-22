import React from "react";
import {
  GiAtom,
  GiChemicalDrop,
  GiMicroscope,
  GiBrain,
  GiSolarSystem,
  GiRocket,
  GiPlanetCore,
} from "react-icons/gi";
import { MdOutlineScience } from "react-icons/md"; // Replacement for GiTelescope
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/backgr.jpg')" }}
    >
      {/* Absolutely positioned image on the left center */}
      <div className="absolute left-[-140px] md:left-[-250px] top-1/2 transform -translate-y-1/2">
        <img src="/ai.png" alt="AI Illustration" className="w-64 md:w-full" />
      </div>

      {/* Centered content */}
      <div className="text-center px-4 max-w-2xl">
        <h1 className="text-4xl md:text-9xl font-bold text-black mb-2">
          আপনেকে স্বাগতম{" "}
          <span className="sour uppercase text-[#575B91]">BigganAdda</span>
        </h1>
        <p className="text-lg md:text-2xl mb-6 md:mb-9 text-gray-600">
          Discover, learn, and grow with our amazing resources.
        </p>
        <Link
          to={"/home/learn"}
          className="px-6 mb-6 md:mb-9 py-3 bg-[#575B91] hover:bg-[#454A7A] text-white rounded-lg transition mb-6"
        >
          শুরু করুন
        </Link>

        {/* Scientific Topic Icons */}
        <div className="flex flex-wrap justify-center gap-4 text-[#575B91] text-4xl mt-6">
          <GiAtom title="Physics" />
          <GiChemicalDrop title="Chemistry" />
          <GiMicroscope title="Biology" />
          <GiBrain title="Neuroscience" />
          <GiSolarSystem title="Astronomy" />
          <GiRocket title="Space Exploration" />
          <MdOutlineScience title="General Science" />
          <GiPlanetCore title="Geology" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
