"use client";
import React, { useState, useRef } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  async function sendContactData(contactDetails) {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(contactDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    }
  }
   async function handleSubmit() {
    event.preventDefault();
    // Do something with the form data, e.g., send it to a server
    try {
        await sendContactData({
          email: nameInputRef,
          name: nameInputRef,
          message: messageInputRef ,
        });
    }catch(e){

    }
    // Clear the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Focus on the name input after submission
    nameInputRef.current.focus();
  };

  return (
    <>
      <div className="flex flex-row justify-between  w-[107rem] h-[44rem]">
        <div className="flex flex-col justify-center items-start px-32"> <h1 className="text-7xl font-mono font-bold ">Contact Us</h1>
        <span className="py-4 px-3 text-xl font-mono font-semibold">+9203322090197</span>
        </div>
      <div className=" flex flex-col justify-center w-[39rem] mr-[20rem] mt-[7rem] p-6  bg-white rounded-md shadow-md h-2/3 border border-black ">
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
              ref={nameInputRef}
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
              ref={emailInputRef}
              className="w-full p-2 border  border-black rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              ref={messageInputRef}
              className="w-full p-2 border rounded-md border-black"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="  hover:bg-blue-600 transition duration-300 bg-black px-10 py-3 rounded-3xl text-white"
          >
            Submit
          </button>
        </form>
      </div>
      </div>
    </>
  );
};

export default Contact;
