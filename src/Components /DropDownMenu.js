const DropDownMenu = ({ CategoryOptions }) => {
  return (
    <div className="book-shelf-changer">
      <select>
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
