import { useState, useEffect } from "react";

function useFilterOpen() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  function onFilterOpen(e, value) {
    e.stopPropagation();
    setIsFilterOpen(value);
  }

  useEffect(() => {
    document.body.addEventListener("mousedown", close);

    return () => document.body.removeEventListener("mousedown", close);
  }, []);

  function close(e) {
    e.stopPropagation();

    if (e.target.id === "filterButton") return;
    if (e.target.id === "filterText") return;
    if (e.target.id === "filterIcon") return;
    if (e.target.id === "filterList") return;

    setIsFilterOpen(false);
  }

  return [isFilterOpen, onFilterOpen];
}

export default useFilterOpen;
