import { useState, useEffect } from "react";

function useFilterOpen() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  function onFilterOpen(value) {
    setIsFilterOpen(value);
  }

  useEffect(() => {
    document.body.addEventListener("mousedown", close);

    return () => document.body.removeEventListener("mousedown", close);
  }, []);

  function close() {
    setIsFilterOpen(false);
  }

  return [isFilterOpen, onFilterOpen];
}

export default useFilterOpen;
