import React from "react";
import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import { addToDB } from "../utils/Loaders/fakeDB";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

const JobDetails = () => {
  const featuredJob = useLoaderData();
  const { id } = useParams();
  const job = featuredJob.find((job) => job.id === id);

  const applyNowBtn = (id) => {
    addToDB(id);
    Swal.fire("Good job!", "You Applied For This Job!", "success");
  };
  const {
    job_title,
    company_name,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#1A1919] mb-3 text-center mt-16 mb-20">
        Job Details
      </h1>
      <div className="md:grid grid-cols-12 gap-6 ">
        <div className="col-span-8">
          <h2 className="font-bold mt-4">
            Job Description:{" "}
            <span className="text-[#757575] text-base font-normal">
              {job_description}
            </span>
          </h2>
          <h2 className="font-bold mt-4">
            Job Responsibility:{" "}
            <span className="text-[#757575] text-base font-normal">
              {job_responsibility}
            </span>
          </h2>
          <h2 className="font-bold mt-4">
            Educational Requirements:{" "}
            <span className="text-[#757575] text-base font-normal block mt-2">
              {educational_requirements}
            </span>
          </h2>
          <h2 className="font-bold mt-4">
            Experiences:{" "}
            <span className="text-[#757575] text-base font-normal block mt-2">
              {experiences}
            </span>
          </h2>
        </div>
        <div className="col-span-4 ">
          <div className="bg-[#7E90FE1A] p-4 md:p-8 rounded-md mt-8">
            <h2 className="font-bold text-xl text-[#1A1919] mb-8">
              Job Details
            </h2>
            <p className="job-details-secondary">
              <img
                className="inline-block pr-2"
                src="/src/assets/Icons/Frame.png"
                alt=""
              />{" "}
              Salary: <span className="job-details-tertiary"> {salary}</span>
            </p>
            <p className="job-details-secondary">
              <img
                className="inline-block pr-2"
                src="/src/assets/Icons/Frame-1.png"
                alt=""
              />
              Job Title:{" "}
              <span className="job-details-tertiary">{job_title}</span>
            </p>
            <h2 className="font-bold text-xl text-[#1A1919] mt-8 mb-6">
              Contact Information
            </h2>
            <hr className="bg-[#7E90FE] border w-[80%] mb-6" />
            <p className="job-details-secondary">
              <img
                className="inline-block pr-2"
                src="/src/assets/Icons/Frame-2.png"
                alt=""
              />
              Phone:{" "}
              <span className="job-details-tertiary">
                {contact_information.phone}
              </span>
            </p>
            <p className="job-details-secondary">
              <img
                className="inline-block pr-2"
                src="/src/assets/Icons/Frame-3.png"
                alt=""
              />
              Email:{" "}
              <span className="job-details-tertiary">
                {contact_information.email}
              </span>
            </p>
            <p className="job-details-secondary">
              <img
                className="inline-block pr-2"
                src="/src/assets/Icons/Frame-4.png"
                alt=""
              />
              Address: <span className="job-details-tertiary">{location}</span>
            </p>
          </div>
          <button
            onClick={() => applyNowBtn(id)}
            className="my-btn w-full mt-6"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
