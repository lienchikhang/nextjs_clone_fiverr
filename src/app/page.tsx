import { JobTypes, Promotion, Services, Welcome } from "./components";
import Carousel from "./components/Carousel";
import React from "react";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Services />
      <Promotion />
      <JobTypes />
      <Welcome />
    </div>
  );
}
