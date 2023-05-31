"use client"
import Link from "next/link"
import React, { useEffect, useState } from 'react';



const News = ({heading, text, link}) => {


  return (
    <Link href={link} className="p-8">
        <div className="flex flex-col bg-white py-3 px-2 transform hover:scale-105 transition duration-500">
            <p className="text-lg font-normal pb-2">{heading}</p>
            <p className="text-sm font-light">{text}</p>
        </div>
        
    </Link>
    
  )
}

export default News