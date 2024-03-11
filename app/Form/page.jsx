// components/Form.js
'use client'
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    branch: '',
    year: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    window.location.href='/Instructions'
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="mb-4 text-2xl font-semibold">Contact Form</h2>
      <form onSubmit={handleSubmit} autoComplete='off' >
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="branch">Branch</label>
          <input
            type="text"
            id="branch"
            name="branch"
            required
            value={formData.branch}
            onChange={handleChange}
            placeholder="Enter your branch"
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="year">Year</label>
          <input
            type="text"
            id="year"
            name="year"
            required
            value={formData.year}
            onChange={handleChange}
            placeholder="Enter your year"
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
