import { useState } from "react";

function useSearchBy(initialSearchBy, initialFilterBy) {
  const [searchBy, setSearchBy] = useState(initialSearchBy);
  let onFilterBy;

  function setFilterBy(theFilterBy) {
    onFilterBy = theFilterBy;
  }

  function handleEmpty() {
    setSearchBy("");
  }

  function handleOnChange(e) {
    onFilterBy(initialFilterBy);
    setSearchBy(e.target.value);
  }

  return [searchBy, handleOnChange, handleEmpty, setFilterBy];
}

export default useSearchBy;
