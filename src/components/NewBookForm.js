import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import randomId from 'random-id';
import { addBook } from '../redux/books/books';

function NewBookForm() {
  const dispatch = useDispatch();
  const categories = [
    'Action and adventure',
    'Alternate history',
    'Autobiography',
    'Anthology',
    'Biography',
    'Classic',
    'Comic book',
    'Crime',
    'Drama',
    'Fairytale',
    'Fantasy',
    'History',
    'Humor',
    'Horror',
    'Mystery',
    'Math',
    'Memoir',
    'Philosophy',
    'Poetry',
    'Religion, spirituality, and new age',
    'Romance',
    'Satire',
    'Science fiction',
    'Science',
    'Suspense',
    'Thriller',
    'Sports and leisure',
    'Western',
  ];

  const selectOptions = categories.map((cat) => (
    <option key={cat} value={cat}>
      {cat}
    </option>
  ));

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: randomId(),
      title,
      author,
      category,
      progressPercent: 0,
      chapter: 'Not Updated',
    };

    // dispatch an action and pass it the newBook object
    dispatch(addBook(newBook));
    // reset input fields
    setTitle('');
    setAuthor('');
  };

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };
  const updateAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const updateCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitBookToStore}>
        <input
          type="text"
          placeholder="Book titile"
          onChange={updateTitle}
          value={title}
          required
        />
        <input
          type="text"
          placeholder="Author"
          onChange={updateAuthor}
          value={author}
          required
        />
        <select
          onChange={updateCategory}
          defaultValue="Unset"
          required
        >
          <option value="Unset" disabled hidden>Category</option>
          {selectOptions}
        </select>

        <button type="submit">Add book</button>
      </form>
    </div>
  );
}

export default NewBookForm;
