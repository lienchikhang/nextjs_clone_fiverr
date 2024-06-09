'use client';
import { Avatar, Skeleton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import cookies from 'js-cookie';

const ProfileInfo = () => {

    const [avatar, setAvatar] = useState<string | null>(null);
    const [fullname, setFullname] = useState<string | null>(null);

    useEffect(() => {
        setFullname(cookies.get('fullname') as string);
        setAvatar(cookies.get('avatar') as string);
    }, [])

    return (
        <div className='info__wrapper'>
            <div className="user">
                <div className='info__top'>
                    {avatar ? <Avatar src={avatar} sx={{ width: '150px', height: '150px' }} /> : fullname ? <Avatar>{fullname}</Avatar> : <Avatar />}
                    {fullname ? <h2 className='info__name'>{fullname}</h2> : <Typography variant={'h5'}>
                        <Skeleton />
                    </Typography>}
                    <button>Preview Fiverr Profile</button>
                </div>
                <div className='info__bottom'>
                    <div className='info__country'>
                        <p className='title'>From</p>
                        <p className='content'>Vietnam</p>
                    </div>
                    <div className='info__member'>
                        <p className='title'>Member since</p>
                        <p className='content'>Vietnam</p>
                    </div>
                </div>
            </div>

            <div className="skill">
                <div className="skill__section">
                    <div className='section__heading'>
                        <p className='heading__title'>Description</p>
                        <p className='heading__link'>Edit Description</p>
                    </div>
                    <div className="section__items">

                    </div>
                </div>
                <div className="skill__section">
                    <div className='section__heading'>
                        <p className='heading__title'>Skills</p>
                        <p className='heading__link'>Edit Skills</p>
                    </div>
                    <div className="section__items">

                    </div>
                </div>
                <div className="skill__section">
                    <div className='section__heading'>
                        <p className='heading__title'>Certification</p>
                        <p className='heading__link'>Edit Certification</p>
                    </div>
                    <div className="section__items">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo