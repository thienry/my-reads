import React, { useContext, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import BookShelfContext from "../../context/bookShelf/bookShelfContext";

import BookItem from "../books/BookItem";
//import Spinner from "../layout/Spinner";
//import empty from "./empty.png";

import { MdSearch, MdChevronLeft } from "react-icons/md";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { Container, useMediaQuery } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const SearchBooks = () => {
  const classes = useStyles();
  const isActive = useMediaQuery("(max-width: 500px)");

  const [query, setQuery] = useState("");

  const bookShelfContext = useContext(BookShelfContext);

  const { books, searchBooks, loading } = bookShelfContext;

  const onChange = e => {
    setQuery(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    setQuery(query);
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
          {isActive ? (
            <TextField
              id="standard-search"
              label="Pesquise Título ou Autor"
              type="search"
              className={classes.textFieldMediaQuery}
              margin="normal"
              onChange={onChange}
              value={query}
            />
          ) : (
            <TextField
              id="standard-search"
              label="Pesquise Título ou Autor"
              type="search"
              className={classes.textField}
              margin="normal"
              onChange={onChange}
              value={query}
            />
          )}
          <Tooltip title="Pesquisar" placement="top">
            <IconButton type="submit" className={classes.button}>
              <MdSearch />
            </IconButton>
          </Tooltip>
        </form>
      </Container>

      {books.length !== 0 && !loading ? (
        <Grid container spacing={4}>
          {books.map(book => (
            <BookItem key={book.id} book={book} />
          ))}
        </Grid>
      ) : (
        <Typography
          variant="h4"
          style={{ marginTop: 100, textAlign: "center" }}
        >
          Pesquise para visualizar os livros!!!
        </Typography>
      )}
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
  },
  textFieldMediaQuery: {
    width: 200
  }
}));

export default SearchBooks;
