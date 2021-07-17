import {
  DialogContent,
  Grid,
  TextField,
  DialogActions,
  Button,
  makeStyles,
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
  title: yup.string("Enter a title").required("Title is required"),
  body: yup.string("Enter a body").required("Body is required"),
});

const PostDialog = ({ handleClose, handleAdd }) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      title: "",
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
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              label="Title"
              fullWidth
              variant="outlined"
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
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
        <Button variant="contained" type="submit" color="primary">
          Save
        </Button>
      </DialogActions>
    </form>
  );
};

export default PostDialog;
