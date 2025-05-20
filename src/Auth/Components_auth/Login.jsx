import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-blue-900 text-center mb-6">
          Login
        </h2>

        <form>
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
                placeholder="Enter your username"
                required
                className="w-full outline-none"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-blue-700 mb-1">
              Password
            </label>
            <div className="flex items-center border border-blue-200 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-600">
              <FaLock className="text-blue-600 mr-2" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                className="w-full outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
