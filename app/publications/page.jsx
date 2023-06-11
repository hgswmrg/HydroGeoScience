"use client"


import 'tailwindcss/tailwind.css';
import Link from "next/link";
import Image from "next/legacy/image";


import { FaGraduationCap, FaOrcid} from 'react-icons/fa';

import { getPublications } from "@backend/sanity-utils";
import YearCard from "@components/YearCard";


export default async function Publications () {

  const publicationsData = await getPublications();


  const filteredPublicationsData = (classification) => {
    return publicationsData.filter((item) => item.topic === classification);
  };

  const filteredYearData = (classification) => {
    return publicationsData.filter((item) => item.year === classification);
  };

  return (
    <section className="w-full flex flex-col mb-20">
        <div className="relative w-screen h-400">
        
          <Image
            src="/assets/publications.jpg"
            alt="Publications Image"
            height={500}
            width={2000}
            objectFit="cover"
            objectPosition="center"
          />
        
      </div>
      <div className="absolute top-0 mt-12 md:mt-60 w-full h-400 flex flex-col items-center">
        <p className="font-bold text-xl md:text-5xl mb-5 text-white">
          Publications
        </p>
      </div>
     

      
        <div className=" w-full px-4 md:px-20 z-100">
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
        
          <p className=" mt-10 text-xl md:text-3xl font-semibold text-primary-darkgreen">
                Publications by Topic  
          </p>
          <hr className="mt-2  h-0.5 bg-primary-darkblue  " />
        </div>
      
        
        <div className="water-publications flex flex-col justify-center  px-4 md:px-20 pt-4 md:pt-10">
          <p className="text-lg md:text-2xl font-semibold text-primary-darkgreen">Where does the water go after it rains?</p>
            <ol className="text-sm md:text-base font-normal  mt-5 p-4  list-decimal">
              {filteredPublicationsData('water').map((item, index) => (
                <Link href={item.link} key={index}>
                    <li>
                    {item.title}
                    </li>
                </Link>
                ))} 
            </ol>
        </div>

        <div className="chemistry-publications flex flex-col justify-center  px-4 md:px-20 pt-4 md:pt-10">
          <p className="text-lg md:text-2xl font-semibold text-primary-darkgreen">How does chemistry of rainwater alter on its way from being rainfall to being streamflow?</p>
            <ol className="text-sm md:text-base font-normal  mt-5 p-4  list-decimal">
              {filteredPublicationsData('chemistry').map((item, index) => (
                <Link href={item.link} key={index}>
                    <li>
                    {item.title}
                    </li>
                </Link>
                ))} 
            </ol>
        </div>

        <div className="forest-publications flex flex-col justify-center  px-4 md:px-20 pt-4 md:pt-10">
          <p className="text-lg md:text-2xl font-semibold text-primary-darkgreen">How do forests and agricultural developments impact water pathways and ultimately stream water quality and quantity?</p>
            <ol className="text-sm md:text-basefont-normal  mt-5 p-4  list-decimal">
              {filteredPublicationsData('forest').map((item, index) => (
                <Link href={item.link} key={index}>
                    <li>
                    {item.title}
                    </li>
                </Link>
                ))} 
            </ol>
        </div>
        <div className="px-4 md:px-20">
          <p className=" mt-10 text-xl md:text-3xl font-semibold text-primary-darkgreen">
            Publications by Year  
          </p>
          <hr className="mt-2  h-0.5 bg-primary-darkblue  " />
        </div>
        
      <YearCard year="2022" data={filteredYearData('2022')}/>
      <YearCard year="2021" data={filteredYearData('2021')}/>
      <YearCard year="2020" data={filteredYearData('2020')}/>
      <YearCard year="2019" data={filteredYearData('2019')}/>
      <YearCard year="2018" data={filteredYearData('2018')}/>
      <YearCard year="2017" data={filteredYearData('2017')}/>
      <YearCard year="2016" data={filteredYearData('2016')}/>
      <YearCard year="2015" data={filteredYearData('2015')}/>
      <YearCard year="2014" data={filteredYearData('2014')}/>
      <YearCard year="2013" data={filteredYearData('2013')}/>



          
      
      
    
    </section>
  );
}


