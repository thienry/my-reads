import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = () => {
  const classes = useStyles();

  return (
    <>
      <CircularProgress className={classes.progress} />
    </>
  );
};

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
}));

export default Spinner;
