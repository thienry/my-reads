import React, { useReducer } from "react";
import axios from "axios";
import { config, base_api_url } from "../../util/config";

import BookShelfContext from "./bookShelfContext";
import BookShelfReducer from "./bookShelfReducer";
import {
  GET_BOOKS,
  GET_BOOK,
  UPDATE_BOOK,
  SEARCH_BOOKS,
  CLEAR_SEARCH,
  SET_LOADING,
} from "../types";

const BookShelfState = props => {
  const initialState = {
    books: [],
    book: {},
    query: "",
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
    console.log(res)

    dispatch({ type: GET_BOOK, payload: res.data.book });
  };

  // updateBook
  const updateBook = async book => {
    const res = await axios.put(`${base_api_url}/book/${book.id}`, book, {
      body: JSON.stringify(book.shelf),
      config
    });

    dispatch({ type: UPDATE_BOOK, payload: res.json });
  };

  // searchBooks
  const searchBooks = async query => {
    setLoading();
    const res = await axios.post(`${base_api_url}/search`, {
      config,
      "Content-Type": "application/json",
      body: JSON.stringify({ query })
    });

    dispatch({ type: SEARCH_BOOKS, payload: res.json });
  };

  // clearSearch
  const clearSearch = query => dispatch({ type: CLEAR_SEARCH })
 
  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <BookShelfContext.Provider
      value={{
        books: state.books,
        book: state.book,
        query: state.query,
        getBooks,
        getBook,
        updateBook,
        searchBooks,
        clearSearch,
        setLoading
      }}
    >
      {props.children}
    </BookShelfContext.Provider>
  );
};

export default BookShelfState;
