import React, { useEffect, useState } from "react";
import { getAll } from "../BooksAPI";

const HOC = (OriginalComponent) => {
  const EnhancedComponent = () => {
    const [bookList, setBookList] = useState([]);
    useEffect(() => {
      const myfn = async () => {
        const response = await getAll();
        await setBookList(response);
      };
      myfn();
    }, []);
    console.log(bookList);
    return <OriginalComponent bookList={bookList} />;
  };
  return EnhancedComponent;
};

export default HOC;
