'use client';
import { CircularProgress, Pagination, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import JobItem from './JobItem';
import Cookies from 'js-cookie';

export interface IJobItem {
    job_id: number;
    job_short_desc: string;
    image: string | null;
    price: number;
    rate: number;
    star: number;
}

const fetcher = (path: string) => fetch(path)
    .then((res) => res.json())
    .catch((err) => console.log('err', err))

const UserGig = () => {

    const [page, setPage] = useState(1);

    const { data, error, isLoading } = useSWR(`/api/job/get-all-by-userId?page=${page}`, fetcher);

    console.log('data in userGig', data);
    console.log('error in userGig', error);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        console.log('Page changed to: ', value);
        // Thực hiện các hành động khác như tải dữ liệu mới từ server khi chuyển trang
    };

    if (isLoading) {
        return <div className="jobs__wrapper">
            <div className='jobs__loading'>
                <CircularProgress />
            </div>
        </div>
    }

    if (error) {
        return <div className="jobs__wrapper">
            <div className='jobs__loading'>
                <h1>...Error</h1>
            </div>
        </div>
    }

    if (data?.loginExpired) {
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        Cookies.remove('fullname');
        Cookies.remove('avatar');

        window.location.reload();
    }


    return (
        <div className='jobs__wrapper'>
            <div className="jobs">
                {data && data?.content?.data?.length == 0 ? <div className='jobs__nothing'>
                    <p>It seems that you don't have any active Gigs.</p>
                    <button>Create new Gig </button>
                </div> : data?.content?.data.map((job: IJobItem, idx: number) => {
                    return <JobItem data={job} key={idx} />
                })}
            </div>
            <div className="jobs__pages">
                {data && data?.content?.data?.length != 0 && <Stack spacing={2}>
                    <Pagination count={data?.content?.page} variant="text" size="large" onChange={handleChange} />
                </Stack>}
            </div>
        </div>
    )
}

export default UserGig