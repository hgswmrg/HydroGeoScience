import React from 'react';
import Image from 'next/legacy/image';
import Link from "next/link";

const Page = () => {
  return (
    <div className='w-screen h-full flex flex-col items-center mb-20'>
      <div className='mt-20 md:mt-32 w-screen flex flex-col items-center md:p-5 relative'>
        <p className='font-bold text-2xl md:text-5xl text-primary-darkgreen 2xl:mb-5'>
          Our Products
        </p>
        <div className='relative md:mt-20 px-20  w-screen h-400'>
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
            className="mt-20 px-5 py-2 text-xl text-primary-darkblue font-semibold rounded-full border border-primary-darkblue hover:text-white hover:bg-primary-darkblue hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-darkblue focus:ring-offset-2"
            >
                Explore the map!
            </button>
            </Link>
            
      </div>
    </div>
  );
};

export default Page;
