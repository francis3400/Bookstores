import { Link } from 'react-router-dom';
import '../styles/Nav.css';
import { ImUser } from 'react-icons/im';

function Nav() {
  return (
    <div className="mainMenu">
      <h1 className="theHeading">Bookstore CMS</h1>
      <nav className="options">
        <Link to="/">BOOKS</Link>
        <Link className="cate" to="Categories">
          CATEGORIES
        </Link>
      </nav>
      <div>
        <ImUser className="iconNav" />
      </div>
    </div>
  );
}

export default Nav;
