import React from 'react';
import Image from 'next/legacy/image';
import Link from "next/link";

const Page = () => {
  return (
    <div className='w-screen h-full flex flex-col items-center mb-20'>
     
      <div className="relative w-screen h-400">
        
        <Image
          src="/assets/products.png"
          alt="Publications Image"
          height={700}
          width={3000}
          objectFit="cover"
          objectPosition="center"
          layout="responsive"
        />
      
    </div>
    <div className="absolute top-0 mt-12 md:mt-40 2xl:mt-80 w-full h-400 flex flex-col items-center">
      <p className="font-bold text-xl md:text-5xl xl:text-6xl 2xl:text-9xl 2xl:pt-10 mb-5 text-primary-darkgreen">
        Our Products
      </p>
    </div>
    
        <p className='font-bold text-2xl md:text-4xl 2xl:text-7xl text-primary-darkblue mt-10 mb-5'>
                North America Map of stable Water Table Depth
              </p>
        <p className="text-center md:mx-20 2xl:text-4xl 2xl:px-96 text-sm md:text-base font-normal 2xl:my-20">
        This product includes the high-resolution (500 m) maps of shallow stable water table depth across North America. Here, we used modern machine learning algorithms accompanied by more than 20 million (in)direct observations of stable water table depth to predict stable water table depth under three different scenarios (V1, V2, V3) of accuracy versus interpretability. This product also includes the previously developed products developed at coarser resolution by other research groups.
 
          </p>
        <div className='relative md:mt-10 px-28 xl:px-48 2xl:px-80  w-screen h-400'>
          {/* Image */}
          <Image
            src='/assets/darkMap.png'
            alt='Publications Image'
            height={1000}
            width={2000}
            objectFit='cover'
            objectPosition='center'
            layout='responsive'
            priority={true}
          />
          </div>
              
            <Link href = "/map">
            <button 
            className="mt-10 px-5 py-2 text-xl md:text-2xl 2xl:text-5xl 2xl:px-16 2xl:py-4 text-primary-darkblue font-semibold rounded-full border border-primary-darkblue hover:text-white hover:bg-primary-darkblue hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-darkblue focus:ring-offset-2"
            >
                Explore the map!
            </button>
            </Link>
            
      </div>
    
  );
};

export default Page;
