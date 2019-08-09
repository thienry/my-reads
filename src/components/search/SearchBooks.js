import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { MdChevronLeft } from "react-icons/md";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "@material-ui/core/Link";

const SearchBooks = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Link component={RouterLink} to="/" color="inherit">
        <Tooltip title="Voltar">
          <IconButton className={classes.iconButton} aria-label="menu">
            <MdChevronLeft />
          </IconButton>
        </Tooltip>
      </Link>
      <InputBase
        className={classes.input}
        placeholder="Pesquise pelo Título ou Autor..."
      />
    </Paper>
  );
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2px 4px",
    marginTop: "30px",
    marginLeft: "25%",
    width: 683
  },
  input: {
    marginLeft: 8,
    flex: 1
  }
});

export default SearchBooks;
