import { Grid, TextField } from "@material-ui/core";
import React from "react";

const PostDialog = () => {
  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <TextField label="Title" fullWidth variant="outlined" />
      </Grid>

      <Grid item>
        <TextField
          label="Body"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};

export default PostDialog;