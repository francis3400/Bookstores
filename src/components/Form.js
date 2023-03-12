import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';
import '../styles/Book.css';

function Form() {
  const dispatch = useDispatch();
  const [book, setbook] = useState({
    title: '',
    item_id: '',
    author: '',
    category: 'fiction',
  });
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ book }));
    setbook({
      title: '',
      item_id: '',
      author: '',
      category: 'fiction',
    });
  };

  return (
    <div>
      <form className="addNew" onSubmit={handlesubmit}>
        <h2 className="title">ADD NEW BOOK</h2>
        <input
          type="text"
          id="inputTitle"
          value={book.title}
          placeholder="Book title"
          onChange={(e) => setbook({
            ...book,
            title: e.target.value,
            item_id: `item${Math.floor(Math.random() * 1000)}`,
          })}
        />
        <input
          type="text"
          id="inputAuthor"
          value={book.author}
          placeholder="Book author"
          onChange={(e) => setbook({ ...book, author: e.target.value })}
        />
        <button className="add" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default Form;
