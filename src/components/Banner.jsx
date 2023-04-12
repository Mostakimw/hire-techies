import React from "react";

const Banner = () => {
  return (
    <div className="mt-16 md:flex justify-between items-center gap-14">
      <div className="md:w-[570px">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          One Step <span className="md:block">Closer To Your</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#7E90FE] to-[#9873FF]">
            Dream Job
          </span>
        </h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="my-btn mt-6">Get Started</button>
      </div>
      <div className="max-sm:mt-8">
        <img
          className="w-[800px]"
          src="/src/assets/all/banner.png"
          alt="Man image for Banner"
        />
      </div>
    </div>
  );
};

export default Banner;
