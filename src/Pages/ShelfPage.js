import AddBookButton from "../Components /AddBookButton";
import Heading from "../Components /Heading";
import HOC from "../Components /HOC";
import BookShelf from "../Components /BookShelf";

const ShelfPage = ({ bookList, setSelection, CategoryOptions }) => {

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
                setSelection={setSelection}
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
