import React from 'react';
import Link from "next/link"

const JobsCard = ({jobsItem}) => {
  return (
    <div key={jobsItem._id} className="jobs-card bg-primary-lightgreen w-full md:m-4 mb-4 p-5">
        <h2 className="text-xl 2xl:text-2xl font-bold">{jobsItem.title}</h2>
        <p className="text-base 2xl:text-lg ">{jobsItem.description}</p>
        <Link href={jobsItem.link} className="text-primary-darkgreen 2xl:text-xl underline mt-2">
        Read More
        </Link>
  </div>
  )
}

export default JobsCard