"use client";
import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import HiredDetail from "./HiredDetail";

interface Props {
  hasError?: boolean;
}

const HireSection: React.FC<Props> = ({ hasError = false }) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabGroup className="tab__wrapper">
      <TabList className="tab__top">
        <Tab className="top__item data-[selected]:!text-black data-[selected]:!border-b-gray-950 data-[selected]:!border-b-2">
          Basic
        </Tab>
        <Tab className="top__item data-[selected]:!text-black data-[selected]:!border-b-gray-950 data-[selected]:!border-b-2">
          Standard
        </Tab>
        <Tab className="top__item data-[selected]:!text-black data-[selected]:!border-b-gray-950 data-[selected]:!border-b-2">
          Premium
        </Tab>
      </TabList>
      <TabPanels className="tab__bottom">
        <TabPanel className="bottom__item">
          <HiredDetail hasError={hasError} type="basic" />
        </TabPanel>
        <TabPanel className="bottom__item">
          <HiredDetail hasError={hasError} type="standard" />
        </TabPanel>
        <TabPanel className="bottom__item">
          <HiredDetail hasError={hasError} type="premium" />
        </TabPanel>
      </TabPanels>
      <div className="contact">
        <button>Contact me</button>
      </div>
    </TabGroup>
  );
};

export default HireSection;
