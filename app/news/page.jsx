"use client"
import React, { useState, useEffect } from 'react';
import { getNews } from '@backend/sanity-utils';
import Link from 'next/link';
 


export default function News() {
   
  const [newsData, setNewsData] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    async function fetchNewsData() {
      const data = await getNews();
      setNewsData(data);
    }
    fetchNewsData();
  }, []);
   

   const handleToggleExpand = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(null); // Collapse if already expanded
    } else {
      setExpandedIndex(index); // Expand if not expanded
    }
  };

  return (
    <section className="w-full h-full flex flex-col items-start mx-auto md:px-20 mb-20">
      <div className="mt-20 md:mt-40 w-full flex flex-col p-5">
        <p className="font-bold text-2xl md:text-5xl mb-5 text-primary-darkgreen">
          Latest News
        </p>
        
      </div>
      <div className="flex md:mt-10 w-full  flex-col items-start">
          {newsData.map((newsItem, index) => (
            <div key="index"
            className={`news-card bg-primary-lightgreen w-full m-4 p-5 ${
              expandedIndex === index ? 'flex-grow' : ''
            }`}
          >
              <h2 className="text-base md:text-xl font-bold 2xl:text-3xl">{newsItem.title}</h2>
              <div className="mt-1">
                <p className="text-sm md:text-base 2xl:text-2xl text-gray-900 my-1 font-normal">{newsItem.description}</p>
                {newsItem.link ? (
                  <Link
                    className="text-primary-darkgreen underline hover:opacity-80"
                    href={newsItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read full story
                  </Link>
                ) : null}
              </div>
              {newsItem.longdescription ? (
                <>
                  <button
                    className="text-primary-darkgreen 2xl:text-2xl underline"
                    onClick={() => handleToggleExpand(index)}
                  >
                    {expandedIndex === index ? 'Close' : 'Read More'}
                  </button>
                  {expandedIndex === index ? 
                    <p className="text-sm md:text-base 2xl:text-2xl text-gray-900 my-1 font-normal">
                      {newsItem.longdescription}
                    </p> : ''
                  }
                </>
              ) : null}
            </div>
          ))}
        </div>
    </section>
  );
};


