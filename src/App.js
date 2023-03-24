import "./App.css";
import { useEffect, useState } from "react";
// import Addbooks from "./Components /AddBookButton";
// import SeachInputField from "./Components /SeachInputField";
// import Heading from "./Components /Heading";
// import { getAll } from "./BooksAPI";
// import { ShelfName } from "./Utils/helper";
import ShelfPage from "./Pages/ShelfPage";
import SearchPage from "./Pages/SearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShelfPage/>} />
        <Route path="/search" element={<SearchPage/>} />
      </Routes>
    </BrowserRouter>
    // <div className="app">{showSearchPage ? <SearchPage /> : <ShelfPage />}</div>
  );
}

export default App;
