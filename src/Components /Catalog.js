import React from "react";
import BookCard from "./BookCard";

const Catalog = ({ singleBook, CategoryOptions, setSelection }) => {
  return (
    <li>
      <BookCard
        bookData={singleBook}
        CategoryOptions={CategoryOptions}
        setSelection={setSelection}
      />
    </li>
  );
};

export default Catalog;
