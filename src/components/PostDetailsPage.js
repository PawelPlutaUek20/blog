import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid, Typography } from "@material-ui/core";
import HeaderDetail from "./HeaderDetail/HeaderDetail";
import Wrapper from "./Wrapper/Wrapper";
import CommentSection from "./CommentSection/CommentSection";

const PostDetailPage = () => {
  const [user, setUser] = useState({});
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const { userId, postId } = useParams();

  useEffect(() => {
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
      fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}&id=${postId}&_embed=comments`
      ),
    ])
      .then(([resUser, resPost]) =>
        Promise.all([resUser.json(), resPost.json()])
      )
      .then(([jsonUser, [jsonPost]]) => {
        setUser(jsonUser);
        setPost(jsonPost);
        setComments(jsonPost?.comments || []);
      });
  }, [userId, postId]);

  return (
    <Wrapper>
      <Grid container spacing={2}>
        <HeaderDetail user={user} link={`/user/${user.id}`} />

        <Grid item>
          <Typography gutterBottom variant="h5">
            <b>{post?.title}</b>
          </Typography>
        </Grid>
        <Grid item>
          <Typography gutterBottom>{post?.body}</Typography>
        </Grid>
        <CommentSection setComments={setComments} comments={comments} />
      </Grid>
    </Wrapper>
  );
};

export default PostDetailPage;
