
import { Analytics } from '@vercel/analytics/react';

import 'tailwindcss/tailwind.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "@styles/globals.css";
import CarouselWithText from './../components/Carousel';
import CardLeft from '@components/CardLeft';
import CardRight from '@components/CardRight';
import CardCenter from '@components/CardCenter';

import ResearchTopicsContainer from '@components/ResearchTopicsContainer';
import NewsAndTweets from '../components/NewsAndTweets';
import { getCarousel } from '@backend/sanity-utils';


const text1 = "We know little about the spatial and temporal sources, pathways, hot spots, and residence times of water and solutes within watersheds. This lack of scientific knowledge has limited the ability to sufficiently predict the impacts of climate variability and land-use alteration on the quality and quantity of stream water. HydroGeoScience for Watershed Management Laboratory develops quantitative tools to advance the knowledge of sources, pathways, and residence time of water and solutes. This knowledge is critically required for efficient and science-based watershed management. In doing so, we use physically-based and conceptual hydrologic transport models and develop new physics-informed statistical machine-learning models.";
const text2 = "I am a hydrologist interested in exploring how water and solutes move and react within watersheds, how these movements and reactions change with climate variability and land-use alteration, and ultimately, how these changes impact terrestrial and aquatic ecosystems. I currently lead national and international projects on the development of interdisciplinary approaches for water security assessments and watershed management in collaboration with geochemists, ecologists, agricultural and forestry scientists, as well as water conservation and protection agencies. Through this work, we are developing science-based evidence on the interaction amongst hydrological, geochemical, and ecological processes to inform watershed management, planning, and engineering designs for the end-goal of managing the environmental impacts of climate variability and land-use alteration on groundwater and surface water resources.";
const text3 = "The laboratory members advance the knowledge on material (water & solute) transport in deep and shallow earth’s compartments to inform science-based watershed management strategies. They also develop new physics-informed statistical machine-learning models to infer relevant patterns and processes from big data.  The research group members receive full support to obtain high-level professional development and to achieve their career goals and dreams. Our group members have already received prestigious scholarships and fellowships. In addition, our group alumni have already landed high-level jobs in environmental and statistical agencies or continued their graduate studies in top-ranked Universities.";



export default async function Home () {

  const carouselData = await getCarousel();


 
  return (
    <section className="w-full h-full">
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


