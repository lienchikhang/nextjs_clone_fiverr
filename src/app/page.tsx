import { Services } from "./components";
import Carousel from "./components/Carousel";
import React from "react";
import Promotion from "./components/Promotion";
import JobTypes from "./components/jobType";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Services />
      <Promotion />
      <JobTypes />
    </div>
  );
}
