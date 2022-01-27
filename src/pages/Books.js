import React from 'react';
import NewBook from '../components/NewBookForm';
import BookList from '../components/BookList';

function Books() {
  return (
    <div>
      <BookList />
      <NewBook />
    </div>
  );
}

export default Books;
