"use client"
import React, { useState } from 'react';

const InstructionsPage = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAcceptance = () => {
    setAccepted(!accepted);
  };

  const handleSubmit = () => {
    // Handle submission, e.g., navigate to the quiz page
    console.log('Form submitted');
    window.location.href='/Quiz'
  };

  return (
    <div className="max-w-xl p-6 mx-auto mt-8 bg-white rounded-lg shadow-md">
      <h1 className="mb-4 text-2xl font-bold">Quiz Event Rules and Regulations</h1>
      <p className="mb-4">Welcome to our quiz event! Before you proceed, please read and accept the following rules and regulations:</p>
      <ul className="pl-6 mb-4 list-disc">
        <li>Participants must not use any external resources during the quiz.</li>
        <li>Each question must be answered within the specified time limit.</li>
        <li>Any form of cheating or plagiarism will result in disqualification.</li>
      </ul>
      <div className="mb-4">
        <label htmlFor="accept" className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="accept"
            checked={accepted}
            onChange={handleAcceptance}
            className="w-5 h-5 text-blue-600 form-checkbox"
          />
          <span className="ml-2 text-sm text-gray-700">I accept the rules and regulations</span>
        </label>
      </div>
      <button
        onClick={handleSubmit}
        disabled={!accepted}
        className={`w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded ${!accepted && 'opacity-50 cursor-not-allowed'}`}
      >
        Submit
      </button>
    </div>
  );
};

export default InstructionsPage;
