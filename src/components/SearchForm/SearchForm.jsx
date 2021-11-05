import React from "react";
import { useForm } from "hooks/useForm";
import { useLocation } from "wouter";
import "./SearchForm.css";

const RATINGS = ["g", "pg", "pg-13", "r"];

const SearchForm = ({ initialRating = "g", initialKeyword = "" }) => {
  const { keyword, rating, updateKeyword, updateRating } = useForm({
    initialRating,
    initialKeyword,
  });

  const [, pushLocation] = useLocation();

  const onSubmit = ({ keyword }) => {
    if (keyword !== "") {
      pushLocation(`/search/${keyword}/${rating}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ keyword });
  };

  const handleChange = (e) => {
    updateKeyword(e.target.value);
  };

  const handleChangeRating = (e) => {
    updateRating(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Search</button>
      <input
        placeholder="Search your gifs..."
        type="text"
        value={keyword}
        onChange={handleChange}
      />
      <select value={rating} onChange={handleChangeRating}>
        <option disabled>Rating</option>
        {RATINGS.map((rating) => (
          <option key={rating}> {rating} </option>
        ))}
      </select>
    </form>
  );
};

export default React.memo(SearchForm);
