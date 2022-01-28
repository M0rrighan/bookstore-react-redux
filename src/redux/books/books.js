const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const LIST_BOOKS = 'bookStore/books/LIST_BOOKS';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});
export const listBooks = (payload) => ({
  type: LIST_BOOKS,
  payload,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    case LIST_BOOKS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default bookReducer;
