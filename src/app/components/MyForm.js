"use client"

import axios from 'axios';

import React, { useState } from 'react';

const ContactForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  // Update form data when inputs change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Simulate sending data to a database
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace the following with your actual API or database logic
    await axios.post('https://phone-mania-nzm9.vercel.app/',formData).then(() => {
        console.log("Book created successfully")
        
    })
    console.log('Sending data to database:', formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      description: '',
    });
  };

  return (
    <div className="flex flex-row justify-between w-[107rem] h-[44rem]">
      <div className="flex flex-col justify-center items-start px-32">
        <h1 className="text-7xl font-mono font-bold">Contact Us</h1>
        <span className="py-4 px-3 text-xl font-mono font-semibold">
          +9203322090197
        </span>
      </div>
      <div className="flex flex-col justify-center w-[39rem] mr-[20rem] mt-[7rem] p-6 bg-white rounded-md shadow-md h-2/3 border border-black">
        <h2 className="text-2xl font-semibold mb-4 font-mono">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-black rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-black rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded-md border-black"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="hover:bg-blue-600 transition duration-300 bg-black px-10 py-3 rounded-3xl text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
