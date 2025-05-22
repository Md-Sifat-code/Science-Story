import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Re_useComponents/Navbar";
import { GiAtom } from "react-icons/gi";

const Topic1 = () => {
  const { selectedTopic } = useParams();
  const [topicData, setTopicData] = useState(null);
  const [subtopics, setSubtopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      console.log("🔍 Fetching topics from API...");

      try {
        // Fetch main topic
        const topicRes = await fetch("https://biggangolpo.onrender.com/topic");
        const topicData = await topicRes.json();

        const matched = topicData.find(
          (item) => item.name.toLowerCase() === selectedTopic.toLowerCase()
        );

        if (matched) {
          setTopicData(matched);
        } else {
          setError(`No topic found for "${selectedTopic}"`);
          return;
        }

        // Fetch subtopics
        const subRes = await fetch("https://biggangolpo.onrender.com/subtopic");
        const subData = await subRes.json();

        const filtered = subData.filter(
          (item) =>
            item.topic &&
            item.topic.toLowerCase() === selectedTopic.toLowerCase()
        );

        setSubtopics(filtered);
      } catch (err) {
        console.error("❌ Error fetching data:", err);
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedTopic]);

  if (loading) return <p className="p-4 text-center">🔄 Loading...</p>;
  if (error) return <p className="p-4 text-center text-red-500">❌ {error}</p>;

  return (
    <div className="min-h-screen bg-[#f8f9fd]">
      <div>
        <Navbar />
      </div>

      <div className="py-24 container mx-auto">
        {/* 1. Breadcrumb */}
        <div className="p-4 text-sm text-gray-600">
          <span className="text-[#575B91] font-semibold">Learning</span> /{" "}
          <span>{topicData.name}</span>
        </div>

        {/* 2. Banner */}
        <div className="relative w-full h-60 md:h-80 mb-12">
          <img
            src={topicData.url}
            alt={topicData.name}
            className="w-full h-full rounded-2xl object-cover"
          />
          <div className="absolute rounded-2xl inset-0 bg-black opacity-50"></div>
          <h1 className="absolute inset-0 flex flex-col gap-4 items-center justify-center text-white text-3xl md:text-5xl font-bold uppercase">
            {topicData.name}
            <p className="px-6 py-2 bg-[#575B91] text-sm rounded-xl text-white font-bold">
              Enroll Now
            </p>
          </h1>
        </div>

        {/* 3. Subtopics */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center px-4">
          {subtopics.map((sub, index) => (
            <div
              key={index}
              className="bg-white border border-[#575B91] flex flex-col rounded-xl shadow-md p-6 w-full max-w-sm flex items-center gap-4"
            >
              <div className="text-[#575B91] text-3xl">
                <GiAtom />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#2d2e4c]">
                  {sub.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topic1;
