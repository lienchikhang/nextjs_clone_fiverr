"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "../styles/modalAuth.scss";
import CheckIcon from "@mui/icons-material/Check";
import ModalRight from "./ModalRight";
import ModalLeftDefault from "./ModalLeftDefault";
import ModalLeftRegister from "./ModalLeftRegister";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
};

const ModalAuth = () => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [state, setState] = useState(1);

  console.log({ state });

  const updateState = (number: number) => {
    setState((prev) => prev + number);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="modal__wrapper">
        <div className="modal__left">
          {state == 1 && <ModalLeftDefault />}
          {state == 2 && <ModalLeftRegister />}
          {state == 3 && <ModalLeftRegister />}
          {state == 4 && <ModalLeftRegister />}
        </div>
        <div className="modal__right">
          <ModalRight
            state={state}
            updateState={updateState}
            handleCloseModal={handleClose}
          />
        </div>
      </Box>
    </Modal>
  );
};

export default ModalAuth;
