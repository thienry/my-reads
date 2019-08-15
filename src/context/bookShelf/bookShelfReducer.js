import {
  GET_BOOKS,
  GET_BOOK,
  UPDATE_BOOK,
  SEARCH_BOOKS,
  SET_LOADING,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
        loading: false
      };

    case GET_BOOK:
      return {
        ...state,
        book: action.payload,
        loading: false
      };

    case UPDATE_BOOK:
      return {
        ...state,
        books: state.books.map(book =>
          book.id === action.payload.id ? action.payload : book
        ),
        loading: false
      };

    case SEARCH_BOOKS:
      return {
        ...state,
        books: action.payload,
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return {
        ...state
      };
  }
};
