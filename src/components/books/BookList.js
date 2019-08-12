import React, { useContext, useEffect } from "react";

import BookShelfContext from "../../context/bookShelf/bookShelfContext";

import BookShelf from "./BookShelf";

const BookList = () => {
  const bookShelfContext = useContext(BookShelfContext);
  const { books, getBooks } = bookShelfContext;

  useEffect(() => {
    getBooks();

    //eslint-disable-next-line
  }, []);

  const currentlyReading = books.filter(
    book => book.shelf === "currentlyReading"
  );
  const read = books.filter(book => book.shelf === "read");
  const wantToRead = books.filter(book => book.shelf === "wantToRead");

  return (
    <div>
      {currentlyReading && (
        <BookShelf books={currentlyReading} title="Lendo Atualmente" />
      )}

      {read && <BookShelf books={read} title="Já Leu" />}
      {wantToRead && <BookShelf books={wantToRead} title="Quer Ler" />}
    </div>
  );
};

export default BookList;
