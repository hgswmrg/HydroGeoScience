import 'tailwindcss/tailwind.css';
import Image from "next/legacy/image";
import CardLeft from '@components/CardLeft';
import ResearchCard from '@components/ResearchCard';

const Research = () => {
  return (
    <section className="w-full w-screen flex flex-col items-center">
      <p className="flex mt-20 md:mt-40 text-center font-bold text-xl  md:text-5xl 2xl:text-7xl 2xl:mx-60 mb-2 md:mb-5 text-primary-darkgreen">
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
        <div className="md:w-1/2 2xl:w-1/2 mx-auto 2xl:mr-40 mx-20 ">
            <p className="text-base md:text-2xl xl:text-3xl 2xl:text-6xl mb-2 md:mb-10 text-left font-bold text-primary-darkgreen mx-auto ">
              What is the gap?
            </p>
            <p className="text-left md:text-s 2xl:text-3xl text-sm md:text-base font-normal mr-10">
            While aiming to support resource use, watershed management practices have often resulted in
            unintended environmental impacts. For example, stump harvesting for biomass production in
            Northern Europe is believed to increase the transport of harmful solutes such as methyl mercury.
            Similarly, wetland drainage in North America, driven by agricultural intensification, is linked to
            higher risks of lake eutrophication and more frequent droughts and floods. These examples
            reflect a broader challenge: how can we enhance forest biomass production and agricultural
            productivity while minimizing negative impacts on water quality and ecosystem health? Our
            research group works to address this gap by developing science-based tools and knowledge that
            help balance resource development with environmental protection in watershed management.
            </p>
          <p className="text-base md:text-2xl 2xl:text-5xl text-left font-bold text-primary-darkgreen mt-20">Research Subjects</p>
          <ul className=" 2xl:text-3xl 2xl:mt-10 2xl:leading-relaxed text-sm md:text-base mt-5 font-normal text-left">
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
            <p className="text-base md:text-3xl 2xl:text-6xl mb-2 md:mb-10 text-right font-bold text-primary-darkgreen mx-auto ">
            How we make an Impact?
            </p>
            <p className="text-right ml-10 2xl:text-3xl text-sm md:text-base font-normal">
            The HydroGeoScience for Watershed Management Laboratory works to advance quantitative
            understanding of how water and solutes move through both shallow and deep parts of the Earth.
            We investigate how these transport processes are influenced by land development and climate
            variability. This knowledge is essential for developing science-based watershed management
            strategies—particularly for identifying areas where intensive land use can take place with
            minimal environmental impact on local and regional ecosystems. To support this work, we also
            develop innovative, physics-informed statistical and machine learning models that use large
            datasets to detect key patterns and processes in watershed systems. Through this approach, we
            provide the tools and knowledge needed to support effective, sustainable watershed management.
            </p>
          <p className="text-base md:text-2xl xl:text-3xl 2xl:text-5xl text-right font-bold text-primary-darkgreen mt-20">NSERC subjects</p>
          <ol className="2xl:mt-10 2xl:leading-relaxed text-sm md:text-base xl:text-base 2xl:text-3xl  mt-5 font-normal text-right">
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
          text= "We develop advanced, physics-informed statistical and machine-learning models to identify where water travels after it enters a watershed. These models help uncover the sources, flow pathways, hotspots, critical moments, and residence times of water and solutes within the landscape. This foundational understanding is essential for exploring how hydrological, geochemical, and ecological processes interact across both space and time." 
          imageSrc="/assets/research1.png"
          num="I. "
        />
        <ResearchCard heading="II. How does the chemistry of rainwater change before it reaches the stream?" 
          text= "The chemistry of rainwater evolves as it travels through the watershed, depending on the flow pathways it follows and the duration of its contact with various solute sources in the soil and subsurface. Our laboratory integrates hydrologic transport models (developed in our first research area) with geochemical algorithms to investigate how water chemistry changes between rainfall and streamflow. This approach helps us better understand the link between water movement and biogeochemical transformations within the landscape."
          imageSrc="/assets/research2.png"
          num="II. "
        />
        <ResearchCard heading="III. How Do Forest, mining, and agricultural developments impact water pathways and stream water quality and quantity?" 
          text= "Forestry, mining, and agricultural land developments can alter the timing and pathways of water movement within watersheds, ultimately affecting stream water quality and quantity. These impacts may be further intensified by climate variability. Our laboratory investigates the combined effects of land-use practices and climate variability on water flow pathways and their downstream consequences for streamflow quantity and water quality."
          imageSrc="/assets/research3.jpeg"
          num="III. "
        />
        <ResearchCard heading="IV. Where can land developments be safely located to minimize water quality and quantity impacts under a changing climate?" 
          text= "Insights from our research on water flow pathways, solute transport, and the impacts of land-use and climate variability (Research Areas I, II, and III) inform science-based watershed management decisions. Our laboratory develops decision-support tools to identify areas that are either vulnerable to, or suitable for, intensive forestry, mining, and agricultural practices. These tools help guide the placement of land developments in ways that minimize negative impacts on stream water quality and quantity, even under changing climate conditions."
          imageSrc="/assets/research4.jpeg"
          num="IV. "
        />
      </div>
    </section>
  );
};

export default Research;
