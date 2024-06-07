"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import {
  Avatar,
  Box,
  Pagination,
  Skeleton,
  Stack,
  Tabs,
  Typography,
} from "@mui/material";
import CommentItem from "./CommentItem";
import HireSection from "./HireSection";
import useSWR from "swr";
import StarIcon from "@mui/icons-material/Star";
import CommentSection from "./CommentSection";
import DrawerComfirm from "./DrawerComfirm";

const fetcher = (path: string) => fetch(path).then((res) => res.json());

interface IJobDetail {
  Users: {
    avatar: null | string;
    full_name: string;
  };
  image: null | string;
  job_desc: string;
  job_name: string;
  job_short_desc: string;
  price: number;
  rate: number;
  star: number;
}

interface IDataJob {
  content: {
    data: {};
    page: number;
  };
  mess: string;
  status: number;
}

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

const Content = () => {
  const [job, setJob] = useState(null);
  const [page, setPage] = useState(1);
  const [value, setValue] = React.useState("1");
  const params = useParams();

  const {
    data: IDataJob,
    error,
    isLoading,
  } = useSWR(`/api/job/get/${params.slug[2]}`, fetcher, {
    revalidateOnReconnect: true,
    errorRetryCount: 3,
  });

  console.log({ IDataJob });

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <DrawerComfirm />
      <div className="detailJob__left">
        {IDataJob ? (
          <h1>{IDataJob.content.data.job_desc}</h1>
        ) : (
          <Typography variant="h2">
            <Skeleton />
          </Typography>
        )}
        {IDataJob ? (
          <div className="star">
            <StarIcon />
            <div>
              <span>{IDataJob.content.data.star}</span>
              <span>({IDataJob.content.data.star})</span>
            </div>
          </div>
        ) : (
          <div className="star">
            <StarIcon />
            <div>
              <span>5</span>
              <span>(13)</span>
            </div>
          </div>
        )}
        <div className="detailJob__info">
          {IDataJob ? (
            <Avatar
              alt="Remy Sharp"
              src={IDataJob.content.data.image && IDataJob.content.data.image}
              sx={{ width: 100, height: 100 }}
            >
              {IDataJob.content.data.Users.full_name[0]}
            </Avatar>
          ) : (
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 100, height: 100 }}
            />
          )}
          <div className="info__user">
            {IDataJob ? (
              <h2>{IDataJob.content.data.Users.full_name}</h2>
            ) : (
              <Typography variant="h2">
                <Skeleton />
              </Typography>
            )}
            <button>Contact me</button>
          </div>
        </div>
        {IDataJob ? (
          <p className="detailJob__desc">{IDataJob.content.data.job_desc}</p>
        ) : (
          <Box className="detailJob__desc">
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
          </Box>
        )}
        <ul className="detailJob__skill">
          <li>JavaScript</li>
          <li>Python</li>
          <li>C</li>
          <li>C#</li>
        </ul>
        <div className="reviews">
          <div className="reviews__top">
            <h2>What people loved about this freelancer</h2>
            <a href="#comment">See all reviews</a>
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
        <div id="comment" className="detailJob__comments">
          <h2 className="comments__heading">Reviews</h2>
          <CommentSection />
        </div>
      </div>
      <div className="detailJob__right">
        <HireSection price={IDataJob?.content?.data?.price} desc={IDataJob?.content?.data?.job_short_desc} hasError={error ? true : false} />
      </div>
    </React.Fragment>
  );
};

export default Content;
