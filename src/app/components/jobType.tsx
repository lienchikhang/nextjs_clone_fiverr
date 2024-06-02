import React from "react";
import "../styles/jobTypes.scss";
import JobTypeItem from "./JobTypeItem";

const JobTypes = () => {
  const jobTypesList = [
    {
      job_image: "/images/p3.png",
      job_name: "Graphics & Design",
    },
    {
      job_image: "/images/p3.png",
      job_name: "Graphics & Design",
    },
    {
      job_image: "/images/p3.png",
      job_name: "Graphics & Design",
    },
    {
      job_image: "/images/p3.png",
      job_name: "Graphics & Design",
    },
    {
      job_image: "/images/p3.png",
      job_name: "Graphics & Design",
    },
    {
      job_image: "/images/p3.png",
      job_name: "Graphics & Design",
    },
    {
      job_image: "/images/p3.png",
      job_name: "Graphics & Design",
    },
  ];

  return (
    <section className="jobTypes">
      <h2>You need it, we've got it</h2>
      <div className="jobTypes__list">
        {jobTypesList.map((jobType, idx) => {
          return (
            <JobTypeItem
              className="jobTypes__item"
              key={idx}
              job_name={jobType.job_name}
              job_image={jobType.job_image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default JobTypes;
