import { Link } from "react-router-dom";

const SeachInputField = () => {
  return (
    <div className="search-books-bar">
      {/* <Link className="close-search" to='/'>Close</Link> */}
      <a className="close-search">Close</a>
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title, author, or ISBN" />
      </div>
    </div>
  );
};

export default SeachInputField;
