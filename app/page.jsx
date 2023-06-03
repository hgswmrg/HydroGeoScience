import 'tailwindcss/tailwind.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "@styles/globals.css";
import CarouselWithText from './../components/Carousel';
import CardLeft from '@components/CardLeft';
import CardRight from '@components/CardRight';
import CardCenter from '@components/CardCenter';
import NewsAndTweets from '@components/NewsAndTweets';
import ResearchTopicsContainer from '@components/ResearchTopicsContainer';


const text1 = "Decades after Hewlett and Troendle's writing, we still know little about the sources, pathways and residence time of water and solutes within headwaters and their parent watersheds. This lack of scientific knowledge has limited the ability to sufficiently predict the impacts of climate variability and land-use alteration on the quality and quantity of stream water. HydroGeoscience for Watershed Management (HG-WM) research group advances the scientific knowledge on the quantification of sources, pathways and residence time of water and solutes to inform watershed management, under changing climate and land-use. In doing so, we use physically-based and conceptual hydrologic models as well as we develop new physics-informed machine learning and statistical models.";
const text2 = "I am a hydrologist interested in exploring how water and solutes move and react within watersheds, how these movements and reactions change with climate variability and land-use alteration, and ultimately, how these changes impact terrestrial and aquatic ecosystems. I currently lead national and international projects on the development of interdisciplinary approaches for water security assessments and watershed management in collaboration with geochemists, ecologists, agricultural and forestry scientists, as well as water conservation and protection agencies. Through this work, we are developing science-based evidence on the interaction amongst hydrological, geochemical, and ecological processes to inform watershed management, planning, and engineering designs for the end-goal of managing the environmental impacts of climate variability and land-use alteration on groundwater and surface water resources.";
const text3 = "UBC's HydroGeoscience for Watershed Management (HG-WM) research group combines different environmental and statistical science disciplines in order to scientifically manage the environmental impacts of climate and land-use changes. In particular, HG-WM (1) advances the knowledge on materiel (water & solute) transport below and above the land surface, to (2) inform science-based watershed management strategies and land-use planing, and to (3) design engineered groundwater and surface water protection and purification systems. For the details of our current projects, please see the research section. The research group members receive full support from HG-WM director to obtain high-level professional development and to achieve their career goals and dreams. Our group members have already received prestigious scholarships and fellowships. In addition, our group alumnus have already landed high-level jobs in environmental and statistical agencies, or continued their graduate studies in top-ranked Universities.";

const Home = () => {
  return (
    <section className="w-full ">
        <div className="font-bold ">
          <CarouselWithText/>
          <CardCenter heading="Motivation" text={text1} />
          <ResearchTopicsContainer/>
          <CardRight imageSrc={'/assets/AAmeli.jpg'} heading="Ali Ameli (Director)" text={text2} />
          <CardLeft imageSrc={'/assets/UBC.jpg'} heading="Research Group" text={text3} />
          <NewsAndTweets/>
          
        </div>
    </section>
  )
}



export default Home