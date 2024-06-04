import { IComment } from "@/app/interfaces";
import { Avatar } from "@mui/material";
import React from "react";

interface Props {
  data: IComment;
}

const CommentItem: React.FC<Props> = ({ data }) => {
  return (
    <div className="comment__wrapper">
      <div className="comment__image">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>
      <div className="comment__info">
        <h2 className="comment__username">{data.name}</h2>
        <p className="comment__star">{data.star}</p>
        <p className="comment__content">{data.content}</p>
      </div>
    </div>
  );
};

export default CommentItem;
