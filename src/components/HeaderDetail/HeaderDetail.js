import { Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  empty: {
    width: 48,
  },
  header: {
    marginBottom: theme.spacing(6),
  },
}));

const HeaderDetail = ({ user, link, children }) => {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      justifyContent="space-between"
      alignItems="center"
      className={classes.header}
    >
      <RouterLink to={link}>
        <IconButton color="primary" fontSize="large" aria-label="back">
          <ArrowBackIcon />
        </IconButton>
      </RouterLink>
      <Typography variant="h6">
        <b>{user.name}</b>
      </Typography>
      {children ? children : <div className={classes.empty}></div>}
    </Grid>
  );
};

export default HeaderDetail;
