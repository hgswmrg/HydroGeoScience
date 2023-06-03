"use client"

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    question: "",
    file: null,
  });

  const handleChange = () => {
    
  };

  const handleFileChange = () => {
    
  };

  const handleSubmit = () => {}
  
  
  
  return (
    <div className="flex">
      <div className="w-1/2 p-36">
      <Image className="pt-12" src="/../public/assets/logo.png" width={500} height={400} alt="Card Image" layout="responsive" />
      </div>
    <form className="max-w-md w-1/2 my-24" onSubmit={handleSubmit}>
        <div className="my-10">
            <p className="text-4xl font-bold pb-2 text-primary-darkgreen">Contact Us</p>
        </div>
       
      <div className="mb-4">
        <label htmlFor="firstName" className="block mb-1 font-medium">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="w-full px-4 py-2 border rounded"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block mb-1 font-medium">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="w-full px-4 py-2 border rounded"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 border rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="question" className="block mb-1 font-medium">
          Question
        </label>
        <textarea
          id="question"
          name="question"
          rows={4}
          className="w-full px-4 py-2 border rounded"
          value={formData.question}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="file" className="block mb-1 font-medium">
          Upload File
        </label>
        <input
          type="file"
          id="file"
          name="file"
          className="w-full"
          onChange={handleFileChange}
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-primary-darkgreen rounded hover:bg-primary-green"
      >
        Submit
      </button>
    </form>
    </div>
  );
};

export default ContactForm;
