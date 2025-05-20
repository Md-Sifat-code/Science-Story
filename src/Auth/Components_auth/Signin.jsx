import React from "react";
import { FaUser, FaEnvelope, FaLock, FaSignature } from "react-icons/fa";
import { useLanguage } from "../../LanguageContext";
import { Link } from "react-router-dom";

const Signin = () => {
  const { language } = useLanguage();

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
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("/sciencebg.jpg")',
      }}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md bg-opacity-95">
        <h2 className="text-2xl font-bold text-red-600 text-center mb-6">
          {t.title}
        </h2>

        <form>
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="fullname" className="block text-black mb-1">
              {t.fullName}
            </label>
            <div className="flex items-center border border-red-200 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-red-600">
              <FaSignature className="text-black mr-2" />
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
            <label htmlFor="username" className="block text-black mb-1">
              {t.username}
            </label>
            <div className="flex items-center border border-red-200 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-red-600">
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

          {/* Gmail */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-black mb-1">
              {t.email}
            </label>
            <div className="flex items-center border border-red-200 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-red-600">
              <FaEnvelope className="text-black mr-2" />
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
            <label htmlFor="password" className="block text-black mb-1">
              {t.password}
            </label>
            <div className="flex items-center border border-red-200 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-red-600">
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

          {/* Confirm Password */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-black mb-1">
              {t.confirmPassword}
            </label>
            <div className="flex items-center border border-red-200 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-red-600">
              <FaLock className="text-black mr-2" />
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
            className="w-full bg-red-600 hover:bg-red-700 font-bold text-white  py-2 rounded transition duration-200"
          >
            {t.submit}
          </button>
        </form>

        <h1 className="mt-6 text-black font-medium text-center">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-red-600 hover:underline">
            Log In
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Signin;
