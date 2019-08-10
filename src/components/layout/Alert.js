import React, { useContext, useState, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const [open, setOpen] = useState(false);

  function dialogOpen() {
    setOpen(true);
  }

  useEffect(() => {
    dialogOpen();
  }, []);

  function handleClose() {
    setOpen(false);
  }

  const { alert } = alertContext;

  return (
    alert !== null && (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Por Favor digite algo para pesquisar!"}
        </DialogTitle>
      </Dialog>
    )
  );
};

export default Alert;
