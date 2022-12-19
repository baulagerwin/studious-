import { useRef, useState } from "react";

function useSearchBy(initialSearchBy, initialFilterBy) {
  const [searchBy, setSearchBy] = useState(initialSearchBy);

  function handleEmpty() {
    setSearchBy("");
  }

  function handleOnChange(e) {
    setSearchBy(e.target.value);
  }

  return [searchBy, handleOnChange, handleEmpty];
}

export default useSearchBy;
