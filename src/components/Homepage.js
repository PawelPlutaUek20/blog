import React, { useEffect, useState } from "react";
import UserCard from "./UserCard/UserCard";

import { Container, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(6),
  },
}));

const Homepage = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid item container xs={12} sm={6} md={3} key={user.id}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Homepage;
