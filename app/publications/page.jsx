"use client"

import { useEffect , useState} from "react";
import 'tailwindcss/tailwind.css';
import Link from "next/link";
import Image from "next/image";
import WaterPublications from "@components/WaterPublications";
import ChemistryPublications from "@components/ChemistryPublications";
import ForestPublications from "@components/ForestPublications";
import LocationPublications from "@components/LocationPublication";
import { FaGraduationCap} from 'react-icons/fa';

const Publications = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
      }, []);

  useEffect(() => {
   
    // Function to handle scrolling to the section
    const handleScrollToSection = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Attach click event listener to all links with href starting with "#"
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleScrollToSection);
    });

    // Cleanup the event listeners when the component unmounts
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScrollToSection);
      });
    };
  }, []);

  return (
    <section className="w-full flex flex-col">
        <div className="relative w-screen h-400">
        {isMounted && (
          <Image
            src="/assets/publications.jpg"
            alt="Publications Image"
            height={500}
            width={3000}
            objectFit="cover"
            objectPosition="center"
          />
        )}
      </div>
      <div className="absolute top-0 mt-60 w-full h-400 flex flex-col items-center">
        <p className="font-bold text-5xl mb-5 text-white">
          Publications
        </p>
      </div>
     

      
        <div className="w-full px-20 z-100">
          
          <Link href="https://scholar.google.ca/" className="flex mt-20 text-primary-darkblue">
              <FaGraduationCap size={30} color="#03045e"/> 
              <p className="ml-3 text-lg underline">Google Scholar</p>
            </Link>
      
            
            <p className=" mt-10 text-3xl font-semibold text-primary-darkgreen">
                Publications by Topic
                
          </p>
          <hr className="mt-2  h-0.5 bg-primary-darkblue  " />
        </div>
      
      
      
      <WaterPublications id="water"/>
      
      <ChemistryPublications id="chemistry"/>
      
      <ForestPublications id="forests"/>

      <LocationPublications id="location"/>


      <div className="flex flex-col px-20 pb-20 items-start">
          <div className="w-full ">
            <p className=" text-3xl font-semibold text-primary-darkgreen">
                Publications by Year
            </p>
              <hr className="mt-2  h-0.5 bg-primary-darkblue  " />
          </div>
          <ol className="text-base mt-5 font-normal underline ">
            <li>
              <Link href="/#2022">2022</Link>
            </li>
            <li>
              <Link href="/#2021">
                2021
              </Link>
            </li>
            <li>
              <Link href="/#2020">
                2020
              </Link>
            </li>
            <li>
              <Link href="/#2019">
                2019
              </Link>
            </li>
          </ol>
       
      </div>
      
      
    
    </section>
  );
}

export default Publications;
