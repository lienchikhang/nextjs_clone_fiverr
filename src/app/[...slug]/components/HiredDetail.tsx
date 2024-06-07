"use client";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckIcon from "@mui/icons-material/Check";

interface Props {
  type: string;
  hasError?: boolean;
}

const HiredDetail: React.FC<Props> = ({ type, hasError }) => {
  const handleClick = () => {};

  return (
    <div className="hiredDetail__wrapper">
      <div className="hiredDetail__top">
        <h2>{type}</h2>
        <p>1.400.000</p>
      </div>
      <div className="hiredDetail__content">
        <p className="hiredDetail__desc">
          Basic and simple task like programming fundaments or simple bug fix
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
