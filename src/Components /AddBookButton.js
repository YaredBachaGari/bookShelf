import { Link } from "react-router-dom";

const AddBookButton = () => {
  return (
    <div className="open-search">
      <Link to="/search">add book</Link>
    </div>
  );
};

export default AddBookButton;
