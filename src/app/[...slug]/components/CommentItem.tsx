import { Avatar, Box, Rating, Skeleton, Typography } from "@mui/material";
import React from "react";
import { IComment } from "./CommentSection";

interface Props {
  data: IComment;
  hasError?: boolean;
}

const CommentItem: React.FC<Props> = ({ data, hasError }) => {
  return (
    <div className="comment__wrapper">
      <div className="comment__image">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>
      <div className="comment__info">
        {hasError ? (
          <Typography variant="h4">
            <Skeleton />
          </Typography>
        ) : (
          <h2 className="comment__username">{data.Users.full_name}</h2>
        )}
        <div className="comment__rating">
          <Rating name="read-only" value={data.stars} readOnly />
          <p className="comment__star">{data.stars}</p>
        </div>
        {hasError ? (
          <Box className="comment__handle">
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
          </Box>
        ) : (
          <p className="comment__content">{data.content}</p>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
