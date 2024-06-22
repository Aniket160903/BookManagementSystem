import React from 'react';

function Book({ book, index, deleteBook }) {
  return (
    <div className="book">
      <div>
        <h3>{book.title}</h3>
        <h4>{book.author}</h4>
      </div>
      <button onClick={() => deleteBook(index)}>Delete</button>
    </div>
  );
}

export default Book;
