import {
  Button,
  Grid,
  Link as MaterialLink,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    width: "calc(100% + 16px)",
  },
  button: {
    width: "100%",
    height: 72,
    marginBottom: 8,
    textDecoration: "none",
    textTransform: "none",
  },
  container: {
    height: "calc(100% + 16px)",
  },
  buttonContainer: {
    marginTop: "auto",
    width: "90%",
    alignSelf: "center",
  },
}));

const UserCard = ({ user }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid
        className={classes.container}
        container
        spacing={2}
        direction="column"
      >
        <Grid item>
          <Typography gutterBottom>
            <b>{user.name}</b>
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            <MaterialLink href="#" underline="always">
              {user.email}
            </MaterialLink>
          </Typography>
          <Typography>
            <MaterialLink href="#" underline="always">
              {user.phone.split(" ")[0]}
            </MaterialLink>
          </Typography>
          <Typography gutterBottom>
            <MaterialLink href="#" underline="always">
              {user.website}
            </MaterialLink>
          </Typography>
        </Grid>
        <Grid item>
          <Typography>{user.company.name}</Typography>
          <Typography>{user.company.catchPhrase}</Typography>
          <Typography gutterBottom>
            <b>{user.company.bs}</b>
          </Typography>
        </Grid>
        <Grid item container className={classes.buttonContainer}>
          <RouterLink className={classes.button} to={`/user/${user.id}`}>
            <Button className={classes.button} variant="outlined">
              <Typography>Details</Typography>
            </Button>
          </RouterLink>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserCard;
