import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../utils/Loaders/fakeDB";
import ApplyJob from "./ApplyJob";

const AppliedJobs = () => {
  const { categories, featuredJob } = useLoaderData();
  const [data, setData] = useState([]);
  useEffect(() => {
    const storedData = getStoredData();
    let savedJob = [];
    // get id of the applied job
    for (const id in storedData) {
      // get specific apply job data from main data
      const appliedJob = featuredJob.find((job) => job.id === id);
      if (appliedJob) {
        const isApplied = true;
        appliedJob.isApplied = isApplied;
        savedJob.push(appliedJob);
      }
    }
    setData(savedJob);
  }, [featuredJob]);
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#1A1919] mb-3 text-center mt-16 mb-20">
        Applied Job
      </h1>
      <div>
        {data.map((singleJob) => (
          <ApplyJob key={singleJob.id} appliedJob={singleJob}></ApplyJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
