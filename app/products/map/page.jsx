import React from 'react';
import Image from 'next/legacy/image';
import Link from "next/link";

const fileLinks = [
  { version: "V1", url: "https://ln5.sync.com/dl/35b3ba230#qnug3ujb-ihwefgun-zvg225w6-9z8dccdm" },
  { version: "V2", url: "https://ln5.sync.com/dl/35b3ba230#qnug3ujb-ihwefgun-zvg225w6-9z8dccdm" },
  { version: "V3", url: "https://ln5.sync.com/dl/35b3ba230#qnug3ujb-ihwefgun-zvg225w6-9z8dccdm" }
];

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
        <div className="absolute top-0 mt-12 md:mt-40 2xl:mt-80 w-full h-400 flex flex-col items-center">
          <p className="font-bold text-xl md:text-5xl xl:text-6xl 2xl:text-9xl 2xl:pt-10 mb-5 text-primary-darkgreen">
            Our Products
          </p>
        </div>
    </div>
    
        <p className='font-bold text-2xl md:text-4xl 2xl:text-7xl text-primary-darkblue mt-10 mb-5'>
                North America Map of stable Water Table Depth
              </p>
        <p className="text-center md:mx-20 2xl:text-4xl 2xl:px-96 text-sm md:text-base font-normal 2xl:my-20">
        This product, a culmination of extensive research, includes three sets of machine learning-based simulations of static Water Table depth (WTD) at 500 m resolution in shallow unconfined aquifers across the USA and Canada. We utilized a vast dataset of more than 20 million real and proxy observations of WTD in developing these three products, ensuring the reliability and accuracy of our results. The three simulations were developed by gradually adding WTD proxy data to the real observation of WTD from Version 1 (V1) to Version 3 (V3). All three versions of the simulation leveraged machine learning algorithms constrained by physical relationships governing the spatial dynamics of WTD. Assessing the quality of the products against independent lines of evidence revealed that V2 provides the most accurate simulations along low-elevation landscapes near small to large permanent surface water bodies (e.g., Prairie Pothole Region), while V3 provides reasonable simulations in both low-elevation and high-elevation landscapes. The details of the methods, data compiling, and evaluation of the three products can be found in the below pre-print <Link href="https://eartharxiv.org/repository/view/7067/">https://eartharxiv.org/repository/view/7067/</Link>  
          </p>
        <div className='relative md:mt-10 px-28 xl:px-48 2xl:px-80  w-screen h-400'>
          {/* Image */}
          <Image
            src='/assets/MapImage2.png'
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

            {/* Cards for file links */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-10 md:px-20 2xl:px-60">
                {fileLinks.map((file, index) => (
                  <Link key={index} href={file.url}>
                    <div className="border rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer text-center bg-white">
                      <p className="text-xl md:text-2xl font-semibold text-primary-darkblue">Download {file.version}</p>
                      <p className="text-sm md:text-base mt-2 text-gray-600">Click to download {file.version} file</p>
                    </div>
                  </Link>
            ))}
            </div>
          
            
      </div>
    
  );
};

export default Page;
