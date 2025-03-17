import 'tailwindcss/tailwind.css';
import Image from "next/legacy/image";
import CardLeft from '@components/CardLeft';
import ResearchCard from '@components/ResearchCard';

const Research = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <p className="flex mt-20 md:mt-40 text-center font-bold text-xl  md:text-5xl 2xl:text-9xl 2xl:mx-60 mb-2 md:mb-5 text-primary-darkgreen">
          Towards Science-Based Watershed Management with Minimal Environmental Impacts
        </p>
      <div className="relative md:mt-20 w-screen h-400">
        <Image
          src="/assets/Research_Photo4.jpeg"
          alt="Publications Image"
          height={1500}
          width={3000}
          objectFit="cover"
          objectPosition="center"
          layout="responsive"
          priority="true"
        />
      
    </div>
      
      <div className="flex flex-col md:flex-row mt-20 items-center md:items-start justify-center md:justify-start bg-primary-lightgreen p-20">
        <div className="md:w-1/2 2xl:w-1/2 mx-auto 2xl:mr-40 ">
            <p className="text-base md:text-3xl 2xl:text-6xl mb-2 md:mb-10 text-center font-bold text-primary-darkgreen mx-auto ">
              What is the gap?
            </p>
            <p className="text-center md:mx-20 2xl:text-3xl 2xl:px-96 text-sm md:text-base font-normal">
              Watershed management practices have negatively impacted our environment. Stump harvesting forestry practice for biomass production in North Europe is hypothesized to enhance the excessive transport of solutes (e.g., methyl mercury). Wetland drainage in North America due to agricultural intensification is hypothesized to enhance the risks of lakes Eutrophication and the risks of drought/flood. These are two simple examples of watershed management planning with negative environmental impacts. So, how can we maximize forest biomass yield and agricultural productivity, while minimizing their environmental effects?  
            </p>
          <p className="text-base md:text-2xl 2xl:text-5xl text-center font-bold text-primary-darkgreen mt-20">Research Subjects</p>
          <ul className=" 2xl:text-4xl 2xl:mt-10 2xl:leading-relaxed text-sm md:text-base mt-5 font-normal text-center">
            <li>Groundwater Ecohydrology</li>
            <li>Hydro-geological Engineering</li>
            <li>Watershed Management</li>
            <li>Applied Hydro-geochemistry</li>
            <li>Groundwater - Surfacewater & Land Interaction</li>
            <li>Water Resources Engineering</li>
            <li>Statistical Machine Learning</li>
            <li>Functional Data Analysis</li>
          </ul>
        </div>
        <div className="md:w-1/2 md:ml-16 mt-10 md:mt-0 md:ml-0 xl:ml-10 2xl:ml-0">
            <p className="text-base md:text-3xl 2xl:text-6xl mb-2 md:mb-10 text-center font-bold text-primary-darkgreen mx-auto ">
            How do we fill the gap?
            </p>
            <p className="text-center md:mx-20 2xl:text-3xl 2xl:px-96 text-sm md:text-base font-normal">
            HydroGeoScience for Watershed Management Laboratory advances quantitative knowledge on material (water & solute) transport in deep and shallow earth’s compartments. We also explore how material transport processes vary with land developments and climate variability. This knowledge is critically required for science-based watershed management planning and, particularly, to locate areas where intensive watershed management practices can be conducted with minimal environmental impacts on local and regional ecosystems. In doing so, we develop new physics-informed statistical machine-learning models to learn and infer patterns and processes using big data.
            </p>
          <p className="text-base md:text-2xl 2xl:text-5xl text-center font-bold text-primary-darkgreen mt-20">NSERC subjects</p>
          <ol className="2xl:text-4xl 2xl:mt-10 2xl:leading-relaxed text-sm md:text-base mt-5 font-normal text-center">
            <li>4504 Groundwater</li>
            <li>1007 Water Resources and Supply</li>
            <li>1501 Water Quality</li>
            <li>4501 Hydrogeochemistry</li>
            <li>1006 Hydrologic Engineering</li>
            <li>2203 Modeling, Simulation</li>
          </ol>
        </div>
      </div>

      <p className=" mt-10 md:mt-40 md:mb-20 text-lg md:text-4xl 2xl:text-7xl underline mb-2 xl:mb-10 items-center font-bold text-primary-darkgreen">
        Our Ongoing Research Topics
      </p>


      <div className="md:my-20 mx-10 mt-10 md:mt-0 md:ml-36">
        <ResearchCard heading="I. Where does the water go after it rains?" 
          text= "We develop new physics-informed statistical machine-learning models to learn and identify the sources, pathways, hot spots, hot moments, and residence times of water (and solutes) within watersheds. These inferential models set a fundamental foundation for understanding the interaction between hydrological, geochemical, and ecological processes." 
          imageSrc="/assets/research1.png"
          num="I. "
        />
        <ResearchCard heading="II. How does chemistry of rainwater alter on its way from being rainfall to being streamflow?" 
          text= "The extent to which the chemistry of water particles alters along their way from land surface to stream depends on their pathways and the time they were in direct contact with solute sources within the watershed. Our laboratory combines new hydrologic transport models (developed in research area I) with geochemical algorithms to explore how rainwater chemistry alters before being discharged into the stream."
          imageSrc="/assets/research2.png"
          num="II. "
        />
        <ResearchCard heading="III. How do forests and agricultural developments impact water pathways and ultimately stream water quality and quantity?" 
          text= "Forest, mining, and agricultural land developments may alter the timing and pathways of water transport and ultimately may impact stream water quality and quantity. Climate variability may exacerbate such impacts. Our laboratory explores the cumulative effects of watershed management practices and climate variability on water pathways and ultimately on stream water quantity and quality. "
          imageSrc="/assets/research3.jpeg"
          num="III. "
        />
        <ResearchCard heading="IV. Where are suitable locations for forestry and agricultural land developments with minimal impact on water quality and quantity, under changing cliimate?" 
          text= "Research areas I & II & III inform watershed management decision makings on locating areas where intensive agricultural, mining, and forestry practices can lead to negative environmental impacts on stream water quality & quantity. Our laboratory develops science-based decision-making tools to identify areas vulnerable to (or suitable for) watershed management practices."
          imageSrc="/assets/research4.jpeg"
          num="IV. "
        />
      </div>
    </section>
  );
};

export default Research;
