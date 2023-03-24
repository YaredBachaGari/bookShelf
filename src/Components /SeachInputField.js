import { Link } from "react-router-dom";

const SeachInputField = ({ searchText, setSearchText }) => {
  return (
    <div className="search-books-bar">
      <Link className="close-search" to="/">
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SeachInputField;
