import React from "react";
import PropTypes from "prop-types";
import { MdBook } from "react-icons/md"

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  }
});

const Navbar = ({ title }) => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            <MdBook /> {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "MyReads"
}

export default Navbar;
