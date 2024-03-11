// components/Sidebar.jsx
import React from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

const Sidebar = ({ questions = [], currentQuestion, setCurrentQuestion, userAnswers = [], readQuestions = [], setReadQuestions, bookmarks = [], setBookmarks }) => {
  const toggleRead = (index) => {
    const updatedReadQuestions = [...readQuestions];
    updatedReadQuestions[index] = !updatedReadQuestions[index];
    setReadQuestions(updatedReadQuestions);
  };

  const toggleBookmark = (index) => {
    const updatedBookmarks = [...bookmarks];
    updatedBookmarks[index] = !updatedBookmarks[index];
    setBookmarks(updatedBookmarks);
  };

  return (
    <div className="grid grid-cols-5 gap-2">
      {questions.map((_, index) => (
        <div key={index} className="flex items-center">
        <button
  onClick={() => setCurrentQuestion(index)}
  className={`p-4 w-3 h-3 flex items-center justify-center rounded-full ${
    userAnswers[index] // Check if the question has been attempted
      ? 'bg-green-500' // If attempted, color it green
      : currentQuestion === index // If the current question, color it red
      ? 'bg-red-500'
      : readQuestions[index] // If visited, color it yellow
      ? 'bg-yellow-500'
      : 'bg-gray-500' // Default color
  }`}
>
  {index + 1}
</button>

          {readQuestions.length > 0 && (
            <input
              type="checkbox"
              checked={readQuestions[index]}
              onChange={() => toggleRead(index)}
              className="ml-2"
            />
          )}
          {bookmarks.length > 0 && (
            <>
              {bookmarks[index] ? (
                <FaBookmark onClick={() => toggleBookmark(index)} className="ml-2 text-yellow-500 cursor-pointer" />
              ) : (
                <FaRegBookmark onClick={() => toggleBookmark(index)} className="ml-2 text-gray-500 cursor-pointer" />
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
