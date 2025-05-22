import React from 'react';
import {
  FaCoins,
  FaLaptopCode,
  FaFlask,
  FaMicroscope,
  FaCalculator,
  FaBook,
  FaStar,
  FaMountain,
  FaBrain,
} from 'react-icons/fa';

const Dashboard = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    role: 'Student',
    coins: 150,
    avatar: '/assets/user-avatar.png',
  };

  const enrolledTopics = [
    { id: 1, name: 'Programming', icon: <FaLaptopCode /> },
    { id: 2, name: 'Chemistry', icon: <FaFlask /> },
    { id: 3, name: 'Biology', icon: <FaMicroscope /> },
    { id: 4, name: 'Mathematics', icon: <FaCalculator /> },
    { id: 5, name: 'Accounting', icon: <FaBook /> },
    { id: 6, name: 'Astronomy', icon: <FaStar /> },
    { id: 7, name: 'Geology', icon: <FaMountain /> },
    { id: 8, name: 'Neuroscience', icon: <FaBrain /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden md:flex mt-20">
        
        {/* Left Sidebar - User Info */}
        <div className="w-full md:w-1/3 bg-gradient-to-br from-blue-50 to-blue-100 p-8 border-r">
          <div className="flex flex-col items-center text-center space-y-4">
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
              <p className="text-sm text-gray-600">{user.email}</p>
              <span className="inline-block mt-2 px-3 py-1 text-xs bg-blue-200 text-blue-800 rounded-full uppercase tracking-wide font-semibold">
                {user.role}
              </span>
            </div>
            <div className="flex items-center justify-center mt-4 text-yellow-600 font-semibold text-sm">
              <FaCoins className="mr-2 text-lg" />
              <span>{user.coins} Coins</span>
            </div>
          </div>
        </div>

        {/* Right Side - Enrolled Topics */}
        <div className="w-full md:w-2/3 p-8 space-y-6">
          <h1 className="text-2xl font-bold text-gray-800 border-b pb-2">Enrolled Topics</h1>
          {enrolledTopics.map((topic) => (
            <div
              key={topic.id}
              className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-200"
            >
              <div className="bg-blue-100 text-blue-700 p-3 rounded-full text-xl shadow-sm">
                {topic.icon}
              </div>
              <h2 className="text-lg font-medium text-gray-700">{topic.name}</h2>
            </div>
          ))}
          {enrolledTopics.length === 0 && (
            <p className="text-sm text-gray-500">You are not enrolled in any topics yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
