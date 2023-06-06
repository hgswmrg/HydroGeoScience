"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
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
          <ul className={`flex flex-col md:flex-row items-center gap-8 sm:flex mx-auto text-lg text-gray-600`}>
            <li className="p-4 hover:bg-primary-darkgreen hover:text-white transition duration-500">
              <Link onClick={closeMenu} href="/">Home</Link>
            </li>
            <li className="p-4 hover:bg-primary-darkgreen hover:text-white transition duration-500">
              <Link onClick={closeMenu} href="/research">Research</Link>
            </li>
            <li className="p-4 hover:bg-primary-darkgreen hover:text-white transition duration-500">
              <Link onClick={closeMenu} href="/publications">Publications</Link>
            </li>
            <li className="p-4 hover:bg-primary-darkgreen hover:text-white transition duration-500">
              <Link onClick={closeMenu} href="/team">Team</Link>
            </li>
            <li className="p-4 hover:bg-primary-darkgreen hover:text-white transition duration-500">
              <Link onClick={closeMenu} href="/news">News</Link>
            </li>
            <li className="p-4 hover:bg-primary-darkgreen hover:text-white transition duration-500">
              <Link onClick={closeMenu} href="/jobs">Job Opportunities</Link>
            </li>
            <li className="p-4 hover:bg-primary-darkgreen hover:text-white transition duration-500">
              <Link onClick={closeMenu} href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
