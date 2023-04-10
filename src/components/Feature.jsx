import React from "react";

const Feature = () => {
  return (
    <div className="mt-16 mb-16">
      <h1>this is feature section</h1>
      <div className="mt-4">
        <img
          className="w-28"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
          alt=""
        />
        <h2 className="text-2xl font-bold text-gray-900">Technical team</h2>
        <p className="text-xl text-[#757575] font-semibold">Google</p>
        <div className="flex gap-4 mt-3">
          <p className="job-type">Onsite</p>
          <p className="job-type">Full Time</p>
        </div>
        <div className="flex gap-4 text-xl text-[#757575] font-semibold my-3">
          <p>Dhaka</p>
          <p>Salary</p>
        </div>
        <button className="my-btn">View Details</button>
      </div>
    </div>
  );
};

export default Feature;
