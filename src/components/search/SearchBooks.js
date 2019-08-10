import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

import { MdChevronLeft } from "react-icons/md";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import GridList from "@material-ui/core/GridList";
import Link from "@material-ui/core/Link";
import Book from "../books/Book";

const SearchBooks = () => {
  const classes = useStyles();

  return (
    <>
      <div >
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
            value=""
            onChange={() => {}} 
          />
        </Paper>
        
      </div>
    </>
  );
};



const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2px 4px",
    marginTop: "30px",
    marginLeft: "25%",
    width: 683,
    flexWrap: "wrap",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)"
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
}));

export default SearchBooks;
