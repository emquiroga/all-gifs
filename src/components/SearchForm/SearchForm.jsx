import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ keyword });
  };
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search your gifs..."
        type="text"
        value={keyword}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default React.memo(SearchForm);
