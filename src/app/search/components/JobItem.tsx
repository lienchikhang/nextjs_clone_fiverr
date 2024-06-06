import Image from "next/image";
import React from "react";
import { IJob } from "./JobList";
import Link from "next/link";

interface Props {
  data: IJob;
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
      {/* <p className="jobItem__name">{data.job_short_desc}</p> */}
      <Link className="jobItem__name" href={{
        pathname: `/search/${data.job_short_desc}/${data.job_id}`,
      }}>{data.job_short_desc}</Link>
      <p className="jobItem__star">{data.star}</p>
      <p className="jobItem__price">
        <strong>From {data.price && data.price.toLocaleString()}</strong>
      </p>
    </div>
  );
};

export default JobItem;
