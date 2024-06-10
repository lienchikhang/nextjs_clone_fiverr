import React from 'react'
import { IJobItem } from './UserGig'
import { Rating } from '@mui/material'
import Image from 'next/image'

interface Props {
    data: IJobItem,
}

const JobItem: React.FC<Props> = ({ data }) => {
    return (
        <div className='jobItem'>
            {data.image ? <Image className='jobItem__image' width={150} height={150} src={data.image} alt="" /> : <Image width={150} height={150} className='job__image' src={'/images/noimage.jpeg'} alt="" />}
            <div className='jobItem__info'>
                <h2>{data.job_short_desc}</h2>
                <div className='review__wrapper'>
                    <div className='jobItem__review'>
                        <Rating name="read-only" defaultValue={data.star} readOnly />
                        <p>({data.rate})</p>
                    </div>
                    <p className='jobItem__price'>{data.price.toLocaleString()}</p>
                </div>
                <div className="jobItem__actions">
                    <button>View Detail</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default JobItem