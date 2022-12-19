import { useState } from "react";

function useFilterBy(
  initialFilterBy,
  onInitialPage,
  onSearchByEmpty,
  setTheFilterBy
) {
  const [filterBy, setFilterBy] = useState(initialFilterBy);
  setTheFilterBy(handleTheSetFilterBy);

  function handleTheSetFilterBy(value) {
    onInitialPage();
    setFilterBy(value);
  }

  function handleFilterBy(value) {
    if (value === filterBy) return;

    onInitialPage();
    onSearchByEmpty();
    setFilterBy(value);
  }

  return [filterBy, handleFilterBy];
}

export default useFilterBy;
