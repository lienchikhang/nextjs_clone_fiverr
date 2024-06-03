'use client';
import React, { useEffect } from "react";
import "../styles/jobTypes.scss";
import JobTypeItem from "./JobTypeItem";
import http from "../config/axios.config";
import useSWR from "swr";

// const fetcher = (path: string) => http.get(path).then((res) => [console.log({ res })]);
const fetcher = (path: string) => fetch(path)
  .then((res) => res.json())


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

  useEffect(() => {
    http.get('/api/job-type/get-all').then((res) => console.log({ res }))
  }, [])

  const { data, error, isLoading } = useSWR('/api/job-type/get-all', fetcher);

  console.log({ data });

  if (error) {
    console.log('error::', error);

  }


  return (
    <section className="jobTypes">
      <h2>You need it, we've got it</h2>
      <div className="jobTypes__list">
        {data && jobTypesList.map((jobType, idx) => {
          return (
            <JobTypeItem
              className="jobTypes__item"
              key={idx}
              job_name={jobType.job_name}
              job_image={jobType.job_image}
            />
          );
        })}
        {error && <h1>Error</h1>}
      </div>
    </section>
  );
};

export default JobTypes;
