import React from 'react';
import BookItem from './BookItem';

const BookList = () => {
  const exampleBookList = [
    {
      id: '01',
      title: 'Title 1',
      author: 'Author 1',
      category: 'Category 1',
      progressPercent: '10',
      chapter: 'chapter 1',
    },
    {
      id: '02',
      title: 'Title 2',
      author: 'Author 2',
      category: 'Category 2',
      progressPercent: '20',
      chapter: 'chapter 2',
    },
  ];

  return (
    <ul className="books-ul">
      {
        exampleBookList.map((book) => (
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
