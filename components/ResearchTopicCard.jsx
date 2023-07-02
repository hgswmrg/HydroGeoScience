import React from 'react'
import Link from 'next/link';
import Image from 'next/legacy/image';

const ResearchTopicCard = ({text, imageSrc}) => {
  return (
    <div className='h-200  w-1/2 md:w-1/4 md:p-10 '>
        <Link href="/research">
            <div className="flex flex-col ">
                <Image className="" src={imageSrc} width={100} height={50} layout="responsive" 
                alt="Card Image" 
                sizes="(max-width: 200px) 100vw,
                        (max-height: 200px) 100vw" />
                <p className='flex justify-center 2xl:text-2xl text-center items-center mx-auto text-base font-semibold mt-2 text-primary-darkblue mb-10'>{text}</p>
            </div>
            
        </Link>
    </div>
  )
}

export default ResearchTopicCard