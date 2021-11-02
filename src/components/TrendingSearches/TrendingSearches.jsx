import React, { useEffect, useState } from "react";
import { getTendingTerms } from "../../services/getTrendingTerms";
import Category from "../Category/Category";

const TrendingSearches = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTendingTerms().then(setTrends);
  }, []);

  return <Category name="Trending" options={trends} />;
};
export default TrendingSearches;
