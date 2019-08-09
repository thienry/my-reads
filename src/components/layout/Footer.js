import React from "react";
import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

function MadeWithLove({ name }) {
  return (
    <Typography variant="body1" align="center" color="inherit">
      {"Feito com "} <FaHeart /> {"| Desenvolvido por"}
      <Link color="inherit" href="https://thiagotec.com/">
        {" "}
        {name}
      </Link>
    </Typography>
  );
}

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <MadeWithLove />
      </footer>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    padding: theme.spacing(3),
    marginTop: "auto",
    backgroundColor: "#3f51b5",
    color: "white"
  }
}));

MadeWithLove.propTypes = {
  name: PropTypes.string
};

MadeWithLove.defaultProps = {
  name: "Thiago Moura"
};

export default Footer;
