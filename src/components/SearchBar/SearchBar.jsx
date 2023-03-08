import React from "react";
import { Input } from "reactstrap";
import './SearchBar.css'

const SearchBar = ({ handleSearch }) => {
const handleChange = (event) => {
const searchQuery = event.target.value.toLowerCase();
handleSearch(searchQuery);
};

return (
<Input
   type="text"
   placeholder="Pesquisar por título ou tag"
   onChange={handleChange}
   className="search-bar"
 />
);
};

export default SearchBar;