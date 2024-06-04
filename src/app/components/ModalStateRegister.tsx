import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface Props {
  updateState: (number: number) => void;
}

const ModalStateRegister: React.FC<Props> = ({ updateState }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  const handleClick = () => {
    handleSubmit(onSubmit);
    updateState(1);
  };

  return (
    <div>
      <button onClick={() => updateState(-1)} className="btn-back">
        <ArrowBackIcon />
        Back
      </button>
      <h1>Continue with your email</h1>
      <div className="form__wrapper">
        <div className="modal__form">
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="name@example.com"
            {...register("email", {
              pattern: {
                value: /[A-Za-z]{3}/,
                message: "error message", // JS only: <p>error message</p> TS only support string
              },
            })}
          />
        </div>
        <div className="modal__form">
          <label htmlFor="">Password</label>
          <input type="password" />
        </div>
      </div>
      <div className="btn__wrapper">
        <button onClick={() => handleClick}>Continue</button>
      </div>
    </div>
  );
};

export default ModalStateRegister;
