import React, { useState } from "react";
import {
  FaUserCircle,
  FaHome,
  FaBook,
  FaCalendarAlt,
  FaTrophy,
  FaInfoCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#575B91] font-semibold border-b-2 border-[#575B91]"
      : "text-gray-700 hover:text-[#575B91] transition";

  const iconClass = ({ isActive }) =>
    `text-2xl ${
      isActive ? "text-[#575B91]" : "text-gray-500 hover:text-[#575B91]"
    } transition`;

  return (
    <div className="relative">
      {/* Top Navbar - Visible on md and above */}
      <nav className="hidden md:flex absolute top-6 left-0 right-0 z-50 bg-white shadow-[#575B91] shadow-sm px-6 py-3 justify-between items-center container mx-auto rounded-2xl max-w-7xl">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800 sour">
          <NavLink to="/home">
            BIGGAN<span className="text-[#575B91]">ADDA</span>
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 font-medium">
          <NavLink to="/home" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/home/learn" className={navLinkClass}>
            Learning
          </NavLink>
          <NavLink to="/home/blog" className={navLinkClass}>
            Blogs
          </NavLink>
          <NavLink to="/home/challange" className={navLinkClass}>
            Challanges
          </NavLink>
          <NavLink to="/home/about" className={navLinkClass}>
            About Us
          </NavLink>
        </div>

        {/* User Icon & Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-gray-600 text-2xl focus:outline-none"
          >
            <FaUserCircle />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
              <NavLink
                to="/dashboard"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                onClick={() => setDropdownOpen(false)}
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/update-profile"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                onClick={() => setDropdownOpen(false)}
              >
                Update Profile
              </NavLink>
              <button
                onClick={() => {
                  handleLogout();
                  setDropdownOpen(false);
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Bottom Navbar - Mobile only */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-inner border-t border-gray-200 flex justify-around py-2 md:hidden">
        <NavLink to="/home" end className={iconClass}>
          <FaHome />
        </NavLink>
        <NavLink to="/home/learn" className={iconClass}>
          <FaBook />
        </NavLink>
        <NavLink to="/home/blog" className={iconClass}>
          <FaCalendarAlt />
        </NavLink>
        <NavLink to="/home/contact" className={iconClass}>
          <FaTrophy />
        </NavLink>
        <NavLink to="/home/about" className={iconClass}>
          <FaInfoCircle />
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
