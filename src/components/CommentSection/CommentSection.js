import { Grid, Link as MaterialLink, Typography } from "@material-ui/core";
import React, { useState } from "react";
import CommentCard from "../CommentCard/CommentCard";

const CommentSection = ({ comments }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <>
      <Grid item container justifyContent="space-between">
        <MaterialLink
          onClick={() => setShowComments(!showComments)}
          href="#/"
          underline="always"
        >
          {showComments ? (
            <Typography>Hide commments</Typography>
          ) : (
            <Typography>Show comments</Typography>
          )}
        </MaterialLink>

        {showComments ? (
          <MaterialLink href="#/" underline="always">
            <Typography>Add comment</Typography>
          </MaterialLink>
        ) : null}
      </Grid>
      {showComments ? (
        <Grid item container spacing={2} direction="column">
          {comments.map((comment) => (
            <Grid item xs={12} key={comment.id}>
              <CommentCard comment={comment} />
            </Grid>
          ))}
        </Grid>
      ) : null}
    </>
  );
};

export default CommentSection;
