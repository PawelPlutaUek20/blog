import {
  DialogContent,
  Grid,
  TextField,
  DialogActions,
  Button,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  actions: {
    paddingTop: theme.spacing(4),
  },
}));

const PostDialog = ({ handleClose, handleAdd }) => {
  const classes = useStyles();

  const [values, setValues] = useState({
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <DialogContent>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <TextField
              name="title"
              value={values.title}
              onChange={handleChange}
              label="Title"
              fullWidth
              variant="outlined"
            />
          </Grid>

          <Grid item>
            <TextField
              name="body"
              value={values.body}
              onChange={handleChange}
              label="Body"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions className={classes.actions}>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            handleAdd(values);
            handleClose();
          }}
          color="primary"
        >
          Save
        </Button>
      </DialogActions>
    </>
  );
};

export default PostDialog;
