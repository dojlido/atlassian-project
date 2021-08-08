/* eslint-disable */
import { useEffect, useState } from "react";
import useDebounce from "./hooks";

const SearchBar = ({ atlasProductsClients, setAllAtlasProductsClients }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => setSearchTerm(e.target.value);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    const results = !searchTerm
      ? atlasProductsClients
      : atlasProductsClients.filter(
          (client) =>
            client.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    setAllAtlasProductsClients(results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  return (
    <div className="search-bar">
      <input
        onChange={handleChange}
        value={searchTerm}
        type="search"
        id="search"
        className="search-bar--search"
        placeholder="Start typing to search..."
        aria-label="Searchbar"
        tabIndex={0}
        autoFocus
      />
    </div>
  );
};

export default SearchBar;
