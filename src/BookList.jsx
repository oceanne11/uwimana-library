const BookList = ({ books, onDelete, onEdit }) => {
  return (
    <div className="book-list">
      <h2>Stored Books</h2>
      {books.length === 0 ? (
        <p>No books added yet. Start your collection!</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id} className="book-item">
              <div className="book-info">
                <h3>{book.title}</h3>
                <p><strong>By:</strong> {book.author}</p>
                <p>{book.summary}</p>
              </div>
              
              <div className="book-actions">
                <button 
                  className="edit-btn" 
                  onClick={() => onEdit(book)}
                >
                  Edit
                </button>
                <button 
                  className="delete-btn" 
                  onClick={() => onDelete(book.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;