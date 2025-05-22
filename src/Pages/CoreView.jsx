import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GiAtom } from "react-icons/gi";
import { FiSend } from "react-icons/fi";

function CoreView() {
  const { selectedTopic } = useParams();
  const [subtopics, setSubtopics] = useState([]);
  const [selectedSub, setSelectedSub] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchSubtopics = async () => {
      try {
        const res = await fetch("https://biggangolpo.onrender.com/subtopic");
        const data = await res.json();
        const filtered = data.filter(
          (item) =>
            item.topic &&
            item.topic.toLowerCase() === selectedTopic.toLowerCase()
        );
        setSubtopics(filtered);
        if (filtered.length > 0) setSelectedSub(filtered[0]); // auto-select first subtopic
      } catch (err) {
        console.error("Failed to load subtopics", err);
      }
    };

    fetchSubtopics();
  }, [selectedTopic]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input.trim() }]);
      setInput("");
    }
  };

  return (
    <section className="h-screen flex flex-row bg-[#f8f9fd]">
      {/* Sidebar */}
      <div className="w-[300px] bg-white border-r border-gray-200 p-4 shadow-md overflow-y-auto">
        <div className="p-4 text-sm text-gray-600">
          <Link to={"/home/learn"} className="text-[#575B91] font-semibold">
            Learning
          </Link>{" "}
          / <span>{selectedTopic}</span>
        </div>

        <h2 className="text-xl font-bold text-[#575B91] mb-4 uppercase">
          {selectedTopic}
        </h2>
        <div className="space-y-3">
          {subtopics.map((sub, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedSub(sub)}
              className={`cursor-pointer p-3 rounded-lg border flex items-center gap-2 shadow-sm transition ${
                selectedSub?.sl === sub.sl
                  ? "bg-[#575B91] text-white"
                  : "bg-white text-[#2d2e4c]"
              }`}
            >
              <GiAtom />
              <span className="text-sm">{sub.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 h-screen overflow-y-auto p-8 bg-[#fdfaf6] font-serif">
        <h3 className="text-3xl font-bold text-[#333] mb-6 border-b pb-2">
          {selectedSub?.title}
        </h3>
        <div className="max-w-3xl mx-auto space-y-8 text-[17px] leading-[1.9] text-gray-800">
          {selectedSub?.elements?.map((el, idx) => {
            if (el.type === "text" || el.type === "string") {
              return (
                <p
                  key={idx}
                  className="first-letter:text-4xl first-letter:font-bold first-letter:mr-2 first-letter:float-left"
                >
                  {el.value}
                </p>
              );
            } else if (el.type === "image") {
              return (
                <img
                  key={idx}
                  src={el.value}
                  alt="Subtopic"
                  className="w-full max-w-2xl mx-auto rounded shadow-md my-6"
                />
              );
            }
            return null;
          })}
        </div>
      </div>

      {/* AI Chat Section */}
      <div className="w-[400px] border-l bg-white flex flex-col">
        <div className="p-4 border-b">
          <h4 className="text-lg font-semibold">💬 Ask AI</h4>
          <p className="text-sm text-gray-500">
            Chat with our learning assistant
          </p>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-2 rounded-md max-w-[85%] text-sm ${
                msg.sender === "user"
                  ? "bg-[#575B91] text-white self-end ml-auto"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#575B91]"
            />
            <button
              onClick={handleSend}
              className="bg-[#575B91] text-white px-4 py-2 rounded-md hover:bg-[#474b7a] transition"
            >
              <FiSend />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreView;
