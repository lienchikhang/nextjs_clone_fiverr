'use client';
import React, { useEffect, useState } from "react";
import JobItem from "./JobItem";
import { CircularProgress, Pagination, Stack } from "@mui/material";
import http from "@/app/config/axios.config";
import { usePathname, useSearchParams } from "next/navigation";
import useSWR from "swr";

const fetcher = (path: string) => fetch(path)
  .then((res) => res.json())

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

export interface IJob {
  image: null | string;
  job_id: number;
  job_short_desc: string;
  price: number
  rate: number;
  star: number
}

const JobList = () => {

  const [page, setPage] = useState(1);
  const [jobs, setJobs] = useState<any[] | null>(null);
  const searchParams = useSearchParams();

  // useEffect(() => {
  //   http
  //     .get(`/job/get-all?name=${searchParams.get('name')}`)
  //     .then((res) => [
  //       console.log(res.data),
  //       setJobs(res.data.content.data),
  //       setPage(res.data.content.page)
  //     ])
  // }, []);

  const { data, error, isLoading } = useSWR(`/api/job/get-all?name=${searchParams.get('name')}`, fetcher, {
    revalidateOnReconnect: true,
  });

  if (isLoading) {
    return <section className="jobList__wrapper">
      <div className="jobList">
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
          <CircularProgress color="success" />
        </Stack>
      </div>
      <div className="jobList__pages">
        <Stack spacing={2}>
          <Pagination count={data && data?.content?.page} variant="text" size="large" />
        </Stack>
      </div>
    </section>
  }

  if (error) {
    return <section className="jobList__wrapper">
      <div className="jobList">
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
          <CircularProgress color="success" />
        </Stack>
      </div>
      <div className="jobList__pages">
        <Stack spacing={2}>
          <Pagination count={data && data?.content?.page} variant="text" size="large" />
        </Stack>
      </div>
    </section>
  }

  return (
    <section className="jobList__wrapper">
      <div className="jobList">
        {data && data?.content?.data.map((job: IJob, idx: number) => {
          return <JobItem data={job} key={idx} />;
        })}
      </div>
      <div className="jobList__pages">
        <Stack spacing={2}>
          <Pagination count={data && data?.content?.page} variant="text" size="large" />
        </Stack>
      </div>
    </section>
  );
};

export default JobList;
