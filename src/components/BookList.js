import React from 'react';
import Book from './Book';

function BookList({ books, deleteBook }) {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <Book 
          key={index} 
          book={book} 
          index={index} 
          deleteBook={deleteBook} 
        />
      ))}
    </div>
  );
}

export default BookList;
