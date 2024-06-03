import React from "react";
import { Navbar } from "./components";
import "./styles/searchPage.scss";
import JobList from "./components/JobList";

const SearchPage = () => {
  return (
    <div className="searchPage__wrapper">
      <Navbar />
      <JobList />
    </div>
  );
};

export default SearchPage;
