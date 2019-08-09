import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

import { MdBook } from "react-icons/md";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const Navbar = ({ title }) => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <AppBar position="static" color="primary">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="h5" className={classes.logo} color="inherit">
              <MdBook /> {title}
            </Typography>
            <Button>
              <Link
                color="inherit"
                className={classes.about}
                component={RouterLink}
                to="/sobre"
              >
                Sobre
              </Link>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  logo: {
    flexGrow: 1
  },
  about: {
    color: "aliceblue",
    textDecoration: "none"
  }
});

Navbar.propTypes = {
  title: PropTypes.string
};

Navbar.defaultProps = {
  title: "MyReads"
};

export default Navbar;
