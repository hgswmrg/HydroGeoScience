"use client"
import Link from "next/link"
import React, { useEffect, useState } from 'react';



const News = ({heading, text, link}) => {


  return (
    <Link href={link} >
        <div className="flex flex-col bg-primary-lightgreen py-5 px-4 transform hover:scale-105 transition duration-500 mb-10">
            <p className="text-sm md:text-base 2xl:text-3xl font-normal leading-8">{heading}</p>
        </div>
        
    </Link>
    
  )
}

export default News