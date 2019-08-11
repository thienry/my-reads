import React, { useContext } from "react";
import BookShelfContext from "../../context/bookShelf/bookShelfContext";

import BookList from "../books/BookList";

const Home = () => {
  const bookShelfContext = useContext(BookShelfContext);
  const { updateBook } = bookShelfContext;

  const updateBooksDetails = (book) => {
    updateBook(book);
  };

  return (
    <BookList onChange={updateBooksDetails} />
  );
};

export default Home;
