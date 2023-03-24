import React from "react";
import Catalog from "./Catalog";
import { PascalizeHeading, ShelfName } from "../Utils/helper";

const BookShelf = ({
  bookList,
  categoryName,
  CategoryOptions,
  setSelection,
}) => {
  const categoryHeading = PascalizeHeading(categoryName);
  const ShelfCategory = ShelfName(categoryName);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{categoryHeading}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookList
            ?.filter(
              (book) =>
                book?.shelf?.toLowerCase() === ShelfCategory?.toLowerCase()
            )
            ?.map((singleBook) => (
              <Catalog
                key={singleBook?.id}
                singleBook={singleBook}
                CategoryOptions={CategoryOptions}
                setSelection={setSelection}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
