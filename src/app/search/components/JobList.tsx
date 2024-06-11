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

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    console.log('Page changed to: ', value);
    // Thực hiện các hành động khác như tải dữ liệu mới từ server khi chuyển trang
  };

  const { data, error, isLoading } = useSWR(`/api/job/get-all?name=${searchParams.get('name')}&page=${page}`, fetcher, {
    revalidateOnReconnect: true,
  });

  console.log({ data })

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
      {data?.content?.data.length != 0 ? <div className="jobList">
        {data?.content?.data.map((job: IJob, idx: number) => {
          return <JobItem data={job} key={idx} />;
        })}
      </div> : <div className="jobList__notfound">
        <h1>Không tìm thấy kết quả phù hợp</h1>
      </div>}
      <div className="jobList__pages">
        {data && data?.content?.page != 0 && <Stack spacing={2}>
          <Pagination count={data?.content?.page} variant="text" size="large" onChange={handleChange} />
        </Stack>}
      </div>
    </section>
  );
};

export default JobList;
