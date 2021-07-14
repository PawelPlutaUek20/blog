import { Grid, Link as MaterialLink, Typography } from "@material-ui/core";
import React, { useState } from "react";
import CommentCard from "../CommentCard/CommentCard";
import CommentDialog from "../CommentDialog/CommentDialog";
import DialogContainer from "../DialogContainer/DialogContainer";

const CommentSection = ({ comments }) => {
  const [showComments, setShowComments] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <MaterialLink href="#/" onClick={handleClickOpen} underline="always">
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

      <DialogContainer open={open} handleClose={handleClose} title="comment">
        <CommentDialog />
      </DialogContainer>
    </>
  );
};

export default CommentSection;
