'use client';
import React, { useEffect } from "react";
import "../styles/jobTypes.scss";
import JobTypeItem from "./JobTypeItem";
import useSWR from "swr";
import { CircularProgress, Skeleton, Stack } from "@mui/material";

const fetcher = (path: string) => fetch(path)
  .then((res) => res.json())

interface IJobType {
  id: number
  job_type_name: string
}


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


  const { data, error, isLoading } = useSWR('/api/job-type/get-all', fetcher);

  console.log({ data });


  if (!data) return <section className="jobTypes">
    <h2>You need it, we've got it</h2>
    <div className="jobTypes__list">
      {jobTypesList.map((item, idx) => {
        return <Skeleton className="jobTypes__item" variant="rectangular" width={210} height={118} />
      })}
    </div>
  </section>;


  return (
    <section className="jobTypes">
      <h2>You need it, we've got it</h2>
      <div className="jobTypes__list">
        {data && data.content.data.map((jobType: IJobType, idx: number) => {
          return (
            <JobTypeItem
              className="jobTypes__item"
              key={idx}
              job_name={jobType.job_type_name}
              job_image={jobTypesList[idx].job_image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default JobTypes;
