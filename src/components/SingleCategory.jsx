import React from "react";

const SingleCategory = ({ category }) => {
  const { logo, company_name, jobs_available } = category;
  return (
    <>
      <div className="col-span-3 p-6 bg-gradient-to-br from-[#7E90FE0D] to-[#9873FF0D] border-2 border-r-emerald-50 rounded-md">
        <div className="p-4 bg-[#7E90FE1A] rounded-md w-[80px]">
          <img className="w-10 h-10 " src={logo} />
        </div>
        <div>
          <h2 className="mt-4 mb-2 text-xl font-bold">Marketing</h2>
          <p>Jobs Available</p>
        </div>
      </div>
    </>
  );
};

export default SingleCategory;
