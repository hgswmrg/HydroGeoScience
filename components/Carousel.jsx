"use client"

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/legacy/image";

const CarouselWithText = () => {
  const carouselRef = useRef(null);
  const [selectedSlide, setSelectedSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedSlide((prevSlide) => {
        if (prevSlide === carouselRef.current.props.children.length - 1) {
          return 0;
        } else {
          return prevSlide + 1;
        }
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSelectSlide = (index) => {
    setSelectedSlide(index);
  };

  const renderIndicator = (onClickHandler, isSelected, index, label) => {
    const indicatorStyles = {
      background: isSelected ? "#06B6D4" : "#BDBDBD",
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      display: "inline-block",
      margin: "0 4px",
      cursor: "pointer",
    };

    return (
      <li
        key={index}
        style={indicatorStyles}
        onClick={() => {
          onClickHandler();
          handleSelectSlide(index);
        }}
      />
    );
  };

  return (
    <section className="h-600 pt-20">
      <Carousel
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={false}
        renderIndicator={renderIndicator}
        selectedItem={selectedSlide}
        onChange={handleSelectSlide}
        ref={carouselRef}
        swipeable={false}
        draggable={false}
        showArrows={false} // Hide arrow buttons
        style={{height: '600px'}}
      >
        <div className="relative w-screen h-500">
          <Image
            src="/../public/assets/FrontPage.png"
            alt="Landing Page Image"
            width={1500}
            height={600}
            objectFit="cover"
            sizes="(max-width: 2000px) 100vw,
        (max-height: 600px) 100vw"
          />

          <div className="absolute top-0 mt-40 left-0 w-full h-full flex flex-col  items-start ml-20 ">
            <p className="font-bold text-5xl mb-5 text-white">
              HydroGeoScience for Watershed
            </p>
            <p className="font-bold text-5xl  mb-5 text-white">
              Management Research Group
            </p>
            <p className="font-light text-lg  mb-5 text-white">
              Ali Ameli {"\u00A0"}{"\u00A0"}||{"\u00A0"}{"\u00A0"}EOSC
              {"\u00A0"}{"\u00A0"}||{"\u00A0"}{"\u00A0"}UBC{" "}
            </p>
            <Link href="/research">
              <button className="hover:scale-105 transition duration-300 font-medium px-4 py-2 mt-4 text-primary-darkgreen bg-white rounded-lg">
                View Research
              </button>
            </Link>
          </div>
        </div>

        {/* Add more carousel slides as needed */}

        <div className="relative w-screen h-500">
        <Link href="/team">
          <Image
            src="/assets/NewsJavad.jpeg"
            alt="Landing Page Image"
            width={1500}
            height={600}
          />

         </Link>
        </div>
        <div className="relative w-screen h-500">
        <Link href="/team">
          <Image
            src="/assets/News2.jpeg"
            alt="Landing Page Image"
            width={1500}
            height={600}
          />

         </Link>
        </div>
        <div className="relative w-screen h-500">
        <Link href="/team">
          <Image
            src="/public/assets/News3.jpeg"
            alt="Landing Page Image"
            width={1500}
            height={600}
          />

         </Link>
        </div>
      </Carousel>
    </section>
  );
};

export default CarouselWithText;
