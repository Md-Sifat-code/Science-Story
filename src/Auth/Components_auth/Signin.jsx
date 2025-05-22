import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useLanguage } from "../../LanguageContext";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const texts = {
    en: {
      title: "Sign Up",
      username: "Username",
      email: "Gmail",
      password: "Password",
      confirmPassword: "Confirm Password",
      usernamePlaceholder: "Choose a username",
      emailPlaceholder: "example@gmail.com",
      passwordPlaceholder: "Enter password",
      confirmPasswordPlaceholder: "Re-enter password",
      submit: "Sign Up",
      loginRedirect: "Already have an account?",
      loginLink: "Log In",
    },
    bn: {
      title: "সাইন আপ",
      username: "ইউজারনেম",
      email: "জিমেইল",
      password: "পাসওয়ার্ড",
      confirmPassword: "পাসওয়ার্ড নিশ্চিত করুন",
      usernamePlaceholder: "ইউজারনেম নির্বাচন করুন",
      emailPlaceholder: "example@gmail.com",
      passwordPlaceholder: "পাসওয়ার্ড লিখুন",
      confirmPasswordPlaceholder: "আবার পাসওয়ার্ড লিখুন",
      submit: "সাইন আপ করুন",
      loginRedirect: "ইতোমধ্যে একটি অ্যাকাউন্ট আছে?",
      loginLink: "লগইন করুন",
    },
  };

  const t = texts[language] || texts.en;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert(
        language === "bn" ? "পাসওয়ার্ড মিলছে না!" : "Passwords do not match!"
      );
      return;
    }

    setLoading(true); // 👈 Start loading

    try {
      const form = new FormData();
      form.append("username", formData.username);
      form.append("email", formData.email);
      form.append("password", formData.password);

      const res = await fetch("https://biggangolpo.onrender.com/User/add", {
        method: "POST",
        body: form,
      });

      let data;
      const contentType = res.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        data = { message: text };
      }

      if (res.ok) {
        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });

        navigate("/verification", { state: { email: formData.email } });
      } else {
        alert(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false); // 👈 End loading
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/sciencebg.jpg")' }}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md bg-opacity-95">
        <h2 className="text-2xl font-bold text-[#575B91] text-center mb-6">
          {t.title}
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-black mb-1">
              {t.username}
            </label>
            <div className="flex items-center border border-red-200 rounded px-3 py-2">
              <FaUser className="text-black mr-2" />
              <input
                type="text"
                id="username"
                name="username"
                placeholder={t.usernamePlaceholder}
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-black mb-1">
              {t.email}
            </label>
            <div className="flex items-center border border-red-200 rounded px-3 py-2">
              <FaEnvelope className="text-black mr-2" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t.emailPlaceholder}
                value={formData.email}
                onChange={handleChange}
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
            <div className="flex items-center border border-red-200 rounded px-3 py-2">
              <FaLock className="text-black mr-2" />
              <input
                type="text"
                id="password"
                name="password"
                placeholder={t.passwordPlaceholder}
                value={formData.password}
                onChange={handleChange}
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
            <div className="flex items-center border border-red-200 rounded px-3 py-2">
              <FaLock className="text-black mr-2" />
              <input
                type="text"
                id="confirmPassword"
                name="confirmPassword"
                placeholder={t.confirmPasswordPlaceholder}
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full font-bold py-2 rounded transition duration-200 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#575B91] text-white hover:bg-[#46497a]"
            }`}
          >
            {loading
              ? language === "bn"
                ? "লোড হচ্ছে..."
                : "Loading..."
              : t.submit}
          </button>
        </form>

        <h1 className="mt-6 text-black font-medium text-center">
          {t.loginRedirect}{" "}
          <Link to="/login" className="text-[#575B91] hover:underline">
            {t.loginLink}
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Signin;
