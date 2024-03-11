// app/Quiz/QuizPage.jsx
'use client'
import React, { useState, useEffect } from 'react';
import questions from '../../data/question';
import Sidebar from '../Sidebar/page';
import './QuizPage.css'; // Import CSS file for styling

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
  const [tabShiftCount, setTabShiftCount] = useState(0);

  useEffect(() => {
  
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        if (tabShiftCount === 0) {
          alert("Chance 1/3");
        } else if (tabShiftCount === 1) {
          alert('Chance 2/3')
        } else if (tabShiftCount === 2) {
          alert("This submission due to the tab shift then the limits")
          handleSubmit();
        }
        setTabShiftCount(tabShiftCount + 1);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [tabShiftCount]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setUserAnswers([...userAnswers.slice(0, currentQuestion), selectedOption]);
    setSelectedOption('');

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
    setSelectedOption(userAnswers[currentQuestion - 1]);
  };

  const handleSubmit = () => {
    setShowScore(true);
  };

  const handleSaveAndNext = () => {
    setUserAnswers([...userAnswers.slice(0, currentQuestion), selectedOption]);
    setSelectedOption('');

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const enterFullScreen = () => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  };

  return (
    <div className="container flex px-4 py-8 mx-auto">
      {!showScore && (
        <div className="w-1/4">
          <Sidebar
            questions={questions}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            userAnswers={userAnswers}
          />
        </div>
      )}
      <div className="w-3/4 p-14 particle-container">
        {/* <button onClick={enterFullScreen}>Enter Full Screen</button> */}
        {showScore ? (
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-bold">Thank You for Submitting !!</h2>
          </div>
        ) : (
          <div>
            <h2 className="mb-4 text-2xl font-bold">Question {currentQuestion + 1}</h2>
            <h3 className="mb-2 text-lg font-semibold">{questions[currentQuestion].question}</h3>
            <ul>
              {questions[currentQuestion].options.map((option, index) => (
                <li key={index} className="mb-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value={option}
                      checked={selectedOption === option || userAnswers[currentQuestion] === option}
                      onChange={() => handleOptionSelect(option)}
                      className="w-5 h-5 text-indigo-600 form-radio"
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                </li>
              ))}
            </ul>
            <div className="flex mt-4">
              {currentQuestion > 0 && (
                <button
                  onClick={handlePreviousQuestion}
                  className="px-4 py-2 mr-4 font-bold text-white bg-gray-500 rounded hover:bg-gray-700"
                >
                  Previous
                </button>
              )}
              <button
                onClick={handleSaveAndNext}
                className="px-4 py-2 mr-4 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-700"
              >
                Save & Next
              </button>
              {currentQuestion === questions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  Submit
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
