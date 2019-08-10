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
  SET_LOADING
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

    dispatch({ type: GET_BOOKS, payload: res.data });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <BookShelfContext.Provider value={{ books: state.books, getBooks }}>
      {props.children}
    </BookShelfContext.Provider>
  );
};
