"use client";
import React, { useEffect, useState } from "react";
import "./styles/detailJob.scss";
import { useParams } from "next/navigation";
import { Avatar, Box, Pagination, Stack, Tabs } from "@mui/material";
import { CommentItem, HireSection } from "./components";

const comments = [
  {
    name: "tanner1211",
    star: 5,
    content:
      "Quick delivery, went above and beyond, and perfected the code. Don’t go to anyone else because this guy is your best asset.",
  },
  {
    name: "tanner1211",
    star: 5,
    content:
      "Quick delivery, went above and beyond, and perfected the code. Don’t go to anyone else because this guy is your best asset.",
  },
  {
    name: "tanner1211",
    star: 5,
    content:
      "Quick delivery, went above and beyond, and perfected the code. Don’t go to anyone else because this guy is your best asset.",
  },
  {
    name: "tanner1211",
    star: 5,
    content:
      "Quick delivery, went above and beyond, and perfected the code. Don’t go to anyone else because this guy is your best asset.",
  },
];

const DetailJob = () => {
  const [job, setJob] = useState(null);
  const [page, setPage] = useState(1);
  const [value, setValue] = React.useState("1");
  const params = useParams();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  console.log({ params });

  useEffect(() => {}, []);

  return (
    <section className="detailJob__wrapper">
      <div className="detailJob__left">
        <h1>I will do c cpp java python c sharp programming projects</h1>
        <p className="star">4.9 (39)</p>
        <div className="detailJob__info">
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 100, height: 100 }}
          />
          <div className="info__user">
            <h2>Algo Unlock</h2>
            <button>Contact me</button>
          </div>
        </div>
        <p className="detailJob__desc">
          We are a team of experts in building Stunning User experiences. We
          deliver Full-stack web, mobile, and blockchain application development
          using React, Firebase, AngularJS, TypeScript, NodeJS, Solidity, and
          Flutter. Our team has a total of 15+ years of experience. We have
          worked with clients from 47+ countries. Moreover, we have worked with
          managers/teams from 𝗠𝗜𝗖𝗥𝗢𝗦𝗢𝗙𝗧 & 𝗔𝗠𝗔𝗭𝗢𝗡. 𝗪𝗵𝘆 𝗨𝘀 ➤ Fast and Easy - the
          mission will be accomplished, you can just enjoy the delivery and the
          demos ➤ Close collaboration - the more you're involved the better the
          result is
        </p>
        <ul className="detailJob__skill">
          <li>JavaScript</li>
          <li>Python</li>
          <li>C</li>
          <li>C#</li>
        </ul>
        <div className="reviews">
          <div className="reviews__top">
            <h2>What people loved about this freelancer</h2>
            <a href="">See all reviews</a>
          </div>
          <div className="reviews__bottom">
            <div className="review">
              <div className="review__avt">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </div>
              <div className="review__info">
                <div className="info">
                  <h3 className="info__name">Celeme</h3>
                  <p className="info__name">5 starts</p>
                </div>
                <p className="review__content">
                  Did my project in 2 days times which usually takes 3 weeks.
                  responded to all my questions and helped me out a lot
                  definitely working with him in the future
                </p>
                <p>15/10/2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="detailJob__comments">
          <h2 className="comments__heading">Reviews</h2>
          <div>
            {comments.map((comment, idx) => {
              return <CommentItem data={comment} key={idx} />;
            })}
          </div>
          <div className="comment__pages">
            <Stack spacing={2}>
              <Pagination count={page * 10} variant="text" size="large" />
            </Stack>
          </div>
        </div>
      </div>
      <div className="detailJob__right">
        <HireSection />
      </div>
    </section>
  );
};

export default DetailJob;
