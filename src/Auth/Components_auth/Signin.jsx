import React from "react";
import { FaUser, FaEnvelope, FaLock, FaSignature } from "react-icons/fa";
import { useLanguage } from "../../LanguageContext";
import { Link } from "react-router-dom";

const Signin = () => {
  const { language } = useLanguage(); // ✅ Access current language

  // ✅ Text translations
  const texts = {
    en: {
      title: "Sign Up",
      fullName: "Full Name",
      username: "Username",
      email: "Gmail",
      password: "Password",
      confirmPassword: "Confirm Password",
      fullNamePlaceholder: "Your full name",
      usernamePlaceholder: "Choose a username",
      emailPlaceholder: "example@gmail.com",
      passwordPlaceholder: "Enter password",
      confirmPasswordPlaceholder: "Re-enter password",
      submit: "Sign Up",
    },
    bn: {
      title: "সাইন আপ",
      fullName: "পূর্ণ নাম",
      username: "ইউজারনেম",
      email: "জিমেইল",
      password: "পাসওয়ার্ড",
      confirmPassword: "পাসওয়ার্ড নিশ্চিত করুন",
      fullNamePlaceholder: "আপনার পূর্ণ নাম",
      usernamePlaceholder: "ইউজারনেম নির্বাচন করুন",
      emailPlaceholder: "example@gmail.com",
      passwordPlaceholder: "পাসওয়ার্ড লিখুন",
      confirmPasswordPlaceholder: "আবার পাসওয়ার্ড লিখুন",
      submit: "সাইন আপ করুন",
    },
  };

  const t = texts[language] || texts.en;

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-900 text-center mb-6">
          {t.title}
        </h2>

        <form>
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="fullname" className="block text-blue-700 mb-1">
              {t.fullName}
            </label>
            <div className="flex items-center border border-blue-200 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-600">
              <FaSignature className="text-blue-600 mr-2" />
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder={t.fullNamePlaceholder}
                required
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Username */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-blue-700 mb-1">
              {t.username}
            </label>
            <div className="flex items-center border border-blue-200 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-600">
              <FaUser className="text-blue-600 mr-2" />
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

          {/* Gmail */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-blue-700 mb-1">
              {t.email}
            </label>
            <div className="flex items-center border border-blue-200 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-600">
              <FaEnvelope className="text-blue-600 mr-2" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t.emailPlaceholder}
                required
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-blue-700 mb-1">
              {t.password}
            </label>
            <div className="flex items-center border border-blue-200 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-600">
              <FaLock className="text-blue-600 mr-2" />
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

          {/* Confirm Password */}
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-blue-700 mb-1"
            >
              {t.confirmPassword}
            </label>
            <div className="flex items-center border border-blue-200 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-600">
              <FaLock className="text-blue-600 mr-2" />
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder={t.confirmPasswordPlaceholder}
                required
                className="w-full outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200"
          >
            {t.submit}
          </button>
        </form>
        <h1 className="mt-6 text-black font-medium text-center">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-700">
            Log In
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Signin;
