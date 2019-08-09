import React from "react";
import { FaHeart } from "react-icons/fa";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function MadeWithLove() {
  return (
    <Typography variant="body1" align="center" color="inherit">
      {"Feito com "} <FaHeart /> {"| Desenvolvido por"}
      <Link color="inherit" href="https://thiagotec.com/">
        {" "}Thiago Moura
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
        <Container maxWidth="md">
          <MadeWithLove />
        </Container>
      </footer>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "calc(100vh - 64px)"
  },
  footer: {
    padding: theme.spacing(3),
    marginTop: "auto",
    backgroundColor: "#3f51b5",
    color: "white"
  }
}));
export default Footer;
