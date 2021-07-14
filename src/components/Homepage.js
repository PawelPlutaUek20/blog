import React, { useEffect, useState } from "react";
import UserCard from "./UserCard/UserCard";

import { Grid } from "@material-ui/core";
import Wrapper from "./Wrapper/Wrapper";

const Homepage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <Wrapper>
      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid item container xs={12} sm={6} md={3} key={user.id}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Homepage;
