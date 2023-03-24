import React, { useEffect, useState } from "react";
import { getAll } from "../BooksAPI";

const HOC = (OriginalComponent) => {
  const EnhancedComponent = () => {
    const [bookList, setBookList] = useState([]);
    const [selection, setSelection] = useState();
    useEffect(() => {
      const myfn = async () => {
        const response = await getAll();
        await setBookList(response);
      };
      myfn();
    }, [selection]);
    console.log(bookList);
    return (
      <OriginalComponent bookList={bookList} setSelection={setSelection} />
    );
  };
  return EnhancedComponent;
};

export default HOC;
