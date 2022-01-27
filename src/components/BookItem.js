import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './bookItem.css';

const BookItem = (props) => {
  const {
    title, author, category, progressPercent, chapter,
  } = props;

  return (
    <div className="book-item">
      <div className="left">
        <div className="book-info">
          <div className="book-category">
            {category}
          </div>
          <div className="book-title">
            {title}
          </div>
          <div className="book-author">
            {author}
          </div>
        </div>
        <ul className="interactions">
          <li>Comments</li>
          <li>
            <button type="button">Remove</button>
          </li>
          <li>Edit</li>
        </ul>
      </div>
      <div className="book-progress">
        <CircularProgressbar
          value={progressPercent}
          style={{ width: '4.25rem', height: '4.25rem' }}
        />
        <div>
          <p>
            {progressPercent}
            %
          </p>
          <p>completed</p>
        </div>
      </div>
      <div className="book-chapter">
        <p className="upper">Current Chapter</p>
        <p>{chapter}</p>
        <button type="button" className="upper">Update Progress</button>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  progressPercent: PropTypes.number.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default BookItem;
