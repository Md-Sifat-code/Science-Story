import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useLanguage } from "../../LanguageContext"; // Import the useLanguage hook
import { Link } from "react-router-dom";

const Login = () => {
  const { language } = useLanguage(); // Get the current language from context

  // Define texts for English and Bangla
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

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-blue-900 text-center mb-6">
          {texts[language]?.title || texts.en.title}
        </h2>

        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-black mb-1">
              {language === "bn" ? "ইউজারনেম" : "Username"}
            </label>
            <div className="flex items-center border border-blue-200 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-600">
              <FaUser className="text-blue-600 mr-2" />
              <input
                type="text"
                id="username"
                name="username"
                placeholder={
                  texts[language]?.usernamePlaceholder ||
                  texts.en.usernamePlaceholder
                }
                required
                className="w-full outline-none"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-black mb-1">
              {language === "bn" ? "পাসওয়ার্ড" : "Password"}
            </label>
            <div className="flex items-center border border-blue-200 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-600">
              <FaLock className="text-blue-600 mr-2" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder={
                  texts[language]?.passwordPlaceholder ||
                  texts.en.passwordPlaceholder
                }
                required
                className="w-full outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200"
          >
            {texts[language]?.submitButton || texts.en.submitButton}
          </button>
        </form>
        <h1 className="mt-6 text-black font-medium text-center">
          Don't have an account?{" "}
          <Link to="/auth/signup" className="text-blue-700">
            Sign Up
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Login;
