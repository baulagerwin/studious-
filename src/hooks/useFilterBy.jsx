import { useState } from "react";

function useFilterBy(initialFilterBy, onPageChange, onSearchByEmpty) {
  const [filterBy, setFilterBy] = useState(initialFilterBy);

  function handleFilterBy(value) {
    if (value === filterBy) return;

    onPageChange(1);
    onSearchByEmpty();
    setFilterBy(value);
  }

  return [filterBy, handleFilterBy];
}

export default useFilterBy;
