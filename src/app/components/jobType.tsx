import React from "react";
import "../styles/jobTypes.scss";

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
          return <a className="jobTypes__item">test</a>;
        })}
      </div>
    </section>
  );
};

export default JobTypes;
