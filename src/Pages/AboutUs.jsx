import React from "react";
import { FaGithub, FaFacebook } from "react-icons/fa";

// Team member data
const team = [
  {
    name: "Md Sifat Bin Jibon (Frontend)",
    image: "/profpic.jpg", // Place this image in public/team/
    github: "https://github.com/Md-Sifat-code",
    facebook: "https://facebook.com/sifat.jibon",
  },
  {
    name: "Yeamim Hossain Sajid (Backend)",
    image: "/sajid.jpg",
    github: "https://github.com/YeamimHossainSajid",
    facebook: "https://facebook.com/yeamim.sajid",
  },
  {
    name: "Ismam Ahmed (Presentator, SQA)",
    image: "/ism.jpg",
    github: "https://github.com/blankInPajamas",
    facebook: "https://facebook.com/ismam.ahmed",
  },
];

function AboutUs() {
  return (
    <div className="min-h-screen bg-[#f0f2f5] py-10 px-4 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center text-[#575B91] mb-8">
        Meet Our Team
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold text-[#575B91] mb-2">
              {member.name}
            </h2>
            <div className="flex space-x-4">
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#575B91] hover:text-black text-xl"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
