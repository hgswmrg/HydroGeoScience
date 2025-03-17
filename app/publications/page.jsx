"use client";

import 'tailwindcss/tailwind.css';
import Link from "next/link";
import Image from "next/legacy/image";
import { FaGraduationCap, FaOrcid } from 'react-icons/fa';
import { RiExternalLinkLine } from 'react-icons/ri';
import { useEffect, useState } from "react";
import { getPublications } from "@backend/sanity-utils";
import YearCard from "@components/YearCard";

export default function Publications() {
  const [publicationsData, setPublicationsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPublications();
      setPublicationsData(data);
    }
    fetchData();
  }, []);

  const filteredPublicationsData = (classification) => {
    return publicationsData.filter((item) => item.topic === classification);
  };

  const filteredYearData = (classification) => {
    return publicationsData.filter((item) => item.year === classification);
  };

  const uniqueYears = [...new Set(publicationsData.map((item) => item.year))].sort((a, b) => b - a);

  return (
    <section className="w-full flex flex-col mb-20">
      {/* Image Header */}
      <div className="relative w-screen h-[400px]">
        <Image
          src="/assets/publications.jpg"
          alt="Publications Image"
          height={700}
          width={3000}
          objectFit="cover"
          objectPosition="center"
          layout="responsive"
        />
        <div className="absolute top-0 mt-12 md:mt-60 w-full h-400 flex flex-col items-center">
        <p className="font-bold text-xl md:text-5xl xl:text-6xl 2xl:text-9xl 2xl:pt-10 mb-5 text-white">
          Publications
        </p>
      </div>
      </div>

      

      {/* Links */}
      <div className="w-full px-4 md:px-20">
        <div className="flex mt-7 md:mt-20">
          <Link href="https://scholar.google.com/citations?user=L6LeKWcAAAAJ&hl=en" className="flex text-primary-darkblue mr-20">
            <FaGraduationCap size={30} color="#03045e"/>
            <p className="ml-3 mt-1 md:mt-0 text-sm md:text-lg underline">Google Scholar</p>
          </Link>
          <Link href="https://orcid.org/0000-0002-8173-887X" className="flex text-primary-darkblue">
            <FaOrcid size={30} color="#A6CE39"/>
            <p className="ml-3 mt-1 md:mt-0 text-sm md:text-lg underline">ORCID</p>
          </Link>
        </div>
      </div>

      {/* Publications by Topic */}
      <div className="px-4 md:px-20">
        <p className="mt-10 text-xl md:text-3xl 2xl:text-5xl font-semibold text-primary-darkgreen">
          Publications by Topic
        </p>
        <hr className="mt-2 h-0.5 bg-primary-darkblue" />
      </div>

      {/* Publications Lists */}
      {["water", "chemistry", "forest"].map((topic) => (
        <div key={topic} className="flex flex-col justify-center px-4 md:px-20 pt-4 md:pt-10">
          <p className="text-lg md:text-2xl 2xl:text-4xl font-semibold text-primary-darkgreen">
            {topic === "water" && "Where does the water go after it rains?"}
            {topic === "chemistry" && "How does chemistry of rainwater alter on its way from being rainfall to being streamflow?"}
            {topic === "forest" && "How do forests and agricultural developments impact water pathways and ultimately stream water quality and quantity?"}
          </p>
          <ol className="text-sm md:text-base 2xl:text-2xl font-medium mt-5 p-4 list-decimal">
            {filteredPublicationsData(topic).map((item, index) => (
              <li key={index} className="mb-2">
                <Link href={item.link || "#"}>
                  <div className="flex">
                    <p className="mr-5">{item.title}</p>
                    <div className="transform hover:scale-110 duration-500">
                      <RiExternalLinkLine size={20} color="#0072b1"/>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      ))}

      {/* Publications by Year */}
      <div className="px-4 md:px-20">
        <p className="mt-10 text-xl md:text-3xl 2xl:text-5xl font-semibold text-primary-darkgreen">
          Publications by Year
        </p>
        <hr className="mt-2 h-0.5 bg-primary-darkblue" />
      </div>

      {uniqueYears.map((year) => (
        <YearCard key={year} year={year} data={filteredYearData(year)} />
      ))}
    </section>
  );
}
