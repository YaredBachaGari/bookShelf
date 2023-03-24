import React, { useEffect, useState } from "react";
import { getAll } from "../BooksAPI";

const HOC = (OriginalComponent) => {
  const EnhancedComponent = () => {
    const [bookList, setBookList] = useState([]);
    const [selection, setSelection] = useState();
    const CategoryOptions = [
      { id: 1, category: "Currently Reading", value: "currentlyReading" },
      { id: 2, category: "Want to Read", value: "wantToRead" },
      { id: 3, category: "Read", value: "read" },
      { id: 4, category: "None", value: "none" },
    ];
    useEffect(() => {
      const handleData = async () => {
        const response = await getAll();
        await setBookList(response);
        setSelection("");
      };
      handleData();
    }, [selection]);

    return (
      <OriginalComponent
        bookList={bookList}
        setSelection={setSelection}
        CategoryOptions={CategoryOptions}
      />
    );
  };
  return EnhancedComponent;
};

export default HOC;
