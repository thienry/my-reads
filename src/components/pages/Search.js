import React from "react";
import SearchBooks from "../search/SearchBooks";

const Search = ({ history }) => {
  return (
    <SearchBooks onChange={"updateBooksDetails"} myBooks={"books"} />
  )
};

export default Search;
