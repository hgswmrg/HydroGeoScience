"use client";
import Link from "next/link";
import { useState } from "react";
import {IoMdArrowDropdown} from 'react-icons/io'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [smallMenu, setSmallMenu] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setSmallMenu(false);
  };

  const toggleSmallMenu = () => {
    setSmallMenu(!smallMenu);
  }

  const closeSmallMenu = () => {
    setSmallMenu(false);
  };


  return (
    <div>
      <div className={`fixed top-0 w-full z-10 ease-in duration-300 bg-white border-b-2 border-primary-darkblue`}>
        <div className="sm:hidden flex items-end"> {/* Center the hamburger menu */}
          <button
            className="p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              className="h-6 w-6 fill-current text-gray-600"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 14H6v-1h12v1zm-6-4H6V9h6v1zm6-5H6V4h12v1zm0 8H6v-1h12v1z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6h18v1H3V6zm0 5h18v1H3v-1zm0 5h18v1H3v-1z"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "flex flex-col items-center h-screen" : "hidden"
          } sm:flex flex-col sm:flex-row sm:w-full font-medium text-gray-500 gap-4`}
        >
          <ul className={`flex flex-col md:flex-row items-center sm:flex mx-auto text-lg 2xl:text-2xl text-gray-600`}>
            <li className="p-4 mr-8 hover:bg-primary-darkgreen hover:text-white transition duration-500">
              <Link onClick={closeMenu} href="/">Home</Link>
            </li>
            <li className="p-4 mr-8 hover:bg-primary-darkgreen hover:text-white transition duration-500">
              <Link onClick={closeMenu} href="/research">Research</Link>
            </li>
            <li className="p-4 mr-8 hover:bg-primary-darkgreen hover:text-white transition duration-500">
              <Link onClick={closeMenu} href="/publications">Publications</Link>
            </li>
            <li className="pl-4 py-4 mr-12 md:mr-0 hover:bg-primary-darkgreen hover:text-white transition duration-500">
              <Link onClick={closeMenu} href="/team">Team</Link>
            </li>
            <li className="relative group mr-8">
           
              <div className="sm:flex hidden hover:bg-primary-darkgreen hover:text-white transition duration-500">
                <button onClick={toggleSmallMenu} className="flex items-center">
                  
                  <IoMdArrowDropdown size={24}/>
                </button>
              </div>
              <div className={`${
                smallMenu ? "flex flex-col items-center" : "hidden"
              }  font-medium text-white gap-4 `}>
                <ul className="absolute  left-0 z-10 bg-white text-gray-600 w-48 py-2 rounded-lg shadow-lg">
                <li className="p-2 hover:bg-primary-darkgreen hover:text-white transition duration-500">
                    <Link onClick={closeSmallMenu} href="/team/management">Lab management</Link>
                  </li>
                  <li className="p-2 hover:bg-primary-darkgreen hover:text-white transition duration-500">
                    <Link onClick={closeSmallMenu} href="/team/affiliated">Affiliated Researchers</Link>
                  </li>
                  <li className="p-2 hover:bg-primary-darkgreen hover:text-white transition duration-500">
                    <Link onClick={closeSmallMenu} href="/team/graduates">Graduate Students</Link>
                  </li>
                  <li className="p-2 hover:bg-primary-darkgreen hover:text-white transition duration-500">
                    <Link onClick={closeSmallMenu} href="/team/undergraduate">Undergraduate Students</Link>
                  </li>
                  <li className="p-2 hover:bg-primary-darkgreen hover:text-white transition duration-500">
                    <Link onClick={closeSmallMenu} href="/team/alumni">Alumni</Link>
                  </li>
                </ul>
              </div>
              
            </li>
            <li className="p-4 mr-8 hover:bg-primary-darkgreen hover:text-white transition duration-500">
              <Link onClick={closeMenu} href="/news">News</Link>
            </li>
            <li className="p-4 mr-8 hover:bg-primary-darkgreen hover:text-white transition duration-500">
              <Link onClick={closeMenu} href="/jobs">Job Opportunities</Link>
            </li>
            <li className="p-4 mr-8 hover:bg-primary-darkgreen hover:text-white transition duration-500">
              <Link onClick={closeMenu} href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
