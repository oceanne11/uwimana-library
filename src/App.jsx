import { useState } from 'react';
import BookList from './BookList';
import './App.css';

function App() {
  // State for individual inputs
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');

  // State for the collection of books
  const [books, setBooks] = useState([]);

  const handleAddBook = (e) => {
    e.preventDefault();

    // Basic validation to ensure fields aren't empty
    if (!title || !author || !summary) return;

    const newBook = { title, author, summary };

    // Update the array and clear inputs
    setBooks([...books, newBook]);
    setTitle('');
    setAuthor('');
    setSummary('');
  };

  return (
    <div className="container">
      <h1>Uwimana's Library</h1>
      
      <form onSubmit={handleAddBook} className="book-form">
        <input 
          type="text" 
          placeholder="Book Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Author" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
        />
        <textarea 
          placeholder="Summary" 
          value={summary} 
          onChange={(e) => setSummary(e.target.value)} 
        />
        <button type="submit">Add Book</button>
      </form>

      <hr />

      {/* Passing the array as props to the child component */}
      <BookList books={books} />
    </div>
  );
}

export default App;