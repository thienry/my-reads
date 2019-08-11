import React from "react";
import PropTypes from "prop-types";

import Book from "./Book";

import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

const BookShelf = ({ books, title, onChangeSelf }) => {
  const classes = useStyles();

  const updateBook = book => {
    onChangeSelf(book);
  };

  return (
    <>
      <Typography variant="h4" className={classes.title}>
        {title}
      </Typography>

      <div>
        <ul>
          {books.map((book, index) => (
            <Book
              key={index}
              book={book}
              onUpdate={shelf => {
                updateBook(book);
              }}
            />
          ))}
          <hr />
        </ul>
      </div>
    </>
  );
};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired
};

const useStyles = makeStyles({
  title: {
    marginTop: "30px",
    textAlign: "center",
    fontWeight: 600
  }
});

export default BookShelf;
