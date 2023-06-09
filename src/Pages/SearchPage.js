import React, { useEffect, useState } from "react";
import SeachInputField from "../Components /SeachInputField";
import HigherOrderComponent from "../Components /HOC";
import { search } from "../BooksAPI";
import Catalog from "../Components /Catalog";
import { debounce } from "../Utils/helper";

const SearchPage = ({ bookList, setSelection, CategoryOptions }) => {
  const [searchText, setSearchText] = useState("");
  const [foundBooks, setFoundBooks] = useState();

  useEffect(() => {
    if (searchText) {
      const handleSearch = async () => {
        const availableBooks = await search(searchText, 5);
        //let availableBookswithShelf = [];
        for (let i = 0; i < availableBooks.length; i++) {
          for (let j = 0; j < bookList.length; j++) {
            if (availableBooks[i]?.id?.trim() === bookList[j]?.id?.trim()) {
              availableBooks[i].shelf = bookList[j].shelf;
              break;
            }
          }
        }
        await setFoundBooks(availableBooks);
      };
      debounce(handleSearch(), 500);
    } else {
      setFoundBooks([]);
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
            {foundBooks?.length > 0 &&
              foundBooks?.map((book) => (
                <Catalog
                  key={book?.id}
                  singleBook={book}
                  CategoryOptions={CategoryOptions}
                  setSelection={setSelection}
                />
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default HigherOrderComponent(SearchPage);
