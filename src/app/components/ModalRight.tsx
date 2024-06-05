"use client";
import { Tab, TabGroup, TabPanel, TabPanels } from "@headlessui/react";
import React, { useState } from "react";
import ModalStateDefault from "./ModalStateDefault";
import ModalStateDefaultLogin from "./ModalStateDefaultLogin";
import ModalStateRegister from "./ModalStateRegister";
import ModalStateConfirm from "./ModalStateConfirm";
import ModalStateOtp from "./ModalStateOtp";
import ModalStateLogin from "./ModalStateLogin";

interface Props {
  state: number;
  updateState: (number: number) => void;
  handleCloseModal: () => void;
}

export interface IData {
  email: string;
  password: string;
  full_name: string;
}

const ModalRight: React.FC<Props> = ({
  state,
  updateState,
  handleCloseModal,
}) => {
  const [data, setData] = useState<IData | null>(null);

  const updateData = (data: IData) => {
    setData(data);
  };

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
            {state == 1 && <ModalStateDefaultLogin updateState={updateState} />}
            {state == 2 && (
              <ModalStateLogin
                updateState={updateState}
                closeModal={handleCloseModal}
              />
            )}
          </TabPanel>
          <TabPanel className="modal__top">
            {state == 1 && <ModalStateDefault nextState={updateState} />}
            {state == 2 && (
              <ModalStateRegister
                updateState={updateState}
                updateData={updateData}
              />
            )}
            {state == 3 && (
              <ModalStateConfirm
                updateState={updateState}
                updateData={updateData}
                data={data}
              />
            )}
            {state == 4 && (
              <ModalStateOtp updateState={updateState} data={data} />
            )}
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default ModalRight;
