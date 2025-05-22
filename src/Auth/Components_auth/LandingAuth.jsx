import React from "react";
import { useLanguage } from "../../LanguageContext"; // Adjust path if necessary
import { Link } from "react-router-dom";

function LandingAuth() {
  const { language } = useLanguage();

  const texts = {
    en: {
      title: "BIGGANADDA",
      login: "Login",
      signup: "Sign Up",
      infoText: "Some Information Here",
    },
    bn: {
      title: "বিগ্গানআড্ডা",
      login: "লগইন",
      signup: "সাইন আপ",
      infoText: "কিছু তথ্য এখানে",
    },
  };

  const t = texts[language] || texts.en;

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-white bg-cover bg-center px-4 sm:px-6"
      style={{ backgroundImage: "url('/homepage-bg.png')" }}
    >
      {/* Top Navigation */}
      <div className="flex justify-between items-center w-full max-w-6xl px-4 sm:px-6 py-4">
        <h1 className="text-2xl sm:text-5xl font-bold">{t.title}</h1>
        <div className="space-x-2 sm:space-x-4">
          <Link
            to="/login"
            className="bg-white text-[#575B91] font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded hover:bg-gray-100 transition"
          >
            {t.login}
          </Link>
          <Link
            to="/signup"
            className="bg-white text-[#575B91] font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded hover:bg-gray-100 transition"
          >
            {t.signup}
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white w-full max-w-7xl rounded-2xl p-4 sm:p-6 relative overflow-hidden mt-4 sm:mt-8">
        <img
          src="/mathgrid.png"
          alt="Math Grid Background"
          className="w-full h-auto object-cover rounded-xl"
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 py-6 gap-6 bg-white/70 rounded-2xl">
          {/* Text Section */}
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#575B91] leading-tight">
              Learn and apply.
              <br />
              Become real
            </h1>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-extrabold text-[#575B91] mt-2">
              SCIENTISTS
            </p>
            <div className="mt-4 sm:mt-6 border-l-4 border-[#575B91] pl-4 text-gray-800 text-sm sm:text-base md:text-lg italic bg-white bg-opacity-80">
              "Science Made Simple, Research Made Possible. For Every Young Mind
              in Bangladesh."
            </div>
          </div>

          {/* Image Section */}
          <img
            src="/rights.png"
            alt="Rights Icon"
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-120 lg:h-120 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingAuth;
