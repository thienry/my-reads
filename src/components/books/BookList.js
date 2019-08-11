import React from "react";
import PropTypes from "prop-types";

import BookShelf from "./BookShelf";


const BookList = ({ books, onChange, loading }) => {
  return (
    <>
        <BookShelf
          books={books.filter(book => book.shelf === "currentlyReading")}
          title="Lendo Atualmente"
          onChangeShelf={onChange}
        />

        <BookShelf
          books={books.filter(book => book.shelf === "read")}
          title="Já Leu"
          onChangeShelf={onChange}
        />

        <BookShelf
          books={books.filter(book => book.shelf === "wantToRead")}
          title="Quer Ler"
          onChangeShelf={onChange}
        />
    </>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.object
};

export default BookList;
