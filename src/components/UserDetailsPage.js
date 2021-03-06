import { Grid, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PostCard from "./PostCard/PostCard";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import HeaderDetail from "./HeaderDetail/HeaderDetail";
import Wrapper from "./Wrapper/Wrapper";
import PostDialog from "./PostDialog/PostDialog";
import DialogContainer from "./DialogContainer/DialogContainer";

const UserDetailPage = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

  const { userId } = useParams();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const handleAdd = (newPost) => {
    newPost.id = 91 + posts.length;
    setPosts((posts) => [...posts, newPost]);
  };

  useEffect(() => {
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`),
    ])
      .then(([resUser, resPosts]) =>
        Promise.all([resUser.json(), resPosts.json()])
      )
      .then(([jsonUser, jsonPosts]) => {
        setUser(jsonUser);
        setPosts(jsonPosts);
      });
  }, [userId]);

  return (
    <Wrapper>
      <Grid container spacing={2}>
        <HeaderDetail user={user} link="/">
          <IconButton
            onClick={handleClickOpen}
            color="primary"
            fontSize="large"
            aria-label="add"
          >
            <AddCircleIcon />
          </IconButton>
        </HeaderDetail>

        <Grid item container spacing={2} direction="column">
          {posts.map((post) => (
            <Grid item xs={12} key={post.id}>
              <PostCard post={post} handleDelete={handleDelete} />
            </Grid>
          ))}
        </Grid>
        <DialogContainer open={open} handleClose={handleClose} title="Add post">
          <PostDialog handleClose={handleClose} handleAdd={handleAdd} />
        </DialogContainer>
      </Grid>
    </Wrapper>
  );
};

export default UserDetailPage;
