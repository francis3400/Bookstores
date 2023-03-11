import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';
// import "../styles/Book.css";

const Book = (book) => {
  const dispatch = useDispatch();
  const {
    type, title, author, chapter, item_id,
  } = book;
  const handledelete = (iden) => {
    dispatch(removeBook({ item_id: iden }));
  };
  return (
    <div className="theBook">
      <h3 className="bookType">{type}</h3>
      <h1 className="bookTitle">{title}</h1>
      <h2 className="bookAuthor">{author}</h2>
      <ul className="bookOptions">
        <li className="option">Comments</li>
        <li>
          <button
            className="option"
            onClick={() => {
              handledelete(item_id);
            }}
            onKeyDown={() => {
              handledelete(item_id);
            }}
            type="button"
          >
            Remove
          </button>
        </li>
        <li className="option">Edit</li>
      </ul>
      <div className="progress">
        <p className="current">CURRENT CHAPTER</p>
        <h3 className="chapterNo">{chapter}</h3>
        <button type="submit">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default Book;
