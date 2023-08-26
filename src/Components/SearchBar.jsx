const SearchBar = ({ setSearchField }) => {
  return (
    <input
      placeholder="Filter by name, email or phone"
      onChange={(e) => {
        e.preventDefault()
        setSearchField(e.target.value)
      }}
      className=" mx-12 rounded-lg border-0 border-gray-500 bg-gray-50 px-5 py-3 text-lg drop-shadow-lg transition delay-75 ease-in-out focus:scale-105 focus:outline-none md:mx-24"
      type="text"
    />
  )
}

export default SearchBar
