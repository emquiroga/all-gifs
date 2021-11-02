import Spinner from "components/Spinner/Spinner";
import { useNearScreen } from "hooks/useNearScreen";
import React, { Suspense } from "react";

const TrendingSearches = React.lazy(() =>
  import("components/TrendingSearches/TrendingSearches")
);

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({
    distance: "50px",
  });

  return (
    <div ref={fromRef}>
      {isNearScreen ? (
        <Suspense fallback={<Spinner />}>
          <TrendingSearches />{" "}
        </Suspense>
      ) : null}
    </div>
  );
}
