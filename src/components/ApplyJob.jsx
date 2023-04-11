import React from "react";
import { Link } from "react-router-dom";

const ApplyJob = ({ appliedJob }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    location,
    salary,
  } = appliedJob;
  return (
    <div className="flex items-center gap-8 mb-6 border-2 rounded-lg p-10">
      <div className="px-12 py-24 bg-[#F4F4F4] rounded-lg inline-block">
        <img className="w-28 mb-4" src={company_logo} alt="" />
      </div>
      <div className="flex-grow">
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
      </div>
      <Link className="justify-end" to={`/job-details/${id}`}>
        <button className="my-btn mt-2 ">View Details</button>
      </Link>
    </div>
  );
};

export default ApplyJob;
