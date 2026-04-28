import { useState } from 'react';
import BookList from './BookList';
import './App.css';

function App() {
  
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');

  
  const [books, setBooks] = useState([]);

  const handleAddBook = (e) => {
    e.preventDefault();


    if (!title || !author || !summary) return;

    const newBook = { title, author, summary };

    
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

      <BookList books={books} />
    </div>
  );
}

export default App;
