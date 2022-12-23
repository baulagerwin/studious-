import { useState } from "react";

function useSortBy(initialSortBy, onInitialPage) {
  const [sortBy, setSortBy] = useState(initialSortBy);

  function handleSortBy(value) {
    onInitialPage();
    setSortBy(value);
  }

  return [sortBy, handleSortBy];
}

export default useSortBy;
