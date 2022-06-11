import React from "react";
import { useSelector } from "react-redux";

import Post from "./post/Post";
import useStyles from "./styles";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const classes = useStyles();

  return (
    <>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
