import React, { useState } from "react";
import FeaturedJob from "./FeaturedJob";

const Feature = ({ featuredJob }) => {
  const [showAllJobs, setShowAllJobs] = useState(false);

  const handleShowAllJob = () => {
    setShowAllJobs(!showAllJobs);
  };
  return (
    <div className="mt-16 mb-16">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Featured Job</h1>
        <p className="text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="md:grid grid-cols-12 gap-8 mt-16">
        {featuredJob.slice(0, 4).map((singleJob) => (
          <FeaturedJob key={singleJob.id} singleJob={singleJob}></FeaturedJob>
        ))}
        {showAllJobs &&
          featuredJob
            .slice(4)
            .map((singleJob) => (
              <FeaturedJob
                key={singleJob.id}
                singleJob={singleJob}
              ></FeaturedJob>
            ))}
      </div>
      <button onClick={handleShowAllJob} className="my-btn mt-12 mx-auto block">
        {showAllJobs ? "View Less" : "Show All Jobs"}
      </button>
    </div>
  );
};

export default Feature;
