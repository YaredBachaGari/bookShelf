import React from "react";
import Catalog from "./Catalog";
import { PascalizeHeading, ShelfName } from "../Utils/helper";

const BookShelf = ({ bookList, categoryName, CategoryOptions }) => {
  const categoryHeading = PascalizeHeading(categoryName);
  const ShelfCategory = ShelfName(categoryName);
//   const c = bookList?.filter((book) => book?.shelf?.toLowerCase() === ShelfCategory?.toLowerCase());
//   console.log(c)
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{categoryHeading}</h2>
      {bookList
        ?.filter(
          (book) => book?.shelf?.toLowerCase() === ShelfCategory?.toLowerCase()
        )
        ?.map((singleBook) => (
          <Catalog
            key={singleBook?.id}
            singleBook={singleBook}
            CategoryOptions={CategoryOptions}
          />
        ))}
    </div>
  );
};

export default BookShelf;
