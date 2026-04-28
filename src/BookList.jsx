const BookList = ({ books }) => {
  return (
    <div className="book-list">
      <h2>Stored Books</h2>
      {books.length === 0 ? (
        <p>No books added yet. Start your collection!</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={index} className="book-item">
              <h3>{book.title}</h3>
              <p><strong>By:</strong> {book.author}</p>
              <p>{book.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;