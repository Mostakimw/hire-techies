import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../utils/Loaders/fakeDB";
import ApplyJob from "./ApplyJob";

const AppliedJobs = () => {
  const { categories, featuredJob } = useLoaderData();
  console.log(featuredJob);

  const [data, setData] = useState([]);
  const [appliedData, setAppliedData] = useState([]);
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    location,
    salary,
  } = data;
  const storedData = getStoredData();
  console.log(storedData);

  // finding applied job data from main data
  useEffect(() => {
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
    setAppliedData(savedJob);
  }, [featuredJob]);

  // filter btn handler
  const handlerFilterBy = (jobStatus) => {
    if (jobStatus === "Onsite") {
      const onsiteJobs = data.filter(
        (jobs) => jobs.remote_or_onsite === "Onsite"
      );
      setAppliedData(onsiteJobs);
    } else if (jobStatus === "Remote") {
      const remoteJobs = data.filter(
        (jobs) => jobs.remote_or_onsite === "Remote"
      );
      setAppliedData(remoteJobs);
    } else {
      setAppliedData(data);
    }
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#1A1919] text-center mt-16 mb-8 md:mb-20">
        Applied Job
      </h1>
      <div className="mb-5 flex justify-end gap-5">
        <button
          onClick={() => {
            handlerFilterBy("Onsite");
          }}
          className="border-2 border-[#7E90FE] py-2 px-5 rounded-md font-bold text-gray-800 bg-[#9873FF1A]"
        >
          Onsite
        </button>
        <button
          onClick={() => {
            handlerFilterBy("Remote");
          }}
          className="border-2 border-[#7E90FE] py-2 px-5 rounded-md font-bold text-gray-800 bg-[#9873FF1A]"
        >
          Remote
        </button>
      </div>

      <div>
        {appliedData.map((singleJob) => (
          <ApplyJob key={singleJob.id} appliedJob={singleJob}></ApplyJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
