"use client"

import React, { useState, useRef } from "react";
import Image from "next/image";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    question: "",
    file: null,
  });

  const form = useRef();

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

  const handleSubmit = (e) => {
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
    
    emailjs
      .sendForm('service_1h21uwa', 'template_dim274n', form.current , 'ATMJnhxW02CoHUGcy')
      .then((result) => {
        console.log(result.text);
        alert('Query sent successfully!');
      })
      .catch((error) => {
        console.log(error.text);
        alert('An error occurred while sending the email.');
      });
  };
  
 
  
  
  
  return (
    <div className="flex h-screen flex-col mb-60">
      
      <div className="flex flex-col md:flex-row items-center justify-center ">
        <div className="flex-col w-full md:w-1/3 mt-20 2xl:mt-60">
          <div className=" hidden sm:block">
            <p className="flex text-center text-base items-center md:text-2xl 2xl:text-5xl text-primary-darkgreen font-bold mr-20">HydroGeoScience for Watershed Management Laboratory</p>
            <Image className="" src="/assets/footer.png" width={30} height={50} alt="Card Image" layout="responsive" />
          </div>
          <div className="w-full mt-10 mx-5 md:mx-0 ">
            <p className="text-base md:text-lg 2xl:text-3xl text-primary-darkgreen font-semibold mt-10">Address</p>
            <p className="text-base md:text-lg 2xl:text-3xl  ">Department of Earth,Ocean and Atmospheric Sciences</p>
            <p className="text-base md:text-lg 2xl:text-3xl  ">The University of British Columbia</p>
            <p className="text-base md:text-lg 2xl:text-3xl  ">Earth Sciences Building (ESB)</p>
            <p className="text-base md:text-lg 2xl:text-3xl  ">2020 - 2027 Main Mall</p>
            <p className="text-base md:text-lg 2xl:text-3xl  ">Vancouver British Columbia V6T 1Z4</p>
            <p className="text-base md:text-lg 2xl:text-3xl  ">Canada</p>
            
          </div>
        </div>
         
        <form ref={form} className="md:p-10  md:w-1/2 md:my-24 mt-10 mx-5 md:ml-10 " onSubmit={handleSubmit}>
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
          
          <button 
            
            type="submit"
            className="bg-primary-darkgreen text-white p-2 rounded "
          >
            Submit
          </button>

        </form>
        
      </div>
    </div>
  );
};

export default ContactForm;
