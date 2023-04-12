import React from "react";
import { Link } from "react-router-dom";

const FeaturedJob = ({ singleJob }) => {
  const {
    id,
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
      <div className="col-span-6 border-2 rounded-md p-10 mb-8">
        <img className="w-28 mb-4" src={company_logo} alt="" />
        <h2 className="text-2xl font-bold text-gray-900">{job_title}</h2>
        <p className="text-xl text-[#757575] font-semibold mt-2">
          {company_name}
        </p>
        <div className="flex gap-4 mt-4">
          <p className="job-type">{remote_or_onsite}</p>
          <p className="job-type">{fulltime_or_parttime}</p>
        </div>
        <div className="md:flex gap-4 text-[#757575] font-semibold my-4">
          <p>
            <img
              className="inline-block mr-1"
              src="https://i.ibb.co/qxsm5zb/Frame-4.png"
              alt=""
            />
            Location: {location}
          </p>
          <p>
            {" "}
            <img
              className="inline-block mr-1"
              src="https://i.ibb.co/Qk1FfxF/Frame.png"
              alt=""
            />
            Salary: {salary}
          </p>
        </div>
        <Link to={`/job-details/${id}`}>
          <button className="view-btn mt-2 py-2">View Details</button>
        </Link>
      </div>
    </>
  );
};

export default FeaturedJob;
