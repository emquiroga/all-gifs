import { useUser } from "hooks/useUser";
import React from "react";
import { useLocation } from "wouter";
import "./Fav.css";

const Fav = ({ id }) => {
  const [, navigate] = useLocation();
  const { isLogged, addFav, favs } = useUser();

  const isFav = favs.some((favId) => favId === id);

  const handleFav = () => {
    if (!isLogged) {
      return navigate("/login");
    }
    addFav({ id });
  };

  const [label, emoji] = isFav
    ? ["Remove from favorites", "💔"]
    : ["Add to favorites", "❤️"];

  return (
    <button className="Gif-fav" onClick={handleFav}>
      <span role="img" aria-label={label}>
        {emoji}
      </span>
    </button>
  );
};

export default Fav;
