"use client";
import React, { useContext } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckIcon from "@mui/icons-material/Check";
import { Context } from "@/app/redux";

interface Props {
  type: string;
  hasError?: boolean;
  price?: number;
  desc?: string;
}

const HiredDetail: React.FC<Props> = ({ type, hasError, price, desc }) => {
  const [state, dispatch] = useContext(Context);
  const handleClick = () => {

    if (hasError) return;

    dispatch({
      type: 'change::open::confirm',
      payload: true,
    });
    dispatch({
      type: 'update::info::order',
      payload: {
        price,
        desc,
      },
    });
  };

  return (
    <div className="hiredDetail__wrapper">
      <div className="hiredDetail__top">
        <h2>{type}</h2>
        <p>{price?.toLocaleString()}</p>
      </div>
      <div className="hiredDetail__content">
        <p className="hiredDetail__desc">
          {desc}
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
