import React from "react";
import { Link } from "react-router-dom";
import { GiAtom, GiMicroscope, GiRocket, GiBrain, GiChemicalDrop, GiProcessor } from "react-icons/gi";

function Challanges() {
  const challengeTopics = [
    { id: 1, name: "Physics Challenges", icon: <GiAtom />, link: "/challenges/physics" },
    { id: 2, name: "Biology Quizzes", icon: <GiMicroscope />, link: "/challenges/biology" },
    { id: 3, name: "Space Missions", icon: <GiRocket />, link: "/challenges/space" },
    { id: 4, name: "Brain Teasers", icon: <GiBrain />, link: "/challenges/brain" },
    { id: 5, name: "Chemistry Experiments", icon: <GiChemicalDrop />, link: "/challenges/chemistry" },
    { id: 6, name: "Programming Exercises", icon: <GiProcessor />, link: "/challenges/programming" }
  ];

  return (
    <div
      className="min-h-screen bg-[#f8f9fd] flex items-center justify-center py-12" // Added flex, items-center, justify-center
      // Removed py-12 from here if you want content to perfectly center regardless of its height
      // You might want to keep py-12 if you have a header/footer or just want some vertical padding anyway
    >
      <div className="container mx-auto px-4"> {/* This div now acts as the content wrapper */}
        <h1 className="text-6xl font-bold text-[#575B91] text-center mb-10">
          Explore Challenges
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center">
          {challengeTopics.map((topic) => (
            <Link
              to={topic.link}
              key={topic.id}
              className="bg-white border border-[#575B91] rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
            >
              <div className="text-[#575B91] text-5xl mb-4">
                {topic.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#2d2e4c]">
                {topic.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Challanges;