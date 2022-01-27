import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const booksList = useSelector((state) => state.booksReducer);

  return (
    <ul className="books-ul">
      {
        booksList.map((book) => (
          <li key={book.id}>
            <BookItem
              id={book.id}
              title={book.title}
              author={book.author}
              category={book.category}
              progressPercent={book.progressPercent}
              chapter={book.chapter}
            />
          </li>
        ))
      }
    </ul>
  );
};

export default BookList;
