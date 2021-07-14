import { Container, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(6),
    minWidth: 350,
  },
}));

const Wrapper = ({ children }) => {
  const classes = useStyles();

  return <Container className={classes.container}>{children}</Container>;
};

export default Wrapper;
