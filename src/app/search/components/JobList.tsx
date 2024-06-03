import React from "react";
import JobItem from "./JobItem";
import { Pagination, Stack } from "@mui/material";

const jobs = [
  {
    image: "/images/l1.png",
    name: "I will write cpp",
    star: 4.8,
    price: 25,
  },
  {
    image: "/images/l1.png",
    name: "I will write cpp",
    star: 4.8,
    price: 25,
  },
  {
    image: "/images/l1.png",
    name: "I will write cpp",
    star: 4.8,
    price: 25,
  },
  {
    image: "/images/l1.png",
    name: "I will write cpp",
    star: 4.8,
    price: 25,
  },
  {
    image: "/images/l1.png",
    name: "I will write cpp",
    star: 4.8,
    price: 25,
  },
];

const JobList = () => {
  return (
    <section className="jobList__wrapper">
      <div className="jobList">
        {jobs.map((job, idx) => {
          return <JobItem data={job} key={idx} />;
        })}
      </div>
      <div className="jobList__pages">
        <Stack spacing={2}>
          <Pagination count={10} variant="text" size="large" />
        </Stack>
      </div>
    </section>
  );
};

export default JobList;
