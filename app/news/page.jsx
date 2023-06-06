"use client"
import React, { useEffect, useState } from 'react';
import { getNews } from '@backend/sanity-utils';
import Link from 'next/link';


export default async function News() {
   const newsData = await getNews();

  

  return (
    <section className="w-full flex flex-col items-start mx-auto md:px-20 mb-20">
      <div className="mt-20 md:mt-40 w-full h-full flex flex-col p-5">
        <p className="font-bold text-2xl md:text-5xl mb-5 text-primary-darkgreen">
          Latest News
        </p>
        
      </div>
      <div className="flex md:mt-10 w-full  flex-col items-start">
          {newsData.map((newsItem, index) => (
            <div key={index} className="news-card bg-primary-lightgreen w-full m-4 p-5">
              <h2 className="text-base md:text-xl font-bold">{newsItem.title}</h2>
              <p className="text-sm md:text-base">{newsItem.description}</p>
              <Link href="" className="text-primary-darkgreen">
                Read More
              </Link>
            </div>
          ))}
        </div>
    </section>
  );
};


