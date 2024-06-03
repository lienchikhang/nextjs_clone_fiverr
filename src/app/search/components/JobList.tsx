'use client';
import React, { useEffect, useState } from "react";
import JobItem from "./JobItem";
import { Pagination, Stack } from "@mui/material";
import http from "@/app/config/axios.config";
import { usePathname, useSearchParams } from "next/navigation";

const jobss = [
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

  const [page, setPage] = useState(1);
  const [jobs, setJobs] = useState<any[] | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    http
      .get(`/job/get-all?name=${searchParams.get('name')}`)
      .then((res) => [
        console.log(res.data),
        setJobs(res.data.content.data),
        setPage(res.data.content.page)
      ])
  }, [])

  return (
    <section className="jobList__wrapper">
      <div className="jobList">
        {jobs && jobs.map((job, idx) => {
          return <JobItem data={job} key={idx} />;
        })}
      </div>
      <div className="jobList__pages">
        <Stack spacing={2}>
          <Pagination count={page} variant="text" size="large" />
        </Stack>
      </div>
    </section>
  );
};

export default JobList;
