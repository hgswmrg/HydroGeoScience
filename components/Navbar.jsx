"use client";
import Link from "next/link";

const Navbar = () => {

  return (
    <div>
      <div
        className={`fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-white`}
      >
        <div className="w-full flex justify-between items-center p-2 ">
          <Link href="/">
            <h1 className={`font-bold text-4xl ml-10 text-gray-600`}>Logo</h1>
          </Link>
          <ul className={`hidden sm:flex mr-15  font-medium text-gray-600`}>
            <li className="p-4 hover:text-black transition duration-500">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 hover:text-black transition duration-500">
              <Link href="/research">Research</Link>
            </li>
            <li className="p-4 hover:text-black transition duration-500">
              <Link href="/publications">Publications</Link>
            </li>
            <li className="p-4 hover:text-black transition duration-500">
              <Link href="/team">Team</Link>
            </li>
            <li className="p-4 hover:text-black transition duration-500">
              <Link href="/news">News</Link>
            </li>
            <li className="p-4 hover:text-black transition duration-500">
              <Link href="/jobs">Job Opportunities</Link>
            </li>
            <li className="p-4 hover:text-black transition duration-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
