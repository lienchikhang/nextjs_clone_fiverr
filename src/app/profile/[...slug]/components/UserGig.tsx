'use client';
import { CircularProgress, Pagination, Stack } from '@mui/material';
import React from 'react';
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

const UserGig = () => {

    const { data, error, isLoading } = useSWR('/api/job/get-all-by-userId', fetcher);

    console.log('data in userGig', data);
    console.log('error in userGig', error);

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

    if (data.loginExpired) {
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        Cookies.remove('fullname');
        Cookies.remove('avatar');

        window.location.reload();
    }


    return (
        <div className='jobs__wrapper'>
            <div className="jobs">
                {data.content.data.length == 0 ? <div className='jobs__nothing'>
                    <p>It seems that you don't have any active Gigs.</p>
                    <button>Create new Gig </button>
                </div> : data.content.data.map((job: IJobItem, idx: number) => {
                    return <JobItem data={job} key={idx} />
                })}
            </div>
            <div className="jobs__pages">
                {data.content.data.length != 0 && <Stack spacing={2}>
                    <Pagination count={data && data?.content?.page} variant="text" size="large" />
                </Stack>}
            </div>
        </div>
    )
}

export default UserGig