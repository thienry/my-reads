import React, { useContext } from "react";
import PropTypes from "prop-types";

import BookShelfContext from "../../context/bookShelf/bookShelfContext";

import Book from "./Book";

import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";


const BookShelf = ({ title }) => {
  const classes = useStyles();

  const bookShelfContext = useContext(BookShelfContext);
  const { books } = bookShelfContext;

  return (
    <>
      <Typography variant="h4" className={classes.title}>
        {title}
      </Typography>
      <hr />
      <div>
        <Grid container spacing={4}>
          {books.map(book => (
            <Book key={book.id} book={book} />
          ))}
        </Grid>
      </div>
    </>
  );
};

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
};

const useStyles = makeStyles({
  title: {
    marginTop: "30px",
    textAlign: "center",
    fontWeight: 600
  }
});

export default BookShelf;
