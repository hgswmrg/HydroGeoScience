import TeamCard from '@components/TeamCard'
import Image from "next/legacy/image";
import { getProfile } from '@backend/sanity-utils';

export default async function Team () {
  const ameli = "I am a hydrologist interested in exploring how water and solutes move and react within watersheds, how these movements and reactions change with climate variability and land-use alteration, and ultimately, how these changes impact terrestrial and aquatic ecosystems. I currently lead national and international projects on the development of interdisciplinary approaches for water security assessments and watershed management in collaboration with geochemists, ecologists, agricultural and forestry scientists, as well as water conservation and protection agencies. Through this work, we are developing science-based evidence on the interaction amongst hydrological, geochemical, and ecological processes to inform watershed management, planning, and engineering designs for the end-goal of managing the environmental impacts of climate variability and land-use alteration on groundwater and surface water resources.";
  const ardalan = "I am an environmental scientist interested in the geospatial patterns of the global water cycle, particularly with regions that have significant groundwater-surface interactions. My research focus is on using topographic, climatic, and geological signatures over North America to provide spatial/temporal predictions of inundated and shallow groundwater regions. I am also interested in tackling challenges in water and agricultural adaptation for Earth’s growing population. Previously, I obtained my PhD in Geoscience and Natural Resources from Sorbonne University (Paris-France) in 2019 working on global wetland patterns and their modelled impact on climate at regional scales. I did my Master's in Environmental Sciences at Ecole Polytechnique, after receiving my BSc in Engineering from Sharif UT.";
  const asad = "I completed a PhD in Biostatistics from the University of Washington in Seattle. My graduate work focused on statistical learning methods for high-dimensional data problems. After a postdoc at McGill, it is my pleasure to join the HG-WM research group at UBC. My research interests include statistical modelling of geospatial data, specifically, I am interested in developing machine learning tools for the complex data structures in environmental sciences and hydrology. I am currently working on predicting tree mortality using tools from functional data analysis (FDA). With modern data collection, there is a vast amount of environmental and satellite data across Canada and over a long period of time. My project focuses on building a statistical model which can incorporate the spatial and temporal dependence within observational units. Outside of work, I enjoy hiking, reading fantasy and exploring new places within and close to the city.";
  const joe = "I am a graduate student in the department of Earth, Ocean and Atmospheric Sciences and the Institute of Applied Mathematics at UBC. Previously, I graduated with distinction from UBC with a BSc in Mathematical Sciences in 2020. I am interested in how stochastics, optimization, and machine learning can be applied to evaluating the risks of climate change-driven floods and droughts. In my free time, I enjoy listening to the blues as well as science/comedy podcasts and playing ping pong/tennis.";
  const hongyi = "I am a MASc student in Geological Engineering working in Dr. Ameli’s research group. Previously I completed my undergraduate education at the University of California, Santa Cruz. My research is focused on how climate and catchment processes affect catchment storage using statistical models based on data acquired in gauged basins across North America. My research interests include catchment hydrology, predictive hydrology in ungauged basins, and hydrologic data analysis.";
  const hamed = "I am a MASc student in Geological Engineering working in Dr. Ali Ameli’s research group. I have graduated with a BSc degree in Civil and Environmental Engineering from the Sharif University of Technology. Also, I am interested in the applications of neural networks and machine learning algorithms in hydrological modelling. In a concrete sense, my research goal is to provide drought and climate change susceptibility indices for North America by processing climate data, interpolating climate data of gauged basins to ungauged basins, and using machine learning algorithms to extract novel watershed insights. I chose to study at UBC because it is one of the world leaders in the Earth Sciences. In my free time, I enjoy playing volleyball and going mountain climbing.";
  const mahbod = "I am a MASc student in Geological Engineering. My research, supervised by Dr. Ali Ameli, focuses on the impact of climate and land use change on hydrologic flow path. I am currently developing process-based models to investigate how landscape and climate properties affect the hydrological functioning of watersheds. Before joining HG-WM, I graduated with a BSc degree in Civil Engineering from Sharif University of Technology. In my free time, I enjoy swimming, hiking, and playing piano";
  const majid = "I completed my MSc at the Sharif University of Technology, Tehran, Iran. My MSc research involved processing satellite images to predict surface water quality using Machine Learning. In addition to my MSc research, I worked as a researcher at Sharif University of Technology's Remote Sensing Research Center, where I used machine learning and satellite imagery to analyze land cover changes, aerosol pollution, and agricultural irrigated water. I received Sharif University's award for the best master thesis of the year, 2021. In my Ph.D. research, I apply physics-informed Machine Learning to examine how the changing climate and hydrologic cycle influence the frequency and severity of hydrologic droughts and wildfires in Western Canada. I love music and I enjoy learning musical instruments. I love to travel and participate in outdoor activities.";
  const blaise = "I am a 3rd-year Environmental Science student, specializing in Land, Air, and Water systems. In my time with HG-WM, I hope to learn more about the effects of climate change on watersheds and the eventual impacts those effects may have on water quality and water availability. Currently, I am helping to link GIS data to small-scale watershed units to help policymakers make data-informed land-use decisions. I came to UBC because I wanted to study the environment in a place surrounded by nature. In my spare time, I enjoy reading and board games.";
  const ray = "missing decsription";
  const sara = "missing description";
  const andrew = "missing description";
  const kylee = "I am a fourth-year student studying Geographical Sciences at UBC. Coming from Hawaii, I am particularly interested in the effects of watershed-level land cover changes have on coastal landscapes. Land-cover changes can cause impacts on the growth of invasive algae species through watershed sediment runoff. I am also interested in seeing how remote sensing technologies can contribute to watershed research. Over the years, I have worked with GIS for several conservation efforts including monitoring invasive miconia plants with the Oahu Invasive Species Committee, monitoring and managing invasive algae in Maunalua Bay with Mālama Maunalua, and with mapping plant species in Vancouver's Pacific Spirit Park. I have been with the HG-WM lab since January 2020 working on calculating watershed-level hydrologic and land cover metrics across Canada and the US.";
  const oliver = 'I completed my Combined Computer Science and Statistics BSc degree at UBC in 2021. My undergraduate studies had a focus on data analysis and machine learning. Working on modelling the effect of rainfall on watersheds, I hope to utilize my acquired skills to make a contribution to the project and learn more about hydrology from my colleagues. In my free time, I like to snowboard, run, and play soccer.As of September 2022, Oliver has started Master of Data Science program at the Columbia (USA) University. Oliver is still working with HG-WM lab.';
  const emily = "I am a fifth-year Geography student at UBC who is interested in climate change science and environmental justice. I decided to specialize in Geographic Information Science (GIS) to better understand and address the complex spatial dimensions of climate change in a holistic and scientific manner. My goal was to utilize GIS as a tool to inform effective climate mitigation and adaptation efforts. I worked on flow path analyses within the Liard River watershed across the Yukon Territory and in British Columbia. This work modeled the flow of water across the Liard watershed and links different types of watershed physical properties (e.g. soil permeability and porosity) to each given flow path to facilitate hydrological analyses. The purpose of my work was to support the identification of vulnerable watersheds to climate and land-use changes in Canada that require immediate attention. In my free time, I love to cook, hike, and enjoy the natural beauty of Vancouver! As of Fall 2020, Emily has moved on to work as a Impact Assessment Officer at the Impact Assessment Agency of Canada. We wish her the best of luck in her new role!";
  const elana = "I am a fourth-year studying Geographical Sciences at UBC. Coming from Hawaii, I am particularly interested in the effects of watershed-level land cover changes have on coastal landscapes. Land-cover changes can cause impacts on the growth of invasive algae species through watershed sediment runoff. I am also interested in seeing how remote sensing technologies can contribute to watershed research. Over the years, I have worked with GIS for several conservation efforts including monitoring invasive miconia plants with the Oahu Invasive Species Committee, monitoring and managing invasive algae in Maunalua Bay with Mālama Maunalua, and with mapping plant species in Vancouver's Pacific Spirit Park. I have been with the HG-WM lab since January 202";
  const edward ='I have completed a Environmental and Computer Sciences degree (BSc) at UBC. My work in the lab spans administrative support and data analytics duties. I chose UBC because of its diverse academic programs and beautiful campus! Administratively, I work to provide technical assistance and help coordinate work in the lab. On an analytical level, I am working on watershed analyses across the continental United States and Canada through estimating watershed flow signatures and processing geospatial data. My research interests include understanding the role that climate change will have on watersheds, and on how societies can adapt to our changing world.';
  const lorepsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Basically the reserch group text.";

  const teamData = await getProfile();

  const filteredProfileData = (classification) => {
    return teamData.filter((profileItem) => profileItem.profileType === classification);
  };

  return (
    <section className="w-full flex flex-col items-center md:items-start mb-20">
         <div className="relative w-full pb-96">
        <Image
          src="/assets/TeamImage.png"
          alt="TeamPageImage"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="h-600"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-bold text-5xl mb-5 text-white">
            Meet the Team
          </p>
        </div>
      </div>
      <div className="mx-20">
        <p className="mt-36 font-bold text-3xl text-primary-darkgreen">Lab Management</p>
        <hr className="mt-2 w-full h-0.5 bg-primary-darkblue" />
        {filteredProfileData('director').map((profileItem) => (
          <TeamCard name={profileItem.name} imagesrc={profileItem.image} bio={profileItem.description} position={profileItem.position}/>
          
        ))}
        <p className="mt-24 font-bold text-3xl text-primary-darkgreen">Affiliated Researchers</p>
        <hr className="mt-2 w-full h-0.5 bg-primary-darkblue" />
        {filteredProfileData('affiliated').map((profileItem) => (
          <TeamCard link={profileItem.link} name={profileItem.name} imagesrc={profileItem.image} bio={profileItem.description} position={profileItem.position}/>
          
        ))}
        <p className="mt-24 font-bold text-3xl text-primary-darkgreen">Graduate Students</p>
        <hr className="mt-2 w-full h-0.5 bg-primary-darkblue" />
        {filteredProfileData('graduate').map((profileItem) => (
          <TeamCard link={profileItem.linkedIn} name={profileItem.name} imagesrc={profileItem.image} bio={profileItem.description} position={profileItem.position}/>
          
        ))}
        <p className="mt-24 font-bold text-3xl text-primary-darkgreen">Undergraduate Students</p>
        <hr className="mt-2 w-full h-0.5 bg-primary-darkblue" />
        {filteredProfileData('undergraduate').map((profileItem) => (
          <TeamCard link={profileItem.link} name={profileItem.name} imagesrc={profileItem.image} bio={profileItem.description} position={profileItem.position}/>
          
        ))}
        <p className="mt-24 font-bold text-3xl text-primary-darkgreen">Lab Alumni</p>
        <hr className="mt-2 w-full h-0.5 bg-primary-darkblue" />
        {filteredProfileData('alumni').map((profileItem) => (
          <TeamCard link={profileItem.link} name={profileItem.name} imagesrc={profileItem.image} bio={profileItem.description} position={profileItem.position}/>
          
        ))}
        </div>

    </section>
  )
}

