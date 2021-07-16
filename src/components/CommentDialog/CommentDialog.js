import {
  Button,
  DialogActions,
  DialogContent,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  actions: {
    paddingTop: theme.spacing(4),
  },
}));

const CommentDialog = ({ handleAdd, handleClose }) => {
  const classes = useStyles();

  const [values, setValues] = useState({
    name: "",
    email: "",
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
              name="name"
              value={values.name}
              onChange={handleChange}
              label="Name"
              fullWidth
              variant="outlined"
            />
          </Grid>

          <Grid item>
            <TextField
              name="email"
              value={values.email}
              onChange={handleChange}
              label="Email"
              type="email"
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

export default CommentDialog;
