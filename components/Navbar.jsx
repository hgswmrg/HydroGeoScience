"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {IoMdArrowDropdown} from 'react-icons/io'

const MENU_FADE_DURATION_S = 0.15;
const MENU_SLIDE_DISTANCE_PX = 8;

const TEAM_LINKS = [
  { href: "/team/management", label: "Lab management" },
  { href: "/team/affiliated", label: "Affiliated Researchers" },
  { href: "/team/graduates", label: "Graduate Students" },
  { href: "/team/undergraduate", label: "Undergraduate Students" },
  { href: "/team/alumni", label: "Alumni" },
  { href: "/team/gallery", label: "Gallery" },
];

const OUTREACH_LINKS = [
  { href: "/science-communication/presentations", label: "Invited Presentations" },
  { href: "/science-communication/pieces", label: "Science Communication Pieces" },
];

// A top-level nav item that also opens a submenu. The label and caret share one
// hover target so the whole item highlights together, and the menu opens on
// hover as well as click for pointer and keyboard users alike.
const NavDropdown = ({ label, href, links, width, isOpen, onOpen, onClose, onToggle }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <li className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <div className="flex items-center pl-4 pr-2 py-4 mr-8 hover:bg-primary-darkgreen hover:text-white transition duration-500">
        <Link onClick={onClose} href={href}>{label}</Link>
        <button
          onClick={onToggle}
          aria-label={`${label} pages`}
          aria-expanded={isOpen}
          className="hidden sm:flex items-center ml-1 focus:outline-none"
        >
          <IoMdArrowDropdown
            size={24}
            className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -MENU_SLIDE_DISTANCE_PX }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -MENU_SLIDE_DISTANCE_PX }}
            transition={{ duration: MENU_FADE_DURATION_S }}
            className={`hidden sm:block absolute left-0 top-full z-20 bg-white text-gray-600 ${width} py-2 rounded-lg shadow-lg border-t-2 border-primary-darkgreen`}
          >
            {links.map((item) => (
              <li key={item.href} className="hover:bg-primary-darkgreen hover:text-white transition duration-500">
                <Link onClick={onClose} href={item.href} className="block px-4 py-2 text-base 2xl:text-xl">
                  {item.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [smallMenu, setSmallMenu] = useState(false)
  const [outreachMenu, setOutreachMenu] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setSmallMenu(false);
    setOutreachMenu(false);
  };

  const openSmallMenu = () => {
    setSmallMenu(true);
    setOutreachMenu(false);
  };

  const toggleSmallMenu = () => {
    setSmallMenu(!smallMenu);
    setOutreachMenu(false);
  }

  const closeSmallMenu = () => {
    setSmallMenu(false);
  };

  const openOutreachMenu = () => {
    setOutreachMenu(true);
    setSmallMenu(false);
  };

  const toggleOutreachMenu = () => {
    setOutreachMenu(!outreachMenu);
    setSmallMenu(false);
  }

  const closeOutreachMenu = () => {
    setOutreachMenu(false);
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

            <NavDropdown
              label="Outreach"
              href="/science-communication"
              links={OUTREACH_LINKS}
              width="w-64"
              isOpen={outreachMenu}
              onOpen={openOutreachMenu}
              onClose={closeOutreachMenu}
              onToggle={toggleOutreachMenu}
            />
            {/* Sub-pages listed inline in the mobile menu, where the caret is hidden */}
            {OUTREACH_LINKS.map((item) => (
              <li key={item.href} className="sm:hidden p-2 text-base text-gray-500 hover:bg-primary-darkgreen hover:text-white transition duration-500">
                <Link onClick={closeMenu} href={item.href}>{item.label}</Link>
              </li>
            ))}

            <NavDropdown
              label="Team"
              href="/team"
              links={TEAM_LINKS}
              width="w-56"
              isOpen={smallMenu}
              onOpen={openSmallMenu}
              onClose={closeSmallMenu}
              onToggle={toggleSmallMenu}
            />
            {TEAM_LINKS.map((item) => (
              <li key={item.href} className="sm:hidden p-2 text-base text-gray-500 hover:bg-primary-darkgreen hover:text-white transition duration-500">
                <Link onClick={closeMenu} href={item.href}>{item.label}</Link>
              </li>
            ))}

            <li className="p-4 mr-8 hover:bg-primary-darkgreen hover:text-white transition duration-500">
              <Link onClick={closeMenu} href="/news">News</Link>
            </li>
            <li className="p-4 mr-8 hover:bg-primary-darkgreen hover:text-white transition duration-500">
              <Link onClick={closeMenu} href="/products">Products</Link>
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
