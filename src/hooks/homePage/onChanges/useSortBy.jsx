import { useState } from "react";

function useSortBy(initialSortBy) {
  const [sortBy, setSortBy] = useState(initialSortBy);

  return [sortBy, setSortBy];
}

export default useSortBy;
