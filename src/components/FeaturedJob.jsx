import React from "react";

const FeaturedJob = ({ singleJob }) => {
  const {
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    location,
    salary,
  } = singleJob;

  return (
    <>
      <div className="col-span-6 border-2 rounded-md  p-10">
        <img className="w-28 mb-4" src={company_logo} alt="" />
        <h2 className="text-2xl font-bold text-gray-900">{job_title}</h2>
        <p className="text-xl text-[#757575] font-semibold mt-2">
          {company_name}
        </p>
        <div className="flex gap-4 mt-4">
          <p className="job-type">{remote_or_onsite}</p>
          <p className="job-type">{fulltime_or_parttime}</p>
        </div>
        <div className="flex gap-4 text-[#757575] font-semibold my-4">
          <p>Location: {location}</p>
          <p>Salary: {salary}</p>
        </div>
        <button className="my-btn mt-2">View Details</button>
      </div>
    </>
  );
};

export default FeaturedJob;
