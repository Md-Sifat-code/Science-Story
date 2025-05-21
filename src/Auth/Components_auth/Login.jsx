import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useLanguage } from "../../LanguageContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { language } = useLanguage();

  const texts = {
    en: {
      title: "Login",
      usernamePlaceholder: "Enter your username",
      passwordPlaceholder: "Enter your password",
      submitButton: "Log In",
    },
    bn: {
      title: "লগইন",
      usernamePlaceholder: "আপনার ইউজারনেম লিখুন",
      passwordPlaceholder: "আপনার পাসওয়ার্ড লিখুন",
      submitButton: "লগ ইন করুন",
    },
  };

  const t = texts[language] || texts.en;

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("/sciencebg2.jpg")',
      }}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm bg-opacity-95">
        <h2 className="text-2xl font-bold text-[#575B91] text-center mb-6">
          {t.title}
        </h2>

        <form>
          {/* Username Field */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-black mb-1">
              {language === "bn" ? "ইউজারনেম" : "Username"}
            </label>
            <div className="flex items-center border border-[#575B91] rounded px-3 py-2 focus-within:ring-2 focus-within:ring-[#575B91]">
              <FaUser className="text-black mr-2" />
              <input
                type="text"
                id="username"
                name="username"
                placeholder={t.usernamePlaceholder}
                required
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-black mb-1">
              {language === "bn" ? "পাসওয়ার্ড" : "Password"}
            </label>
            <div className="flex items-center border border-[#575B91] rounded px-3 py-2 focus-within:ring-2 focus-within:ring-red-600">
              <FaLock className="text-black mr-2" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder={t.passwordPlaceholder}
                required
                className="w-full outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#575B91] hover:bg-[#575B91] text-white font-semibold py-2 rounded transition duration-200"
          >
            {t.submitButton}
          </button>
        </form>

        <h1 className="mt-6 text-black font-medium text-center">
          {language === "bn"
            ? "আপনার অ্যাকাউন্ট নেই?"
            : "Don't have an account?"}{" "}
          <Link to="/auth/signup" className="text-[#575B91] hover:underline">
            {language === "bn" ? "সাইন আপ করুন" : "Sign Up"}
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Login;
