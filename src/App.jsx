import { useState } from 'react';
import BookList from './BookList';
import './App.css';

function App() {
<<<<<<< HEAD
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');
  const [message, setMessage] = useState('');
=======
  
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');

  
>>>>>>> fd1f1fbf77be125306d937ce206da73390b5e31f
  const [books, setBooks] = useState([]);
  
  // Track if we are currently editing a book
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload

<<<<<<< HEAD
    if (!title || !author || !summary) {
      setMessage("Please fill out all fields before submitting");
      return;
    }
=======

    if (!title || !author || !summary) return;
>>>>>>> fd1f1fbf77be125306d937ce206da73390b5e31f

    if (editingId) {
      // EDIT LOGIC
      const updatedBooks = books.map((book) =>
        book.id === editingId ? { ...book, title, author, summary } : book
      );
      setBooks(updatedBooks);
      setMessage("Book Updated!");
      setEditingId(null);
    } else {
      // ADD LOGIC
      const newBook = { 
        id: Date.now(), // Unique ID for tracking
        title, 
        author, 
        summary 
      };
      setBooks([...books, newBook]);
      setMessage("Book Added!");
    }

<<<<<<< HEAD
    // Clear Inputs
=======
    
    setBooks([...books, newBook]);
>>>>>>> fd1f1fbf77be125306d937ce206da73390b5e31f
    setTitle('');
    setAuthor('');
    setSummary('');
  };

  const deleteBook = (id) => {
    const filteredBooks = books.filter(book => book.id !== id);
    setBooks(filteredBooks);
    setMessage("Book Deleted");
  };

  const startEdit = (book) => {
    setTitle(book.title);
    setAuthor(book.author);
    setSummary(book.summary);
    setEditingId(book.id);
    setMessage("Editing book...");
  };

  return (
    <div className="container">
      <h1>Uwimana's Library</h1>
      
      <form onSubmit={handleSubmit} className="book-form">
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
        <button type="submit">
          {editingId ? "Update Book" : "Add Book"}
        </button>
        
        {editingId && (
          <button type="button" onClick={() => {
            setEditingId(null);
            setTitle('');
            setAuthor('');
            setSummary('');
          }}>Cancel Edit</button>
        )}

        {message && <p className='feedback0'>{message}</p>}
      </form>

      <hr />

<<<<<<< HEAD
      {/* Pass the functions down as props */}
      <BookList 
        books={books} 
        onDelete={deleteBook} 
        onEdit={startEdit} 
      />
=======
      <BookList books={books} />
>>>>>>> fd1f1fbf77be125306d937ce206da73390b5e31f
    </div>
  );
}

export default App;
