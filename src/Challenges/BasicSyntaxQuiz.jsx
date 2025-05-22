// src/Challenges/BasicSyntaxQuiz.jsx
import React, { useState } from 'react';
import Navbar from '../components/Re_useComponents/Navbar'; // Adjust path if necessary
import { useNavigate } from 'react-router-dom'; // For going back

const BasicSyntaxQuiz = () => {
  const navigate = useNavigate();
  const questions = [
    {
      questionText: "Which keyword is used to declare a variable in JavaScript?",
      answerOptions: [
        { answerText: "var", isCorrect: false },
        { answerText: "let", isCorrect: false },
        { answerText: "const", isCorrect: false },
        { answerText: "All of the above", isCorrect: true },
      ],
    },
    {
      questionText: "What is the correct way to end a JavaScript statement?",
      answerOptions: [
        { answerText: ":", isCorrect: false },
        { answerText: ";", isCorrect: true },
        { answerText: ".", isCorrect: false },
        { answerText: ")", isCorrect: false },
      ],
    },
    {
      questionText: "Which of these is NOT a valid JavaScript data type?",
      answerOptions: [
        { answerText: "Boolean", isCorrect: false },
        { answerText: "String", isCorrect: false },
        { answerText: "Float", isCorrect: true }, // JavaScript has 'Number' for floats/integers
        { answerText: "Object", isCorrect: false },
      ],
    },
    {
      questionText: "How do you write 'Hello World' in an alert box?",
      answerOptions: [
        { answerText: "msg('Hello World');", isCorrect: false },
        { answerText: "alertBox('Hello World');", isCorrect: false },
        { answerText: "alert('Hello World');", isCorrect: true },
        { answerText: "prompt('Hello World');", isCorrect: false },
      ],
    },
    {
      questionText: "Where is the correct place to insert a JavaScript?",
      answerOptions: [
        { answerText: "The <body> section", isCorrect: false },
        { answerText: "The <head> section", isCorrect: false },
        { answerText: "Both the <head> and the <body> section are correct", isCorrect: true },
        { answerText: "The <footer> section", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fd] flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="container mx-auto max-w-lg bg-white p-8 rounded-xl shadow-lg border border-[#575B91]">
          {showScore ? (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#2d2e4c] mb-4">
                You scored {score} out of {questions.length}!
              </h2>
              <button
                onClick={resetQuiz}
                className="bg-[#575B91] text-white px-6 py-3 rounded-lg hover:bg-[#454A7A] transition mr-4"
              >
                Retake Quiz
              </button>
              <button
                onClick={() => navigate('/home/challange')} // Go back to programming challenges
                className="bg-gray-400 text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition"
              >
                Back to Challenges
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <div className="text-sm text-gray-500 mb-2">
                  Question {currentQuestion + 1} / {questions.length}
                </div>
                <div className="text-2xl font-semibold text-[#2d2e4c]">
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {questions[currentQuestion].answerOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerOptionClick(option.isCorrect)}
                    className="w-full bg-[#e0e2ef] text-[#2d2e4c] font-medium py-3 px-4 rounded-lg text-lg text-left
                               hover:bg-[#d0d2e2] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#575B91] focus:ring-opacity-50"
                  >
                    {option.answerText}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasicSyntaxQuiz;