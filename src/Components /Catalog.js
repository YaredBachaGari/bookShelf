import React from "react";
import BookCard from "./BookCard";

const Catalog = ({ singleBook, CategoryOptions }) => {
  //console.log([...singleBook]);
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        <li>
          {/* {singleBook?.map((data) => ( */}
          <BookCard bookData={singleBook} CategoryOptions={CategoryOptions} />
          {/* ))} */}
        </li>
      </ol>
    </div>
  );
};

export default Catalog;
