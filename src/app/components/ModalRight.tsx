"use client";
import { Tab, TabGroup, TabPanel, TabPanels } from "@headlessui/react";
import React, { useState } from "react";
import ModalStateDefault from "./ModalStateDefault";
import ModalStateDefaultLogin from "./ModalStateDefaultLogin";
import ModalStateRegister from "./ModalStateRegister";
import ModalStateConfirm from "./ModalStateConfirm";

interface Props {
  state: number;
  updateState: (number: number) => void;
}

const ModalRight: React.FC<Props> = ({ state, updateState }) => {
  return (
    <div>
      <TabGroup>
        <Tab
          className={`btn-flex ${
            state == 1 ? "block" : "hidden"
          } data-[selected]:hidden`}
        >
          Join in
        </Tab>
        <Tab
          className={`btn-flex ${
            state == 1 ? "block" : "hidden"
          } data-[selected]:hidden`}
        >
          Sign in
        </Tab>
        <TabPanels>
          <TabPanel className="modal__top">
            {state == 1 && <ModalStateDefaultLogin />}
          </TabPanel>
          <TabPanel className="modal__top">
            {state == 1 && <ModalStateDefault nextState={updateState} />}
            {state == 2 && <ModalStateRegister updateState={updateState} />}
            {state == 3 && <ModalStateConfirm updateState={updateState} />}
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default ModalRight;
