import React from 'react';
import Link from 'next/link';
import { getJobs } from '@backend/sanity-utils';
import JobsCard from '@components/JobsCard';

export default async function Jobs () {
  const jobsData = await getJobs();
  const textforgroup = "The laboratory members advance the knowledge on material (water & solute) transport in deep and shallow earth’s compartments to inform science-based watershed management strategies. They also develop new physics-informed statistical machine-learning models to infer relevant patterns and processes from big data.  The research group members receive full support to obtain high-level professional development and to achieve their career goals and dreams. Our group members have already received prestigious scholarships and fellowships. In addition, our group alumni have already landed high-level jobs in environmental and statistical agencies or continued their graduate studies in top-ranked Universities.";
  const filteredJobsData = (classification) => {
    return jobsData.filter((jobsItem) => jobsItem.profileType === classification);
  };

  return (
    <section className="w-full h-screen flex flex-col items-start px-5 md:px-20 mb-40">
      <div className="mt-20 md:mt-32 w-full flex flex-col md:p-5">
        <p className="font-bold text-2xl md:text-5xl text-primary-darkgreen 2xl:mb-5">
          Opportunities at our Laboratory
        </p>
        <p className="font-normal text-sm md:text-base mt-5 text-black 2xl:text-2xl 2xl:mb-10">
          {textforgroup}
        </p>
      </div>
      <div className="md:p-5 w-full mt-10 md:mt-0">
        <p className="text-xl md:text-3xl 2xl:text-4xl font-semibold text-primary-darkgreen">
          Postdoctoral Opportunities
        </p>
        <hr className="mt-2 w-full h-0.5 bg-primary-darkblue" />
      </div>
      <div className="flex mt-5 w-full flex-col items-start">
        {filteredJobsData('postdoctor').map((jobsItem) => (
          <JobsCard jobsItem={jobsItem}/>
        ))}
      </div>
      <div className="md:p-5 w-full">
        <p className="text-xl md:text-3xl 2xl:text-4xl font-semibold text-primary-darkgreen">
          Graduate Opportunities
        </p>
        <hr className="mt-2 w-full h-0.5 bg-primary-darkblue" />
      </div>
      <div className="flex mt-5 w-full flex-col items-start">
        {filteredJobsData('graduate').map((jobsItem) => (
          <JobsCard jobsItem={jobsItem}/>
        ))}
      </div>
      <div className="md:p-5 w-full">
        <p className="text-xl md:text-3xl 2xl:text-4xl font-semibold text-primary-darkgreen">
          Undergraduate Opportunities
        </p>
        <hr className="mt-2 w-full h-0.5 bg-primary-darkblue" />
      </div>
      <div className="flex mt-5 w-full flex-col items-start">
        {filteredJobsData('undergraduate').map((jobsItem) => (
          <JobsCard jobsItem={jobsItem}/>
        ))}
      </div>
      <div className="md:p-5 w-full">
        <p className="text-xl md:text-3xl 2xl:text-4xl font-semibold text-primary-darkgreen">
          Research Assistants
        </p>
        <hr className="mt-2 w-full h-0.5 bg-primary-darkblue" />
      </div>
      <div className="flex mt-5 w-full flex-col items-start">
        {filteredJobsData('research-assistant').map((jobsItem) => (
          <JobsCard jobsItem={jobsItem}/>
        ))}
      </div>
    </section>
  );
};


