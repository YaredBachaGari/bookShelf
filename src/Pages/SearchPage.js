import React from "react";
import BookCard from "../Components /BookCard";
import SeachInputField from "../Components /SeachInputField";

const SearchPage = () => {
  return (
    <div className="search-books">
      <SeachInputField />
      <div className="search-books-results">
        <ol className="books-grid">
          <li>
            <BookCard />
          </li>
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
