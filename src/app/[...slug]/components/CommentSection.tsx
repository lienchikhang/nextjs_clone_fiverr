import React, { useState } from "react";
import CommentItem from "./CommentItem";
import { Pagination, Stack } from "@mui/material";
import useSWR from "swr";
import { useParams } from "next/navigation";

const fetcher = (path: string) => fetch(path).then((res) => res.json());

const comments = [
  {
    Users: {
      avatar: null,
      full_name: "tanner1211",
    },
    stars: 5,
    createdAt: new Date(),
    content:
      "Quick delivery, went above and beyond, and perfected the code. Don’t go to anyone else because this guy is your best asset.",
  },
  {
    Users: {
      avatar: null,
      full_name: "tanner1211",
    },
    stars: 5,
    createdAt: new Date(),
    content:
      "Quick delivery, went above and beyond, and perfected the code. Don’t go to anyone else because this guy is your best asset.",
  },
  {
    Users: {
      avatar: null,
      full_name: "tanner1211",
    },
    stars: 5,
    createdAt: new Date(),
    content:
      "Quick delivery, went above and beyond, and perfected the code. Don’t go to anyone else because this guy is your best asset.",
  },
  {
    Users: {
      avatar: null,
      full_name: "tanner1211",
    },
    stars: 5,
    createdAt: new Date(),
    content:
      "Quick delivery, went above and beyond, and perfected the code. Don’t go to anyone else because this guy is your best asset.",
  },
  {
    Users: {
      avatar: null,
      full_name: "tanner1211",
    },
    stars: 5,
    createdAt: new Date(),
    content:
      "Quick delivery, went above and beyond, and perfected the code. Don’t go to anyone else because this guy is your best asset.",
  },

];

export interface IComment {
  Users: {
    avatar: null | string;
    full_name: string;
  },
  content: string;
  createdAt: Date;
  stars: number;
}

const CommentSection = () => {
  const [job, setJob] = useState(null);
  const [page, setPage] = useState(1);
  const params = useParams();

  const { data, error, isLoading } = useSWR(
    `/api/comment/get/${params.slug[2]}`,
    fetcher,
    {
      revalidateOnReconnect: true,
    }
  );

  console.log({ data, error });

  if (error) {
    {
      return comments.map((comment, idx) => {
        return <CommentItem hasError={true} data={comment} key={idx} />;
      });
    }
  }

  return (
    <React.Fragment>
      <div>
        {data &&
          data.content.data.map((comment: IComment, idx: number) => {
            return <CommentItem data={comment} key={idx} />;
          })}
      </div>
      <div className="comment__pages">
        <Stack spacing={2}>
          <Pagination count={page * 10} variant="text" size="large" />
        </Stack>
      </div>
    </React.Fragment>
  );
};

export default CommentSection;
