
import { Analytics } from '@vercel/analytics/react';

import 'tailwindcss/tailwind.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./globals.css";
import CarouselWithText from './../components/Carousel';
import CardLeft from '@components/CardLeft';
import CardRight from '@components/CardRight';
import CardCenter from '@components/CardCenter';

import ResearchTopicsContainer from '@components/ResearchTopicsContainer';
import NewsAndTweets from '../components/NewsAndTweets';
import { getCarousel } from '@backend/sanity-utils';


const text1 = "We still know relatively little about where water and solutes come from, how they move, where they accumulate, and how long they stay in different parts of a watershed. This lack of understanding makes it difficult to accurately predict how climate change and land-use changes affect the quality and quantity of water in streams. The HydroGeoScience for Watershed Management Laboratory develops practical tools to improve our understanding of how water and solutes move through watersheds. This knowledge is essential for making informed, science- based decisions in watershed management. Our research combines hydrologic transport models with new, data-driven methods such as physics-informed statistical and machine learning models.";
const text2 = "We still know relatively little about where water and solutes come from, how they move, where they accumulate, and how long they stay in different parts of a watershed. This lack of understanding makes it difficult to accurately predict how climate change and land-use changes affect the quality and quantity of water in streams. The HydroGeoScience for Watershed Management Laboratory develops practical tools to improve our understanding of how water and solutes move through watersheds. This knowledge is essential for making informed, science-based decisions in watershed management. Our research combines hydrologic transport models with new, data-driven methods such as physics-informed statistical and machine learning models.";
const text3 = "Members of our laboratory work to advance knowledge on how water and solutes move through both shallow and deep parts of the Earth. This research helps inform science-based strategies for effective watershed management. Our team also develops innovative, physics-informed statistical and machine-learning models to uncover important patterns and processes from large datasets. We are committed to supporting the professional growth of every research group member, helping them develop the skills and experience needed to achieve their career goals. Our members have received prestigious scholarships and fellowships, and our alumni have gone on to secure positions in leading environmental and statistical agencies or have continued their graduate studies at top-ranked universities.";



export default async function Home () {

  const carouselData = await getCarousel();


 
  return (
    <section className="w-full w-screen h-full">
        <div className="font-bold ">
          <CarouselWithText data={carouselData}/>
          <CardCenter heading="Motivation" text={text1} />
          <p className="flex items-center justify-center text-center mt-20 2xl:mt-40 mx-auto text-xl md:text-3xl 2xl:text-5xl text-primary-darkgreen">Our Ongoing Research Topics</p>
          <ResearchTopicsContainer/>
          <CardRight imageSrc={'/assets/AAmeli.jpg'} heading="Ali Ameli (Principal Investigator)" text={text2} />
          <CardLeft imageSrc={'/assets/Research_photo.jpg'} heading="Research Group" text={text3} />
          <NewsAndTweets/>
          
        </div>
        <Analytics mode={'production'} />;
    </section>
  )
}


