"use client"

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/legacy/image";

const CarouselWithText = ({ data }) => {
  const carouselData = data;
  const carouselRef = useRef(null);
  const [selectedSlide, setSelectedSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedSlide((prevSlide) => {
        if (prevSlide === carouselData.length ) {
          return 0;
        } else {
          return prevSlide + 1;
        }
      });
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [carouselData.length]);

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
    <section className="h-600 pt-12">
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
        style={{ height: "600px" }}
      >
        <div className="relative w-screen h-500">
          <Link href="/research">
          <Image
            src="/assets/landingpage.jpeg"
            alt="Landing Page Image"
            width={1500}
            height={600}
           
            layout="responsive"
            
          />
          </Link>
        </div>

        {carouselData.map((item, index) => (
          <div key={index} className="relative w-screen h-500">
            <Link href="/team/graduates">
              <Image
                src={item.image}
                alt="Landing Page Image"
                width={1500}
                height={600}
                layout="responsive"
              />
            </Link>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default CarouselWithText;
