import React, { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  HAS_MIN_DIGITS,
  IS_EMAIL,
  HAS_LOWER_CHAR,
  HAS_SPEC_CHAR,
  HAS_UPPER_CHAR,
} from "../libs/constants";
import { IData } from "./ModalRight";

interface Props {
  updateState: (number: number) => void;
  updateData: (data: IData) => void;
}

interface FormValues {
  email: string;
  password: string;
}

const validateEmail = (value: string) => {
  if (!IS_EMAIL.test(value)) {
    return "Email không đúng định dạng!";
  }
  return true;
};

const validatePassword = (value: string) => {
  if (!HAS_MIN_DIGITS.test(value)) {
    return "Password có ít nhất 6 kí tự!";
  }

  if (!HAS_LOWER_CHAR.test(value)) {
    return "Password có ít nhất 1 kí tự thường!";
  }

  if (!HAS_UPPER_CHAR.test(value)) {
    return "Password có ít nhất 1 kí tự hoa!";
  }

  if (!HAS_SPEC_CHAR.test(value)) {
    return "Password có ít nhất 1 kí tự đặc biệt!";
  }
  return true;
};

const ModalStateRegister: React.FC<Props> = ({ updateState, updateData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    control,
  } = useForm<FormValues>();

  useEffect(() => {
    setFocus("email");
  }, []);

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    updateState(1);
    updateData({
      email: formData.email,
      password: formData.password,
      full_name: "",
    });
  };

  return (
    <div>
      <button onClick={() => updateState(-1)} className="btn-back">
        <ArrowBackIcon />
        Back
      </button>
      <h1>Continue with your email</h1>
      <div className="form__wrapper">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Email không được bỏ trống",
              validate: validateEmail,
            }}
            render={({ field, fieldState }) => {
              return (
                <div className="modal__form">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    placeholder="name@example.com"
                    {...register("email")}
                    className={`${errors.email ? "error" : ""}`}
                  />
                </div>
              );
            }}
          />

          {errors.email && (
            <p className="px-1 text-sm text-red-500">{errors.email.message}</p>
          )}

          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: "Password không được bỏ trống",
              validate: validatePassword,
            }}
            render={({ field, fieldState }) => {
              return (
                <div className="modal__form">
                  <label htmlFor="">Password</label>
                  <input type="password" {...register("password")} />
                </div>
              );
            }}
          />

          {errors.password && (
            <p className="px-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}

          <div className="btn__wrapper">
            <button
              className={`${
                errors.email || errors.password ? "unactive" : "active"
              }`}
              type="submit"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalStateRegister;
