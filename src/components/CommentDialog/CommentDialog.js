import {
  Button,
  DialogActions,
  DialogContent,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
  actions: {
    paddingTop: theme.spacing(4),
  },
}));

const validationSchema = yup.object({
  name: yup.string("Enter your name").required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  body: yup.string("Enter a body").required("Body is required"),
});

const CommentDialog = ({ handleAdd, handleClose }) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      body: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleAdd(values);
      handleClose();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <DialogContent>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <TextField
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              label="Name"
              fullWidth
              variant="outlined"
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>

          <Grid item>
            <TextField
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>

          <Grid item>
            <TextField
              name="body"
              value={formik.values.body}
              onChange={formik.handleChange}
              label="Body"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              error={formik.touched.body && Boolean(formik.errors.body)}
              helperText={formik.touched.body && formik.errors.body}
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions className={classes.actions}>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Save
        </Button>
      </DialogActions>
    </form>
  );
};

export default CommentDialog;
