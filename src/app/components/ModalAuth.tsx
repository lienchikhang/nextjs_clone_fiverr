"use client";
import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "../styles/modalAuth.scss";
import CheckIcon from "@mui/icons-material/Check";
import ModalRight from "./ModalRight";
import ModalLeftDefault from "./ModalLeftDefault";
import ModalLeftRegister from "./ModalLeftRegister";
import { Context } from "../redux";
import Cookies from 'js-cookie';

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
};

export interface ModalProps {
  notifyWarn: (mess: string) => void;
}

const ModalAuth: React.FC<ModalProps> = ({ notifyWarn }) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    dispatch({
      type: 'set::modalAuth',
      payload: false
    })
  };
  const [step, setStep] = useState(1);
  const [state, dispatch] = useContext(Context);


  const updateState = (number: number) => {
    setStep((prev) => prev + number);
  };

  return (
    <Modal
      open={(!Cookies.get('accessToken') && state.modalAuth.isOpen) as boolean}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="modal__wrapper">
        <div className="modal__left">
          {step == 1 && <ModalLeftDefault />}
          {step == 2 && <ModalLeftRegister />}
          {step == 3 && <ModalLeftRegister />}
          {step == 4 && <ModalLeftRegister />}
        </div>
        <div className="modal__right">
          <ModalRight
            state={step}
            updateState={updateState}
            handleCloseModal={handleClose}
            notifyWarn={notifyWarn}
          />
        </div>
      </Box>
    </Modal>
  );
};

export default ModalAuth;
