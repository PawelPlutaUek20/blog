import { Link, Typography } from "@material-ui/core";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

const CommentCard = ({ comment }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item container justifyContent="space-between">
          <Typography>
            <b>{comment.name}</b>
          </Typography>
          <Link href="#/" underline="always">
            <Typography>{comment.email}</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Typography>{comment.body}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CommentCard;
