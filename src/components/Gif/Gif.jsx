import Fav from "components/Fav/Fav";
import React from "react";
import { Link } from "wouter";
import "./Gif.css";

const Gif = ({ title, url, id }) => {
  return (
    <div className="Gif">
      <div className="Gif-buttons">
        <Fav id={id} />
      </div>
      <Link href={`/gif/${id}`} className="Gif-link">
        <h4>{title}</h4>
        <img loading="lazy" src={url} alt={title} />
      </Link>
    </div>
  );
};

export default React.memo(Gif);
