const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search notes"
      onChange={handleChange}
      className="w-full p-2 border border-gray-300 rounded mb-4"
    />
  );
};

export default SearchBar;
