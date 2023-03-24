import { update } from "../BooksAPI";

const DropDownMenu = ({ book, CategoryOptions, setSelection }) => {
  const handleChange = (e) => {
    const category = e.target.value;
    update(book, category);
    setSelection({ book: book, selectCategory: category });
  };
  return (
    <div className="book-shelf-changer">
      <select onChange={handleChange}>
        <option value="none" disabled>
          Move to...
        </option>
        {CategoryOptions?.map((menu) => (
          <option key={menu?.id} value={menu?.value}>
            {menu?.category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDownMenu;
