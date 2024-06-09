'use client';
import { CircularProgress, Pagination, Stack } from '@mui/material';
import React from 'react';
import useSWR from 'swr';


const fetcher = (path: string) => fetch(path)
    .then((res) => res.json())

const UserGig = () => {

    const { data, error, isLoading } = useSWR('/api/job/get-all-by-userId', fetcher);

    console.log('data in userGig', data);

    if (isLoading) {
        return <div className="jobs__wrapper">
            <div className='jobs__loading'>
                <CircularProgress />
            </div>
        </div>
    }


    return (
        <div className='jobs__wrapper'>
            <div className="jobs__pages">
                <Stack spacing={2}>
                    <Pagination count={data && data?.content?.page} variant="text" size="large" />
                </Stack>
            </div>
        </div>
    )
}

export default UserGig