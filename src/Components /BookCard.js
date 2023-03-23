import React from "react";
import DropDownMenu from "./DropDownMenu";

const BookCard = ({ bookData, CategoryOptions }) => {
  const { imageLinks, title, authors } = bookData;
  const allAuthors = authors.join(", ");
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${imageLinks?.thumbnail})`,
          }}
        ></div>
        <DropDownMenu CategoryOptions={CategoryOptions} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{allAuthors}</div>
    </div>
  );
};

export default BookCard;
