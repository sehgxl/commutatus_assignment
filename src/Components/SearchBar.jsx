const SearchBar = ({ setSearchField }) => {
  return (
    <input
      placeholder="Filter by name, email or phone"
      onChange={(e) => {
        setSearchField(e.target.value)
      }}
      className="mx-96 rounded-lg border-0 border-gray-500 bg-gray-50 px-5 py-3 text-lg drop-shadow-lg transition delay-75 ease-in-out focus:scale-110 focus:outline-none"
      type="text"
    />
  )
}

export default SearchBar
