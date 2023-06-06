"use client"
import Link from "next/link"
import React, { useEffect, useState } from 'react';



const News = ({heading, text, link}) => {


  return (
    <Link href={link} >
        <div className="flex flex-col bg-primary-lightgreen py-5 px-4 transform hover:scale-105 transition duration-500">
            <p className="text-lg font-normal pb-2">{heading}</p>
            <p className="text-sm font-light">{text}</p>
        </div>
        
    </Link>
    
  )
}

export default News