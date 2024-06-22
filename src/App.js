import React, { useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import './index.js';

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Book Management System</h1>
      </header>
      <main>
        <BookForm addBook={addBook} />
        <BookList books={books} deleteBook={deleteBook} />
      </main>
      <footer className="footer">
        <p>&copy; 2024 Book Management System</p>
      </footer>
    </div>
  );
}

export default App;
