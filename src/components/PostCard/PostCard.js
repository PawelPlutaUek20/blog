import {
  Paper,
  makeStyles,
  Typography,
  Grid,
  IconButton,
} from "@material-ui/core";
import React from "react";
import { Link, useParams } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  post: {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 1,
    wordBreak: "break-all",
    overflow: "hidden",
  },
  container: {
    flexWrap: "nowrap",
  },
  button: {
    marginLeft: "auto",
  },
}));

const PostCard = ({ post }) => {
  const classes = useStyles();
  const { userId } = useParams();

  return (
    <Paper className={classes.paper}>
      <Grid
        container
        className={classes.container}
        spacing={1}
        alignItems="center"
      >
        <Grid item>
          <IconButton color="primary" fontSize="large" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Grid>
        <Grid className={classes.post} item>
          <Typography>{post.title}</Typography>
        </Grid>
        <Grid item className={classes.button}>
          <Link to={`/user/${userId}/${post.id}`}>
            <IconButton color="primary" fontSize="large" aria-label="next">
              <ArrowForwardIosIcon />
            </IconButton>
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PostCard;
