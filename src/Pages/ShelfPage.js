import React from "react";
import Addbooks from "../Components /Addbooks";
import BookCard from "../Components /BookCard";
const ShelfPage = () => {
  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                  {/* map currently reading */}
                    <BookCard />
                  </li>
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                    <BookCard />
                  </li>
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                    <BookCard />
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <Addbooks />
      </div>
    </div>
  );
};

export default ShelfPage;
