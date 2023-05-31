import 'tailwindcss/tailwind.css';
import Image from "next/image";
import CardLeft from '@components/CardLeft';
import ResearchCard from '@components/ResearchCard';

const Research = () => {
  return (
    <section className="w-full flex flex-col items-center">
      
      <div className="mt-40 w-full h-full flex flex-col items-center">
        <p className="font-bold text-5xl mb-5 text-primary-darkgreen">
          Towards Science-Based Forest & Agricultural
        </p>
        <p className="font-bold text-5xl mb-36 text-primary-darkgreen">
          Management With Minimal Environmental Impact
        </p>
        <div className="flex justify-center pb-36">
          <div className="flex flex-col p-20 bg-primary-lightgreen items-center">
            <Image
              src="/../public/assets/Research_Photo4.png"
              className="pb-20"
              width={900}
              height={450}
              layout="responsive"
              alt="Card Image"
            />
            <p className="text-2xl items-center font-bold text-primary-darkgreen">
              What is the gap?
            </p>
            <p className="max-w-5xl text-base mt-5 font-light">
              Land-use change due to forestry and agricultural practices have negatively impacted our environment. Stump harvesting forestry practice for biomass production in North of Europe is hypothesized to enhance the excessive transport of solutes (e.g., methyl mercury) toward surrounding aquatic ecosystems. Wetland drainage in North America due to agricultural intensification is hypothesized to enhance the risk of lake Eutrophication (growth of toxic green bacteria) as well as to enhance the risk of drought and flood in local and regional water bodies. These are only two simple examples of unscientifically-designed watershed management planning with catastrophic environmental impacts. So, how can we maximize forest biomass yield and agricultural productivity, while minimizing their environmental effects?
            </p>
            <p className="text-2xl mt-10 items-center font-bold text-primary-darkgreen">
              How do we fill the gap?
            </p>
            <p className="max-w-5xl text-base mt-5 font-light">
              UBC's HydroGeoScience for Watershed Management (HG-WM) research group advances the knowledge on materiel (water & solute) transport and reaction in deep and shallow subsurface as well as over the land surface. We also explore how material transport and reaction processes vary with land developments. This knowledge is critically required for science-based watershed management planing and, particularly, to locate areas where intensive agricultural and forestry practices can be conducted with minimal environmental impacts on local and regional ecosystems. Below read more about four interrelated research questions that HG-WM research group explores.
            </p>
          </div>
        </div>
       
      </div>
      <div className="flex items-center  md:flex-row md:justify-center">
        <div className="w-full md:w-1/2 h-500 md:mx-2 mx-16">
          <p className="text-3xl text-primary-darkgreen">Research Subjects</p>
          <ol className="text-base mt-5 font-light list-decimal">
            <li>Groundwater Ecohydrology</li>
            <li>Hydro-geological Engineering</li>
            <li>Watershed Management</li>
            <li>Applied Hydro-geochemistry</li>
            <li>Groundwater - Surfacewater & Land Interaction</li>
            <li>Water Resources Engineering</li>
            <li>Statistical Machine Learning</li>
            <li>Functional Data Analysis</li>
          </ol>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center px-16 mx-16 mt-0">
          <p className="text-3xl text-primary-darkgreen">NSERC subjects</p>
          <ol className="text-base mt-5 font-light list-decimal">
            <li>4504 Groundwater</li>
            <li>1007 Water Resources and Supply</li>
            <li>1501 Water Quality</li>
            <li>4501 Hydrogeochemistry</li>
            <li>1006 Hydrologic Engineering</li>
            <li>2203 Modeling, Simulation</li>
          </ol>
        </div>
      </div>
      <div className="my-20 mx-36">
        <ResearchCard heading="Where does the water go after it rains?" 
          text= "HG-WM research group focuses on developing new hydrologic transport models to identify source, pathway and residence time of water within watersheds. These models set a fundamental foundation for understanding the interaction between hydrological, geochemical and ecological processes. Check out related papers." 
          imageSrc=""
        />
        <ResearchCard heading="How does chemistry of rainwater alter on its way from being rainfall to being streamflow?" 
          text= "The extent to which chemistry of water particles alter along their way from land surface to stream depends on their pathways and the time they were in direct contact with solute sources within the watershed. HG-WM research group combines new hydrologic transport models (developed in research area I) with geochemical algorithms to explore how chemistry of rainwater alter before being discharged into stream. Check out related papers."
          imageSrc=""
        />
        <ResearchCard heading="How do forests and agricultural developments impact water pathways and ultimately stream water quality and quantity?" 
          text= "Forest and agricultural land developments may alter the timing and pathways of water transport, and ultimately may alter hydro-geochemical processes within watershed and stream water quality and quantity. Climate variability may also exacerbate the impacts of forest and agricultural land developments on stream water quality and quantity. HG-WM research group extends new hydrologic transport and hydrogeochemical models (developed in research areas I & II) to explore these impacts. Check out related papers."
          imageSrc=""
        />
        <ResearchCard heading="Where are suitable locations for forestry and agricultural land developments with minimal impact on water quality and quantity, under changing cliimate?" 
          text= "Research areas I & II & III inform watershed management decisions on locating areas where intensive agricultural and forestry practices can lead to negative environmental impacts on stream water quality & quantity. HG-WM research group develops hydro-geochemical mapping tools to identify areas sensitive to forestry and agricultural practices as well as climate variability at local to regional scales."
          imageSrc=""
        />
      </div>
    </section>
  );
};

export default Research;
