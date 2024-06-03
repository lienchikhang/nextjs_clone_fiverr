import Image from "next/image";
import React from "react";

interface Props {
  data: Job;
}

interface Job {
  image: string;
  name: string;
  job_short_desc: string;
  star: number;
  price: number;
}

const JobItem: React.FC<Props> = ({ data }) => {
  return (
    <div className="jobItem">
      <Image
        className="jobItem__image"
        src={data.image ? data.image : ''}
        alt={data.job_short_desc}
        width={200}
        height={150}
      />
      <p className="jobItem__name">{data.job_short_desc}</p>
      <p className="jobItem__star">{data.star}</p>
      <p className="jobItem__price">
        <strong>From {data.price && data.price.toLocaleString()}</strong>
      </p>
    </div>
  );
};

export default JobItem;
