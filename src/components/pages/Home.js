import React from "react";

import BookList from "../books/BookList";

const Home = () => {
  return (
    <BookList books={"books"} onChange={"updateBooksDetails"} />
  );
};

export default Home;
