import React from 'react';

function NewBookForm() {
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

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input
          type="text"
          placeholder="Book titile"
          required
        />
        <select
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
