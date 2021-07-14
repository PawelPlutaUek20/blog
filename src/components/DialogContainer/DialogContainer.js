import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  actions: {
    paddingTop: theme.spacing(4),
  },
}));

const DialogContainer = ({ open, handleClose, title, children }) => {
  const classes = useStyles();

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add {title}</DialogTitle>

      <DialogContent>{children}</DialogContent>

      <DialogActions className={classes.actions}>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleClose} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogContainer;
