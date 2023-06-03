"use client"

import { useEffect , useState} from "react";
import 'tailwindcss/tailwind.css';
import Link from "next/link";
import Image from "next/legacy/image";
import WaterPublications from "@components/WaterPublications";
import ChemistryPublications from "@components/ChemistryPublications";
import ForestPublications from "@components/ForestPublications";
import Year2022 from "@components/Year2022"
import { FaGraduationCap, FaOrcid} from 'react-icons/fa';
import Year2021 from "@components/Year2021";
import Year2020 from "@components/Year2020";
import Year2019 from "@components/Year2019";
import Year2018 from "@components/Year2018";
import Year2017 from "@components/Year2017";
import Year2015 from "@components/Year2015";
import Year2016 from "@components/Year2016";
import Year2014 from "@components/Year2014";
import Year2013 from "@components/Year2013";


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
            width={2000}
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
          <div className="flex mt-20">
          <Link href="https://scholar.google.com/citations?user=L6LeKWcAAAAJ&hl=en" className="flex  text-primary-darkblue mr-20">
              <FaGraduationCap size={30} color="#03045e"/> 
              <p className="ml-3 text-lg underline">Google Scholar</p>
            </Link>
            <Link href="https://orcid.org/0000-0002-8173-887X" className="flex text-primary-darkblue">
              <FaOrcid size={30} color="#A6CE39"/> 
              <p className="ml-3 text-lg underline">ORCID</p>
            </Link>
      
          </div>
          
         
      
            
            <p className=" mt-10 text-3xl font-semibold text-primary-darkgreen">
                Publications by Topic
                
          </p>
          <hr className="mt-2  h-0.5 bg-primary-darkblue  " />
        </div>
      
      
      
      <WaterPublications id="water"/>
      
      <ChemistryPublications id="chemistry"/>
      
      <ForestPublications id="forests"/>

      <Year2022/>
      
      <Year2021/>

      <Year2020/>

      <Year2019/>

      <Year2018/>

      <Year2017/>

      <Year2016/>
      <Year2015/>
      <Year2014/>
      <Year2013/>



          
      
      
    
    </section>
  );
}

export default Publications;
