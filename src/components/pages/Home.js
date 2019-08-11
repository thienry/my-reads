import React, { useState, useEffect, useContext } from "react";
import BookShelfContext from "../../context/bookShelf/bookShelfContext";

import BookList from "../books/BookList";

const Home = () => {
  const bookShelfContext = useContext(BookShelfContext);
  const { getBooks, updateBook, loading } = bookShelfContext;

  useEffect(() => {
    getBooks();

    //eslint-disable-next-line
  }, []);

  const [books] = useState([]);

  const updateBooksDetails = (book) => {
    updateBook(book);
  };

  return (
    <BookList books={books} loading={loading} onChange={updateBooksDetails} />
  );
};

export default Home;
