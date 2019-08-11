import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";

import BookShelfContext from "../../context/bookShelf/bookShelfContext";

import BookShelf from "./BookShelf";
import Spinner from "../layout/Spinner";

const BookList = ({ onChange }) => {
  const bookShelfContext = useContext(BookShelfContext);
  const { books, getBooks, loading } = bookShelfContext;

  useEffect(() => {
    getBooks();

    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <BookShelf
          books={books.filter(book => book.shelf === "currentlyReading")}
          title="Lendo Atualmente"
        />
        <BookShelf
          books={books.filter(book => book.shelf === "read")}
          title="Já Leu"
        />
        <BookShelf
          books={books.filter(book => book.shelf === "wantToRead")}
          title="Quer Ler"
        />
      </div>
    );
  }
};

BookList.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default BookList;
