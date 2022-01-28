import { addBook, removeBook, listBooks } from './books';
import { getBooks, postBook, postDeleteBook } from '../apiUtils';

export const loadListBooks = () => async (dispatch) => {
  const apiBooks = await getBooks();
  const books = Object.entries(apiBooks).map(([id, book]) => {
    const { category, title } = book[0];
    return {
      id,
      title,
      author: 'Unknown Author',
      category,
      progressPercent: 0,
      chapter: 'Not Updated',
    };
  });
  dispatch(listBooks(books));
};

export const addNewBook = (book) => (dispatch) => {
  const { id, title, category } = book;
  const bookToPost = {
    item_id: id,
    title,
    category,
  };
  postBook(bookToPost);
  dispatch(addBook(book));
};

export const removeBookItem = (id) => (dispatch) => {
  postDeleteBook(id);
  dispatch(removeBook({ id }));
};
