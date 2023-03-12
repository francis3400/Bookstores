import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';
import '../styles/Book.css';

const Book = (book) => {
  const dispatch = useDispatch();
  const {
    type, title, author, item_id,
  } = book;
  const handledelete = () => {
    dispatch(removeBook({ item_id }));
  };
  return (
    <div className="theBook">
      <div className="aboutBook">
        <h3 className="bookType">{type}</h3>
        <h1 className="bookTitle">{title}</h1>
        <h2 className="bookAuthor">{author}</h2>
      </div>
      <ul className="bookOptions">
        <li className="option">Comments</li>
        <li>
          <button
            className="optionB"
            onClick={() => {
              handledelete();
            }}
            onKeyDown={() => {
              handledelete();
            }}
            type="button"
          >
            Remove
          </button>
        </li>
        <li className="option">Edit</li>
      </ul>
      <div className="completed">
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask full">
              <div className="fill" />
            </div>
            <div className="mask half">
              <div className="fill" />
            </div>
            <div className="inside-circle" />
          </div>
        </div>
        <div className="both">
          <h2 className="percentage">70%</h2>
          <p className="comp">Completed</p>
        </div>
      </div>
      <div className="progress">
        <p className="current">CURRENT CHAPTER</p>
        <h3 className="chapterNo">CHAPTER 17</h3>
        <button className="update" type="submit">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

export default Book;
