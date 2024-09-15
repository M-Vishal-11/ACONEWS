import Search from "./assets/Search.png";
import { useState } from "react";

const SearchBar = ({ updateSearchTerm, updateCountry }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    updateSearchTerm(searchTerm);
  };

  const handleCountryChange = (e) => {
    updateCountry(e.target.value);
  };

  return (
    <div>
      <div className="mt-9 flex justify-center">
        <input
          type="text"
          className="border rounded-lg border-stone-800 p-1 h-8"
          placeholder="Enter the Keyword"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={Search} className="h-8 m-1" onClick={handleSearch} />
      </div>
      <div className="flex justify-center space-x-24 mt-5 text-sm">
        <select onChange={handleCountryChange}>
          <option value="us">United States</option>
          <option value="in">India</option>
        </select>
        <select>
          <option>News</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;