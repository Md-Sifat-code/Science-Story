// src/Pages/ProgrammingChallengesPage.jsx
import React from 'react';
import Navbar from '../components/Re_useComponents/Navbar'; // Adjust path if necessary

const ProgrammingChallengesPage = () => {
  return (
    // Add flex, items-center, and justify-center to the outermost div
    // This will vertically and horizontally center its content (the Navbar and the content div)
    // However, if you want only the content *below* the Navbar to be centered,
    // you would apply these to the container div *after* the Navbar.
    // Let's assume you want the content below the Navbar to be centered.
    <div className="min-h-screen bg-[#f8f9fd] flex flex-col"> {/* Use flex-col to stack Navbar and content */}
      <Navbar /> {/* Navbar remains at the top */}

      {/* This div will now take up the remaining space and center its content */}
      <div className="flex-grow flex items-center justify-center py-12"> {/* Added flex-grow, flex, items-center, justify-center */}
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#575B91] mb-6">
            Programming Challenges
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Dive into various coding challenges, from beginner to advanced.
          </p>

          {/* Example Challenge Cards - you can fetch these dynamically */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-[#575B91]">
              <h2 className="text-xl font-semibold text-[#2d2e4c] mb-2">Basic Syntax</h2>
              <p className="text-gray-600 mb-4">Learn the fundamentals of JavaScript syntax.</p>
              <button className="bg-[#575B91] text-white px-4 py-2 rounded-lg hover:bg-[#454A7A] transition">
                Start Challenge
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-[#575B91]">
              <h2 className="text-xl font-semibold text-[#2d2e4c] mb-2">Data Structures</h2>
              <p className="text-gray-600 mb-4">Implement common data structures like linked lists and trees.</p>
              <button className="bg-[#575B91] text-white px-4 py-2 rounded-lg hover:bg-[#454A7A] transition">
                Start Challenge
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-[#575B91]">
              <h2 className="text-xl font-semibold text-[#2d2e4c] mb-2">Algorithm Design</h2>
              <p className="text-gray-600 mb-4">Solve complex problems with efficient algorithms.</p>
              <button className="bg-[#575B91] text-white px-4 py-2 rounded-lg hover:bg-[#454A7A] transition">
                Start Challenge
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammingChallengesPage;