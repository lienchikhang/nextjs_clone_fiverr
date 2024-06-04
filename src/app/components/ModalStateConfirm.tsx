import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface Props {
  updateState: (number: number) => void;
}

const ModalStateConfirm: React.FC<Props> = ({ updateState }) => {
  return (
    <div>
      <button onClick={() => updateState(-1)} className="btn-back">
        <ArrowBackIcon />
        Back
      </button>
      <h1>Continue with your email</h1>
      <div className="form__wrapper">
        <div className="modal__form">
          <label htmlFor="">Fullname</label>
          <input type="text" placeholder="john_wick" />
        </div>
      </div>
      <div className="btn__wrapper">
        <button className="active">Create my account</button>
      </div>
    </div>
  );
};

export default ModalStateConfirm;
