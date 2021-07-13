import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import PostCard from "./PostCard/PostCard";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(6),
  },
}));

const UserDetailPage = () => {
  const classes = useStyles();
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);

  const { userId } = useParams();

  useEffect(() => {
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`),
    ])
      .then(([resUser, resPosts]) =>
        Promise.all([resUser.json(), resPosts.json()])
      )
      .then(([jsonUser, jsonPosts]) => {
        setUser(jsonUser.name);
        setPosts(jsonPosts);
      });
  }, [userId]);

  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        <Grid item container justifyContent="space-between" alignItems="center">
          <RouterLink to="/"><IconButton color="primary" fontSize="large" aria-label="back"><ArrowBackIcon /></IconButton></RouterLink>
          <Typography variant="h6">
            <b>{user}</b>
          </Typography>
          <IconButton color="primary" fontSize="large" aria-label="add"><AddCircleIcon /></IconButton>
        </Grid>

        <Grid className={classes.container} item container spacing={2} direction="column">
          {posts.map((post) => (
            <Grid item xs={12} key={post.id}>
              <PostCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDetailPage;
