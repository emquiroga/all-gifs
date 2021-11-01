import React, { useState, useEffect } from "react";
import "./ListOfGifs.css";
import { getGifs } from "../services/getGifs";
import Gif from "./Gif";

const ListOfGifs = ({ params }) => {
  const { keyword } = params;
  const [gifs, setGifs] = useState({
    loading: false,
    results: [],
  });

  useEffect(() => {
    setGifs((actualGifs) => ({ loading: true, results: actualGifs.results }));
    getGifs({ keyword }).then((gifs) => {
      setGifs({ loading: false, results: gifs });
    });
  }, [keyword]);

  if (gifs.loading) return <p className="Loading">Loading...</p>;

  return (
    <>
      {gifs.results.map(({ id, title, url }) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </>
  );
};

export default ListOfGifs;
