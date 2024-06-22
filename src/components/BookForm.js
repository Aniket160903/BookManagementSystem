import React, { useState } from 'react';

function BookForm({ addBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      addBook({ title, author });
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Book Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required 
      />
      <input 
        type="text" 
        placeholder="Author" 
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required 
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;
