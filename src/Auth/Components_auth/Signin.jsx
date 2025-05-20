import React from "react";
import { FaUser, FaEnvelope, FaLock, FaSignature } from "react-icons/fa";

const Signin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-900 text-center mb-6">
          Sign Up
        </h2>

        <form>
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="fullname" className="block text-blue-700 mb-1">
              Full Name
            </label>
            <div className="flex items-center border border-blue-200 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-600">
              <FaSignature className="text-blue-600 mr-2" />
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Your full name"
                required
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Username */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-blue-700 mb-1">
              Username
            </label>
            <div className="flex items-center border border-blue-200 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-600">
              <FaUser className="text-blue-600 mr-2" />
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Choose a username"
                required
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Gmail */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-blue-700 mb-1">
              Gmail
            </label>
            <div className="flex items-center border border-blue-200 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-600">
              <FaEnvelope className="text-blue-600 mr-2" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                required
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-blue-700 mb-1">
              Password
            </label>
            <div className="flex items-center border border-blue-200 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-600">
              <FaLock className="text-blue-600 mr-2" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
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
              Confirm Password
            </label>
            <div className="flex items-center border border-blue-200 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-600">
              <FaLock className="text-blue-600 mr-2" />
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Re-enter password"
                required
                className="w-full outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
