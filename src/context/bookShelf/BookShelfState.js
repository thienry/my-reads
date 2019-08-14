import React, { useReducer } from "react";
import axios from "axios";
import { config, configType, base_api_url } from "../../util/config";

import BookShelfContext from "./bookShelfContext";
import BookShelfReducer from "./bookShelfReducer";
import {
  GET_BOOKS,
  GET_BOOK,
  UPDATE_BOOK,
  SEARCH_BOOKS,
  SET_LOADING
} from "../types";

const BookShelfState = props => {
  const initialState = {
    books: [],
    book: {},
    image: "",
    loading: false
  };

  const [state, dispatch] = useReducer(BookShelfReducer, initialState);

  // getBooks
  const getBooks = async () => {
    setLoading();
    const res = await axios.get(`${base_api_url}/books`, config);

    dispatch({ type: GET_BOOKS, payload: res.data.books });
  };

  // getBook
  const getBook = async id => {
    setLoading();
    const res = await axios.get(`${base_api_url}/books/${id}`, config);

    dispatch({ type: GET_BOOK, payload: res.data.book });
  };

  // updateBook
  const updateBook = async book => {
    console.log(book);

    const res = await axios.put(
      `${base_api_url}/books/${book.id}`,
      { shelf: book.shelf },
      configType
    );

    console.log(res.data);

    dispatch({ type: UPDATE_BOOK, payload: res.data });
  };

  // searchBooks
  const searchBooks = async search => {
    setLoading();

    const res = await axios.post(
      `${base_api_url}/search`,
      { query: search },
      configType
    );

    dispatch({ type: SEARCH_BOOKS, payload: res.data.books });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <BookShelfContext.Provider
      value={{
        books: state.books,
        book: state.book,
        getBooks,
        getBook,
        updateBook,
        searchBooks,
        setLoading
      }}
    >
      {props.children}
    </BookShelfContext.Provider>
  );
};

export default BookShelfState;
