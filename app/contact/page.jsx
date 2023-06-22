"use client"

import React, { useState } from "react";
import Image from "next/image";
import qs from "qs";
const axios = require('axios')

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    question: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      file: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const message = {
      to: 'recipient@gmail.com', // Replace with the recipient's email address
      subject: 'New Contact Form Submission',
      body: `
        First Name: ${formData.firstName}
        Last Name: ${formData.lastName}
        Email: ${formData.email}
        Question: ${formData.question}
      `,
    };
  
    try {
      const accessToken = 'YOUR_ACCESS_TOKEN'; // Replace with your access token
      const response = await fetch('https://www.googleapis.com/gmail/v1/users/{userEmail}/messages/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          raw: btoa(JSON.stringify(message)),
        }),
      });
  
      if (response.ok) {
        console.log('Email sent successfully!');
        alert('Email sent successfully!');
        // Reset the form data
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          question: '',
          file: null,
        });
      } else {
        console.error('Error sending email:', response.status);
        alert('An error occurred while sending the email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending the email.');
    }
  };
  
 
  
  
  
  return (
    <div className="flex flex-col  mb-60">
      <div className="mt-40 ml-40">
        <p className="text-base md:text-lg 2xl:text-3xl text-primary-darkgreen font-bold ">Address</p>
        <p className="text-base md:text-lg 2xl:text-3xl  ">Department of Earth,Ocean and Atmospheric Sciences</p>
        <p className="text-base md:text-lg 2xl:text-3xl  ">The University of British Columbia</p>
        <p className="text-base md:text-lg 2xl:text-3xl  ">Earth Sciences Building (ESB)</p>
        <p className="text-base md:text-lg 2xl:text-3xl  ">2020 - 2027 Main Mall</p>
        <p className="text-base md:text-lg 2xl:text-3xl  ">Vancouver British Columbia V6T 1Z4</p>
        <p className="text-base md:text-lg 2xl:text-3xl  ">Canada</p>
        
      </div>
      <div className="flex items-center ">
          <div className="w-1/3 mx-32  hidden sm:block">
          <Image className="" src="/assets/logoimg.png" width={30} height={50} alt="Card Image" layout="responsive" />
          </div>
        <form className="w-full p-10  md:w-1/2 md:my-24 mt-10 " onSubmit={handleSubmit}>
            <div className="my-10">
                <p className="text-4xl 2xl:text-6xl font-bold pb-2 text-primary-darkgreen">Contact Us</p>
            </div>
          
          <div className="mb-4 2xl:text-2xl">
            <label htmlFor="firstName" className="block mb-1 font-medium ">
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
          <div className="mb-4 2xl:text-2xl">
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
          <div className="mb-4 2xl:text-2xl">
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
          <div className="mb-4 2xl:text-2xl">
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
          <div className="mb-4 2xl:text-2xl">
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
            onClick={handleSubmit}
            type="submit"
            className="bg-primary-darkgreen rounded "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
