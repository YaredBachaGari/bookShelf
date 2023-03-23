import AddBookButton from "../Components /AddBookButton";
import Heading from "../Components /Heading";
import HOC from "../Components /HOC";
import BookShelf from "../Components /BookShelf";
import { useEffect, useState } from "react";
import { getAll } from "../BooksAPI";

const ShelfPage = ({ bookList }) => {
  const CategoryOptions = [
    { id: 1, category: "Currently Reading", value: "currentlyReading" },
    { id: 2, category: "Want to Read", value: "wantToRead" },
    { id: 3, category: "Read", value: "read" },
    { id: 4, category: "None", value: "none" },
  ];
  console.log(bookList);
  return (
    <div className="app">
      <div className="list-books">
        <Heading title={"MyReads"} />
        <div className="list-books-content">
          <div>
            {CategoryOptions?.filter(
              (option) => option.category !== "None"
            )?.map((shelf) => (
              <BookShelf
                key={shelf?.id}
                bookList={bookList}
                categoryName={shelf?.category}
                CategoryOptions={CategoryOptions}
              />
            ))}
          </div>
        </div>
        <AddBookButton />
      </div>
    </div>
  );
};

export default HOC(ShelfPage);
