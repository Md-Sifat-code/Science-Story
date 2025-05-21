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
      className="min-h-screen flex flex-col justify-center items-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/l2.png')" }}
    >
      {/* Top Navigation Section */}
      <div className="flex justify-between items-center w-full max-w-5xl px-6 py-4">
        <h1 className="text-3xl font-bold">{t.title}</h1>
        <div className="space-x-4">
          <Link
            to={"/auth/login"}
            className="bg-white text-[#575B91] font-semibold px-6 py-2 rounded hover:bg-gray-100 transition"
          >
            {t.login}
          </Link>
          <Link
            to={"/auth/signup"}
            className="bg-white text-[#575B91] font-semibold px-6 py-2 rounded hover:bg-gray-100 transition"
          >
            {t.signup}
          </Link>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-white w-full max-w-5xl rounded-2xl p-6 relative overflow-hidden">
        {/* Background image inside the card */}
        <img
          src="/mathgrid.png"
          alt="Math Grid Background"
          className="w-full max-w-4xl object-cover rounded-xl mx-auto"
        />

        {/* Overlay Content */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col lg:flex-row items-center justify-center px-6 py-8 gap-6 bg-white/70 rounded-2xl">
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#575B91] leading-tight">
              Learn and apply.
              <br />
              Become real
            </h1>
            <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#575B91] mt-2">
              SCIENTISTS
            </p>
            <div className="mt-6 border-l-4 border-[#575B91] pl-4 text-gray-800 text-lg italic bg-white bg-opacity-80">
              "Science Made Simple, Research Made Possible. For Every Young Mind
              in Bangladesh."
            </div>
          </div>

          <img
            src="/rights.png"
            alt="Rights Icon"
            className="w-60 h-60 md:w-80 md:h-80 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingAuth;
