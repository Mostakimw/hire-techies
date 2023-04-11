import React from "react";

const SingleCategory = ({ category }) => {
  const { logo, job_category, jobs_available } = category;
  return (
    <>
      <div className="col-span-3 p-6 bg-gradient-to-br from-[#7E90FE0D] to-[#9873FF0D] border-2 border-r-emerald-50 rounded-md max-sm:mb-8 max-sm:text-center">
        <div className="p-4 bg-[#7E90FE1A] rounded-md w-[70px] mx-auto">
          <img className="w-10 h-10" src={logo} />
        </div>
        <div className="text-center">
          <h2 className="mt-4 mb-2 text-xl font-bold">{job_category}</h2>
          <p>
            <span className="text-red-400 font-semibold">{jobs_available}</span>{" "}
            Jobs Available
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleCategory;
