"use client";
import React, { useContext } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckIcon from "@mui/icons-material/Check";
import { Context } from "@/app/redux";
import { useParams } from "next/navigation";

interface Props {
  type: string;
  hasError?: boolean;
  data?: {
    jobId: number,
    image: string | null,
    price: number,
    desc: string,
  }
}

const HiredDetail: React.FC<Props> = ({ type, hasError, data }) => {
  const [state, dispatch] = useContext(Context);
  const params = useParams();

  const handleClick = () => {

    if (hasError) return;

    dispatch({
      type: 'change::open::confirm',
      payload: true,
    });
    dispatch({
      type: 'set::info::order',
      payload: {
        id: data && data.jobId,
        price: data && data.price,
        desc: data && data.desc,
        image: data && data.image,
        quantity: 1,
      },
    });
  };

  return (
    <div className="hiredDetail__wrapper">
      <div className="hiredDetail__top">
        <h2>{type}</h2>
        <p>{data && data.price?.toLocaleString()}</p>
      </div>
      <div className="hiredDetail__content">
        <p className="hiredDetail__desc">
          {data && data.desc}
        </p>
        <p className="hiredDetail__time">
          <AccessTimeIcon /> 11-day delivery
        </p>
        <ul>
          <li>
            <CheckIcon />
            <p>Source code</p>
          </li>
          <li>
            <CheckIcon />
            <p>Detailed code comments</p>
          </li>
          <li>
            <CheckIcon />
            <p>Design customization</p>
          </li>
          <li>
            <CheckIcon />
            <p>Responsive design</p>
          </li>
        </ul>
      </div>
      <div className="hiredDetail__bottom">
        <button
          onClick={handleClick}
          className={`${hasError ? "disabled" : ""}`}
        >
          Continue
        </button>
        <p>Compare package</p>
      </div>
    </div>
  );
};

export default HiredDetail;
