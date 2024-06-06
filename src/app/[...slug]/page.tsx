import React, { useEffect, useState } from "react";
import "./styles/detailJob.scss";
import { useParams } from "next/navigation";
import { Avatar, Box, Pagination, Stack, Tabs } from "@mui/material";
import { CommentItem, HireSection } from "./components";
import Content from "./components/Content";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Freelancer detail job - Fiverr",
    description: "Freelancer detail job",
};

const DetailJob = () => {

    return (
        <section className="detailJob__wrapper">
            <Content />
        </section>
    );
};

export default DetailJob;
