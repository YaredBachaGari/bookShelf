import React, { useEffect, useState } from "react";
import BookCard from "../Components /BookCard";
import SeachInputField from "../Components /SeachInputField";
import HigherOrderComponent from "../Components /HOC";

const SearchPage = ({ bookList }) => {
  const [searchText, setSearchText] = useState();
  const [foundBooks, setFoundBooks] = useState();

  useEffect(() => {
    if (searchText) {
      const availableBooks = bookList?.filter((book) =>
        book?.title?.toLowerCase().includes(searchText?.toLowerCase())
      );
      setFoundBooks(availableBooks);
    } else {
      setFoundBooks(null);
    }
  }, [searchText]);

  return (
    <div className="app">
      <div className="search-books">
        <SeachInputField
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <div className="search-books-results">
          <ol className="books-grid">
            <li>
              {foundBooks?.map((book) => (
                <BookCard key={book?.id} book={book} />
              ))}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default HigherOrderComponent(SearchPage);
