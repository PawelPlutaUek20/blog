import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CommentCard from "./CommentCard/CommentCard";
import {
  makeStyles,
  Container,
  Grid,
  Typography,
  Link as MaterialLink,
  IconButton,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(6),
  },
  button: {
    visibility: "hidden",
    width: 48,
  },
}));

const PostDetailPage = () => {
  const classes = useStyles();
  const [user, setUser] = useState("");
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [show, setShow] = useState(false);

  const { userId, postId } = useParams();

  useEffect(() => {
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
      fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}/posts?id=${postId}`
      ),
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`),
    ])
      .then(([resUser, resPost, resComments]) =>
        Promise.all([resUser.json(), resPost.json(), resComments.json()])
      )
      .then(([jsonUser, [jsonPost], jsonComments]) => {
        setUser(jsonUser.name);
        setPost(jsonPost);
        setComments(jsonComments);
      });
  }, [userId, postId]);

  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        <Grid item container justifyContent="space-between" alignItems="center">
          <RouterLink to={`/user/${userId}`}>
            <IconButton color="primary" fontSize="large" aria-label="back">
              <ArrowBackIcon />
            </IconButton>
          </RouterLink>
          <Typography variant="h6">
            <b>{user}</b>
          </Typography>
          <button className={classes.button}></button>
        </Grid>
        <Grid item className={classes.container}>
          <Typography gutterBottom variant="h5">
            <b>{post.title}</b>
          </Typography>
        </Grid>
        <Grid item>
          <Typography gutterBottom>{post.body}</Typography>
        </Grid>
        <Grid item container justifyContent="space-between">
          <MaterialLink
            onClick={() => setShow(!show)}
            href="#/"
            underline="always"
          >
            {show ? (
              <Typography>Hide commments</Typography>
            ) : (
              <Typography>Show comments</Typography>
            )}
          </MaterialLink>

          {show ? (
            <MaterialLink href="#/" underline="always">
              <Typography>Add comment</Typography>
            </MaterialLink>
          ) : null}
        </Grid>
        {show ? (
          <Grid item container spacing={2} direction="column">
            {comments.map((comment) => (
              <Grid item xs={12} key={comment.id}>
                <CommentCard comment={comment} />
              </Grid>
            ))}
          </Grid>
        ) : null}
      </Grid>
    </Container>
  );
};

export default PostDetailPage;
