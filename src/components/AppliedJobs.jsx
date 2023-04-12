import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../utils/Loaders/fakeDB";
import ApplyJob from "./ApplyJob";

const AppliedJobs = () => {
  const { categories, featuredJob } = useLoaderData();

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
  console.log(data);
  const storedData = getStoredData();
  const [filterBy, setFilterBy] = useState(false);
  const [filteredJobs, setFilterJobs] = useState([]);
  const [showFilterJob, setShowFilterJob] = useState(false);
  let newJobsData = [];
  useEffect(() => {
    for (const id in storedData) {
      const filteredJobsData = featuredJob.filter(
        (singleJob) => singleJob.id === id
      );
      newJobsData.push(...filteredJobsData);
    }
    setAppliedData(newJobsData);
  }, []);
  const handleFilterBy = (remoteOrOnsite) => {
    setFilterBy(true);
    if (remoteOrOnsite === "Remote") {
      const remoteJobs = appliedData.filter(
        (jobData) => jobData.remote_or_onsite === remoteOrOnsite
      );
      setFilterJobs(remoteJobs);
      setShowFilterJob(true);
      setFilterBy(false);
    } else if (remoteOrOnsite === "Onsite") {
      const remoteJobs = appliedData.filter(
        (jobData) => jobData.remote_or_onsite === remoteOrOnsite
      );
      setFilterJobs(remoteJobs);
      setShowFilterJob(true);
      setFilterBy(false);
    } else if (remoteOrOnsite === "All") {
      setShowFilterJob(false);
      setFilterBy(false);
    }
  };

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
  }, [featuredJob]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#1A1919] text-center mt-16 mb-8 md:mb-20">
        Applied Job
      </h1>
      <div className="my-6 flex justify-end">
        <label>
          {filterBy && (
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="my-btn m-4">
                Filter By:
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-full"
              >
                <li>
                  <a
                    onClick={() => {
                      handleFilterBy("All");
                    }}
                  >
                    All
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      handleFilterBy("Onsite");
                    }}
                  >
                    Onsite
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      handleFilterBy("Remote");
                    }}
                  >
                    Remote
                  </a>
                </li>
              </ul>
            </div>
          )}
        </label>
      </div>

      <div>
        {data.map((singleJob) => (
          <ApplyJob key={singleJob.id} appliedJob={singleJob}></ApplyJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
