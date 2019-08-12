import React, { useContext, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import BookShelfContext from "../../context/bookShelf/bookShelfContext";

import Book from "../books/Book";
import empty from "./empty.png";

import { MdSearch, MdChevronLeft } from "react-icons/md";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { Container } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

const SearchBooks = () => {
  const classes = useStyles();
  const bookShelfContext = useContext(BookShelfContext);

  const { books } = bookShelfContext;

  const { searchBooks } = bookShelfContext;

  const [query, setQuery] = useState("");

  const onChange = e => {
    setQuery(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    searchBooks(query);
    setQuery("");
  };

  return (
    <>
      <Container className={classes.container}>
        <form onSubmit={onSubmit}>
          <Link component={RouterLink} to="/" color="inherit">
            <Tooltip title="Voltar para Home" placement="top">
              <IconButton className={classes.button}>
                <MdChevronLeft />
              </IconButton>
            </Tooltip>
          </Link>
          <TextField
            id="standard-search"
            label="Pesquise Título ou Autor"
            type="search"
            className={classes.textField}
            margin="normal"
            onChange={onChange}
            value={query}
          />
          <Tooltip title="Pesquisar" placement="top">
            <IconButton type="submit" className={classes.button}>
              <MdSearch />
            </IconButton>
          </Tooltip>
        </form>
      </Container>

      <img
        src={empty}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        alt="Empty"
      />

      <Grid container spacing={4}>
        {query.length > 0 &&
          books.map(book => <Book key={book.id} book={book} />)}
      </Grid>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400
  },
  button: {
    marginTop: 25
  }
}));

export default SearchBooks;
