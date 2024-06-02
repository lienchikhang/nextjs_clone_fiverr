import React from "react";

interface Props {
  job_name: string;
  job_image: string;
  className: string;
}

const JobTypeItem: React.FC<Props> = ({ className, job_name, job_image }) => {
  return (
    <div className={className}>
      <div>
        <img src={job_image} alt={job_name} />
        <p>{job_name}</p>
      </div>
    </div>
  );
};

export default JobTypeItem;
