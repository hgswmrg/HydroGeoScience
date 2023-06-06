import React from 'react';
import Link from 'next/link';
import { getJobs } from '@backend/sanity-utils';

export default async function Jobs () {
  const jobsData = await getJobs();
  const textforgroup = "UBC's HydroGeoscience for Watershed Management (HG-WM) research group combines different environmental and statistical science disciplines in order to scientifically manage the environmental impacts of climate and land-use changes. In particular, HG-WM (1) advances the knowledge on materiel (water & solute) transport below and above the land surface, to (2) inform science-based watershed management strategies and land-use planing, and to (3) design engineered groundwater and surface water protection and purification systems. For the details of our current projects, please see the research section. The research group members receive full support from HG-WM director to obtain high-level professional development and to achieve their career goals and dreams. Our group members have already received prestigious scholarships and fellowships. In addition, our group alumnus have already landed high-level jobs in environmental and statistical agencies, or continued their graduate studies in top-ranked Universities.";


  const filteredJobsData = (classification) => {
    return jobsData.filter((jobsItem) => jobsItem.profileType === classification);
  };

  return (
    <section className="w-full flex flex-col items-start px-5 md:px-20 mb-20">
      <div className="mt-20 md:mt-32 w-full h-full flex flex-col md:p-5">
        <p className="font-bold text-2xl md:text-5xl text-primary-darkgreen">
          Opportunities at our Lab
        </p>
        <p className="font-normal text-sm md:text-base mt-5 text-black">
          {textforgroup}
        </p>
      </div>
      <div className="md:p-5 w-full mt-10 md:mt-0">
        <p className="text-xl md:text-3xl font-semibold text-primary-darkgreen">
          Postdoctoral Opportunities
        </p>
        <hr className="mt-2 w-full h-0.5 bg-primary-darkblue" />
      </div>
      <div className="flex mt-5 w-full flex-col items-start">
        {filteredJobsData('postdoctor').map((jobsItem) => (
          <div key={jobsItem._id} className="jobs-card bg-primary-lightgreen w-full md:m-4 mb-4 p-5">
            <h2 className="text-xl font-bold">{jobsItem.title}</h2>
            <p className="text-base">{jobsItem.description}</p>
            <Link href={jobsItem.link} className="text-primary-darkgreen">
              Read More
            </Link>
          </div>
        ))}
      </div>
      <div className="md:p-5 w-full">
        <p className="text-xl md:text-3xl  font-semibold text-primary-darkgreen">
          Graduate Opportunities
        </p>
        <hr className="mt-2 w-full h-0.5 bg-primary-darkblue" />
      </div>
      <div className="flex mt-5 w-full flex-col items-start">
        {filteredJobsData('graduate').map((jobsItem) => (
          <div key={jobsItem._id} className="jobs-card bg-primary-lightgreen w-full md:m-4 mb-4 p-5">
            <h2 className="text-xl font-bold">{jobsItem.title}</h2>
            <p className="text-base">{jobsItem.description}</p>
            <Link href={jobsItem.link} className="text-primary-darkgreen">
              Read More
            </Link>
          </div>
        ))}
      </div>
      <div className="md:p-5 w-full">
        <p className="text-xl md:text-3xl font-semibold text-primary-darkgreen">
          Undergraduate Opportunities
        </p>
        <hr className="mt-2 w-full h-0.5 bg-primary-darkblue" />
      </div>
      <div className="flex mt-5 w-full flex-col items-start">
        {filteredJobsData('undergraduate').map((jobsItem) => (
          <div key={jobsItem._id} className="jobs-card bg-primary-lightgreen w-full md:m-4 mb-4 p-5">
            <h2 className="text-xl font-bold">{jobsItem.title}</h2>
            <p className="text-base">{jobsItem.description}</p>
            <Link href={jobsItem.link} className="text-primary-darkgreen">
              Read More
            </Link>
          </div>
        ))}
      </div>
      <div className="md:p-5 w-full">
        <p className="text-xl md:text-3xl font-semibold text-primary-darkgreen">
          Research Assistants
        </p>
        <hr className="mt-2 w-full h-0.5 bg-primary-darkblue" />
      </div>
      <div className="flex mt-5 w-full flex-col items-start">
        {filteredJobsData('research-assistant').map((jobsItem) => (
          <div key={jobsItem._id} className="jobs-card bg-primary-lightgreen w-full md:m-4 mb-4 p-5">
            <h2 className="text-xl font-bold">{jobsItem.title}</h2>
            <p className="text-base">{jobsItem.description}</p>
            <Link href={jobsItem.link} className="text-primary-darkgreen">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};


